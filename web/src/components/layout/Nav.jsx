import { useEffect, useRef, useState } from 'react'
import HeptagonMark from '../fx/HeptagonMark'
import { heptagonPath } from '../../lib/heptagon'

const LINKS = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Proof', href: '#proof' },
  { label: 'The Order', href: '#order' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ lenisRef }) {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const fillRef = useRef(null)
  const lastY = useRef(0)

  useEffect(() => {
    const nav = navRef.current
    const fill = fillRef.current
    let len = 0
    if (fill) len = fill.getTotalLength()

    const onScroll = () => {
      const y = window.scrollY
      nav.classList.toggle('is-solid', y > 40)
      if (y > 400 && y > lastY.current + 4) nav.classList.add('is-hidden')
      else if (y < lastY.current - 4 || y < 400) nav.classList.remove('is-hidden')
      lastY.current = y

      if (fill) {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const p = max > 0 ? Math.min(y / max, 1) : 0
        fill.style.strokeDasharray = len
        fill.style.strokeDashoffset = len * (1 - p)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const lenis = lenisRef?.current
    if (lenis) lenis.scrollTo(target, { offset: -20 })
    else target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="nav" ref={navRef}>
        <div className="container nav-inner">
          <a href="#top" className="nav-logo" data-magnet onClick={(e) => go(e, '#top')}>
            <HeptagonMark size={30} strokeWidth={5} />
            MESSAGE<em>MASTERS</em>
          </a>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => go(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#contact" className="nav-cta" data-magnet onClick={(e) => go(e, '#contact')}>
              Get the INSIGHT
            </a>
            <svg className="nav-progress" viewBox="0 0 100 100" aria-hidden="true">
              <path className="track" d={heptagonPath(50, 50, 40)} />
              <path className="fill" d={heptagonPath(50, 50, 40)} ref={fillRef} />
            </svg>
          </div>
          <button
            className={`nav-toggle${open ? ' open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mm-menu${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>{l.label}</a>
        ))}
        <a href="#contact" style={{ color: 'var(--signal)' }} onClick={(e) => go(e, '#contact')}>
          Get the INSIGHT
        </a>
      </div>
    </>
  )
}
