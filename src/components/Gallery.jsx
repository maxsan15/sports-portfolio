import { useState, useMemo } from 'react'
// Photo data — edit this file to add/remove/change images
import photos from '../data/photos.js'
import styles from './Gallery.module.css'

// `onImageClick` is called by App.jsx to open the lightbox when a photo is clicked
export default function Gallery({ onImageClick }) {
  // Tracks which date filter tab is currently selected
  const [activeCategory, setActiveCategory] = useState('All')

  // Builds the list of filter tabs from the unique dates in the photo data
  // useMemo prevents this from recalculating on every render
  const categories = useMemo(() => {
    const dates = [...new Set(photos.map(p => p.date))]
      .sort((a, b) => new Date(a) - new Date(b)) // Sort dates oldest → newest
    return ['All', ...dates]
  }, [])

  // Filters the photos array based on the active tab
  // Returns all photos when "All" is selected, otherwise only matching dates
  const filtered = useMemo(() => {
    if (activeCategory === 'All') return photos
    return photos.filter(p => p.date === activeCategory)
  }, [activeCategory])

  return (
    // id="gallery" lets the nav and hero CTA button scroll here
    <section id="gallery" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Portfolio</h2>
        {/* Filter tab buttons — one per unique shoot date */}
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              // Highlights the active tab with the `active` CSS class
              className={`${styles.filter} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry-style grid — `wide` spans 2 columns, `tall` spans 2 rows */}
      <div className={styles.grid}>
        {filtered.map(photo => (
          <div
            key={photo.id}
            className={`${styles.item} ${photo.span === 2 ? styles.wide : ''} ${photo.tall ? styles.tall : ''}`}
            // Passes the clicked photo up to App.jsx to open it in the lightbox
            onClick={() => onImageClick(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy" // Defers loading until the image is near the viewport
            />
            {/* Overlay that appears on hover showing the shoot date */}
            <div className={styles.overlay}>
              <span className={styles.category}>{photo.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
