import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../fx/Reveal'
import { heptagonPath } from '../../lib/heptagon'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const DIFFS = [
  {
    n: '01',
    name: 'We find it. We build it.',
    body: 'Discovery and expression under one roof, with no handoff between them. The industry splits this work in two and hands you two documents produced by two firms who never spoke. Combining them is the product decision.',
  },
  {
    n: '02',
    name: 'Best of Denton County. Two years running.',
    body: '2025 and 2026, Videographer and Production. We attribute it to running every video client through purpose discovery before shooting a single frame, which is not what the other entrants were doing.',
  },
  {
    n: '03',
    name: 'Built on purpose.',
    body: 'Two meanings, both true. Built intentionally, and built on a core purpose rather than on a trend.',
  },
]

export default function Differentiators() {
  const rootRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return undefined
    const ctx = gsap.context(() => {
      gsap.to('.hepta-bg', {
        rotate: 90,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section className="block diffs" id="why" ref={rootRef}>
      <svg className="hepta-bg" viewBox="0 0 100 100" aria-hidden="true">
        <path d={heptagonPath(50, 50, 40)} />
      </svg>
      <div className="container">
        <div className="block-head">
          <Reveal as="p" className="kicker">Why us</Reveal>
          <Reveal as="h2" className="display block-title">Three things a<br />competitor cannot sign.</Reveal>
        </div>
        {DIFFS.map((d) => (
          <Reveal className="diff-row" key={d.n}>
            <div className="diff-num">{d.n}</div>
            <h3 className="diff-name">{d.name}</h3>
            <p className="diff-body">{d.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
