import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Reveal from '../fx/Reveal'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const STATS = [
  { count: 250, suffix: '', cap: 'Point evaluation. The INSIGHT.' },
  { count: 200, suffix: '+', cap: 'Organizations served' },
  { count: 76, suffix: '', cap: 'Five-star reviews. A 5.0 average.' },
  { count: 2, prefix: '>', suffix: '', cap: 'Years running. Best of Denton County.' },
]

export default function Stats() {
  const rootRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const els = rootRef.current.querySelectorAll('[data-count]')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return
        const el = en.target
        const target = parseInt(el.dataset.count, 10)
        if (reduced) {
          el.textContent = target
        } else {
          const obj = { v: 0 }
          gsap.to(obj, {
            v: target,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: () => { el.textContent = Math.round(obj.v) },
          })
        }
        io.unobserve(el)
      })
    }, { threshold: 0.6 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [reduced])

  return (
    <section className="block stats" ref={rootRef}>
      <div className="container">
        <div className="block-head">
          <Reveal as="p" className="kicker">The operating record</Reveal>
        </div>
        <div className="stats-grid">
          {STATS.map((s) => (
            <Reveal className="stat" key={s.cap}>
              <div className="num">
                {s.prefix && <i>{s.prefix}</i>}
                <span data-count={s.count}>0</span>
                {s.suffix && <i>{s.suffix}</i>}
              </div>
              <div className="cap">{s.cap}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
