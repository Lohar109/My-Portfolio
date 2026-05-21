import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Download,
  Code2,
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


  const services = [
    {
      title: 'Full Stack Development',
      description: 'Building robust and scalable web applications using modern technologies.',
      icon: <Code2 className="h-5.5 w-5.5" />,
      colorClasses: {
        iconBg: 'bg-blue-50/80 text-[#2563EB] border-blue-100/30',
        iconHover: 'group-hover:bg-[#2563EB] group-hover:text-white',
        titleHover: 'group-hover:text-[#2563EB]',
        arrowHover: 'group-hover:text-[#2563EB] group-hover:border-blue-100 group-hover:bg-blue-50/50',
      }
    },
    {
      title: 'AI Integrations',
      description: 'Creating AI-powered features and intelligent systems using latest AI models.',
      icon: <Sparkles className="h-5.5 w-5.5" />,
      colorClasses: {
        iconBg: 'bg-purple-50/80 text-purple-600 border-purple-100/30',
        iconHover: 'group-hover:bg-purple-600 group-hover:text-white',
        titleHover: 'group-hover:text-purple-600',
        arrowHover: 'group-hover:text-purple-600 group-hover:border-purple-100 group-hover:bg-purple-50/50',
      }
    },
    {
      title: 'UI/UX Engineering',
      description: 'Designing clean, responsive and user-friendly interfaces that users love.',
      icon: <Palette className="h-5.5 w-5.5" />,
      colorClasses: {
        iconBg: 'bg-emerald-50/80 text-[#128C7E] border-emerald-100/30',
        iconHover: 'group-hover:bg-[#128C7E] group-hover:text-white',
        titleHover: 'group-hover:text-[#128C7E]',
        arrowHover: 'group-hover:text-[#128C7E] group-hover:border-emerald-100 group-hover:bg-emerald-50/50',
      }
    },
    {
      title: 'System Design',
      description: 'Architecting high-performance, secure and scalable backend infrastructures.',
      icon: <Server className="h-5.5 w-5.5" />,
      colorClasses: {
        iconBg: 'bg-red-50/80 text-[#EF4444] border-red-100/30',
        iconHover: 'group-hover:bg-[#EF4444] group-hover:text-white',
        titleHover: 'group-hover:text-[#EF4444]',
        arrowHover: 'group-hover:text-[#EF4444] group-hover:border-red-100 group-hover:bg-red-50/50',
      }
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
        className="mx-auto max-w-6xl px-6 pt-6 pb-10 sm:px-10 lg:px-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          {/* Left Column: Text content */}
          <div className="flex flex-col items-start text-left">
            {/* Bold Premium Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans select-none"
            >
              I Build Modern & <br />
              Scalable{' '}
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Products.
              </span>
            </motion.h1>

            {/* Futuristic Glassmorphic Tech Track */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-gray-200/50 bg-white/40 px-5 py-2.5 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.015)] select-none transition-all duration-300 hover:shadow-[0_12px_40px_rgba(99,102,241,0.06)] hover:border-indigo-100/80 cursor-default"
            >
              {/* AI-Powered Item */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]"></span>
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-sans">
                  AI-Powered
                </span>
              </div>

              {/* Elegant Vertical Divider */}
              <div className="hidden sm:block h-3.5 w-[1px] bg-gray-200/80 rounded-full" />

              {/* Full Stack Item */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]"></span>
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-sans">
                  Full Stack
                </span>
              </div>

              {/* Elegant Vertical Divider */}
              <div className="hidden sm:block h-3.5 w-[1px] bg-gray-200/80 rounded-full" />

              {/* System Design Item */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5 shrink-0 items-center justify-center rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]"></span>
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-sans">
                  System Design
                </span>
              </div>
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black hover:bg-gray-800 px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-black/10 hover:shadow-black/20 active:scale-[0.99] transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <span>View Projects</span>
              </button>

              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-black hover:bg-gray-800 px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-black/10 hover:shadow-black/20 active:scale-[0.99] transition-all duration-200 cursor-pointer w-full sm:w-auto"
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
          {services.map((service, index) => {
            const { iconBg, iconHover, titleHover, arrowHover } = service.colorClasses
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.05)] transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div>
                  {/* Service Icon inside glowing background circle */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border group-hover:scale-110 transition-all duration-300 ${iconBg} ${iconHover}`}>
                    {service.icon}
                  </div>

                  <h3 className={`mt-5 text-base sm:text-lg font-black text-gray-900 transition duration-200 ${titleHover}`}>
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-semibold leading-relaxed text-gray-400/95">
                    {service.description}
                  </p>
                </div>

                {/* Bottom-right diagonal arrow with dynamic shift */}
                <div className="mt-6 flex justify-end">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-xl border border-gray-100 bg-gray-50/50 text-gray-400 group-hover:scale-110 transition-all duration-300 ${arrowHover}`}>
                    <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.section>
    </div>
  )
}

export default HeroSection
