import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Opens the user's mail client with the form data pre-filled.
  // To use a form backend instead (e.g. Formspree), replace this handler.
  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:your@email.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.label}>Get in Touch</p>
          <h2 className={styles.title}>Let's Work<br />Together</h2>
          <p className={styles.desc}>
            Available for sporting events, team shoots,<br />
            editorial assignments, and print licensing.
          </p>
          <div className={styles.details}>
            <a href="mailto:your@email.com" className={styles.detail}>your@email.com</a>
            <a href="https://instagram.com/maxedoutmedia" target="_blank" rel="noopener noreferrer" className={styles.detail}>@maxedoutmedia</a>
          </div>
        </div>

        <div className={styles.formWrap}>
          {sent ? (
            <div className={styles.thanks}>
              <p>Thank you — your mail client should open with your message ready to send.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Game day coverage"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className={styles.submit}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
