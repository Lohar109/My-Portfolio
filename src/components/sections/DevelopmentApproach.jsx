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
    <section className="relative px-6 py-24 sm:px-10 lg:px-16 bg-white border-t border-slate-100 overflow-hidden">
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
          {/* Horizontal Connecting Dash Line (Desktop Only) */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-[1.5px] border-t-2 border-dashed border-slate-200/70 -z-10 hidden md:block" />

          {approachSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div 
                key={step.num} 
                className="flex flex-col items-center text-center group relative w-full"
                variants={itemVariants}
              >
                {/* Vertical Connecting Dash Line (Mobile Only) */}
                {idx < approachSteps.length - 1 && (
                  <div className="absolute top-[96px] bottom-[-48px] left-1/2 w-[1.5px] border-l-2 border-dashed border-slate-200/70 -z-10 md:hidden -translate-x-1/2" />
                )}

                {/* Styled Step Icon Circle Box */}
                <motion.div 
                  className={`w-24 h-24 rounded-[2rem] border ${step.bgColor} ${step.glowColor} flex items-center justify-center relative bg-white transition-all duration-300 shadow-md select-none cursor-default`}
                  whileHover={{ 
                    scale: 1.12,
                    y: -4,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  {/* Neon Glow backdrop */}
                  <div className={`absolute -inset-1 rounded-[2rem] blur opacity-0 group-hover:opacity-15 transition-opacity duration-300 -z-10 ${step.iconGlow}`} />

                  {/* Inner Icon circle */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${step.iconGlow} transition-transform duration-300 group-hover:scale-105`}>
                    <Icon className={`w-7.5 h-7.5 ${step.color} stroke-[2.2]`} />
                  </div>
                </motion.div>

                {/* Step Number Badge */}
                <span className={`text-[13px] font-extrabold tracking-wider ${step.color} mt-6 leading-none block font-sans`}>
                  {step.num}
                </span>

                {/* Step Title */}
                <h4 className="text-base font-bold text-slate-800 mt-2.5 leading-snug tracking-tight font-sans group-hover:text-slate-900 transition-colors duration-200">
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
