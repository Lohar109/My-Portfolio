import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Download,
  Mail,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import IntroVideoFrame from '../ui/IntroVideoFrame.jsx'

function HeroSection() {
  const navigate = useNavigate()




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
    <div className="relative bg-slate-50/30">
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
              A software developer who doesn't just call APIs, but builds custom semantic data pipelines and vector models. Expert in engineering secure enterprise apps across web and desktop platforms.
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-700 hover:via-indigo-700 hover:to-purple-700 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-[0_4px_20px_rgba(99,102,241,0.2)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 cursor-pointer w-full sm:w-auto group"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/70 hover:bg-white border border-indigo-200/60 hover:border-indigo-300 px-6 py-3 text-sm sm:text-base font-semibold text-indigo-600 hover:text-indigo-700 shadow-sm hover:shadow-[0_4px_20px_rgba(99,102,241,0.08)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 cursor-pointer w-full sm:w-auto group"
              >
                <Download className="h-4.5 w-4.5 group-hover:translate-y-0.5 transition-transform duration-300" />
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
                  <FaLinkedinIn className="h-4.5 w-4.5 text-[#0A66C2]" />
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
    </div>
  )
}

export default HeroSection
