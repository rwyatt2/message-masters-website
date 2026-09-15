import React from 'react'
import Reveal from '../fx/Reveal'

const ITEMS = [
  {
    claim: <>The work produces the <em>confidence</em> to share, not just the language.</>,
    label: 'Verified · Client Surveys, September 2026',
    body: [
      'Larnell Marion reports being considerably more confident speaking about his business publicly. Mike Morris used to never share his work. He learned it was good, that people wanted to see it, and started showing them.',
      'Both describe the same sequence. They did not learn to describe the business. They were shown evidence it was worth describing, and the sharing followed on its own.',
    ],
  },
  {
    claim: <>We are not a marketing company. <em>A client said so first.</em></>,
    label: 'Verified · Client Surveys, September 2026',
    body: [
      'Art Wheel hired us expecting marketing help. What they report receiving is help identifying the challenges in their business and a plan to resolve them. Their closing assessment: our mentorship and business knowledge exceeded our design work.',
      'Verified from outside, by a client with no reason to say it.',
    ],
  },
  {
    claim: <>The work performs when it is <em>adopted.</em> So accountability is included.</>,
    label: 'Verified · Operating Record',
    body: [
      'More than half of clients have historically failed to adopt the work after delivery. We publish that number because a verification that only confirms is a compliment with footnotes.',
      'So the Manifesto and MasterPlan now ship with an implementation handbook, a thirty day check-in, a ninety day check-in, and six coaching sessions through a partner organization. We would rather build it in than hope.',
    ],
  },
]

export default function Verification() {
  return (
    <section className="block verify" id="proof">
      <div className="container">
        <div className="block-head">
          <Reveal as="p" className="kicker">Evidence before claim</Reveal>
          <Reveal as="h2" className="display block-title">
            You see the proof<br />before the words.
          </Reveal>
        </div>
        {ITEMS.map((item, idx) => (
          <div className="verify-item" key={idx}>
            <Reveal as="h3" className="verify-claim">{item.claim}</Reveal>
            <Reveal className="verify-evidence">
              <div className="label">{item.label}</div>
              {item.body.map((p, i) => <p key={i}>{p}</p>)}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
