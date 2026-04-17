import { useEffect } from 'react'
import styles from './Lightbox.module.css'

// Full-screen image viewer that appears when a gallery photo is clicked
// `img` is the photo object, `onClose` is called to close the lightbox
export default function Lightbox({ img, onClose }) {
  useEffect(() => {
    // Allows the user to close the lightbox by pressing the Escape key
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    // Prevents the page behind the lightbox from scrolling while it's open
    document.body.style.overflow = 'hidden'

    // Cleanup: re-enables scrolling and removes the key listener when closed
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    // Clicking the dark backdrop closes the lightbox
    <div className={styles.backdrop} onClick={onClose}>
      {/* X button in the top-right corner */}
      <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
      {/* stopPropagation prevents clicking the image itself from closing the lightbox */}
      <div className={styles.imgWrap} onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className={styles.img} />
        {/* Shows a caption below the image if a category is set on the photo */}
        {img.category && <p className={styles.caption}>{img.category}</p>}
      </div>
    </div>
  )
}
