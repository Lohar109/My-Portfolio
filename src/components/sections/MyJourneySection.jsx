/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { BookOpen, Code2, Briefcase, Cpu } from 'lucide-react'

function MyJourneySection() {
  const steps = [
    {
      number: '01',
      year: '2019',
      title: 'Learning & Exploring',
      description: 'Started my journey with curiosity and passion for technology.',
      icon: <BookOpen className="h-6 w-6 stroke-[2]" />,
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
    {
      number: '02',
      year: '2021',
      title: 'Building Projects',
      description: 'Built real-world projects and gained practical experience.',
      icon: <Code2 className="h-6 w-6 stroke-[2]" />,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      number: '03',
      year: '2022',
      title: 'Full-Stack Integration',
      description: 'Connected independent systems into production environments, balancing UI flow with secure databases.',
      icon: <Briefcase className="h-6 w-6 stroke-[2]" />,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      number: '04',
      year: '2024',
      title: 'AI & Advanced Systems',
      description: 'Exploring AI, LLMs and building intelligent scalable systems.',
      icon: <Cpu className="h-6 w-6 stroke-[2]" />,
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      className="mx-auto max-w-6xl px-6 pt-12 pb-24 sm:px-10 lg:px-12 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Section Title */}
      <div className="text-left mb-10 select-none">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 font-sans">
          My Journey
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative w-full">
        {/* Horizontal Connector Line for Desktop (lg and up) */}
        <div className="hidden lg:block absolute top-[18px] left-[12.5%] right-[0%] h-[2px] z-0">
          <svg className="w-full h-[2px] overflow-visible">
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="#9333ea"
              strokeWidth="2"
              strokeDasharray="4 6"
              className="animate-flow-line"
            />
          </svg>
          <style>{`
            @keyframes flow {
              to {
                stroke-dashoffset: -20;
              }
            }
            .animate-flow-line {
              animation: flow 1.5s linear infinite;
            }
          `}</style>
          {/* Arrowhead at the end of the line */}
          <div className="absolute right-0 top-[1px] -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-purple-600" />
        </div>

        {/* 4-Column Timeline Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-8 sm:gap-y-12 lg:gap-x-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center group cursor-default h-full"
            >
              {/* Timeline Node (Purple circle with white number) */}
              <div className="relative z-10 flex items-center justify-center mb-6">
                {/* Outer pulsing ring on hover */}
                <div className="absolute -inset-1.5 rounded-full bg-purple-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                <span className="flex h-9.5 w-9.5 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white shadow-md shadow-purple-600/15 group-hover:bg-pink-600 transition-colors duration-300 font-sans tracking-wide select-none">
                  {step.number}
                </span>
              </div>

              {/* Step Card */}
              <div className="w-full h-full bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_36px_rgba(147,51,234,0.05)] hover:border-purple-100/50 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
                {/* Icon box inside light rounded square */}
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${step.iconBg} ${step.iconColor} transition-transform duration-300 group-hover:scale-105 select-none`}>
                  {step.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-start text-left self-stretch flex-1">
                  <h3 className="text-sm sm:text-base font-black text-gray-900 tracking-tight transition duration-200 group-hover:text-purple-600 font-sans">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold leading-relaxed text-gray-400/95 max-w-[200px] flex-1">
                    {step.description}
                  </p>
                  

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default MyJourneySection
