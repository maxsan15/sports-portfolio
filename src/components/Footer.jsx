import styles from './Footer.module.css'

// Simple footer bar shown at the bottom of the page
export default function Footer() {
  // Automatically uses the current year so the copyright never goes stale
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      {/* Brand name on the left */}
      <span className={styles.name}>Santana Studios</span>
      {/* Copyright notice in the center */}
      <span className={styles.copy}>© {year} — All rights reserved</span>
      {/* Instagram link on the right — update the href if the handle changes */}
      <a
        href="https://instagram.com/santanastudios"
        target="_blank"
        rel="noopener noreferrer" // Security best practice for external links
        className={styles.social}
      >
        Instagram
      </a>
    </footer>
  )
}
