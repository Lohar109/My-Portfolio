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
          <svg className="hidden md:block absolute top-[40px] left-0 right-0 w-full h-[6px] overflow-visible -z-10">
            {/* Background base dashed gray line */}
            <line x1="10%" y1="3" x2="90%" y2="3" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 6" />

            {/* Glowing animated line segments with scrolling flow dash effect */}
            {/* Segment 1: Understand to Plan (10% to 30%) */}
            <motion.line
              x1="10%" y1="3" x2="30%" y2="3"
              stroke="url(#glow-gradient)" strokeWidth="2.5"
              strokeDasharray="4 6"
              className="animate-flow-dash"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 1.25, 
                ease: 'easeInOut', 
                delay: 0, 
                repeat: Infinity, 
                repeatDelay: 4.75 
              }}
            />
            {/* Segment 2: Plan to Build (30% to 50%) */}
            <motion.line
              x1="30%" y1="3" x2="50%" y2="3"
              stroke="url(#glow-gradient)" strokeWidth="2.5"
              strokeDasharray="4 6"
              className="animate-flow-dash"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 1.25, 
                ease: 'easeInOut', 
                delay: 1.25, 
                repeat: Infinity, 
                repeatDelay: 4.75 
              }}
            />
            {/* Segment 3: Build to Test (50% to 70%) */}
            <motion.line
              x1="50%" y1="3" x2="70%" y2="3"
              stroke="url(#glow-gradient)" strokeWidth="2.5"
              strokeDasharray="4 6"
              className="animate-flow-dash"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 1.25, 
                ease: 'easeInOut', 
                delay: 2.5, 
                repeat: Infinity, 
                repeatDelay: 4.75 
              }}
            />
            {/* Segment 4: Test to Deploy (70% to 90%) */}
            <motion.line
              x1="70%" y1="3" x2="90%" y2="3"
              stroke="url(#glow-gradient)" strokeWidth="2.5"
              strokeDasharray="4 6"
              className="animate-flow-dash"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 1.25, 
                ease: 'easeInOut', 
                delay: 3.75, 
                repeat: Infinity, 
                repeatDelay: 4.75 
              }}
            />

            {/* Glowing moving comet that runs across the entire timeline! */}
            <motion.circle
              r="4.5"
              initial={{ cx: '10%', fill: '#8b5cf6' }}
              animate={{
                cx: ['10%', '30%', '50%', '70%', '90%', '90%'],
                fill: ['#8b5cf6', '#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#f59e0b'],
                opacity: [1, 1, 1, 1, 1, 0]
              }}
              transition={{
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="filter drop-shadow-[0_0_8px_rgba(139,92,246,0.85)]"
            />
            
            <defs>
              <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="25%" stopColor="#f43f5e" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="75%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>

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
                  <div className="absolute top-[80px] bottom-[-48px] left-1/2 w-[2px] -z-10 md:hidden -translate-x-1/2 bg-slate-200/50 overflow-hidden">
                    {/* Background dashed overlay to keep it dashed */}
                    <div className="absolute inset-0 border-l border-dashed border-slate-300" />
                    
                    {/* Flowing overlay */}
                    <motion.div
                      className={`w-full origin-top ${
                        idx === 0 ? 'bg-violet-500 shadow-[0_0_8px_#8b5cf6]'
                        : idx === 1 ? 'bg-rose-500 shadow-[0_0_8px_#f43f5e]'
                        : idx === 2 ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]'
                        : 'bg-emerald-500 shadow-[0_0_8px_#10b981]'
                      }`}
                      initial={{ scaleY: 0 }}
                      animate={{
                        scaleY: [0, 1, 1],
                        opacity: [1, 1, 0]
                      }}
                      transition={{
                        duration: 1.25,
                        ease: 'easeInOut',
                        delay: idx * 1.25,
                        repeat: Infinity,
                        repeatDelay: 4.75
                      }}
                      style={{ height: '100%' }}
                    />
                  </div>
                )}

                {/* Styled Step Icon Circle Box */}
                <motion.div 
                  className={`w-20 h-20 rounded-[1.5rem] border ${step.bgColor} ${step.glowColor} flex items-center justify-center relative bg-white transition-all duration-300 shadow-md select-none cursor-default`}
                  whileHover={{ 
                    scale: 1.12,
                    y: -4,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  {/* Neon Glow backdrop */}
                  <div className={`absolute -inset-1 rounded-[1.5rem] blur opacity-0 group-hover:opacity-15 transition-opacity duration-300 -z-10 ${step.iconGlow}`} />

                  {/* Inner Icon circle */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${step.iconGlow} transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className={`w-5.5 h-5.5 ${step.color} stroke-[2.2]`} />
                  </div>
                </motion.div>

                {/* Step Title */}
                <h4 className="text-base font-bold text-slate-800 mt-6 leading-snug tracking-tight font-sans group-hover:text-slate-900 transition-colors duration-200">
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
