import { useState } from 'react'
import Starfield from '../fx/Starfield'
import Reveal from '../fx/Reveal'
import Magnet from '../fx/Magnet'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Wire to your form endpoint / CRM here.
    setSent(true)
    e.target.reset()
  }

  return (
    <section className="block cta" id="contact">
      <Starfield count={90} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.6 }} />
      <div className="container cta-inner">
        <Reveal as="p" className="kicker">The entry line</Reveal>
        <Reveal as="h2" className="display cta-title">
          You have built something <em>great.</em> Now you want more people to know it.
        </Reveal>
        <div className="cta-grid">
          <Reveal className="cta-copy">
            <p>
              It starts with an evaluation. We look at your website, your Google listing, your
              reviews, everything a customer would see, and we score it out of two hundred fifty
              points. Then we sit down and walk you through it.
            </p>
            <div className="price-line">
              The INSIGHT · <b>$299</b><br />
              A real product with a real deliverable.<br />
              Not a brochure with a form on it.
            </div>
          </Reveal>
          <Reveal as="form" className="cta-form" onSubmit={onSubmit}>
            <div className="form-field">
              <label htmlFor="f-name">Name</label>
              <input type="text" id="f-name" name="name" required autoComplete="name" />
            </div>
            <div className="form-field">
              <label htmlFor="f-email">Email</label>
              <input type="email" id="f-email" name="email" required autoComplete="email" />
            </div>
            <div className="form-field">
              <label htmlFor="f-company">Company</label>
              <input type="text" id="f-company" name="company" required autoComplete="organization" />
            </div>
            <div className="form-field">
              <label htmlFor="f-message">What are you building?</label>
              <textarea id="f-message" name="message" />
            </div>
            <Magnet>
              <button type="submit" className="btn btn-solid" disabled={sent}>
                {sent ? 'Received. We will be in touch.' : 'Request the INSIGHT'} <span className="arr">&gt;</span>
              </button>
            </Magnet>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
