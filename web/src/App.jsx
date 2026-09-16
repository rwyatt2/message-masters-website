import { useCallback, useState } from 'react'
import Grain from './components/fx/Grain'
import Cursor from './components/fx/Cursor'
import Marquee from './components/fx/Marquee'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Preloader from './components/sections/Preloader'
import Hero from './components/sections/Hero'
import Clients from './components/sections/Clients'
import Problems from './components/sections/Problems'
import Verification from './components/sections/Verification'
import Order from './components/sections/Order'
import Services from './components/sections/Services'
import Differentiators from './components/sections/Differentiators'
import Stats from './components/sections/Stats'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import { useLenis } from './hooks/useLenis'

export default function App() {
  const lenisRef = useLenis()
  const [ready, setReady] = useState(false)
  const handleDone = useCallback(() => setReady(true), [])

  return (
    <>
      <Grain />
      <Cursor />
      <Preloader onDone={handleDone} />
      <Nav lenisRef={lenisRef} />
      <main>
        <Hero play={ready} lenisRef={lenisRef} />
        <Clients />
        <Marquee items={['Discover your value', 'Share it with the world', 'Built on purpose']} />
        <Problems />
        <Verification />
        <Order />
        <Services lenisRef={lenisRef} />
        <Differentiators />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
