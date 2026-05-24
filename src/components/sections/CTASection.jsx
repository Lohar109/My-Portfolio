import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Sparkles, ArrowRight, Code2, Cpu, Globe, Database, Shield } from 'lucide-react'

export default function CTASection() {
  const navigate = useNavigate()
  const [hoveredNode, setHoveredNode] = useState(null)

  // Floating nodes data
  const nodes = [
    {
      id: 'ai',
      label: 'AI Agent',
      icon: Cpu,
      color: 'text-rose-400 border-rose-500/20 bg-rose-500/10 shadow-rose-500/15',
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.3)]',
      x: 45,
      y: 35,
      delay: 0,
      duration: 5
    },
    {
      id: 'web3d',
      label: '3D Web',
      icon: Globe,
      color: 'text-sky-400 border-sky-500/20 bg-sky-500/10 shadow-sky-500/15',
      glow: 'shadow-[0_0_20px_rgba(56,189,248,0.3)]',
      x: 295,
      y: 40,
      delay: 0.8,
      duration: 6
    },
    {
      id: 'fullstack',
      label: 'Full-Stack',
      icon: Code2,
      color: 'text-violet-400 border-violet-500/20 bg-violet-500/10 shadow-violet-500/15',
      glow: 'shadow-[0_0_20px_rgba(139,92,246,0.3)]',
      x: 275,
      y: 220,
      delay: 1.5,
      duration: 5.5
    },
    {
      id: 'db',
      label: 'Scalable DB',
      icon: Database,
      color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10 shadow-emerald-500/15',
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
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
    color: 'text-purple-400 border-purple-500/30 bg-purple-500/15 shadow-purple-500/20'
  }

  return (
    <section className="relative px-6 pb-24 sm:px-10 lg:px-16 overflow-hidden">
      {/* Decorative premium dark card frame */}
      <motion.div 
        className="mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Slow-rotating background fluid blurs */}
        <motion.div 
          className="absolute top-[-50px] right-[-50px] w-96 h-96 rounded-full bg-violet-600/15 blur-[120px] -z-10 pointer-events-none"
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
          className="absolute bottom-[-100px] left-[-100px] w-96 h-96 rounded-full bg-indigo-600/15 blur-[120px] -z-10 pointer-events-none"
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

        {/* Ambient starry grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: CTA Context */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            {/* Pulse Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-violet-500/10 border border-violet-500/20 text-violet-300 select-none animate-pulse">
              <Sparkles className="h-3.5 w-3.5 text-violet-400" />
              Available for Collaborations
            </span>

            {/* Dynamic heading */}
            <h2 className="text-3xl sm:text-4.5xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Let's Build Something{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            {/* Premium description */}
            <p className="text-slate-400 text-base sm:text-[17px] leading-relaxed font-medium max-w-lg">
              Have a visionary idea, a scalable platform to build, or a complex system to optimize? Let's team up to design high-performance applications, interactive 3D interfaces, and custom AI agents.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              {/* Primary Contact Button */}
              <button 
                onClick={() => navigate('/contact')}
                className="group relative flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm px-7 py-4 shadow-lg shadow-violet-600/25 hover:shadow-violet-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-255" />
              </button>

              {/* Secondary Projects Button */}
              <button 
                onClick={() => navigate('/projects')}
                className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-7 py-4 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>Explore Portfolio</span>
              </button>
            </div>
          </div>

          {/* Right Column: Fusing Collaboration Core (Interactive Grid) */}
          <div className="lg:col-span-6 flex items-center justify-center select-none w-full">
            <div className="relative w-full max-w-[400px] aspect-[400/340] bg-slate-950/40 rounded-3xl border border-white/5 p-4 overflow-hidden backdrop-blur-sm shadow-inner">
              
              {/* Starry glowing SVGs connecting floating nodes to core */}
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
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
                      stroke="rgba(255, 255, 255, 0.08)"
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
                    style={{ left: node.x, top: node.y }}
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
                    <div className={`w-14 h-14 rounded-[1.25rem] border flex items-center justify-center transition-all duration-300 relative bg-[#090D1A]/95 ${node.color} ${hoveredNode === node.id ? node.glow + ' scale-110 border-white/20' : 'border-white/10'}`}>
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    {/* Node text tag */}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors duration-200">
                      {node.label}
                    </span>
                  </motion.div>
                )
              })}

              {/* Central Glowing YOUR IDEA Core */}
              <motion.div
                className="absolute z-10 flex flex-col items-center gap-2 cursor-pointer"
                style={{ left: centerNode.x, top: centerNode.y }}
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
                <div className={`w-[80px] h-[80px] rounded-full border flex flex-col items-center justify-center text-center relative bg-[#0C101F]/95 select-none transition-all duration-300 ${centerNode.color} ${hoveredNode ? 'shadow-[0_0_25px_rgba(168,85,247,0.4)] border-purple-400/40 scale-105' : 'border-purple-500/20'}`}>
                  <span className="text-[10px] font-black uppercase tracking-wider text-purple-200">
                    YOUR
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-white mt-0.5">
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
  `}</style>
)
