import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, PenTool, Code2, CheckCircle2, Rocket } from 'lucide-react'

const approachSteps = [
  {
    num: '01',
    label: 'Understand',
    desc: 'I analyze requirements and understand the problem deeply.',
    icon: Lightbulb,
    color: 'text-violet-600',
    bgColor: 'bg-violet-50/80 border-violet-100/50',
    glowColor: 'shadow-violet-500/10 hover:shadow-violet-500/20 hover:border-violet-300',
    iconGlow: 'bg-violet-500/10'
  },
  {
    num: '02',
    label: 'Plan',
    desc: 'I plan the architecture and choose the right tech stack.',
    icon: PenTool,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50/80 border-rose-100/50',
    glowColor: 'shadow-rose-500/10 hover:shadow-rose-500/20 hover:border-rose-300',
    iconGlow: 'bg-rose-500/10'
  },
  {
    num: '03',
    label: 'Build',
    desc: 'I write clean, efficient code and build scalable solutions.',
    icon: Code2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50/80 border-blue-100/50',
    glowColor: 'shadow-blue-500/10 hover:shadow-blue-500/20 hover:border-blue-300',
    iconGlow: 'bg-blue-500/10'
  },
  {
    num: '04',
    label: 'Test',
    desc: 'I test thoroughly to ensure performance and reliability.',
    icon: CheckCircle2,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50/80 border-emerald-100/50',
    glowColor: 'shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:border-emerald-300',
    iconGlow: 'bg-emerald-500/10'
  },
  {
    num: '05',
    label: 'Deploy',
    desc: 'I deploy with best practices and monitor for continuous improvement.',
    icon: Rocket,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50/80 border-amber-100/50',
    glowColor: 'shadow-amber-500/10 hover:shadow-amber-500/20 hover:border-amber-300',
    iconGlow: 'bg-amber-500/10'
  }
]

