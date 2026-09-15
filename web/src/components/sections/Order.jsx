import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion, useIsMobile } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  { n: '01', title: 'Purpose', body: "Why you exist. Discovered, not assigned. We dig until we find what is already true, and then we give it back in words you can use.", note: 'Excavation, not brainstorming' },
  { n: '02', title: 'Identity', body: "Who that makes you, in writing. Purpose that stays in a founder's head cannot align a team, survive a hire, or outlive the founder.", note: 'Written down, or it does not count' },
  { n: '03', title: 'Strategy', body: 'What to say, to whom, and what to stop doing. Assembled from evidence, not opinion.', note: 'One position the whole team can state' },
  { n: '04', title: 'Expression', body: 'Cameras, design, web, print. Only now. Expression built before meaning is expensive guessing, and you pay for it twice.', note: 'Only now. Never backwards. Ever.' },
]

export default function Order() {
  const rootRef = useRef(null)
  const trackRef = useRef(null)
  const progRef = useRef(null)
  const reduced = useReducedMotion()
  const mobile = useIsMobile()

  // The Order Cannot Run Backwards: pinned horizontal journey, desktop only.
  useEffect(() => {
    const root = rootRef.current
    if (reduced || mobile) {
      root.classList.remove('horizontal')
      return undefined
    }
    root.classList.add('horizontal')

    const ctx = gsap.context(() => {
      const track = trackRef.current
      const panels = track.children.length
      const segs = progRef.current.querySelectorAll('.seg')
      const labels = progRef.current.querySelectorAll('.seg-label')
      const distance = `+=${(panels - 1) * 100}%`

      gsap.to(track, {
        xPercent: (-100 * (panels - 1)) / panels,
        ease: 'none',
        scrollTrigger: {
          trigger: root.querySelector('.order-pin'),
          start: 'top top',
          end: distance,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const idx = Math.min(panels - 1, Math.floor(self.progress * panels))
            segs.forEach((s, i) => s.classList.toggle('done', i <= idx))
            labels.forEach((l, i) => l.classList.toggle('done', i <= idx))
          },
        },
      })

      gsap.utils.toArray('.order-panel .big-ghost').forEach((g) => {
        gsap.fromTo(g, { xPercent: 18 }, {
          xPercent: -18,
          ease: 'none',
          scrollTrigger: { trigger: root.querySelector('.order-pin'), start: 'top top', end: distance, scrub: 1 },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [reduced, mobile])

  return (
    <section className="order" id="order" ref={rootRef}>
      <div className="order-pin">
        <div className="order-track" ref={trackRef}>
          {STEPS.map((s) => (
            <div className="order-panel" key={s.n}>
              <div className="big-ghost" aria-hidden="true">{s.n}</div>
              <div className="step-num">Step {s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="note">{s.note}</div>
            </div>
          ))}
        </div>
        <div className="order-progress" ref={progRef} aria-hidden="true">
          {STEPS.map((s) => (
            <span key={s.n} style={{ display: 'contents' }}>
              <span className="seg-label">{s.title}</span>
              <div className="seg" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
