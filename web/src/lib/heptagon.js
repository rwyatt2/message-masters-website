// The seven-sided mark with wavy outer edge.
// Seven, not eight, and never simplified. Never snap to a 6 or 8 sided grid.
export function heptagonPath(cx = 50, cy = 50, r = 40, bulge = 0.085) {
  const n = 7
  const pts = []
  for (let i = 0; i < n; i++) {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)])
  }
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`
  for (let i = 0; i < n; i++) {
    const p1 = pts[i]
    const p2 = pts[(i + 1) % n]
    const mx = (p1[0] + p2[0]) / 2
    const my = (p1[1] + p2[1]) / 2
    const dx = mx - cx
    const dy = my - cy
    const dist = Math.hypot(dx, dy) || 1
    const bx = cx + (dx / dist) * (dist + r * bulge)
    const by = cy + (dy / dist) * (dist + r * bulge)
    d += ` Q ${bx.toFixed(2)} ${by.toFixed(2)} ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`
  }
  return d + ' Z'
}
