import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Starfield from '../fx/Starfield'
import Magnet from '../fx/Magnet'
import { useReducedMotion, useIsMobile } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ play, lenisRef }) {
  const rootRef = useRef(null)
  const wrapRef = useRef(null)
  const introRef = useRef(null)
  const reduced = useReducedMotion()
  const mobile = useIsMobile()

  // Intro timeline: two-beat tagline, then supporting reveals.
  useEffect(() => {
    if (reduced) return undefined
    const ctx = gsap.context(() => {
      const lines = rootRef.current.querySelectorAll('[data-hero-line]')
      const reveals = rootRef.current.querySelectorAll('[data-hero-reveal]')
      gsap.set(lines, { yPercent: 110 })
      gsap.set(reveals, { opacity: 0, y: 30 })

      const tl = gsap.timeline({ paused: true })
      tl.to(lines, { yPercent: 0, duration: 1.15, ease: 'power4.out', stagger: 0.55 }, 0)
      tl.to(reveals, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12 }, 0.85)
      introRef.current = tl
    }, rootRef)
    return () => ctx.revert()
  }, [reduced])

  useEffect(() => {
    if (play && introRef.current) introRef.current.play()
  }, [play])

  // The Zoom Out: canvas scales from 2.4x to 1 as you scroll the hero away.
  useEffect(() => {
    if (reduced || mobile) return undefined
    const ctx = gsap.context(() => {
      gsap.set(wrapRef.current, { scale: 2.4, transformOrigin: '50% 55%' })
      gsap.to(wrapRef.current, {
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      })
      gsap.to('.hero-inner', {
        y: -70,
        opacity: 0.25,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: '70% top', scrub: 1 },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reduced, mobile])

  const go = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (!target) return
    const lenis = lenisRef?.current
    if (lenis) lenis.scrollTo(target, { offset: -20 })
    else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <header className="hero" id="top" ref={rootRef}>
      <div className="hero-canvas-wrap" ref={wrapRef}>
        <Starfield style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      </div>
      <div className="hero-horizon" />
      <div className="container hero-inner">
        <p className="kicker hero-kicker" data-hero-reveal>A Strategic Communications Firm · North Texas</p>
        <h1 className="display hero-title">
          <span className="mask-line"><span data-hero-line>Discover your value.</span></span>
          <span className="mask-line"><span className="beat-2" data-hero-line>Share it with the world.</span></span>
        </h1>
        <p className="hero-sub" data-hero-reveal>
          Most owners cannot explain their company in a way that sounds as good as the company
          actually is. We find what is already true, prove it with evidence from inside the
          building, and build everything that says it.
        </p>
        <div className="hero-cta-row" data-hero-reveal>
          <Magnet>
            <a href="#contact" className="btn btn-solid" onClick={(e) => go(e, '#contact')}>
              Get the INSIGHT <span className="arr">&gt;</span>
            </a>
          </Magnet>
          <Magnet>
            <a href="#order" className="btn btn-ghost" onClick={(e) => go(e, '#order')}>
              See the order <span className="arr">&gt;</span>
            </a>
          </Magnet>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="line" />
      </div>
      <div className="hero-coord" aria-hidden="true">
        Argyle &amp; Roanoke, Texas<br />33.11° N · 97.18° W
      </div>
    </header>
  )
}
