import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>Santana Studios</span>
      <span className={styles.copy}>© {year} — All rights reserved</span>
      <a
        href="https://instagram.com/santanastudios"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.social}
      >
        Instagram
      </a>
    </footer>
  )
}
