import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

function HomeFooterSection() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative mt-8 w-full overflow-hidden px-4 pb-12 pt-4 sm:px-8 lg:px-12">
      {/* 3D Ambient Glowing Mesh Blobs */}
      <div className="absolute -left-20 bottom-0 h-[280px] w-[280px] rounded-full bg-violet-300/15 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute right-[-10%] top-[-10%] h-[300px] w-[300px] rounded-full bg-indigo-300/20 blur-[110px] pointer-events-none animate-pulse-slow" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f106_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-80" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-6xl relative"
      >
        {/* Unified Luxury Glass Panel (Sleek Dock Style) */}
        <div className="relative rounded-2xl border border-white/85 bg-white/65 backdrop-blur-2xl shadow-[0_15px_40px_rgba(99,102,241,0.04)] px-6 py-4 sm:px-8 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4 select-none overflow-hidden">
          
          {/* Accent reflection top border */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-violet-300/30 to-transparent" />

          {/* Copyright Text */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
            <p className="font-sans text-xs font-bold text-slate-450">
              &copy; {currentYear} <span className="text-slate-600 font-extrabold hover:text-violet-650 transition-colors">Vaibhav Lohar</span>. All rights reserved.
            </p>
            <div className="hidden sm:block h-3 w-[1px] bg-slate-200" />
            <p className="font-sans text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
              Made with passion &amp; perfection
            </p>
          </div>
          
          {/* Scroll to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="group/scroll flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-200/80 hover:shadow-lg hover:shadow-violet-400/80 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4.5 w-4.5 group-hover/scroll:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default HomeFooterSection
