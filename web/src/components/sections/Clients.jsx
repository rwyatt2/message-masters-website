import React from 'react'
import Reveal from '../fx/Reveal'
import Magnet from '../fx/Magnet'
import { CLIENTS } from '../../data/clients'
import { useReducedMotion } from '../../hooks/useReducedMotion'

// The client field. Every mark drifts on its own rhythm and pulls toward the
// mouse. Rendered white so Signal Blue stays the only accent on the page.
export default function Clients() {
  const reduced = useReducedMotion()
  return (
    <section className={`block clients${reduced ? ' is-static' : ''}`} id="clients" aria-label="Organizations we have served">
      <div className="container">
        <div className="block-head">
          <Reveal as="p" className="kicker">Organizations served</Reveal>
          <Reveal as="h2" className="display block-title">Two hundred<br />and counting.</Reveal>
        </div>
        <div className="client-field">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.04} y={24}>
              <div
                className={`client${c.wide ? ' is-wide' : ''}`}
                style={{ '--d': `${(5.5 + (i % 5) * 0.7).toFixed(1)}s`, '--dl': `${(-(i * 0.37)).toFixed(2)}s` }}
              >
                <Magnet>
                  <img src={c.src} alt={c.name} loading="lazy" />
                </Magnet>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
