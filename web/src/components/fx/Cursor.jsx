import { useEffect, useRef } from 'react'
import { useReducedMotion, useFinePointer } from '../../hooks/useReducedMotion'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const reduced = useReducedMotion()
  const fine = useFinePointer()

  useEffect(() => {
    if (!fine || reduced) return undefined
    document.body.classList.add('has-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    let cx = -100
    let cy = -100
    let rx = -100
    let ry = -100
    let raf

    const onMove = (e) => {
      cx = e.clientX
      cy = e.clientY
    }
    const tick = () => {
      rx += (cx - rx) * 0.16
      ry += (cy - ry) * 0.16
      dot.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      raf = requestAnimationFrame(tick)
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-magnet]')) ring.classList.add('is-hover')
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [data-magnet]')) ring.classList.remove('is-hover')
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [fine, reduced])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}
