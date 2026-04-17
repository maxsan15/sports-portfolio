import styles from './Nav.module.css'

export default function Nav({ solid }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${solid ? styles.solid : ''}`}>
      <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Santana Studios
      </button>
      <div className={styles.links}>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
      </div>
    </nav>
  )
}
