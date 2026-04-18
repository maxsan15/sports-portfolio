import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

// Full-screen splash section shown at the top of the page
export default function Hero() {
  // Holds the list of photos from the earliest shoot
  const [slides, setSlides] = useState([])
  // Index of the currently visible slide
  const [current, setCurrent] = useState(0)

  // Fetch photos on mount, find the earliest shoot, and use those as slides
  useEffect(() => {
    fetch('https://photos.santanastudios.org/api/photos')
      .then(res => { if (!res.ok) throw new Error('Failed to fetch'); return res.json() })
      .then(data => {
        // Sort all unique shoot dates chronologically and pick the earliest
        const earliest = [...new Set(data.map(p => p.shoot))]
          .sort((a, b) => new Date(a) - new Date(b))[0]
        setSlides(data.filter(p => p.shoot === earliest))
      })
      .catch(() => {}) // Silently fail — hero still renders without photos
  }, [])

  // Advance to the next slide every 5 seconds
  useEffect(() => {
    if (slides.length < 2) return
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [slides])

  return (
    <section className={styles.hero}>
      {/* Render one absolutely-positioned div per slide; only the active one is visible */}
      {slides.map((photo, i) => (
        <div
          key={photo.id}
          className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
          style={{ backgroundImage: `url(${photo.src})` }}
        />
      ))}
      {/* Dark overlay so the text stays readable over the photos */}
      {slides.length > 0 && <div className={styles.overlay} />}

      {/* Hero text — sits above the slideshow via z-index */}
      <div className={styles.content}>
        {/* Small label above the main title */}
        <p className={styles.tagline}>Sports Photography</p>
        {/* Main brand name */}
        <h1 className={styles.title}>Santana<br />Studios</h1>
        <p className={styles.sub}>Capturing the moments that define the game.</p>
        {/* CTA button — smooth-scrolls down to the gallery section */}
        <button
          className={styles.cta}
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Portfolio
        </button>
      </div>
      {/* Animated vertical line at the bottom hinting the user to scroll down */}
      <div className={styles.scrollHint}>
        <span />
      </div>
    </section>
  )
}
