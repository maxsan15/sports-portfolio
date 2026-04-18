// Imports the useState hook from React to manage form data and submission state
import { useState } from 'react'
// Imports the CSS module for styling this component
import styles from './Contact.module.css'

export default function Contact() {
  // Tracks the value of each form field (name, email, subject, message)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  // Tracks whether the form has been submitted
  const [sent, setSent] = useState(false)

  // Updates the form state whenever the user types in any field
  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // When the form is submitted, builds a mailto: link with the form data
  // and opens the user's default email app with everything pre-filled
  const handleSubmit = (e) => {
    e.preventDefault() // Prevents the page from refreshing on submit
    const mailto = `mailto:your@email.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.location.href = mailto // Opens the mail client
    setSent(true) // Switches the form to the thank-you message
  }

  return (
    // The contact section — linked to by the nav "Contact" button via id="contact"
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>

        {/* Left side: intro text and direct contact links */}
        <div className={styles.intro}>
          <p className={styles.label}>Get in Touch</p>
          <h2 className={styles.title}>Let's Work<br />Together</h2>
          <p className={styles.desc}>
            Available for sporting events.
          </p>
          {/* Direct contact links — update the email and Instagram handle as needed */}
          <div className={styles.details}>
            <a href="mailto:max@maximilliontech.com" className={styles.detail}>max@maximilliontech.com</a>
            <a href="https://www.instagram.com/santanastudios.png/" target="_blank" rel="noopener noreferrer" className={styles.detail}>@santanastudios.png</a>
          </div>
        </div>

        {/* Right side: the contact form */}
        <div className={styles.formWrap}>
          {/* Shows a thank-you message after the form is submitted, otherwise shows the form */}
          {sent ? (
            <div className={styles.thanks}>
              <p>Thank you — your mail client should open with your message ready to send.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>

              {/* Name and Email fields sit side by side */}
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

              {/* Subject field — optional, defaults to "Portfolio Inquiry" if left blank */}
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

              {/* Message field — multi-line textarea */}
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

              {/* Submit button — triggers handleSubmit */}
              <button type="submit" className={styles.submit}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
