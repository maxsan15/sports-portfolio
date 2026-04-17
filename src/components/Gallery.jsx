import { useState, useMemo } from 'react'
import photos from '../data/photos.js'
import styles from './Gallery.module.css'

export default function Gallery({ onImageClick }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const dates = [...new Set(photos.map(p => p.date))]
      .sort((a, b) => new Date(a) - new Date(b))
    return ['All', ...dates]
  }, [])

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return photos
    return photos.filter(p => p.date === activeCategory)
  }, [activeCategory])

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filter} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.map(photo => (
          <div
            key={photo.id}
            className={`${styles.item} ${photo.span === 2 ? styles.wide : ''} ${photo.tall ? styles.tall : ''}`}
            onClick={() => onImageClick(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <span className={styles.category}>{photo.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
