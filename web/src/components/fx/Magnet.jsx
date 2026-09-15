import { useRef } from 'react'
import { useReducedMotion, useFinePointer } from '../../hooks/useReducedMotion'

export default function Magnet({ children, strength = 0.12, ...rest }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const fine = useFinePointer()

  const onMove = (e) => {
    if (!fine || reduced) return
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    el.style.transform = `translate(${(x * strength).toFixed(1)}px,${(y * strength).toFixed(1)}px)`
  }

  const onLeave = () => {
    const el = ref.current
    el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
    el.style.transform = 'translate(0,0)'
    setTimeout(() => {
      el.style.transition = ''
    }, 500)
  }

  return (
    <span ref={ref} data-magnet onMouseMove={onMove} onMouseLeave={onLeave} style={{ display: 'inline-block' }} {...rest}>
      {children}
    </span>
  )
}
