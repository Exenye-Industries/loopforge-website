import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════════
   EARTH FORMATION SIMULATOR
   An interactive, scientifically-grounded simulation covering
   4.6 billion years of Earth's history in 8 cinematic stages.
   ═══════════════════════════════════════════════════════════════ */

const STAGES = [
  {
    id: 0,
    name: 'Solarer Nebel',
    age: '4.6 Mrd. Jahre',
    year: -4600,
    description: 'Eine riesige Wolke aus Gas und Staub kollabiert unter ihrer eigenen Schwerkraft. Partikel beginnen sich zu verdichten und bilden den Grundstein unseres Sonnensystems.',
    color: '#6366f1',
    bgGradient: 'radial-gradient(ellipse at center, #0a0a2e 0%, #030312 50%, #000000 100%)',
    particleColor: [100, 120, 220],
    glowColor: 'rgba(99, 102, 241, 0.3)',
  },
  {
    id: 1,
    name: 'Akkretion',
    age: '4.55 Mrd. Jahre',
    year: -4550,
    description: 'Staubkörner kollidieren und verschmelzen zu immer größeren Brocken — Planetesimale. Durch Gravitation ziehen sie weitere Materie an und wachsen zum Proto-Planeten heran.',
    color: '#f59e0b',
    bgGradient: 'radial-gradient(ellipse at center, #1a1005 0%, #0d0802 50%, #000000 100%)',
    particleColor: [245, 158, 11],
    glowColor: 'rgba(245, 158, 11, 0.3)',
  },
  {
    id: 2,
    name: 'Magma-Ozean',
    age: '4.5 Mrd. Jahre',
    year: -4500,
    description: 'Die junge Erde ist vollständig geschmolzen — ein Ozean aus flüssigem Gestein. Ständige Meteoriteneinschläge und radioaktiver Zerfall halten die Oberfläche glühend heiß.',
    color: '#ef4444',
    bgGradient: 'radial-gradient(ellipse at center, #2d0a0a 0%, #140404 50%, #000000 100%)',
    particleColor: [239, 68, 68],
    glowColor: 'rgba(239, 68, 68, 0.4)',
  },
  {
    id: 3,
    name: 'Theia-Einschlag',
    age: '4.45 Mrd. Jahre',
    year: -4450,
    description: 'Ein marsgroßer Protoplanet namens Theia kollidiert mit der Erde. Die gewaltige Energie schleudert Trümmer in die Umlaufbahn, aus denen sich der Mond formt.',
    color: '#f97316',
    bgGradient: 'radial-gradient(ellipse at center, #1f0d02 0%, #0f0601 50%, #000000 100%)',
    particleColor: [249, 115, 22],
    glowColor: 'rgba(249, 115, 22, 0.5)',
  },
  {
    id: 4,
    name: 'Abkühlung & Krustenbildung',
    age: '4.2 Mrd. Jahre',
    year: -4200,
    description: 'Die Erde kühlt langsam ab. Eine erste feste Kruste bildet sich auf dem Magma-Ozean. Vulkane speien Gase aus und erschaffen die Ur-Atmosphäre aus CO₂ und Wasserdampf.',
    color: '#78716c',
    bgGradient: 'radial-gradient(ellipse at center, #1a1510 0%, #0d0b08 50%, #000000 100%)',
    particleColor: [168, 130, 100],
    glowColor: 'rgba(168, 130, 100, 0.3)',
  },
  {
    id: 5,
    name: 'Erste Ozeane',
    age: '3.8 Mrd. Jahre',
    year: -3800,
    description: 'Wasserdampf kondensiert und es regnet jahrtausendelang. Die ersten Ozeane füllen sich. Unter der Wasseroberfläche entstehen hydrothermale Schlote — mögliche Wiegen des Lebens.',
    color: '#0ea5e9',
    bgGradient: 'radial-gradient(ellipse at center, #041525 0%, #020a12 50%, #000000 100%)',
    particleColor: [14, 165, 233],
    glowColor: 'rgba(14, 165, 233, 0.3)',
  },
  {
    id: 6,
    name: 'Erstes Leben',
    age: '3.5 Mrd. Jahre',
    year: -3500,
    description: 'Einzellige Organismen — Prokaryoten und Cyanobakterien — entstehen. Sie beginnen Photosynthese zu betreiben und reichern die Atmosphäre langsam mit Sauerstoff an.',
    color: '#22c55e',
    bgGradient: 'radial-gradient(ellipse at center, #031a0a 0%, #010d05 50%, #000000 100%)',
    particleColor: [34, 197, 94],
    glowColor: 'rgba(34, 197, 94, 0.3)',
  },
  {
    id: 7,
    name: 'Blaue Erde',
    age: 'Heute',
    year: 0,
    description: 'Nach Milliarden Jahren der Evolution: eine lebendige Welt mit Ozeanen, Kontinenten, einer sauerstoffreichen Atmosphäre und einer unglaublichen Vielfalt an Leben.',
    color: '#3b82f6',
    bgGradient: 'radial-gradient(ellipse at center, #040d1f 0%, #020714 50%, #000000 100%)',
    particleColor: [59, 130, 246],
    glowColor: 'rgba(59, 130, 246, 0.3)',
  },
]