export default function DevelopmentApproach() {
  const [cycle, setCycle] = useState(0)
  const [activeSteps, setActiveSteps] = useState([true, false, false, false, false])

  useEffect(() => {
    let timer1, timer2, timer3, timer4, timerReset

    const startCycle = () => {
      setActiveSteps([true, false, false, false, false])

      timer1 = setTimeout(() => {
        setActiveSteps([true, true, false, false, false])
      }, 1500)

      timer2 = setTimeout(() => {
        setActiveSteps([true, true, true, false, false])
      }, 3000)

      timer3 = setTimeout(() => {
        setActiveSteps([true, true, true, true, false])
      }, 4500)

      timer4 = setTimeout(() => {
        setActiveSteps([true, true, true, true, true])
      }, 6000)

      timerReset = setTimeout(() => {
        setCycle(c => c + 1)
      }, 8500)
    }

    startCycle()

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timerReset)
    }
  }, [cycle])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section className="relative px-6 py-24 sm:px-10 lg:px-16 bg-slate-50/40 border-t border-slate-100 overflow-hidden">
      {/* Global SVG Definitions for gradients */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <linearGradient id="journey-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient decorative blurs matching the app style */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-violet-300/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-indigo-300/10 blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl relative">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            My Development{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Approach
            </span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-[17px] text-gray-500 leading-relaxed font-semibold font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Every project follows a clear process — from idea to impact.
          </motion.p>
        </div>

        {/* Stepper / Timeline Row */}
        <motion.div 
          className="relative grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-6 items-start w-full z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Horizontal Connecting Flowing Line (Desktop Only) */}
          <svg 
            key={cycle}
            className="hidden md:block absolute top-[40px] left-0 right-0 w-full h-[6px] overflow-visible -z-10"
          >
            {/* Background base dashed gray line */}
            <line x1="10%" y1="3" x2="90%" y2="3" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 6" />

            {/* Glowing animated line segments with scrolling flow dash effect */}
            {/* Segment 1: Understand to Plan (10% to 30%) */}
            <motion.line
              x1="10%" y1="3" x2="30%" y2="3"
              stroke="url(#journey-gradient)" strokeWidth="2"
              strokeDasharray="4 6"
              className="animate-flow-dash"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 0, 1, 1, 0]
              }}
              transition={{ 
                duration: 8.5, 
                ease: 'linear', 
                times: [0, 0.0588, 0.1765, 0.9882, 1],
                repeat: Infinity
              }}
            />
            {/* Segment 2: Plan to Build (30% to 50%) */}
            <motion.line
              x1="30%" y1="3" x2="50%" y2="3"
              stroke="url(#journey-gradient)" strokeWidth="2"
              strokeDasharray="4 6"
              className="animate-flow-dash"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 0, 1, 1, 0]
              }}
              transition={{ 
                duration: 8.5, 
                ease: 'linear', 
                times: [0, 0.2353, 0.3529, 0.9882, 1],
                repeat: Infinity
              }}
            />
            {/* Segment 3: Build to Test (50% to 70%) */}
            <motion.line
              x1="50%" y1="3" x2="70%" y2="3"
              stroke="url(#journey-gradient)" strokeWidth="2"
              strokeDasharray="4 6"
              className="animate-flow-dash"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 0, 1, 1, 0]
              }}
              transition={{ 
                duration: 8.5, 
                ease: 'linear', 
                times: [0, 0.4118, 0.5294, 0.9882, 1],
                repeat: Infinity
              }}
            />
            {/* Segment 4: Test to Deploy (70% to 90%) */}
            <motion.line
              x1="70%" y1="3" x2="90%" y2="3"
              stroke="url(#journey-gradient)" strokeWidth="2"
              strokeDasharray="4 6"
              className="animate-flow-dash"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 0, 1, 1, 0]
              }}
              transition={{ 
                duration: 8.5, 
                ease: 'linear', 
                times: [0, 0.5882, 0.7059, 0.9882, 1],
                repeat: Infinity
              }}
            />
          </svg>

          <style>{`
            @keyframes flow-dash {
              to {
                stroke-dashoffset: -20;
              }
            }
            .animate-flow-dash {
              animation: flow-dash 1.5s linear infinite;
            }
          `}</style>

          {approachSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div 
                key={step.num} 
                className="flex flex-col items-center text-center group relative w-full"
                variants={itemVariants}
              >
                {/* Vertical Connecting Line with Sequential Flow (Mobile Only) */}
                {idx < approachSteps.length - 1 && (
                  <div className="absolute top-[80px] bottom-[-48px] left-1/2 w-[10px] -z-10 md:hidden -translate-x-1/2 overflow-visible">
                    <svg key={cycle} className="w-[10px] h-full overflow-visible">
                      {/* Background base dashed gray line */}
                      <line
                        x1="5"
                        y1="0"
                        x2="5"
                        y2="100%"
                        stroke="#e2e8f0"
                        strokeWidth="2"
                        strokeDasharray="4 6"
                      />
                      {/* Sequential flowing colored line */}
                      <motion.line
                        x1="5"
                        y1="0"
                        x2="5"
                        y2="100%"
                        stroke="url(#journey-gradient)"
                        strokeWidth="2"
                        strokeDasharray="4 6"
                        className="animate-flow-dash"
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: [0, 0, 1, 1, 0]
                        }}
                        transition={{ 
                          duration: 8.5, 
                          ease: 'linear',
                          times: idx === 0
                            ? [0, 0.0588, 0.1765, 0.9882, 1]
                            : idx === 1
                            ? [0, 0.2353, 0.3529, 0.9882, 1]
                            : idx === 2
                            ? [0, 0.4118, 0.5294, 0.9882, 1]
                            : [0, 0.5882, 0.7059, 0.9882, 1],
                          repeat: Infinity
                        }}
                      />
                    </svg>
                  </div>
                )}

                {/* Styled Step Icon Circle Box */}
                <motion.div 
                  className={`w-20 h-20 rounded-[1.5rem] border flex items-center justify-center relative bg-white transition-all duration-300 shadow-md select-none cursor-default`}
                  animate={{
                    scale: activeSteps[idx] ? 1.08 : 1,
                    borderColor: activeSteps[idx]
                      ? idx === 0 ? '#c084fc'
                        : idx === 1 ? '#fb7185'
                        : idx === 2 ? '#60a5fa'
                        : idx === 3 ? '#34d399'
                        : '#fbbf24'
                      : '#f1f5f9',
                    boxShadow: activeSteps[idx]
                      ? idx === 0 ? '0 10px 25px -5px rgba(139,92,246,0.15), 0 0 15px rgba(139,92,246,0.1)'
                        : idx === 1 ? '0 10px 25px -5px rgba(244,63,94,0.15), 0 0 15px rgba(244,63,94,0.1)'
                        : idx === 2 ? '0 10px 25px -5px rgba(59,130,246,0.15), 0 0 15px rgba(59,130,246,0.1)'
                        : idx === 3 ? '0 10px 25px -5px rgba(16,185,129,0.15), 0 0 15px rgba(16,185,129,0.1)'
                        : '0 10px 25px -5px rgba(245,158,11,0.15), 0 0 15px rgba(245,158,11,0.1)'
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02)'
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    y: -4,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  {/* Neon Glow backdrop */}
                  <div className={`absolute -inset-1 rounded-[1.5rem] blur opacity-0 group-hover:opacity-15 transition-opacity duration-300 -z-10 ${step.iconGlow}`} />

                  {/* Inner Icon circle */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeSteps[idx]
                      ? idx === 0 ? 'bg-violet-500/10 scale-105 rotate-3'
                        : idx === 1 ? 'bg-rose-500/10 scale-105 rotate-3'
                        : idx === 2 ? 'bg-blue-500/10 scale-105 rotate-3'
                        : idx === 3 ? 'bg-emerald-500/10 scale-105 rotate-3'
                        : 'bg-amber-500/10 scale-105 rotate-3'
                      : step.iconGlow
                  } group-hover:scale-105`}>
                    <Icon className={`w-5.5 h-5.5 ${step.color} stroke-[2.2]`} />
                  </div>
                </motion.div>

                {/* Step Title */}
                <h4 className={`text-base font-bold mt-6 leading-snug tracking-tight font-sans transition-colors duration-300 ${
                  activeSteps[idx]
                    ? idx === 0 ? 'text-violet-600'
                      : idx === 1 ? 'text-rose-500'
                      : idx === 2 ? 'text-blue-600'
                      : idx === 3 ? 'text-emerald-500'
                      : 'text-amber-500'
                    : 'text-slate-800'
                }`}>
                  {step.label}
                </h4>

                {/* Step Description */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-400 font-semibold font-sans mt-3 px-4 md:px-2 max-w-[220px]">
                  {step.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
