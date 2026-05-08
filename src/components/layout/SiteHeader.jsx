import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

function SiteHeader({ isDetailPage = false }) {
  const headerRef = useRef(null)
  const canvasRef = useRef(null)
  const logoRef = useRef(null)
  const linkRefs = useRef({})

  const [activeLink, setActiveLink] = useState(null)
  const [stream, setStream] = useState(null)

  const navItems = useMemo(() => {
    if (isDetailPage) {
      return [
        { id: 'home', type: 'route', to: '/', label: 'Home' },
        { id: 'case-study', type: 'anchor', href: '#case-study', label: 'Case Study' },
      ]
    }

    return [
      { id: 'skills', type: 'anchor', href: '#skills', label: 'Skills' },
      { id: 'projects', type: 'anchor', href: '#projects', label: 'Projects' },
      { id: 'contact', type: 'anchor', href: '#contact', label: 'Contact' },
    ]
  }, [isDetailPage])

  useEffect(() => {
    const headerEl = headerRef.current
    const canvas = canvasRef.current
    if (!headerEl || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId = null
    const nodeCount = 18
    const nodes = []

    const resize = () => {
      const rect = headerEl.getBoundingClientRect()
      canvas.width = Math.floor(rect.width * window.devicePixelRatio)
      canvas.height = Math.floor(rect.height * window.devicePixelRatio)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    }

    resize()

    const width = () => canvas.width / window.devicePixelRatio
    const height = () => canvas.height / window.devicePixelRatio

    for (let i = 0; i < nodeCount; i += 1) {
      nodes.push({
        x: Math.random() * width(),
        y: Math.random() * height(),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      })
    }

    const draw = () => {
      const w = width()
      const h = height()
      ctx.clearRect(0, 0, w, h)

      for (let i = 0; i < nodes.length; i += 1) {
        const n1 = nodes[i]
        n1.x += n1.vx
        n1.y += n1.vy

        if (n1.x <= 0 || n1.x >= w) n1.vx *= -1
        if (n1.y <= 0 || n1.y >= h) n1.vy *= -1

        for (let j = i + 1; j < nodes.length; j += 1) {
          const n2 = nodes[j]
          const dx = n1.x - n2.x
          const dy = n1.y - n2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 120) {
            const opacity = 1 - dist / 120
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.22})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(n1.x, n1.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.stroke()
          }
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        const n = nodes[i]
        ctx.fillStyle = 'rgba(0, 212, 255, 0.65)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }

      rafId = window.requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('resize', resize)

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    if (!activeLink) {
      setStream(null)
      return
    }

    const headerEl = headerRef.current
    const logoEl = logoRef.current
    const linkEl = linkRefs.current[activeLink]

    if (!headerEl || !logoEl || !linkEl) return

    const calcStream = () => {
      const headerRect = headerEl.getBoundingClientRect()
      const logoRect = logoEl.getBoundingClientRect()
      const linkRect = linkEl.getBoundingClientRect()

      const x1 = logoRect.left + logoRect.width / 2 - headerRect.left
      const y1 = logoRect.top + logoRect.height / 2 - headerRect.top
      const x2 = linkRect.left + linkRect.width / 2 - headerRect.left
      const y2 = linkRect.top + linkRect.height / 2 - headerRect.top

      const dx = x2 - x1
      const dy = y2 - y1
      const length = Math.max(0, Math.sqrt(dx * dx + dy * dy))
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI

      setStream({ x1, y1, length, angle })
    }

    calcStream()
    window.addEventListener('resize', calcStream)

    return () => {
      window.removeEventListener('resize', calcStream)
    }
  }, [activeLink])

  const linkClassName =
    'rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white/70 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-900/40 dark:hover:text-white'

  return (
    <header
      ref={headerRef}
      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif' }}
      className="sticky top-0 z-40 overflow-hidden border-b border-[#00D4FF]/25 bg-white/70 backdrop-blur-xl dark:border-[#00D4FF]/30 dark:bg-slate-950/75"
    >
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 -z-10" />

      <AnimatePresence>
        {stream && (
          <motion.div
            key={activeLink}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0"
          >
            <div
              className="absolute h-[2px] origin-left rounded-full bg-[#00D4FF]/30"
              style={{
                left: stream.x1,
                top: stream.y1,
                width: stream.length,
                transform: `translateY(-50%) rotate(${stream.angle}deg)`,
              }}
            >
              <motion.div
                className="h-full w-20 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent"
                initial={{ x: -80, opacity: 0.4 }}
                animate={{ x: stream.length + 20, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'linear', repeat: Infinity }}
              />
            </div>

            <motion.div
              className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00D4FF] shadow-[0_0_14px_rgba(0,212,255,0.95)]"
              style={{ left: stream.x1, top: stream.y1 }}
              initial={{ x: 0, opacity: 0.5 }}
              animate={{ x: stream.length, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'linear', repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10 lg:px-16">
        <Link to="/" className="flex items-center gap-3">
          <span
            ref={logoRef}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#00D4FF]/70 bg-slate-950 text-sm font-semibold tracking-[0.08em] text-[#E8FBFF] shadow-[0_0_22px_rgba(0,212,255,0.6)]"
          >
            VL
          </span>
          <div className="space-y-1">
            <p className="text-sm font-semibold tracking-[0.2em] text-slate-900 uppercase dark:text-slate-100">
              Vaibhav Lohar
            </p>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Full Stack Developer • AI Engineer
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          {navItems.map((item) => {
            if (item.type === 'route') {
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  ref={(node) => {
                    linkRefs.current[item.id] = node
                  }}
                  onMouseEnter={() => setActiveLink(item.id)}
                  onMouseLeave={() => setActiveLink(null)}
                  className={linkClassName}
                >
                  {item.label}
                </Link>
              )
            }

            return (
              <a
                key={item.id}
                href={item.href}
                ref={(node) => {
                  linkRefs.current[item.id] = node
                }}
                onMouseEnter={() => setActiveLink(item.id)}
                onMouseLeave={() => setActiveLink(null)}
                className={linkClassName}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
