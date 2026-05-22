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

  const connectItems = [
    {
      label: 'vaibhavlohar109@gmail.com',
      url: `mailto:${emailAddress}`,
      icon: Mail,
    },
    {
      label: 'linkedin.com/in/vaibhav-lohar',
      url: 'https://www.linkedin.com/in/vaibhav-lohar-ba7824315',
      icon: FaLinkedinIn,
    },
    {
      label: 'github.com/lohar109',
      url: 'https://github.com/Lohar109',
      icon: FaGithub,
    },
  ]

  return (
    <div className="relative mt-24 w-full bg-slate-50/20 px-6 pb-12 pt-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* 1. Call to Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-violet-100/70 bg-gradient-to-r from-violet-50/60 via-indigo-50/40 to-purple-50/60 px-8 py-8 sm:px-10 lg:px-12 shadow-[0_15px_40px_rgba(99,102,241,0.03)] backdrop-blur-md flex flex-col lg:flex-row lg:items-center justify-between gap-8 select-none"
        >
          {/* Subtle Decorative SVG Waves and Dots (matching mockup) */}
          <div className="absolute right-0 top-0 pointer-events-none h-full w-1/3 opacity-40">
            <svg width="100%" height="100%" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 120 C100 140, 150 60, 200 90 C250 120, 270 30, 320 50" stroke="rgba(124, 58, 237, 0.15)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <path d="M80 80 C130 110, 170 30, 220 70 C270 110, 290 10, 340 30" stroke="rgba(124, 58, 237, 0.12)" strokeWidth="2" fill="none" />
              <circle cx="260" cy="40" r="2.5" fill="rgba(124, 58, 237, 0.25)" />
              <circle cx="180" cy="110" r="1.5" fill="rgba(124, 58, 237, 0.2)" />
              <path d="M280 90 L285 95 M285 90 L280 95" stroke="rgba(124, 58, 237, 0.2)" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 z-10">
            {/* Rocket Icon Box */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-100 bg-white text-violet-600 shadow-sm shadow-violet-100/50">
              <Rocket className="h-6 w-6 stroke-[2] animate-bounce-slow" />
            </div>
            
            <div className="flex flex-col text-left">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 font-sans leading-snug">
                Let's Build Something Amazing Together
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-gray-500 max-w-xl font-sans">
                Have an idea or a project in mind? Let's turn it into reality.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 z-10">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-sm px-6 py-3 shadow-md shadow-violet-200/50 hover:shadow-violet-300/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
            >
              <span>Hire Me</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200/80 bg-white hover:bg-slate-50 text-gray-700 hover:text-violet-600 font-bold text-sm px-6 py-3 shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center group"
            >
              <span>Contact Me</span>
              <ArrowRight className="h-4 w-4 text-violet-600 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

        {/* 2. Main Footer Grid (matching mockup columns) */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 select-none">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-start gap-5 text-left">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-black font-sans text-md shadow-md shadow-violet-200/40 select-none">
                VL
              </span>
              <div className="flex flex-col">
                <span className="text-base font-bold text-slate-800 font-sans leading-none">
                  Vaibhav Lohar
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-violet-600 mt-1 leading-none">
                  Software Engineer
                </span>
              </div>
            </div>
            
            <p className="text-sm font-normal leading-relaxed text-gray-500/90 max-w-xs font-sans">
              Building modern, scalable and impactful digital products.
            </p>

            {/* Social Icons matching mockup look */}
            <div className="flex items-center gap-2.5 mt-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:text-violet-600 hover:border-violet-300 hover:shadow-violet-50 transition-all duration-200 cursor-pointer"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4.5 w-4.5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start text-left md:pl-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 select-none">
              Quick Links
            </span>
            <ul className="space-y-3 w-full">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm font-semibold text-gray-550 hover:text-violet-600 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-600 scale-0 group-hover:scale-100 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-start text-left md:pl-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 select-none">
              Services
            </span>
            <ul className="space-y-3 w-full">
              {services.map((service) => {
                const ServiceIcon = service.icon
                return (
                  <li key={service.name} className="flex items-center gap-2.5 text-sm font-semibold text-gray-550 hover:text-violet-600 transition-colors duration-200">
                    <ServiceIcon className="h-4 w-4 text-violet-400" />
                    <span>{service.name}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Column 4: Connect Details */}
          <div className="flex flex-col items-start text-left md:pl-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 select-none">
              Connect
            </span>
            <ul className="space-y-3.5 w-full">
              {connectItems.map((item, idx) => {
                const ItemIcon = item.icon
                return (
                  <li key={idx}>
                    <a
                      href={item.url}
                      target={item.url.startsWith('http') ? '_blank' : undefined}
                      rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-2.5 text-sm font-semibold text-gray-550 hover:text-violet-600 transition-colors duration-200 w-full"
                    >
                      <ItemIcon className="h-4 w-4 shrink-0 text-violet-500" />
                      <span className="truncate">{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* 3. Bottom Footer Separator & Copyright Notice Bar */}
        <div className="mt-14 pt-8 border-t border-gray-200/50 flex flex-col sm:flex-row items-center justify-between gap-6 select-none">
          <p className="font-sans text-xs font-semibold text-gray-400">
            &copy; {currentYear} Vaibhav Lohar. All rights reserved.
          </p>
          
          {/* Scroll to Top Button matching mockup red square, but styled in elegant violet theme */}
          <button
            onClick={handleScrollToTop}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-200/40 hover:shadow-violet-300/50 transition-all duration-200 active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomeFooterSection
