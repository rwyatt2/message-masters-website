import { useEffect, useRef, useState } from 'react'
import Reveal from '../fx/Reveal'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const VOICES = [
  {
    quote: 'After our work with Message Masters we realized who we needed to hire and, more importantly, who we needed to fire. I have more work than I can handle because of what Message Masters did for my company.',
    author: 'Larnell Marion',
    org: 'Marion Fitness and Nutrition',
  },
  {
    quote: 'My company now has legitimacy because of Message Masters. We are building trust with prospects before we ever meet them.',
    author: 'Mike Morris',
    org: 'MJM Properties',
  },
  {
    quote: 'You helped us see how valuable our work really is and gave us the words to express it.',
    author: 'The Mission',
    org: 'Faith-led organization',
  },
  {
    quote: 'I used to never share my work. I learned that it was good and that people wanted to see it, and I started showing them.',
    author: 'Mike Morris',
    org: 'MJM Properties',
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const reduced = useReducedMotion()
  const timer = useRef(null)

  useEffect(() => {
    if (reduced) return undefined
    timer.current = setInterval(() => setIdx((i) => (i + 1) % VOICES.length), 6500)
    return () => clearInterval(timer.current)
  }, [reduced])

  const pick = (i) => {
    setIdx(i)
    clearInterval(timer.current)
    if (!reduced) timer.current = setInterval(() => setIdx((x) => (x + 1) % VOICES.length), 6500)
  }

  return (
    <section className="block voices">
      <div className="container">
        <div className="block-head">
          <Reveal as="p" className="kicker">In their words</Reveal>
        </div>
        <div className="voice-stage">
          {VOICES.map((v, i) => (
            <div className={`voice${i === idx ? ' is-active' : ''}`} key={v.quote}>
              <blockquote>{v.quote}</blockquote>
              <cite>{v.author}<small>{v.org}</small></cite>
            </div>
          ))}
        </div>
        <div className="voice-nav" role="tablist" aria-label="Testimonials">
          {VOICES.map((v, i) => (
            <button
              key={v.quote}
              className={i === idx ? 'on' : ''}
              onClick={() => pick(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
