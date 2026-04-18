import { useState, useEffect, useMemo } from 'react'
import { PHOTO_SERVER } from '../data/photos.js'
import styles from './Gallery.module.css'

export default function Gallery({ onImageClick }) {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [activeShoot, setActiveShoot] = useState(null)

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

  useEffect(() => {
    if (photos.length > 0 && !activeShoot) {
      setActiveShoot(photos[0].shoot)
    }
  }, [photos])

  const categories = useMemo(() => {
    return [...new Set(photos.map(p => p.shoot))]
  }, [photos])

  const filtered = useMemo(() => {
    return photos.filter(p => p.shoot === activeShoot)
  }, [activeShoot, photos])

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filter} ${activeShoot === cat ? styles.active : ''}`}
              onClick={() => setActiveShoot(cat)}
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
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className={styles.item}
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
