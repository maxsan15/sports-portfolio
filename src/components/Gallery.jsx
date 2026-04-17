import { useState, useEffect, useMemo } from 'react'
import { PHOTO_SERVER } from '../data/photos.js'
import styles from './Gallery.module.css'

export default function Gallery({ onImageClick }) {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    fetch(`${PHOTO_SERVER}/api/photos`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => {
        setPhotos(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const categories = useMemo(() => {
    const shoots = [...new Set(photos.map(p => p.shoot))].sort()
    return ['All', ...shoots]
  }, [photos])

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return photos
    return photos.filter(p => p.shoot === activeCategory)
  }, [activeCategory, photos])

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

      {loading && <p>Loading photos...</p>}
      {error && <p>Could not connect to photo server.</p>}

      {!loading && !error && (
        <div className={styles.grid}>
          {filtered.map((photo, index) => (
            <div
              key={photo.id}
              className={`${styles.item} ${index % 5 === 0 ? styles.wide : ''}`}
              onClick={() => onImageClick(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span className={styles.category}>{photo.shoot}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
