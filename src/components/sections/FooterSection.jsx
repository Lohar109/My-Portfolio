import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowUpRight,
  Send,
  ShieldCheck,
  Check,
  Loader2,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const emailAddress = 'vaibhavlohar109@gmail.com'

function FooterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success'
  const [isActive, setIsActive] = useState(true)

  // Track if current time is within active response window (7 AM - 11 PM IST)
  useEffect(() => {
    const checkActiveStatus = () => {
      const hour = parseInt(
        new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          timeZone: 'Asia/Kolkata',
        }),
        10
      )
      setIsActive(hour >= 7 && hour < 23)
    }

    checkActiveStatus()
    const timer = setInterval(checkActiveStatus, 60000)
    return () => clearInterval(timer)
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('loading')

    // Simulate direct contact dispatch with premium micro-animation delay
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
      setTimeout(() => setStatus('idle'), 3500)
    }, 1800)
  }

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Background subtle light radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.015),transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
        
        {/* Left Column: Get In Touch Info */}
        <div className="flex flex-col justify-between gap-10 w-full h-full">
          <div className="flex flex-col items-start">
            {/* Get In Touch Status Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-black"></span>
              Get In Touch
            </span>

            {/* Main Premium Heading */}
            <h2 className="mt-5 text-3.5xl font-bold tracking-tight text-gray-900 leading-tight select-none">
              Let's build something{' '}
              <span className="bg-gradient-to-r from-black via-gray-700 to-gray-800 bg-clip-text text-transparent">
                amazing together.
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="mt-4 text-base font-normal leading-relaxed text-gray-500/90 max-w-lg">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology.
            </p>

            {/* Contact Information Cards */}
            <div className="mt-8 flex flex-col gap-4 w-full max-w-md">
              
              {/* Email Card */}
              <a
                href={`mailto:${emailAddress}`}
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white/70 p-4.5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:shadow-md hover:border-black/20"
              >
                <div className="flex items-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 border border-gray-200/50 text-black group-hover:bg-black group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Mail size={18} strokeWidth={2} />
                  </span>
                  <div className="ml-4 flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-gray-850 mt-1.5 break-all">
                      {emailAddress}
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-250" />
              </a>

              {/* Phone Card */}
              <a
                href="https://wa.me/9172491660"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white/70 p-4.5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:shadow-md hover:border-black/20"
              >
                <div className="flex items-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 border border-gray-200/50 text-black group-hover:bg-black group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Phone size={18} strokeWidth={2} />
                  </span>
                  <div className="ml-4 flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                      Phone
                    </span>
                    <span className="text-sm font-semibold text-gray-850 mt-1.5">
                      +91 91724 91660
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-250" />
              </a>

              {/* Location Card */}
              <div
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white/70 p-4.5 shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 border border-gray-200/50 text-black">
                    <MapPin size={18} strokeWidth={2} />
                  </span>
                  <div className="ml-4 flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-gray-850 mt-1.5">
                      Jalgaon, Maharashtra, India
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-300" />
              </div>

              {/* Availability Card */}
              <div
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white/70 p-4.5 shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 border border-gray-200/50 text-black">
                    <Calendar size={18} strokeWidth={2} />
                  </span>
                  <div className="ml-4 flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                      Availability
                    </span>
                    <span className="text-sm font-semibold text-gray-850 mt-1.5">
                      Open for new opportunities
                    </span>
                  </div>
                </div>
                <span className="relative flex h-2.5 w-2.5 mr-2">
                  <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${isActive ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                  <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${isActive ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                </span>
              </div>

            </div>
          </div>

          {/* Social Row at Bottom */}
          <div className="flex items-center gap-4 select-none">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Let's connect
            </span>
            <div className="flex gap-3">
              <a
                href="https://github.com/Lohar109"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 bg-white text-gray-800 shadow-sm hover:shadow-md hover:border-black hover:text-black transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-lohar-ba7824315"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 bg-white text-gray-800 shadow-sm hover:shadow-md hover:border-black hover:text-black transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 bg-white text-gray-800 shadow-sm hover:shadow-md hover:border-black hover:text-black transition-all duration-200"
                aria-label="Email Address"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Message Form */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full rounded-3xl border border-gray-200/50 bg-white p-6 shadow-sm sm:p-9">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 select-none">
              Send me a message
            </h3>
            <p className="mt-1 text-sm font-normal text-gray-500 select-none leading-relaxed">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-405 text-sm focus:border-black focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-405 text-sm focus:border-black focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-405 text-sm focus:border-black focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  disabled={status === 'loading'}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-405 text-sm focus:border-black focus:ring-0 focus:outline-none transition duration-200 resize-none disabled:opacity-50"
                />
              </div>

              {/* Submit Button with Custom Premium Animations */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black hover:bg-gray-800 text-white font-semibold text-sm sm:text-base py-3.5 shadow-lg shadow-black/10 hover:shadow-black/20 transition-all duration-200 active:scale-[0.99] cursor-pointer disabled:opacity-85 disabled:cursor-not-allowed select-none"
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' ? (
                    <motion.span
                      key="loading"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Loader2 className="h-4.5 w-4.5 animate-spin" />
                      Sending...
                    </motion.span>
                  ) : status === 'success' ? (
                    <motion.span
                      key="success"
                      className="flex items-center gap-2 text-emerald-400"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Check className="h-4.5 w-4.5" />
                      Message Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>

            {/* Privacy Subtext Banner */}
            <div className="flex items-center gap-2 text-[11px] font-medium text-gray-400 mt-4.5 select-none leading-none">
              <ShieldCheck size={14} className="text-gray-400" />
              Your information is safe with me. I'll never share your data.
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default FooterSection
