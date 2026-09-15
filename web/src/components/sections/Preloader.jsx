import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { heptagonPath } from '../../lib/heptagon'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function Preloader({ onDone }) {
  const rootRef = useRef(null)
  const pathRef = useRef(null)
  const [gone, setGone] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      onDone?.()
      setGone(true)
      return undefined
    }
    const path = pathRef.current
    const len = path.getTotalLength()
    path.style.strokeDasharray = len
    path.style.strokeDashoffset = len

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: 'power3.inOut',
          delay: 0.2,
          onComplete: () => {
            setGone(true)
            onDone?.()
          },
        })
      },
    })
    tl.to(path, { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut' })
      .to('.preloader-word', { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.5')
      .to('.preloader-lockup', { opacity: 1, duration: 0.6 }, '-=0.2')

    return () => tl.kill()
  }, [reduced, onDone])

  if (gone) return null

  return (
    <div className="preloader" ref={rootRef} aria-hidden="true">
      <svg className="preloader-mark" viewBox="0 0 100 100">
        <path ref={pathRef} d={heptagonPath(50, 50, 40)} />
      </svg>
      <div className="preloader-word">
        MESSAGE<em><span>MASTERS</span></em>
      </div>
      <div className="preloader-lockup">BUILT ON PURPOSE</div>
    </div>
  )
}
