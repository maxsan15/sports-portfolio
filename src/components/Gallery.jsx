import { useState, useEffect, useMemo, useRef } from 'react'
import { PHOTO_SERVER } from '../data/photos.js'
import styles from './Gallery.module.css'

export default function Gallery({ onImageClick }) {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [activeShoot, setActiveShoot] = useState(null)
  const [showAll, setShowAll] = useState(false)

  // useRef prevents the fetch from running twice in React StrictMode
  const hasFetched = useRef(false)

  useEffect(() => {
    if (hasFetched.current) return
    hasFetched.current = true

    fetch(`${PHOTO_SERVER}/api/photos`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(data => {
        // Deduplicate by filename as a safety net against server returning duplicates
        const seen = new Set()
        const unique = data.filter(p => {
          if (seen.has(p.filename)) return false
          seen.add(p.filename)
          return true
        })
        setPhotos(unique)
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

  useEffect(() => {
    setShowAll(false)
  }, [activeShoot])

  const categories = useMemo(() => {
    return [...new Set(photos.map(p => p.shoot))]
  }, [photos])

  const filtered = useMemo(() => {
    return photos.filter(p => p.shoot === activeShoot)
  }, [activeShoot, photos])

  const displayedPhotos = useMemo(() => {
    return showAll ? filtered : filtered.slice(0, 6)
  }, [filtered, showAll])

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
        <>
          <div className={styles.grid}>
            {displayedPhotos.map((photo) => (
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
          {!showAll && filtered.length > 6 && (
            <button className={styles.viewMore} onClick={() => setShowAll(true)}>
              View More ({filtered.length - 6} more photos)
            </button>
          )}
        </>
      )}
    </section>
  )
}
