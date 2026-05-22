import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
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


  const services = [
    { name: 'Full Stack Development', icon: Globe },
    { name: 'AI Integrations', icon: Cpu },
    { name: 'UI/UX Engineering', icon: Layout },
    { name: 'System Design', icon: Feather },
  ]

  return (
    <div className="relative mt-16 w-full overflow-hidden px-4 pb-16 pt-6 sm:px-8 lg:px-12">
      {/* 3D Ambient Glowing Mesh Blobs */}
      <div className="absolute -left-20 bottom-10 h-[380px] w-[380px] rounded-full bg-violet-300/25 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute right-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-300/30 blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute left-1/3 bottom-[-50px] h-[320px] w-[320px] rounded-full bg-rose-200/20 blur-[100px] pointer-events-none" />
      
      {/* Subtle Grid Overlay matching engineering mockup */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f108_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-80" />

      <div className="mx-auto max-w-6xl relative">
        {/* Unified Luxury Glass Panel Container */}
        <div className="relative rounded-[3rem] border border-white/80 bg-white/60 backdrop-blur-2xl shadow-[0_30px_80px_rgba(99,102,241,0.06)] p-8 sm:p-10 lg:p-12 overflow-hidden">
          
          {/* Accent reflection top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-300/40 to-transparent" />

          {/* 1. Call to Action Banner (Glowing Contrast Jewel) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[2.2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 px-8 py-10 sm:px-12 lg:px-14 shadow-[0_20px_45px_rgba(99,102,241,0.18)] flex flex-col lg:flex-row lg:items-center justify-between gap-8 select-none group/cta"
          >
            {/* Ambient interior glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-indigo-500/0 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Decorative SVG Waves */}
            <div className="absolute right-0 top-0 pointer-events-none h-full w-1/3 opacity-30">
              <svg width="100%" height="100%" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 120 C100 140, 150 60, 200 90 C250 120, 270 30, 320 50" stroke="rgba(139, 92, 246, 0.35)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M80 80 C130 110, 170 30, 220 70 C270 110, 290 10, 340 30" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="2" fill="none" />
                <circle cx="260" cy="40" r="2.5" fill="rgba(139, 92, 246, 0.4)" />
                <circle cx="180" cy="110" r="1.5" fill="rgba(99, 102, 241, 0.3)" />
              </svg>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 z-10">
              {/* Glowing Icon Box */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-white shadow-[0_8px_32px_rgba(99,102,241,0.2)] backdrop-blur-md group-hover/cta:scale-110 group-hover/cta:rotate-3 transition-transform duration-500">
                <Rocket className="h-7 w-7 stroke-[2] animate-bounce-slow" />
              </div>
              
              <div className="flex flex-col text-left">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans leading-snug">
                  Let's Build Something Amazing Together
                </h3>
                <p className="mt-2 text-sm font-semibold text-indigo-200/80 max-w-xl font-sans">
                  Have an idea or a project in mind? Let's collaborate and turn your concepts into clean, high-performance production realities.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 z-10 shrink-0">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white font-bold text-sm px-6.5 py-3.5 shadow-lg shadow-violet-550/30 hover:shadow-xl hover:shadow-violet-550/50 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer text-center"
              >
                <span>Hire Me</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-6.5 py-3.5 shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer text-center group/btn"
              >
                <span>Contact Me</span>
                <ArrowRight className="h-4 w-4 text-violet-400 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          {/* 2. Main Footer Grid */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 select-none">
            {/* Column 1: Brand Info */}
            <div className="flex flex-col items-start gap-6 text-left">
              <div className="flex items-center gap-3 group/logo cursor-pointer">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 text-white font-black font-sans text-lg shadow-[0_10px_25px_rgba(99,102,241,0.25)] group-hover/logo:scale-110 group-hover/logo:rotate-[360deg] transition-all duration-700 select-none">
                  VL
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-lg font-black text-slate-800 font-sans leading-none tracking-tight">
                    Vaibhav Lohar
                  </span>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-violet-650 mt-1.5 leading-none">
                    Software Engineer
                  </span>
                </div>
              </div>
              
              <p className="text-sm font-semibold leading-relaxed text-gray-500 max-w-xs font-sans">
                Designing and building high-performance, beautiful full-stack applications with state-of-the-art architectures.
              </p>

              {/* Social Icons matching mockup look with high-fidelity animations */}
              <div className="flex items-center gap-3 mt-1">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  let hoverColor = "hover:bg-violet-600 hover:text-white"
                  if (social.name === 'GitHub') hoverColor = "hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-slate-350/50"
                  if (social.name === 'LinkedIn') hoverColor = "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-blue-300/40"
                  if (social.name === 'Twitter') hoverColor = "hover:bg-sky-500 hover:text-white hover:border-sky-500 hover:shadow-sky-300/40"
                  if (social.name === 'Email') hoverColor = "hover:bg-rose-500 hover:text-white hover:border-rose-500 hover:shadow-rose-300/40"

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-gray-550 shadow-sm hover:scale-115 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer ${hoverColor}`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Column 2: Services */}
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
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-slate-150/80 text-violet-500 shadow-sm group-hover:bg-violet-600 group-hover:border-violet-500 group-hover:text-white transition-all duration-300">
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
          <div className="mt-16 pt-8 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-6 select-none">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <p className="font-sans text-xs font-bold text-slate-450">
                &copy; {currentYear} <span className="text-slate-600 font-extrabold hover:text-violet-600 transition-colors">Vaibhav Lohar</span>. All rights reserved.
              </p>
              <div className="hidden sm:block h-3.5 w-[1px] bg-slate-250" />
              <p className="font-sans text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                Made with passion &amp; perfection
              </p>
            </div>
            
            {/* Scroll to Top Button styled in super elegant custom theme with hover arrow bounce */}
            <button
              onClick={handleScrollToTop}
              className="group/scroll flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200/80 hover:shadow-xl hover:shadow-violet-400/85 transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 group-hover/scroll:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFooterSection
