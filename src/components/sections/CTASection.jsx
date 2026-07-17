import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sparkles, ArrowRight, Code2, Cpu, Globe, Database, Shield } from 'lucide-react'

export default function CTASection() {
  const navigate = useNavigate()
  const [hoveredNode, setHoveredNode] = useState(null)

  const part1 = "Let's Build Something "
  const part2 = "Amazing Together"
  const [charCount, setCharCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  // Compute typed substrings dynamically
  const typedPart1 = part1.substring(0, Math.min(charCount, part1.length))
  const typedPart2 = part2.substring(0, Math.max(0, charCount - part1.length))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    const element = document.getElementById("cta-section-card")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted || isPaused) return

    const totalLength = part1.length + part2.length
    const speed = isDeleting ? 30 : 60 // backspace faster than typing

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charCount < totalLength) {
          setCharCount(prev => prev + 1)
        } else {
          setIsPaused(true)
          setTimeout(() => {
            setIsDeleting(true)
            setIsPaused(false)
          }, 3000) // pause for 3s when fully typed
        }
      } else {
        if (charCount > 0) {
          setCharCount(prev => prev - 1)
        } else {
          setIsDeleting(false)
          setIsPaused(true)
          setTimeout(() => {
            setIsPaused(false)
          }, 1000) // pause for 1s when fully deleted
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [hasStarted, charCount, isDeleting, isPaused])

  // Floating nodes data
  const nodes = [
    {
      id: 'ai',
      label: 'AI Agent',
      icon: Cpu,
      color: 'text-rose-500 border-rose-200/85',
      hoverBorder: 'group-hover:border-rose-400/85',
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.15)]',
      x: 45,
      y: 35,
      delay: 0,
      duration: 5
    },
    {
      id: 'web3d',
      label: '3D Web',
      icon: Globe,
      color: 'text-sky-500 border-sky-200/85',
      hoverBorder: 'group-hover:border-sky-400/85',
      glow: 'shadow-[0_0_20px_rgba(56,189,248,0.15)]',
      x: 295,
      y: 40,
      delay: 0.8,
      duration: 6
    },
    {
      id: 'fullstack',
      label: 'Full-Stack',
      icon: Code2,
      color: 'text-violet-500 border-violet-200/85',
      hoverBorder: 'group-hover:border-violet-400/85',
      glow: 'shadow-[0_0_20px_rgba(139,92,246,0.15)]',
      x: 275,
      y: 220,
      delay: 1.5,
      duration: 5.5
    },
    {
      id: 'db',
      label: 'Scalable DB',
      icon: Database,
      color: 'text-emerald-500 border-emerald-200/85',
      hoverBorder: 'group-hover:border-emerald-400/85',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]',
      x: 55,
      y: 215,
      delay: 2.2,
      duration: 6.5
    }
  ]

  const centerNode = {
    x: 160,
    y: 130,
    label: 'YOUR IDEA',
    color: 'text-purple-600 border-purple-200 bg-white'
  }

  return (
    <section className="relative px-6 pb-24 sm:px-10 lg:px-16 overflow-hidden">
      {/* Decorative premium light card frame matching the app style */}
      <motion.div 
        id="cta-section-card"
        className="mx-auto max-w-6xl rounded-[2.5rem] bg-[#f5f5f7] border border-slate-200 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.015)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Slow-rotating background fluid blurs */}
        <motion.div 
          className="absolute top-[-50px] right-[-50px] w-96 h-96 rounded-full bg-violet-200/35 blur-[100px] -z-10 pointer-events-none"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className="absolute bottom-[-100px] left-[-100px] w-96 h-96 rounded-full bg-indigo-200/35 blur-[100px] -z-10 pointer-events-none"
          animate={{
            x: [0, -35, 0],
            y: [0, 45, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Ambient grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: CTA Context */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            {/* Pulse Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-violet-50 border border-violet-100 text-violet-600 select-none animate-pulse">
              <Sparkles className="h-3.5 w-3.5 text-violet-500" />
              Available for Collaborations
            </span>

            {/* Dynamic heading with typing loop animation */}
            <h2 className="text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-900 leading-tight font-sans min-h-[56px] sm:min-h-[80px] select-none">
              {typedPart1}
              {charCount < part1.length && (
                <span className="animate-blink font-light text-violet-500">|</span>
              )}
              {charCount >= part1.length && <br className="hidden sm:block" />}
              {charCount >= part1.length && (
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">
                  {typedPart2}
                </span>
              )}
              {charCount >= part1.length && (
                <span className="animate-blink font-light text-violet-500">|</span>
              )}
            </h2>

            {/* Premium description */}
            <p className="text-slate-500 text-base sm:text-[17px] leading-relaxed font-semibold max-w-lg">
              Have a visionary idea, a scalable platform to build, or a complex system to optimize? Let's team up to design high-performance applications, interactive 3D interfaces, and custom AI agents.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              {/* Primary Contact Button */}
              <div className="snake-border-wrapper w-full sm:w-auto active:scale-[0.98]">
                <div className="snake-border-glow" />
                <button 
                  onClick={() => navigate('/contact')}
                  className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[10px] bg-white hover:bg-slate-50 px-[22px] py-[10px] text-sm sm:text-base font-semibold text-gray-700 hover:text-violet-600 transition-all duration-300 cursor-pointer select-none group"
                >
                  <span>Start a Project</span>
                </button>
              </div>

              {/* Secondary Projects Button */}
              <div className="snake-border-wrapper w-full sm:w-auto active:scale-[0.98]">
                <div className="snake-border-glow" />
                <button 
                  onClick={() => navigate('/projects')}
                  className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[10px] bg-white hover:bg-slate-50 px-[22px] py-[10px] text-sm sm:text-base font-semibold text-gray-700 hover:text-violet-600 transition-all duration-300 cursor-pointer select-none group"
                >
                  <span>Explore Projects</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Fusing Collaboration Core (Interactive Grid) */}
          <div className="lg:col-span-6 flex items-center justify-center select-none w-full">
            <div className="relative w-full max-w-[400px] aspect-[400/340] bg-[#f5f5f7] rounded-3xl border border-slate-200 p-4 overflow-hidden shadow-inner">
              
              {/* Starry glowing SVGs connecting floating nodes to core */}
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 400 340" preserveAspectRatio="none">
                {/* Defs for neon gradients */}
                <defs>
                  <linearGradient id="glow-grad-ai" x1="73" y1="63" x2="200" y2="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                  <linearGradient id="glow-grad-web3d" x1="323" y1="68" x2="200" y2="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                  <linearGradient id="glow-grad-fullstack" x1="303" y1="248" x2="200" y2="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                  <linearGradient id="glow-grad-db" x1="83" y1="243" x2="200" y2="170" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#c084fc" />
                  </linearGradient>
                </defs>

                {/* Connection Lines */}
                {nodes.map((node) => (
                  <g key={`lines-${node.id}`}>
                    {/* Faint base dashed connecting track */}
                    <line 
                      x1={node.x + 28} 
                      y1={node.y + 28} 
                      x2={centerNode.x + 40} 
                      y2={centerNode.y + 40}
                      stroke="rgba(15, 23, 42, 0.08)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />

                    {/* Flowing animated gradient lines when hovered or active */}
                    <motion.line 
                      x1={node.x + 28} 
                      y1={node.y + 28} 
                      x2={centerNode.x + 40} 
                      y2={centerNode.y + 40}
                      stroke={`url(#glow-grad-${node.id})`}
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      className="animate-flow-dash"
                      initial={{ opacity: 0.15 }}
                      animate={{ 
                        opacity: hoveredNode === node.id ? 0.95 : 0.25,
                        strokeWidth: hoveredNode === node.id ? 2 : 1.5
                      }}
                    />

                    {/* Glowing packets flowing towards the core idea */}
                    <motion.circle
                      r="3.5"
                      fill={
                        node.id === 'ai' ? '#f43f5e'
                        : node.id === 'web3d' ? '#38bdf8'
                        : node.id === 'fullstack' ? '#8b5cf6'
                        : '#10b981'
                      }
                      initial={{ cx: node.x + 28, cy: node.y + 28 }}
                      animate={{
                        cx: [node.x + 28, centerNode.x + 40],
                        cy: [node.y + 28, centerNode.y + 40],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        duration: node.id === 'ai' ? 2.5 : node.id === 'web3d' ? 3 : node.id === 'fullstack' ? 2.8 : 3.2,
                        repeat: Infinity,
                        delay: node.delay,
                        ease: 'easeInOut'
                      }}
                      style={{
                        filter: `drop-shadow(0 0 4px ${
                          node.id === 'ai' ? '#f43f5e'
                          : node.id === 'web3d' ? '#38bdf8'
                          : node.id === 'fullstack' ? '#8b5cf6'
                          : '#10b981'
                        })`
                      }}
                    />
                  </g>
                ))}
              </svg>

              {styleRule}

              {/* Floating nodes */}
              {nodes.map((node) => {
                const Icon = node.icon
                return (
                  <motion.div
                    key={node.id}
                    className={`absolute flex flex-col items-center gap-1.5 cursor-pointer z-20 group`}
                    style={{ left: `${(node.x / 400) * 100}%`, top: `${(node.y / 340) * 100}%` }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: node.duration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: node.delay
                    }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Icon sphere box */}
                    <div className={`w-14 h-14 rounded-[1.25rem] border flex items-center justify-center transition-all duration-300 relative bg-white ${node.color} ${node.hoverBorder} ${hoveredNode === node.id ? node.glow + ' scale-110' : 'shadow-sm'}`}>
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    {/* Node text tag */}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors duration-200">
                      {node.label}
                    </span>
                  </motion.div>
                )
              })}

              {/* Central Glowing YOUR IDEA Core */}
              <motion.div
                className="absolute z-10 flex flex-col items-center gap-2 cursor-pointer"
                style={{ left: `${(centerNode.x / 400) * 100}%`, top: `${(centerNode.y / 340) * 100}%` }}
                animate={{
                  scale: hoveredNode ? 1.08 : 1
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              >
                {/* Slow spinning ring behind core */}
                <div className="absolute -inset-4 rounded-full border border-dashed border-purple-500/25 animate-[spin_24s_linear_infinite]" />
                
                {/* Glowing ring behind core */}
                <div className={`absolute -inset-1.5 rounded-full blur-[8px] opacity-60 transition-opacity duration-300 bg-purple-500/25 ${hoveredNode ? 'opacity-90' : ''}`} />

                {/* Core Circle Box */}
                <div className={`w-[80px] h-[80px] rounded-full border flex flex-col items-center justify-center text-center relative bg-white select-none transition-all duration-300 ${centerNode.color} ${hoveredNode ? 'shadow-[0_0_25px_rgba(168,85,247,0.15)] border-purple-400 scale-105' : 'border-purple-200/80 shadow-sm'}`}>
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-600">
                    YOUR
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-800 mt-0.5">
                    IDEA
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}

const styleRule = (
  <style>{`
    @keyframes flow-dash {
      to {
        stroke-dashoffset: -20;
      }
    }
    .animate-flow-dash {
      animation: flow-dash 1.25s linear infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .animate-blink {
      animation: blink 0.8s infinite;
    }
  `}</style>
)
