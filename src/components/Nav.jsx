import styles from './Nav.module.css'

// `solid` prop controls whether the nav has a white background (true when user has scrolled down)
export default function Nav({ solid }) {
  // Smooth-scrolls to any section by its HTML id
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    // Applies the `solid` style class when the user has scrolled past the hero
    <nav className={`${styles.nav} ${solid ? styles.solid : ''}`}>
      {/* Logo button — clicking it scrolls back to the very top of the page */}
      <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Santana Studios
      </button>
      {/* Nav links — each one smooth-scrolls to its matching section */}
      <div className={styles.links}>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  )
}
