import { useEffect } from 'react'
import styles from './Lightbox.module.css'

export default function Lightbox({ img, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
      <div className={styles.imgWrap} onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className={styles.img} />
        {img.category && <p className={styles.caption}>{img.category}</p>}
      </div>
    </div>
  )
}
