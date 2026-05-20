import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Download,
  Rocket,
  GraduationCap,
  Code2,
  Award,
  Sparkles,
  Palette,
  Server,
  ArrowUpRight,
  Mail,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import IntroVideoFrame from '../ui/IntroVideoFrame.jsx'

function HeroSection() {
  const navigate = useNavigate()

  const metrics = [
    {
      id: 'projects',
      value: '20+',
      label: 'Projects Completed',
      icon: <Rocket className="h-5 w-5" />,
    },
    {
      id: 'learning',
      value: '5+',
      label: 'Years of Learning',
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      id: 'tech',
      value: '10+',
      label: 'Technologies',
      icon: <Code2 className="h-5 w-5" />,
    },
    {
      id: 'quality',
      value: '100%',
      label: 'Commitment to Quality',
      icon: <Award className="h-5 w-5" />,
    },
  ]

  const services = [
    {
      title: 'Full Stack Development',
      description: 'Building robust and scalable web applications using modern technologies.',
      icon: <Code2 className="h-5.5 w-5.5" />,
    },
    {
      title: 'AI Integrations',
      description: 'Creating AI-powered features and intelligent systems using latest AI models.',
      icon: <Sparkles className="h-5.5 w-5.5" />,
    },
    {
      title: 'UI/UX Engineering',
      description: 'Designing clean, responsive and user-friendly interfaces that users love.',
      icon: <Palette className="h-5.5 w-5.5" />,
    },
    {
      title: 'System Design',
      description: 'Architecting high-performance, secure and scalable backend infrastructures.',
      icon: <Server className="h-5.5 w-5.5" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <div className="relative min-h-screen bg-slate-50/30 overflow-x-hidden">
      {/* Background soft lighting dots and gradients */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1000px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.06),rgba(229,231,235,0.25)_40%,transparent_70%)]" />
      
      {/* 1. Main Hero Content Row */}
      <motion.section
        className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:px-10 lg:px-12 lg:pt-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Column: Text content */}
          <div className="flex flex-col items-start text-left">
            {/* 👋 Hi, I'm Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-violet-100 bg-violet-50/70 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide text-violet-600 shadow-sm backdrop-blur-sm select-none"
            >
              <span>👋 Hi, I'm</span>
            </motion.div>

            {/* Bold Premium Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans select-none"
            >
              Vaibhav Kumar <br />
              I Build Modern & <br />
              Scalable{' '}
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Products.
              </span>
            </motion.h1>

            {/* Tech Subheadings */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-bold tracking-wider text-indigo-600 font-sans uppercase"
            >
              <span>AI-Powered</span>
              <span className="text-gray-300 font-normal">•</span>
              <span>Full Stack</span>
              <span className="text-gray-300 font-normal">•</span>
              <span>System Design</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 text-[15px] sm:text-base font-medium leading-relaxed text-gray-500/90 max-w-xl font-sans"
            >
              Creating premium web applications, AI tools, and scalable systems with modern technologies.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-7 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => navigate('/projects')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 px-6 py-3.5 text-sm sm:text-base font-bold !text-white shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </button>

              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 hover:border-violet-200 bg-white hover:bg-violet-50/10 px-6 py-3.5 text-sm sm:text-base font-bold text-gray-700 hover:text-violet-600 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <Download className="h-4.5 w-4.5" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social "Connect with me" row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4 select-none"
            >
              <span className="text-xs sm:text-sm font-bold tracking-wide text-gray-400 font-sans uppercase">
                Connect with me
              </span>
              <div className="flex gap-2.5">
                <a
                  href="https://github.com/Lohar109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm hover:shadow-md hover:border-violet-200 hover:text-violet-600 hover:scale-105 active:scale-95 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="h-4.5 w-4.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhav-lohar-ba7824315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm hover:shadow-md hover:border-violet-200 hover:text-violet-600 hover:scale-105 active:scale-95 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn className="h-4.5 w-4.5" />
                </a>
                <a
                  href="mailto:vaibhavlohar109@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm hover:shadow-md hover:border-violet-200 hover:text-violet-600 hover:scale-105 active:scale-95 transition-all duration-200"
                  aria-label="Send Email"
                >
                  <Mail className="h-4.5 w-4.5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Custom Interactive Portrait / Video Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="w-full flex justify-center lg:justify-end"
          >
            <IntroVideoFrame />
          </motion.div>
        </div>
      </motion.section>

      {/* 2. Metrics Bar Section */}
      <motion.section 
        className="mx-auto max-w-6xl px-6 py-6 sm:px-10 lg:px-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="w-full rounded-2xl border border-gray-150 bg-white/60 p-5 md:p-6 backdrop-blur-md shadow-[0_12px_32px_-8px_rgba(0,0,0,0.03)] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y-0 divide-x-0 lg:divide-x lg:divide-gray-100">
          {metrics.map((metric) => (
            <div 
              key={metric.id}
              className="flex items-center gap-4 px-3 py-2 sm:px-6 lg:justify-center transition-all duration-300 hover:scale-[1.03] select-none"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50/80 text-indigo-600 border border-indigo-100/50 shadow-sm">
                {metric.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-gray-900 leading-none">
                  {metric.value}
                </span>
                <span className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-400">
                  {metric.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. "What I Do" (Services) Section */}
      <motion.section
        className="mx-auto max-w-6xl px-6 pt-12 pb-24 sm:px-10 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 select-none">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 font-sans">
              What I Do
            </h2>
            <p className="mt-2 text-sm sm:text-base font-semibold text-gray-400 max-w-lg">
              I help businesses and individuals build high-quality digital solutions.
            </p>
          </div>
          <button
            onClick={() => navigate('/skills')}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 px-5 py-2.5 text-xs sm:text-sm font-bold text-gray-700 hover:text-indigo-600 hover:border-indigo-100 hover:scale-105 active:scale-98 transition duration-200 cursor-pointer self-start sm:self-auto"
          >
            <span>View All Services</span>
          </button>
        </div>

        {/* Services 4-Card Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col justify-between rounded-[1.75rem] border border-gray-150/70 bg-white/70 p-6 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200/80 hover:bg-white hover:shadow-[0_20px_35px_-12px_rgba(99,102,241,0.12)] cursor-default"
            >
              <div>
                {/* Custom glowing background glow */}
                <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition duration-500 pointer-events-none -z-10" />

                {/* Service Icon inside glowing background circle */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50/80 text-indigo-600 border border-indigo-100/30 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="mt-5 text-base sm:text-lg font-black text-gray-900 group-hover:text-indigo-600 transition duration-200">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-semibold leading-relaxed text-gray-400/95">
                  {service.description}
                </p>
              </div>

              {/* Bottom-right diagonal arrow with dynamic shift */}
              <div className="mt-6 flex justify-end">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-gray-100 bg-gray-50/50 text-gray-400 group-hover:scale-110 group-hover:border-indigo-100 group-hover:bg-indigo-50/50 group-hover:text-indigo-600 transition-all duration-300">
                  <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

export default HeroSection
