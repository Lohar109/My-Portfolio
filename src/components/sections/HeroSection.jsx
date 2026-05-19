import { motion } from 'framer-motion'
import {
  ArrowRight,
  LayoutGrid,
  Sparkles,
  AppWindow,
  Mail,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import IntroVideoFrame from '../ui/IntroVideoFrame.jsx'

function HeroSection() {
  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-b from-white via-white/80 to-transparent px-6 pt-20 pb-12 sm:px-10 lg:px-16 lg:pt-24 lg:pb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background radial soft light gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.06),rgba(229,231,235,0.2)_50%,transparent_70%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          
          {/* Left Column: Text Content and Badges */}
          <div className="flex flex-col items-start text-left">
            {/* Active Status "Software Engineer" Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur-sm select-none"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-gray-700">
                Software Engineer
              </span>
            </motion.div>

            {/* Main Premium Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-3xl font-medium tracking-tight text-gray-900 sm:text-4.5xl md:text-5xl md:leading-[1.15] leading-tight select-none font-sans"
            >
              Turning complex ideas into{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                clean, functional
              </span>{' '}
              reality.
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-4 text-[15px] sm:text-base font-normal leading-relaxed text-gray-500/95 max-w-xl font-sans"
            >
              I engineer scalable web applications and integrate cutting-edge GenAI models.
              My focus is on significant work with highly-optimized backend code in Node.js
              and design modern, minimalist frontend interfaces that make complex systems feel effortless.
            </motion.p>

            {/* domain / stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-5 flex flex-wrap gap-2.5 select-none"
            >
              <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200/80 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-gray-700 shadow-sm transition duration-200 hover:shadow-md hover:border-gray-300">
                <LayoutGrid className="h-4 w-4 text-indigo-600" />
                Full Stack Development
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200/80 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-gray-700 shadow-sm transition duration-200 hover:shadow-md hover:border-gray-300">
                <Sparkles className="h-4 w-4 text-amber-500" />
                GenAI & Models
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-gray-200/80 bg-white px-3.5 py-2 text-xs sm:text-sm font-semibold tracking-wide text-gray-700 shadow-sm transition duration-200 hover:shadow-md hover:border-gray-300">
                <AppWindow className="h-4 w-4 text-indigo-600" />
                Modern Web Apps
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-5 flex flex-row flex-wrap gap-4 sm:flex-nowrap w-full sm:w-auto"
            >
              <button
                onClick={() => handleScroll('projects')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-200 active:scale-[0.98] cursor-pointer w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => handleScroll('skills')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200/80 bg-white hover:bg-gray-50 px-6 py-3.5 text-sm sm:text-base font-semibold text-gray-900 shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer w-full sm:w-auto"
              >
                Explore Skills
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Social "Let's connect" row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-7 flex items-center gap-4 select-none"
            >
              <span className="text-sm font-semibold tracking-wide text-gray-500">
                Let's connect
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Lohar109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 bg-white text-gray-800 shadow-sm hover:shadow-md hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhav-lohar-ba7824315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 bg-white text-gray-800 shadow-sm hover:shadow-md hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a
                  href="mailto:vaibhavlohar109@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 bg-white text-gray-800 shadow-sm hover:shadow-md hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Custom Interactive Intro Video Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="w-full flex justify-center lg:justify-end"
          >
            <IntroVideoFrame />
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection
