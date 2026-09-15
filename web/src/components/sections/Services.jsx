import React from 'react'
import Reveal from '../fx/Reveal'
import Magnet from '../fx/Magnet'

const SERVICES = [
  {
    name: 'The INSIGHT',
    price: '$299',
    tag: 'The Front Door',
    door: true,
    desc: 'A 250 point evaluation of how your organization is actually communicating today. Twenty six factors across four areas. Trouble areas, strengths, opportunities and threats, a score, a written report, six to eight prioritized next steps, and a follow-up meeting.',
    cta: true,
  },
  {
    name: 'The Manifesto',
    price: 'From $5,000',
    desc: 'The written word of the organization, built through stakeholder discovery. Every engagement runs through it. Includes the adoption package: implementation handbook, thirty and ninety day check-ins, six coaching sessions.',
  },
  {
    name: 'MasterPlan Lite',
    price: 'From $20,000',
    desc: 'Manifesto plus essential collateral. Identity system, eight page website, messaging kit, core print. Spend credits toward the full MasterPlan for twelve months.',
  },
  {
    name: 'The MasterPlan',
    price: 'From $50,000',
    desc: 'Manifesto plus full collateral. 50 photographs, 11 videos, 24 social graphics, a 20 page website, 6 print pieces, 33 branded items. Every source file handed over. Includes the adoption package.',
  },
  {
    name: 'The Manager',
    price: 'Tailored',
    desc: 'Ongoing execution after a Manifesto. Social, video, design, fractional CMO, consulting, and brand upkeep. No tiers and no packages. Requires a Manifesto, not a build.',
  },
  {
    name: 'Media',
    price: 'Tailored',
    desc: 'A custom set of pieces. Photography, video, website, graphic design. Each with its own discovery and project brief.',
  },
]

export default function Services({ lenisRef }) {
  const go = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    const lenis = lenisRef?.current
    if (lenis) lenis.scrollTo(target, { offset: -20 })
    else target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="block services" id="services">
      <div className="container">
        <div className="block-head">
          <Reveal as="p" className="kicker">What we sell</Reveal>
          <Reveal as="h2" className="display block-title">Six things.<br />All we should do.</Reveal>
        </div>
        <div className="svc-stack">
          {SERVICES.map((s, i) => (
            <Reveal className={`svc-card${s.door ? ' is-door' : ''}`} key={s.name} style={{ '--i': i }}>
              <div>
                {s.tag && <span className="svc-tag">{s.tag}</span>}
                <h3 className="svc-name">{s.name}</h3>
                <div className="svc-price">{s.price}</div>
              </div>
              <div>
                <p className="svc-desc">{s.desc}</p>
                {s.cta && (
                  <div className="svc-foot">
                    <Magnet>
                      <a href="#contact" className="btn btn-ghost" onClick={go}>
                        Start here <span className="arr">&gt;</span>
                      </a>
                    </Magnet>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
