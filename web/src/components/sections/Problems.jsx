import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '../fx/Reveal'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const PROBLEMS = [
  {
    title: 'The Value Gap',
    desc: 'You do excellent work and present at a fraction of what you are. It is a consequence of success, not a deficiency. You outgrew your explanation long before you outgrew your building.',
  },
  {
    title: 'The Confusion Tax',
    desc: 'Every person describes the company differently, and it costs money continuously without ever appearing as a line item.',
  },
  {
    title: 'The Divided House',
    desc: 'The people at the top do not actually agree, and nobody has said so out loud.',
  },
  {
    title: 'The Weight the Leader Carries',
    desc: 'It all still runs through one person, and he cannot put it down.',
  },
]

export default function Problems() {
  const rootRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return undefined
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-ghost-fill]').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('.problem-row'),
              start: 'top 80%',
              end: 'top 30%',
              scrub: 1,
            },
          }
        )
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section className="block problems" id="problem" ref={rootRef}>
      <div className="container">
        <div className="block-head">
          <Reveal as="p" className="kicker">The problem we solve</Reveal>
          <Reveal as="h2" className="display block-title">
            Worth more than<br />anyone can tell.
          </Reveal>
        </div>
        {PROBLEMS.map((p, i) => (
          <Reveal className="problem-row" key={p.title}>
            <div className="problem-idx">0{i + 1}</div>
            <div>
              <div className="problem-statement">
                <span className="ghost">{p.title}</span>
                <span className="fill" data-ghost-fill>{p.title}</span>
              </div>
              <p className="problem-desc">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
