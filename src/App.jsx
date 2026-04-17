import { useState, useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Lightbox from './components/Lightbox.jsx'

export default function App() {
  const [lightboxImg, setLightboxImg] = useState(null)
  const [navSolid, setNavSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Nav solid={navSolid} />
      <main>
        <Hero />
        <Gallery onImageClick={setLightboxImg} />
        <Contact />
      </main>
      <Footer />
      {lightboxImg && (
        <Lightbox img={lightboxImg} onClose={() => setLightboxImg(null)} />
      )}
    </>
  )
}
