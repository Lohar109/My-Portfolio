import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import programmerLogo from '../../assets/programmer.png'
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
  Sparkles,
  Zap,
  Target,
  Users,
  Lightbulb,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const emailAddress = 'vaibhavlohar109@gmail.com'

function FooterSection() {
  const navigate = useNavigate()
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
            {/* Main Premium Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Amazing Together.
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed font-medium max-w-lg">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology.
            </p>

            {/* Contact Information Cards */}
            <div className="mt-8 flex flex-col gap-4 w-full max-w-md">

              {/* Email Card */}
              <a
                href={`mailto:${emailAddress}`}
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white/70 p-4.5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-gray-250"
              >
                <div className="flex items-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] shadow-sm select-none">
                    <Mail size={20} strokeWidth={2} />
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
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-black transition-colors" />
              </a>

              {/* Phone Card */}
              <a
                href="https://wa.me/9172491660"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white/70 p-4.5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-gray-250"
              >
                <div className="flex items-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#128C7E]/10 border border-[#128C7E]/20 text-[#128C7E] shadow-sm select-none">
                    <Phone size={20} strokeWidth={2} />
                  </span>
                  <div className="ml-4 flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                      Phone
                    </span>
                    <span className="text-sm font-semibold text-gray-850 mt-1.5 flex items-center gap-1.5">
                      +91 91724 91660
                      <span className="text-[11px] font-bold text-[#128C7E]">
                        (WhatsApp)
                      </span>
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-black transition-colors" />
              </a>

              {/* Location Card */}
              <div
                className="group flex items-center justify-between rounded-2xl border border-gray-100 bg-white/70 p-4.5 shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-center">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] shadow-sm select-none">
                    <MapPin size={20} strokeWidth={2} />
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
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#10B981]/10 border border-[#10B981]/20 text-emerald-500 shadow-sm select-none">
                    <Calendar size={20} strokeWidth={2} />
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-405 text-sm focus:border-black focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50"
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-405 text-sm focus:border-black focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-405 text-sm focus:border-black focus:ring-0 focus:outline-none transition duration-200 disabled:opacity-50"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-405 text-sm focus:border-black focus:ring-0 focus:outline-none transition duration-200 resize-none disabled:opacity-50"
                />
              </div>

              {/* Submit Button with Custom Premium Animations */}
              <div className="thick-black-border-wrapper w-full active:scale-[0.985] select-none">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-white hover:bg-slate-50 text-gray-700 hover:text-violet-600 font-semibold text-sm sm:text-base py-3 transition-all duration-300 cursor-pointer disabled:opacity-85 disabled:cursor-not-allowed select-none group"
                >
                  <AnimatePresence mode="wait">
                    {status === 'loading' ? (
                      <motion.span
                        key="loading"
                        className="flex items-center gap-2 text-violet-500 font-semibold"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Loader2 className="h-4.5 w-4.5 animate-spin text-violet-500" />
                        <span>Sending...</span>
                      </motion.span>
                    ) : status === 'success' ? (
                      <motion.span
                        key="success"
                        className="flex items-center gap-2 text-emerald-500 font-semibold"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Check className="h-4.5 w-4.5 text-emerald-500" />
                        <span>Message Sent!</span>
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
                        <Send className="h-4 w-4 text-gray-500 group-hover:text-violet-500 transition-colors duration-300" />
                        <span>Send Message</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>

            {/* Privacy Subtext Banner */}
            <div className="flex items-center gap-2 text-[11px] font-medium text-gray-400 mt-4.5 select-none leading-none">
              <ShieldCheck size={14} className="text-gray-400" />
              Your information is safe with me. I'll never share your data.
            </div>
          </div>
        </div>

      </div>

      {/* Why Work With Me Section */}
      <div className="mx-auto max-w-6xl mt-16 w-full rounded-3xl border border-gray-200/50 bg-white shadow-sm overflow-hidden flex flex-col md:flex-row">
        {/* Left Col: Accent block */}
        <div className="bg-neutral-50 p-8 md:w-1/3 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-200/50">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 font-sans">
              Why work with me?
            </h3>
            <p className="mt-3 text-sm font-normal leading-relaxed text-gray-500 font-sans">
              I bring ideas to life with clean code, thoughtful design, and a problem-solving mindset.
            </p>
          </div>
          <div className="thick-black-border-wrapper w-fit active:scale-[0.98] mt-6 sm:mt-8">
            <button
              onClick={() => {
                navigate('/projects')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="relative z-10 inline-flex items-center justify-center gap-2 rounded-[10px] bg-white hover:bg-slate-50 px-[22px] py-[10px] text-xs font-semibold text-gray-700 hover:text-violet-600 transition-all duration-300 cursor-pointer select-none"
            >
              <span>View My Work</span>
            </button>
          </div>
        </div>

        {/* Right Col: Features list */}
        <div className="p-8 md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6.5 items-start">
          {/* Feature 1 */}
          <div className="flex flex-col items-start">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50/60 text-amber-550 border border-amber-200/30">
              <Zap size={18} strokeWidth={2} />
            </span>
            <h4 className="text-sm font-bold text-gray-900 mt-4 font-sans">
              Fast Response
            </h4>
            <p className="text-xs font-normal text-gray-500 mt-2 leading-relaxed font-sans">
              I usually reply within 24 hours.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-start">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50/60 text-rose-550 border border-rose-200/30">
              <Target size={18} strokeWidth={2} />
            </span>
            <h4 className="text-sm font-bold text-gray-900 mt-4 font-sans">
              Quality Focused
            </h4>
            <p className="text-xs font-normal text-gray-500 mt-2 leading-relaxed font-sans">
              Clean, scalable and maintainable code.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-start">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50/60 text-emerald-550 border border-emerald-200/30">
              <Users size={18} strokeWidth={2} />
            </span>
            <h4 className="text-sm font-bold text-gray-900 mt-4 font-sans">
              Reliable Partner
            </h4>
            <p className="text-xs font-normal text-gray-500 mt-2 leading-relaxed font-sans">
              Committed to delivering real value.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-start">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50/60 text-indigo-550 border border-indigo-200/30">
              <Lightbulb size={18} strokeWidth={2} />
            </span>
            <h4 className="text-sm font-bold text-gray-900 mt-4 font-sans">
              Problem Solver
            </h4>
            <p className="text-xs font-normal text-gray-500 mt-2 leading-relaxed font-sans">
              Turning complex ideas into simple solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Brand Grid Section */}
      <div className="mx-auto max-w-6xl mt-12 w-full rounded-3xl border border-gray-200/50 bg-white p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

        {/* Brand Col */}
        <div className="flex flex-col items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 border border-gray-200/50 overflow-hidden select-none">
                <img src={programmerLogo} alt="Logo" className="h-full w-full object-cover" />
              </span>
              <div className="flex flex-col">
                <span className="text-md font-bold text-gray-900 font-sans leading-none">
                  Vaibhav Lohar
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-black mt-1 leading-none">
                  Software Engineer
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm font-normal leading-relaxed text-gray-500 max-w-xs font-sans">
              Building scalable web applications and intelligent solutions that make an impact.
            </p>
          </div>

          {/* Direct Connect icons inside brand col */}
          <div className="flex gap-2.5 mt-6 select-none">
            <a
              href="https://github.com/Lohar109"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm hover:shadow-md hover:border-violet-200 hover:text-violet-600 hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-lohar-ba7824315"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm hover:shadow-md hover:border-violet-200 hover:text-violet-600 hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-4.5 w-4.5 text-[#0A66C2]" />
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm hover:shadow-md hover:border-violet-200 hover:text-violet-600 hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Quick Links Col */}
        <div className="flex flex-col border-t md:border-t-0 md:border-x border-gray-250/20 pt-6 md:pt-0 md:px-8">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3 leading-none">
            Quick Links
          </span>
          <div className="flex flex-col w-full">
            {[
              { name: 'Home', path: '/' },
              { name: 'Education', path: '/education' },
              { name: 'Skills', path: '/skills' },
              { name: 'Projects', path: '/projects' },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  navigate(link.path)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="group flex items-center justify-between w-full py-2 text-sm font-semibold text-gray-550 hover:text-black transition duration-200 border-b border-gray-100/50 text-left cursor-pointer"
              >
                <span>{link.name}</span>
                <ChevronRight size={13} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>
        </div>

        {/* Let's build Great Col */}
        <div className="flex flex-col justify-between border-t md:border-t-0 pt-6 md:pt-0">
          <div>
            <h4 className="text-md font-bold text-gray-900 font-sans">
              Let's build something great
            </h4>
            <p className="mt-2.5 text-sm font-normal leading-relaxed text-gray-500 font-sans">
              I'm excited to hear about your project or idea. Let's create something amazing together.
            </p>
          </div>
          <div className="thick-black-border-wrapper w-full active:scale-[0.98] mt-6">
            <button
              onClick={() => {
                const nameInput = document.getElementsByName('name')[0]
                if (nameInput) {
                  nameInput.focus()
                  nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
              }}
              className="relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-white hover:bg-slate-50 py-3 px-4 text-xs sm:text-sm font-semibold text-gray-700 hover:text-violet-600 transition-all duration-300 cursor-pointer select-none"
            >
              <span>Start a Conversation</span>
            </button>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default FooterSection
