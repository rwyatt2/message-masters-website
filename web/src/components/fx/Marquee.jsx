import React from 'react'

export default function Marquee({ items }) {
  const line = items.map((t) => `${t} > `).join('')
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  )
}
