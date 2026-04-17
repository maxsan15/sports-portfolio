import { useState, useEffect } from 'react'
// Importing all the page sections and components
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Lightbox from './components/Lightbox.jsx'

export default function App() {
  // Tracks which image is open in the lightbox — null means the lightbox is closed
  const [lightboxImg, setLightboxImg] = useState(null)
  // Tracks whether the user has scrolled down enough to make the nav bar solid
  const [navSolid, setNavSolid] = useState(false)

  // Listens for scroll events and turns the nav solid after 60px of scrolling
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    // Cleanup: removes the listener when the component unmounts
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Nav receives `solid` prop to switch between transparent and filled styles */}
      <Nav solid={navSolid} />
      <main>
        <Hero />
        {/* When a gallery image is clicked, store it so the lightbox can display it */}
        <Gallery onImageClick={setLightboxImg} />
        <Contact />
      </main>
      <Footer />
      {/* Only render the lightbox when an image has been selected */}
      {lightboxImg && (
        <Lightbox img={lightboxImg} onClose={() => setLightboxImg(null)} />
      )}
    </>
  )
}