/* ── Particle system for each stage ── */
class Particle {
  constructor(canvas, stage, isAccretion = false) {
    this.canvas = canvas
    this.stage = stage
    this.reset(isAccretion)
  }

  reset(isAccretion = false) {
    const cx = this.canvas.width / 2
    const cy = this.canvas.height / 2

    if (isAccretion) {
      // particles spiral inward
      const angle = Math.random() * Math.PI * 2
      const dist = 200 + Math.random() * 300
      this.x = cx + Math.cos(angle) * dist
      this.y = cy + Math.sin(angle) * dist
      this.targetX = cx + (Math.random() - 0.5) * 60
      this.targetY = cy + (Math.random() - 0.5) * 60
      this.vx = (this.targetX - this.x) * 0.002
      this.vy = (this.targetY - this.y) * 0.002
    } else {
      this.x = Math.random() * this.canvas.width
      this.y = Math.random() * this.canvas.height
      this.vx = (Math.random() - 0.5) * 0.5
      this.vy = (Math.random() - 0.5) * 0.5
    }

    this.size = Math.random() * 2.5 + 0.5
    this.alpha = Math.random() * 0.6 + 0.2
    this.life = 1
    this.decay = Math.random() * 0.003 + 0.001
    this.isAccretion = isAccretion
  }

  update() {
    if (this.isAccretion) {
      const cx = this.canvas.width / 2
      const cy = this.canvas.height / 2
      const dx = cx - this.x
      const dy = cy - this.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      // Gravitational pull
      const force = 0.03 / (dist * 0.01 + 1)
      this.vx += dx * force * 0.01
      this.vy += dy * force * 0.01
      // Add rotation
      this.vx += -dy * 0.0003
      this.vy += dx * 0.0003
    }

    this.x += this.vx
    this.y += this.vy
    this.life -= this.decay

    if (this.life <= 0 || this.x < -20 || this.x > this.canvas.width + 20 ||
        this.y < -20 || this.y > this.canvas.height + 20) {
      this.reset(this.isAccretion)
    }
  }

  draw(ctx, color) {
    const alpha = this.alpha * this.life
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`
    ctx.fill()

    // Add glow for larger particles
    if (this.size > 1.5) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha * 0.15})`
      ctx.fill()
    }
  }
}

/* ── Meteor class for impacts ── */
class Meteor {
  constructor(canvas) {
    this.canvas = canvas
    this.reset()
  }

  reset() {
    this.x = Math.random() * this.canvas.width * 1.5 - this.canvas.width * 0.25
    this.y = -50
    this.speed = 3 + Math.random() * 5
    this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4
    this.size = 1 + Math.random() * 2
    this.trail = []
    this.active = true
    this.life = 1
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed
    this.y += Math.sin(this.angle) * this.speed
    this.trail.push({ x: this.x, y: this.y, alpha: 1 })
    if (this.trail.length > 20) this.trail.shift()
    this.trail.forEach(t => t.alpha *= 0.9)

    if (this.y > this.canvas.height + 50) {
      this.active = false
    }
  }

  draw(ctx) {
    // Trail
    for (let i = 0; i < this.trail.length - 1; i++) {
      const t = this.trail[i]
      ctx.beginPath()
      ctx.moveTo(t.x, t.y)
      ctx.lineTo(this.trail[i + 1].x, this.trail[i + 1].y)
      ctx.strokeStyle = `rgba(255, 200, 100, ${t.alpha * 0.6})`
      ctx.lineWidth = this.size * (i / this.trail.length)
      ctx.stroke()
    }
    // Head
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 240, 200, 0.9)`
    ctx.fill()
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 200, 100, 0.15)`
    ctx.fill()
  }
}

