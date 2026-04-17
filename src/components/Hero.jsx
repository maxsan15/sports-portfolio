import styles from './Hero.module.css'

// Full-screen splash section shown at the top of the page
export default function Hero() {
  return (
    <section className={styles.hero}>
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
