import { useEffect, useRef } from 'react'
import { useReducedMotion, useFinePointer } from '../../hooks/useReducedMotion'

export default function Starfield({ count, className = '', style }) {
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()
  const fine = useFinePointer()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let w = 0
    let h = 0
    let stars = []
    let raf = null
    let visible = true
    const mouse = { x: 0.5, y: 0.5 }

    const resize = () => {
      const r = canvas.parentElement.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const spawn = () => {
      const n = count || Math.floor((w * h) / 2600)
      stars = Array.from({ length: n }, () => {
        const depth = Math.random()
        return {
          x: Math.random(),
          y: Math.random(),
          r: 0.4 + depth * 1.5,
          depth,
          phase: Math.random() * Math.PI * 2,
          speed: 0.4 + Math.random() * 1.2,
          blue: Math.random() < 0.09,
        }
      })
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      const mx = mouse.x - 0.5
      const my = mouse.y - 0.5
      for (const s of stars) {
        const tw = reduced
          ? 1
          : 0.55 + 0.45 * Math.sin(t * 0.001 * s.speed + s.phase)
        const px = s.x * w + mx * 40 * s.depth
        const py = s.y * h + my * 40 * s.depth
        ctx.beginPath()
        ctx.arc(px, py, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.blue
          ? `rgba(43,124,177,${(0.9 * tw).toFixed(3)})`
          : `rgba(255,255,255,${(0.75 * tw * (0.35 + s.depth * 0.65)).toFixed(3)})`
        ctx.fill()
      }
    }

    const tick = (t) => {
      if (!visible) {
        raf = null
        return
      }
      draw(t)
      if (reduced) {
        raf = null
        return
      }
      raf = requestAnimationFrame(tick)
    }

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    resize()
    spawn()
    start()

    const onResize = () => {
      resize()
      spawn()
      if (reduced) draw(0)
    }
    window.addEventListener('resize', onResize)

    let onMove
    if (fine) {
      onMove = (e) => {
        mouse.x = e.clientX / window.innerWidth
        mouse.y = e.clientY / window.innerHeight
      }
      window.addEventListener('mousemove', onMove)
    }

    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting
      if (visible) start()
    })
    io.observe(canvas)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      if (onMove) window.removeEventListener('mousemove', onMove)
      io.disconnect()
    }
  }, [count, reduced, fine])

  return <canvas ref={canvasRef} className={className} style={style} aria-hidden="true" />
}