/* ── Main sphere rendering ── */
function drawSphere(ctx, cx, cy, radius, stage, time) {
  const stageId = stage.id

  if (stageId === 0) {
    // Nebula - diffuse cloud
    for (let i = 0; i < 5; i++) {
      const r = radius * (1.5 + i * 0.3)
      const gradient = ctx.createRadialGradient(
        cx + Math.sin(time * 0.5 + i) * 20,
        cy + Math.cos(time * 0.3 + i) * 15,
        0, cx, cy, r
      )
      gradient.addColorStop(0, `rgba(100, 120, 255, ${0.06 - i * 0.01})`)
      gradient.addColorStop(0.5, `rgba(140, 80, 220, ${0.04 - i * 0.005})`)
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }
    // Central condensation
    const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.3)
    coreGrad.addColorStop(0, 'rgba(200, 180, 255, 0.15)')
    coreGrad.addColorStop(1, 'rgba(100, 100, 255, 0)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius * 0.3, 0, Math.PI * 2)
    ctx.fillStyle = coreGrad
    ctx.fill()
    return
  }

  if (stageId === 1) {
    // Accretion - growing rocky body with rings of debris
    const innerR = radius * 0.35
    const bodyGrad = ctx.createRadialGradient(cx - innerR * 0.3, cy - innerR * 0.3, 0, cx, cy, innerR)
    bodyGrad.addColorStop(0, 'rgba(180, 140, 80, 0.9)')
    bodyGrad.addColorStop(0.7, 'rgba(120, 80, 40, 0.7)')
    bodyGrad.addColorStop(1, 'rgba(60, 40, 20, 0.3)')
    ctx.beginPath()
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2)
    ctx.fillStyle = bodyGrad
    ctx.fill()
    // Dust ring
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(time * 0.1)
    for (let i = 0; i < 80; i++) {
      const angle = (i / 80) * Math.PI * 2 + Math.sin(time + i) * 0.1
      const dist = innerR * 1.5 + Math.sin(i * 3.7 + time) * 30
      const px = Math.cos(angle) * dist
      const py = Math.sin(angle) * dist * 0.3
      const s = 1 + Math.random() * 2
      ctx.beginPath()
      ctx.arc(px, py, s, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(200, 160, 80, ${0.3 + Math.random() * 0.3})`
      ctx.fill()
    }
    ctx.restore()
    return
  }

  if (stageId === 2) {
    // Magma ocean - glowing lava planet
    const bodyGrad = ctx.createRadialGradient(cx - radius * 0.2, cy - radius * 0.2, radius * 0.05, cx, cy, radius)
    bodyGrad.addColorStop(0, 'rgba(255, 200, 60, 0.95)')
    bodyGrad.addColorStop(0.3, 'rgba(255, 100, 20, 0.9)')
    bodyGrad.addColorStop(0.6, 'rgba(200, 40, 10, 0.85)')
    bodyGrad.addColorStop(0.85, 'rgba(120, 20, 5, 0.9)')
    bodyGrad.addColorStop(1, 'rgba(40, 5, 0, 0.6)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.fillStyle = bodyGrad
    ctx.fill()

    // Lava cracks
    ctx.save()
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.clip()
    for (let i = 0; i < 12; i++) {
      const sx = cx + Math.cos(i * 0.8 + time * 0.2) * radius * 0.7
      const sy = cy + Math.sin(i * 1.1 + time * 0.15) * radius * 0.6
      const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius * 0.35)
      grad.addColorStop(0, `rgba(255, ${150 + Math.sin(time + i) * 50}, 0, 0.4)`)
      grad.addColorStop(1, 'rgba(255, 50, 0, 0)')
      ctx.beginPath()
      ctx.arc(sx, sy, radius * 0.35, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
    }
    ctx.restore()

    // Atmospheric glow
    const atmoGrad = ctx.createRadialGradient(cx, cy, radius * 0.9, cx, cy, radius * 1.4)
    atmoGrad.addColorStop(0, 'rgba(255, 80, 20, 0.15)')
    atmoGrad.addColorStop(0.5, 'rgba(255, 40, 0, 0.06)')
    atmoGrad.addColorStop(1, 'rgba(255, 20, 0, 0)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius * 1.4, 0, Math.PI * 2)
    ctx.fillStyle = atmoGrad
    ctx.fill()
    return
  }

  if (stageId === 3) {
    // Theia impact - dramatic collision
    const impactPhase = (Math.sin(time * 0.3) + 1) / 2

    // Main body
    const bodyGrad = ctx.createRadialGradient(cx - radius * 0.15, cy - radius * 0.15, 0, cx, cy, radius)
    bodyGrad.addColorStop(0, 'rgba(255, 180, 50, 0.95)')
    bodyGrad.addColorStop(0.4, 'rgba(220, 80, 10, 0.9)')
    bodyGrad.addColorStop(0.8, 'rgba(150, 30, 5, 0.85)')
    bodyGrad.addColorStop(1, 'rgba(60, 10, 0, 0.5)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.fillStyle = bodyGrad
    ctx.fill()

    // Theia (impactor)
    const theiaX = cx + radius * 0.7 + Math.sin(time * 0.8) * 10
    const theiaY = cy - radius * 0.3 + Math.cos(time * 0.6) * 8
    const theiaR = radius * 0.4
    const theiaGrad = ctx.createRadialGradient(theiaX, theiaY, 0, theiaX, theiaY, theiaR)
    theiaGrad.addColorStop(0, 'rgba(255, 160, 60, 0.9)')
    theiaGrad.addColorStop(0.6, 'rgba(200, 80, 20, 0.7)')
    theiaGrad.addColorStop(1, 'rgba(100, 30, 5, 0.3)')
    ctx.beginPath()
    ctx.arc(theiaX, theiaY, theiaR, 0, Math.PI * 2)
    ctx.fillStyle = theiaGrad
    ctx.fill()

    // Impact debris ring (proto-Moon material)
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(time * 0.15)
    for (let i = 0; i < 120; i++) {
      const angle = (i / 120) * Math.PI * 2
      const dist = radius * 1.6 + Math.sin(i * 2.3 + time * 2) * 25
      const px = Math.cos(angle) * dist
      const py = Math.sin(angle) * dist * 0.15
      const s = 0.5 + Math.random() * 2.5
      ctx.beginPath()
      ctx.arc(px, py, s, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, ${120 + Math.floor(Math.random() * 80)}, ${Math.floor(Math.random() * 60)}, ${0.3 + Math.random() * 0.4})`
      ctx.fill()
    }
    ctx.restore()

    // Impact flash
    const flashGrad = ctx.createRadialGradient(theiaX - theiaR * 0.5, theiaY + theiaR * 0.3, 0, cx, cy, radius * 2)
    flashGrad.addColorStop(0, `rgba(255, 255, 200, ${0.15 * impactPhase})`)
    flashGrad.addColorStop(0.3, `rgba(255, 150, 50, ${0.08 * impactPhase})`)
    flashGrad.addColorStop(1, 'rgba(255, 80, 0, 0)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius * 2, 0, Math.PI * 2)
    ctx.fillStyle = flashGrad
    ctx.fill()
    return
  }

  if (stageId === 4) {
    // Cooling crust - dark with glowing cracks
    const bodyGrad = ctx.createRadialGradient(cx - radius * 0.2, cy - radius * 0.2, 0, cx, cy, radius)
    bodyGrad.addColorStop(0, 'rgba(100, 80, 60, 0.9)')
    bodyGrad.addColorStop(0.5, 'rgba(60, 50, 40, 0.95)')
    bodyGrad.addColorStop(0.8, 'rgba(40, 35, 30, 0.9)')
    bodyGrad.addColorStop(1, 'rgba(20, 15, 10, 0.5)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.fillStyle = bodyGrad
    ctx.fill()

    // Lava cracks showing through
    ctx.save()
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.clip()
    for (let i = 0; i < 8; i++) {
      const crackX = cx + Math.cos(i * 1.2) * radius * 0.5
      const crackY = cy + Math.sin(i * 0.9) * radius * 0.4
      const crackGrad = ctx.createRadialGradient(crackX, crackY, 0, crackX, crackY, radius * 0.2)
      const intensity = 0.2 + Math.sin(time * 0.5 + i * 2) * 0.1
      crackGrad.addColorStop(0, `rgba(255, 100, 20, ${intensity})`)
      crackGrad.addColorStop(1, 'rgba(200, 50, 0, 0)')
      ctx.beginPath()
      ctx.arc(crackX, crackY, radius * 0.2, 0, Math.PI * 2)
      ctx.fillStyle = crackGrad
      ctx.fill()
    }
    ctx.restore()

    // Volcanic plumes
    for (let i = 0; i < 3; i++) {
      const vx = cx + Math.cos(i * 2.1 + 1) * radius * 0.6
      const vy = cy + Math.sin(i * 2.1 + 1) * radius * 0.5 - radius * 0.3
      const plumeGrad = ctx.createRadialGradient(vx, vy, 0, vx, vy - 20, 25)
      plumeGrad.addColorStop(0, `rgba(180, 160, 140, ${0.1 + Math.sin(time + i) * 0.05})`)
      plumeGrad.addColorStop(1, 'rgba(100, 90, 80, 0)')
      ctx.beginPath()
      ctx.arc(vx, vy - 10, 25, 0, Math.PI * 2)
      ctx.fillStyle = plumeGrad
      ctx.fill()
    }

    // Atmosphere forming
    const atmoGrad = ctx.createRadialGradient(cx, cy, radius * 0.95, cx, cy, radius * 1.15)
    atmoGrad.addColorStop(0, 'rgba(150, 120, 80, 0.08)')
    atmoGrad.addColorStop(1, 'rgba(100, 80, 60, 0)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2)
    ctx.fillStyle = atmoGrad
    ctx.fill()
    return
  }

  if (stageId === 5) {
    // First oceans - blue water forming on surface
    const bodyGrad = ctx.createRadialGradient(cx - radius * 0.2, cy - radius * 0.2, 0, cx, cy, radius)
    bodyGrad.addColorStop(0, 'rgba(80, 140, 200, 0.9)')
    bodyGrad.addColorStop(0.3, 'rgba(30, 100, 170, 0.85)')
    bodyGrad.addColorStop(0.6, 'rgba(20, 70, 130, 0.9)')
    bodyGrad.addColorStop(0.85, 'rgba(15, 45, 90, 0.85)')
    bodyGrad.addColorStop(1, 'rgba(5, 20, 50, 0.5)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.fillStyle = bodyGrad
    ctx.fill()

    // Land masses (brown patches)
    ctx.save()
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.clip()
    const lands = [
      { x: -0.3, y: -0.2, r: 0.35 },
      { x: 0.3, y: 0.25, r: 0.25 },
      { x: -0.1, y: 0.4, r: 0.2 },
    ]
    lands.forEach((land, i) => {
      const lx = cx + land.x * radius
      const ly = cy + land.y * radius
      const lr = land.r * radius
      const landGrad = ctx.createRadialGradient(lx, ly, 0, lx, ly, lr)
      landGrad.addColorStop(0, 'rgba(100, 80, 50, 0.7)')
      landGrad.addColorStop(0.7, 'rgba(70, 55, 35, 0.4)')
      landGrad.addColorStop(1, 'rgba(40, 30, 20, 0)')
      ctx.beginPath()
      ctx.arc(lx, ly, lr, 0, Math.PI * 2)
      ctx.fillStyle = landGrad
      ctx.fill()
    })
    ctx.restore()

    // Rain effect (subtle falling lines above planet)
    ctx.save()
    for (let i = 0; i < 30; i++) {
      const rx = cx + (Math.random() - 0.5) * radius * 2.5
      const ry = cy - radius * 1.5 + ((time * 50 + i * 37) % (radius * 2))
      const alpha = 0.1 + Math.random() * 0.1
      ctx.strokeStyle = `rgba(120, 180, 255, ${alpha})`
      ctx.lineWidth = 0.5
      ctx.beginPath()
      ctx.moveTo(rx, ry)
      ctx.lineTo(rx - 1, ry + 8)
      ctx.stroke()
    }
    ctx.restore()

    // Water shine
    const shineGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.35, 0, cx, cy, radius)
    shineGrad.addColorStop(0, 'rgba(200, 230, 255, 0.15)')
    shineGrad.addColorStop(0.3, 'rgba(100, 180, 255, 0.05)')
    shineGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.fillStyle = shineGrad
    ctx.fill()

    // Steam atmosphere
    const atmoGrad = ctx.createRadialGradient(cx, cy, radius * 0.95, cx, cy, radius * 1.2)
    atmoGrad.addColorStop(0, 'rgba(180, 210, 240, 0.1)')
    atmoGrad.addColorStop(0.5, 'rgba(120, 160, 200, 0.05)')
    atmoGrad.addColorStop(1, 'rgba(60, 100, 150, 0)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius * 1.2, 0, Math.PI * 2)
    ctx.fillStyle = atmoGrad
    ctx.fill()
    return
  }

  if (stageId === 6) {
    // First life - green tints appearing in ocean
    const bodyGrad = ctx.createRadialGradient(cx - radius * 0.2, cy - radius * 0.2, 0, cx, cy, radius)
    bodyGrad.addColorStop(0, 'rgba(60, 160, 140, 0.9)')
    bodyGrad.addColorStop(0.3, 'rgba(30, 110, 130, 0.85)')
    bodyGrad.addColorStop(0.6, 'rgba(20, 80, 110, 0.9)')
    bodyGrad.addColorStop(0.85, 'rgba(15, 50, 80, 0.85)')
    bodyGrad.addColorStop(1, 'rgba(5, 25, 45, 0.5)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.fillStyle = bodyGrad
    ctx.fill()

    // Stromatolite colonies (greenish patches)
    ctx.save()
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.clip()
    for (let i = 0; i < 15; i++) {
      const angle = i * 0.7 + time * 0.05
      const dist = radius * (0.2 + Math.random() * 0.6)
      const bx = cx + Math.cos(angle) * dist
      const by = cy + Math.sin(angle) * dist
      const br = 8 + Math.sin(time * 0.8 + i) * 3
      const bioGrad = ctx.createRadialGradient(bx, by, 0, bx, by, br)
      bioGrad.addColorStop(0, `rgba(80, 220, 120, ${0.3 + Math.sin(time + i) * 0.1})`)
      bioGrad.addColorStop(1, 'rgba(40, 180, 80, 0)')
      ctx.beginPath()
      ctx.arc(bx, by, br, 0, Math.PI * 2)
      ctx.fillStyle = bioGrad
      ctx.fill()
    }
    ctx.restore()

    // O₂ bubbles rising
    for (let i = 0; i < 8; i++) {
      const bx = cx + Math.sin(i * 1.3 + time * 0.5) * radius * 0.8
      const by = cy - radius - 10 - ((time * 20 + i * 25) % 60)
      const bs = 1.5 + Math.sin(i + time) * 0.5
      ctx.beginPath()
      ctx.arc(bx, by, bs, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(150, 255, 200, ${0.2 + Math.sin(time + i * 2) * 0.1})`
      ctx.fill()
    }

    // Atmosphere with slight green tint
    const atmoGrad = ctx.createRadialGradient(cx, cy, radius * 0.95, cx, cy, radius * 1.15)
    atmoGrad.addColorStop(0, 'rgba(100, 200, 150, 0.08)')
    atmoGrad.addColorStop(1, 'rgba(60, 150, 100, 0)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2)
    ctx.fillStyle = atmoGrad
    ctx.fill()
    return
  }

  if (stageId === 7) {
    // Modern Earth - realistic blue marble
    // Ocean base
    const bodyGrad = ctx.createRadialGradient(cx - radius * 0.25, cy - radius * 0.25, 0, cx, cy, radius)
    bodyGrad.addColorStop(0, 'rgba(80, 160, 240, 0.95)')
    bodyGrad.addColorStop(0.3, 'rgba(40, 120, 210, 0.9)')
    bodyGrad.addColorStop(0.6, 'rgba(20, 80, 180, 0.9)')
    bodyGrad.addColorStop(0.85, 'rgba(10, 50, 130, 0.9)')
    bodyGrad.addColorStop(1, 'rgba(5, 20, 70, 0.5)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.fillStyle = bodyGrad
    ctx.fill()

    // Continents
    ctx.save()
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.clip()
    const continents = [
      { x: -0.35, y: -0.15, rx: 0.3, ry: 0.25, color: [34, 139, 34] }, // green land
      { x: 0.2, y: -0.3, rx: 0.2, ry: 0.15, color: [50, 150, 50] },
      { x: 0.35, y: 0.15, rx: 0.25, ry: 0.3, color: [60, 130, 40] },
      { x: -0.15, y: 0.35, rx: 0.2, ry: 0.15, color: [45, 140, 45] },
      { x: 0.05, y: -0.45, rx: 0.3, ry: 0.1, color: [220, 220, 230] }, // ice cap
      { x: 0.0, y: 0.48, rx: 0.25, ry: 0.08, color: [230, 230, 240] }, // ice cap
    ]

    const rotOffset = time * 0.08
    continents.forEach(c => {
      const rx = c.x * Math.cos(rotOffset) - c.y * 0.1 * Math.sin(rotOffset)
      const lcx = cx + rx * radius
      const lcy = cy + c.y * radius
      const lrx = c.rx * radius
      const lry = c.ry * radius

      ctx.beginPath()
      ctx.ellipse(lcx, lcy, lrx, lry, rotOffset * 0.5, 0, Math.PI * 2)
      const landGrad = ctx.createRadialGradient(lcx, lcy, 0, lcx, lcy, Math.max(lrx, lry))
      landGrad.addColorStop(0, `rgba(${c.color[0]}, ${c.color[1]}, ${c.color[2]}, 0.8)`)
      landGrad.addColorStop(0.7, `rgba(${c.color[0]}, ${c.color[1]}, ${c.color[2]}, 0.5)`)
      landGrad.addColorStop(1, `rgba(${c.color[0]}, ${c.color[1]}, ${c.color[2]}, 0)`)
      ctx.fillStyle = landGrad
      ctx.fill()
    })

    // Clouds
    for (let i = 0; i < 6; i++) {
      const cloudAngle = i * 1.1 + rotOffset * 0.5
      const cloudDist = radius * (0.3 + i * 0.08)
      const cloudX = cx + Math.cos(cloudAngle) * cloudDist
      const cloudY = cy + Math.sin(cloudAngle) * cloudDist * 0.5
      const cloudGrad = ctx.createRadialGradient(cloudX, cloudY, 0, cloudX, cloudY, radius * 0.18)
      cloudGrad.addColorStop(0, 'rgba(255, 255, 255, 0.2)')
      cloudGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')
      ctx.beginPath()
      ctx.ellipse(cloudX, cloudY, radius * 0.18, radius * 0.06, cloudAngle, 0, Math.PI * 2)
      ctx.fillStyle = cloudGrad
      ctx.fill()
    }
    ctx.restore()

    // Specular highlight
    const shineGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.35, radius * 0.05, cx, cy, radius)
    shineGrad.addColorStop(0, 'rgba(255, 255, 255, 0.2)')
    shineGrad.addColorStop(0.2, 'rgba(200, 230, 255, 0.08)')
    shineGrad.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius, 0, Math.PI * 2)
    ctx.fillStyle = shineGrad
    ctx.fill()

    // Atmosphere
    const atmoGrad = ctx.createRadialGradient(cx, cy, radius * 0.95, cx, cy, radius * 1.12)
    atmoGrad.addColorStop(0, 'rgba(100, 180, 255, 0.12)')
    atmoGrad.addColorStop(0.5, 'rgba(80, 150, 255, 0.06)')
    atmoGrad.addColorStop(1, 'rgba(50, 100, 200, 0)')
    ctx.beginPath()
    ctx.arc(cx, cy, radius * 1.12, 0, Math.PI * 2)
    ctx.fillStyle = atmoGrad
    ctx.fill()
    return
  }
}

/* ── Stars background ── */
function drawStars(ctx, w, h, time) {
  for (let i = 0; i < 200; i++) {
    const x = (i * 137.5) % w
    const y = (i * 97.3) % h
    const brightness = 0.3 + Math.sin(time * 1.5 + i * 0.5) * 0.2
    const size = (i % 3 === 0) ? 1.5 : 0.8
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${brightness})`
    ctx.fill()
  }
}

/* ══════════════════════════════
   REACT COMPONENT
   ══════════════════════════════ */
export default function EarthSimulator() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const particlesRef = useRef([])
  const meteorsRef = useRef([])
  const [currentStage, setCurrentStage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoPlay, setAutoPlay] = useState(false)
  const stageRef = useRef(0)
  const timeRef = useRef(0)
  const transitionRef = useRef({ active: false, from: 0, to: 0, progress: 0 })

  const stage = STAGES[currentStage]

  const initParticles = useCallback((canvas, stageId) => {
    const count = stageId === 0 ? 200 : stageId === 1 ? 150 : stageId <= 3 ? 100 : 80
    const isAccretion = stageId === 1
    particlesRef.current = Array.from({ length: count }, () => new Particle(canvas, stageId, isAccretion))
    if (stageId === 2 || stageId === 3) {
      meteorsRef.current = Array.from({ length: 5 }, () => new Meteor(canvas))
    } else {
      meteorsRef.current = []
    }
  }, [])

  const goToStage = useCallback((newStage) => {
    if (newStage < 0 || newStage >= STAGES.length) return
    transitionRef.current = { active: true, from: currentStage, to: newStage, progress: 0 }
    setCurrentStage(newStage)
    stageRef.current = newStage
    if (canvasRef.current) {
      initParticles(canvasRef.current, newStage)
    }
  }, [currentStage, initParticles])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas._w = rect.width
      canvas._h = rect.height
    }
    resize()
    window.addEventListener('resize', resize)

    initParticles(canvas, 0)

    const animate = () => {
      const w = canvas._w
      const h = canvas._h
      timeRef.current += 0.016
      const time = timeRef.current

      ctx.clearRect(0, 0, w, h)

      // Stars
      drawStars(ctx, w, h, time)

      // Particles
      const stageData = STAGES[stageRef.current]
      particlesRef.current.forEach(p => {
        p.update()
        p.draw(ctx, stageData.particleColor)
      })

      // Meteors
      meteorsRef.current.forEach(m => {
        if (m.active) {
          m.update()
          m.draw(ctx)
        } else {
          m.reset()
        }
      })

      // Central sphere
      const cx = w / 2
      const cy = h / 2
      const maxRadius = Math.min(w, h) * 0.22
      const sphereRadius = stageRef.current === 0 ? maxRadius * 0.5 : maxRadius

      // Transition handling
      if (transitionRef.current.active) {
        transitionRef.current.progress += 0.02
        if (transitionRef.current.progress >= 1) {
          transitionRef.current.active = false
        }
      }

      drawSphere(ctx, cx, cy, sphereRadius, STAGES[stageRef.current], time)

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [initParticles])

  // Autoplay timer
  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrentStage(prev => {
        const next = prev < STAGES.length - 1 ? prev + 1 : 0
        stageRef.current = next
        if (canvasRef.current) initParticles(canvasRef.current, next)
        return next
      })
    }, 6000)
    return () => clearInterval(interval)
  }, [autoPlay, initParticles])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goToStage(Math.min(stageRef.current + 1, STAGES.length - 1))
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToStage(Math.max(stageRef.current - 1, 0))
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goToStage])

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: '#000' }}>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: stage.bgGradient }}
      />

      {/* Top gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)' }} />
      <div className="absolute inset-x-0 bottom-0 h-60 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />

      {/* Header */}
      <div className="relative z-10 pt-20 md:pt-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-2"
          style={{ color: 'rgba(255,255,255,0.9)' }}
        >
          Die Entstehung der{' '}
          <span style={{
            background: `linear-gradient(135deg, ${stage.color}, #fff)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Erde
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base font-mono"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          4.6 Milliarden Jahre in 8 Kapiteln
        </motion.p>
      </div>

      {/* Stage info panel */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 md:px-8 pb-6">
        {/* Timeline bar */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="flex items-center gap-1 mb-3">
            {STAGES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goToStage(i)}
                className="flex-1 group relative"
              >
                <div
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    background: i <= currentStage
                      ? `linear-gradient(90deg, ${s.color}, ${STAGES[Math.min(i + 1, STAGES.length - 1)].color})`
                      : 'rgba(255,255,255,0.08)',
                    boxShadow: i === currentStage ? `0 0 10px ${s.color}80` : 'none',
                  }}
                />
                <div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300"
                  style={{
                    borderColor: i <= currentStage ? s.color : 'rgba(255,255,255,0.15)',
                    background: i === currentStage ? s.color : i < currentStage ? `${s.color}60` : 'rgba(0,0,0,0.5)',
                    transform: `translateX(-50%) scale(${i === currentStage ? 1.3 : 1})`,
                    boxShadow: i === currentStage ? `0 0 12px ${s.color}60` : 'none',
                  }}
                />
                {/* Tooltip */}
                <span
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono whitespace-nowrap px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {s.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Info card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="rounded-2xl p-5 md:p-8 backdrop-blur-xl"
              style={{
                background: 'rgba(10, 10, 20, 0.7)',
                border: `1px solid ${stage.color}25`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04), 0 0 40px ${stage.glowColor}`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                      style={{
                        background: `${stage.color}18`,
                        color: stage.color,
                        border: `1px solid ${stage.color}30`,
                      }}
                    >
                      Phase {currentStage + 1}/{STAGES.length}
                    </span>
                    <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {stage.age}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3" style={{ color: stage.color }}>
                    {stage.name}
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {stage.description}
                  </p>
                </div>

                {/* Controls */}
                <div className="flex md:flex-col items-center gap-2 md:gap-3 flex-shrink-0">
                  <button
                    onClick={() => goToStage(currentStage - 1)}
                    disabled={currentStage === 0}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-20 disabled:hover:scale-100"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    onClick={() => setAutoPlay(!autoPlay)}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: autoPlay ? `${stage.color}25` : 'rgba(255,255,255,0.06)',
                      border: `1px solid ${autoPlay ? stage.color + '40' : 'rgba(255,255,255,0.1)'}`,
                    }}
                    title={autoPlay ? 'Pause' : 'Auto-Play'}
                  >
                    {autoPlay ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    )}
                  </button>

                  <button
                    onClick={() => goToStage(currentStage + 1)}
                    disabled={currentStage === STAGES.length - 1}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-20 disabled:hover:scale-100"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Keyboard hint */}
              <div className="hidden md:flex items-center justify-center gap-4 mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <span className="text-[11px] font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  <kbd className="px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>←</kbd>
                  {' '}Zurück
                </span>
                <span className="text-[11px] font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  <kbd className="px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>→</kbd>
                  {' '}Weiter
                </span>
                <span className="text-[11px] font-mono" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  <kbd className="px-2.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>Space</kbd>
                  {' '}Nächste Phase
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
