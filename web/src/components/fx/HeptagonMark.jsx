import React from 'react'
import { heptagonPath } from '../../lib/heptagon'

// The mark. Seven sides, wavy edge, Signal Blue outline. Never simplified.
export default function HeptagonMark({ size = 30, strokeWidth = 5, color = 'var(--signal)', className = '', pathClassName = '', ...rest }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d={heptagonPath(50, 50, 40)} fill="none" stroke={color} strokeWidth={strokeWidth} className={pathClassName} />
    </svg>
  )
}
