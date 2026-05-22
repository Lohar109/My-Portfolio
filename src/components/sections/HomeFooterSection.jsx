import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import {
  Rocket,
  ArrowRight,
  Mail,
  ArrowUp,
  Globe,
  Cpu,
  Feather,
  Layout,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function HomeFooterSection() {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()
  const emailAddress = 'vaibhavlohar109@gmail.com'

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Lohar109',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vaibhav-lohar-ba7824315',
      icon: FaLinkedinIn,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: FaTwitter,
    },
    {
      name: 'Email',
      url: `mailto:${emailAddress}`,
      icon: Mail,
    },
  ]

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    { name: 'Full Stack Development', icon: Globe },
    { name: 'AI Integrations', icon: Cpu },
    { name: 'UI/UX Engineering', icon: Layout },
    { name: 'System Design', icon: Feather },
  ]

  return (
    <div className="relative mt-12 w-full overflow-hidden border-t border-slate-100 bg-gradient-to-b from-white via-slate-50/30 to-slate-150/40 px-6 pb-12 pt-16 sm:px-10 lg:px-16">
      {/* Premium Ambient Decorative Orbs */}
      <div className="absolute -left-48 -bottom-48 h-96 w-96 rounded-full bg-violet-400/5 blur-3xl pointer-events-none" />
      <div className="absolute right-[-10%] top-[10%] h-80 w-80 rounded-full bg-indigo-400/5 blur-3xl pointer-events-none" />
      
      <div className="mx-auto max-w-6xl relative z-10">
        {/* 1. Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-violet-100 bg-gradient-to-br from-white/90 via-violet-50/20 to-indigo-50/70 px-8 py-10 sm:px-12 lg:px-16 shadow-[0_20px_50px_rgba(99,102,241,0.05)] backdrop-blur-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8 select-none group/cta"
        >
          {/* Subtle Glowing overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-indigo-500/0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Subtle Decorative SVG Waves and Dots */}
          <div className="absolute right-0 top-0 pointer-events-none h-full w-1/3 opacity-50">
            <svg width="100%" height="100%" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 120 C100 140, 150 60, 200 90 C250 120, 270 30, 320 50" stroke="rgba(124, 58, 237, 0.18)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <path d="M80 80 C130 110, 170 30, 220 70 C270 110, 290 10, 340 30" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="2" fill="none" />
              <circle cx="260" cy="40" r="2.5" fill="rgba(124, 58, 237, 0.3)" />
              <circle cx="180" cy="110" r="1.5" fill="rgba(99, 102, 241, 0.25)" />
              <path d="M280 90 L285 95 M285 90 L280 95" stroke="rgba(124, 58, 237, 0.25)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 z-10">
            {/* Rocket Icon Box */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-violet-100 bg-white text-violet-600 shadow-md shadow-violet-200/40 group-hover/cta:scale-110 group-hover/cta:rotate-3 transition-transform duration-500">
              <Rocket className="h-7 w-7 stroke-[2] text-violet-600 animate-pulse" />
            </div>
            
            <div className="flex flex-col text-left">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-sans leading-snug">
                Let's Build Something Amazing Together
              </h3>
              <p className="mt-2 text-sm font-semibold text-gray-550 max-w-xl font-sans">
                Have an idea or a project in mind? Let's collaborate and turn your concepts into clean, high-performance production realities.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 z-10 shrink-0">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-sm px-7 py-3.5 shadow-lg shadow-violet-200/60 hover:shadow-xl hover:shadow-violet-300/80 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer text-center"
            >
              <span>Hire Me</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-gray-700 hover:text-violet-600 font-bold text-sm px-7 py-3.5 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer text-center group/btn"
            >
              <span>Contact Me</span>
              <ArrowRight className="h-4 w-4 text-violet-600 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

        {/* 2. Main Footer Grid */}
        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 select-none">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="flex items-center gap-3 group/logo cursor-pointer animate-fade-in">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-black font-sans text-lg shadow-md shadow-violet-250/40 group-hover/logo:scale-110 group-hover/logo:rotate-[360deg] transition-all duration-700 select-none">
                VL
              </span>
              <div className="flex flex-col text-left">
                <span className="text-lg font-black text-slate-800 font-sans leading-none tracking-tight">
                  Vaibhav Lohar
                </span>
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-violet-600 mt-1.5 leading-none">
                  Software Engineer
                </span>
              </div>
            </div>
            
            <p className="text-sm font-semibold leading-relaxed text-gray-400 max-w-xs font-sans">
              Designing and building high-performance, beautiful full-stack applications with state-of-the-art architectures.
            </p>

            {/* Social Icons matching mockup look with high-fidelity animations */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                // Assign elegant custom colors based on social brand
                let hoverColor = "hover:bg-violet-600 hover:text-white"
                if (social.name === 'GitHub') hoverColor = "hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-slate-200"
                if (social.name === 'LinkedIn') hoverColor = "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-blue-100"
                if (social.name === 'Twitter') hoverColor = "hover:bg-sky-500 hover:text-white hover:border-sky-500 hover:shadow-sky-100"
                if (social.name === 'Email') hoverColor = "hover:bg-rose-500 hover:text-white hover:border-rose-500 hover:shadow-rose-100"

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-250 bg-white text-gray-500 shadow-sm hover:scale-110 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer ${hoverColor}`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start text-left md:pl-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-5 select-none">
              Quick Links
            </span>
            <ul className="space-y-3.5 w-full">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-violet-600 transition-all duration-300 hover:translate-x-1.5"
                  >
                    <span className="h-1.5 w-0 rounded-full bg-violet-600 group-hover:w-3.5 opacity-0 group-hover:opacity-100 transition-all duration-350" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-start text-left md:pl-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-5 select-none">
              Services
            </span>
            <ul className="space-y-3.5 w-full">
              {services.map((service) => {
                const ServiceIcon = service.icon
                return (
                  <li
                    key={service.name}
                    className="group flex items-center gap-3 text-sm font-bold text-gray-500 hover:text-violet-600 transition-all duration-300 hover:translate-x-1.5 cursor-default"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 text-slate-400 group-hover:bg-violet-50 group-hover:border-violet-100 group-hover:text-violet-500 transition-colors duration-300 shadow-sm">
                      <ServiceIcon className="h-4 w-4 shrink-0" />
                    </div>
                    <span>{service.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* 3. Bottom Footer Separator & Copyright Notice Bar */}
        <div className="mt-20 pt-8 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-6 select-none">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p className="font-sans text-xs font-bold text-slate-400">
              &copy; {currentYear} <span className="text-slate-500 font-extrabold hover:text-violet-600 transition-colors">Vaibhav Lohar</span>. All rights reserved.
            </p>
            <div className="hidden sm:block h-3.5 w-[1px] bg-slate-200" />
            <p className="font-sans text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Made with passion &amp; perfection
            </p>
          </div>
          
          {/* Scroll to Top Button styled in super elegant custom theme with hover arrow bounce */}
          <button
            onClick={handleScrollToTop}
            className="group/scroll flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200/70 hover:shadow-xl hover:shadow-violet-400/80 transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 group-hover/scroll:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeFooterSection
