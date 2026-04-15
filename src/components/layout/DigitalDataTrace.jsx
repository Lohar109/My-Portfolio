import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const POOL = [
  'const',
  'let',
  'async',
  'await',
  'null',
  'import',
  'export',
  'try',
  'catch',
  'vector',
  'prompt',
  'agent',
  'token',
  'embed',
  'docker',
  'deploy',
  'api',
  'json',
  'node',
  'vl',
  'mca',
  '0',
  '1',
  '{',
  '}',
  '=>',
  ';',
]
const SPREAD_X = 18
const SPREAD_Y = 14
const LIFETIME = 1500
const STATIONARY_INTERVAL = 250
const MOVE_THRESHOLD = 25

function pickRandom(items, previousValue) {
  if (items.length === 1) {
    return items[0]
  }

  let nextValue = previousValue

  while (nextValue === previousValue) {
    nextValue = items[Math.floor(Math.random() * items.length)]
  }

  return nextValue
}

function createParticle({ x, y, moving = false, previousValue = null }) {
  const value = pickRandom(POOL, previousValue)

  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    x,
    y,
    value,
    drift: (Math.random() - 0.5) * 16,
    rise: 42 + Math.random() * 34,
    rotate: (Math.random() - 0.5) * 20,
    duration: LIFETIME,
    fontSize: 9 + Math.random() * 2,
    moving,
  }
}

function DigitalDataTrace() {
  const [particles, setParticles] = useState([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const lastMoveRef = useRef(0)
  const lastSpawnRef = useRef({ x: 0, y: 0 })
  const lastValueRef = useRef(null)
  const cleanupRef = useRef(new Map())

  useEffect(() => {
    const addParticle = (particle) => {
      lastValueRef.current = particle.value
      setParticles((current) => [...current, particle])

      const timeoutId = window.setTimeout(() => {
        setParticles((current) => current.filter((entry) => entry.id !== particle.id))
        cleanupRef.current.delete(particle.id)
      }, particle.duration)

      cleanupRef.current.set(particle.id, timeoutId)
    }

    const spawnMovementParticle = (x, y) => {
      const previous = lastSpawnRef.current
      const distance = Math.hypot(x - previous.x, y - previous.y)

      if (distance < MOVE_THRESHOLD) {
        return
      }

      lastSpawnRef.current = { x, y }

      const particle = createParticle({
        x: x + (Math.random() - 0.5) * SPREAD_X,
        y: y + (Math.random() - 0.5) * SPREAD_Y,
        moving: true,
        previousValue: lastValueRef.current,
      })
      addParticle(particle)
    }

    const handlePointerMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY }
      lastMoveRef.current = Date.now()
      spawnMovementParticle(event.clientX, event.clientY)
    }

    const handleStationarySpawn = () => {
      if (Date.now() - lastMoveRef.current < STATIONARY_INTERVAL) {
        return
      }

      const particle = createParticle({
        x: mouseRef.current.x + (Math.random() - 0.5) * 10,
        y: mouseRef.current.y + (Math.random() - 0.5) * 10,
        moving: false,
        previousValue: lastValueRef.current,
      })
      addParticle(particle)
    }

    const handleVisibility = () => {
      if (document.hidden) {
        return
      }
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)
    const stationaryTimer = window.setInterval(handleStationarySpawn, STATIONARY_INTERVAL)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('visibilitychange', handleVisibility)
      window.clearInterval(stationaryTimer)
      cleanupRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
      cleanupRef.current.clear()
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90] overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute select-none whitespace-nowrap font-mono font-medium text-gray-600 opacity-80"
            style={{
              left: particle.x,
              top: particle.y,
              fontSize: `${particle.fontSize}px`,
              fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace',
              letterSpacing: '0.04em',
              opacity: 0,
            }}
            initial={{ opacity: 0, y: 0, x: 0, scale: 0.96 }}
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              y: -particle.rise,
              x: particle.drift,
              scale: [0.96, 1, 1],
              rotate: particle.rotate,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: particle.duration / 1000,
              times: [0, 0.2, 0.666, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {particle.value}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default DigitalDataTrace
