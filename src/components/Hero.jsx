import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.tagline}>Sports Photography</p>
        <h1 className={styles.title}>Maxed Out<br />Media</h1>
        <p className={styles.sub}>Capturing the moments that define the game.</p>
        <button
          className={styles.cta}
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Portfolio
        </button>
      </div>
      <div className={styles.scrollHint}>
        <span />
      </div>
    </section>
  )
}
