import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Code,
  Users,
  Star,
  Rocket,
  LayoutGrid,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Search,
  Bell,
  ShoppingBag,
  Cpu,
  Terminal,
  Grid,
} from 'lucide-react'
import { FaReact, FaChartLine, FaNetworkWired } from 'react-icons/fa'
import {
  SiCplusplus,
  SiQt,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiRender,
} from 'react-icons/si'

function getTechIcon(tech) {
  switch (tech.toLowerCase()) {
    case 'react':
      return <FaReact className="w-4 h-4 text-[#61DAFB]" />
    case 'tailwind css':
      return <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />
    case 'node.js':
      return <SiNodedotjs className="w-4 h-4 text-[#339933]" />
    case 'express':
      return <SiExpress className="w-4 h-4 text-gray-900" />
    case 'mongodb':
      return <SiMongodb className="w-4 h-4 text-[#47A248]" />
    case 'postgresql':
      return <SiPostgresql className="w-4 h-4 text-[#336791]" />
    case 'supabase':
      return <SiSupabase className="w-4 h-4 text-emerald-500" />
    case 'render':
      return <SiRender className="w-4 h-4 text-blue-400" />
    case 'vercel':
      return <SiVercel className="w-4 h-4 text-gray-900" />
    case 'cloudinary':
      return <Terminal className="w-4 h-4 text-sky-500" />
    case 'charts':
      return <FaChartLine className="w-4 h-4 text-indigo-500" />
    case 'api integration':
      return <FaNetworkWired className="w-4 h-4 text-blue-500" />
    case 'c++':
      return <SiCplusplus className="w-4 h-4 text-[#00599C]" />
    case 'qt framework':
      return <SiQt className="w-4 h-4 text-[#41CD52]" />
    case 'qt 3d':
      return <BoxIcon className="w-4 h-4 text-violet-500" />
    case 'qt render':
      return <Grid className="w-4 h-4 text-sky-500" />
    case 'logistics tech':
      return <Rocket className="w-4 h-4 text-emerald-600" />
    case 'optimization algos':
      return <Cpu className="w-4 h-4 text-amber-600" />
    case 'optimization algorithms':
      return <Cpu className="w-4 h-4 text-amber-600" />
    case 'genai integration':
      return <Sparkles className="w-4 h-4 text-amber-500" />
    case 'vision api':
      return <EyeIcon className="w-4 h-4 text-sky-500" />
    case 'audio transcription':
      return <Terminal className="w-4 h-4 text-neutral-600" />
    default:
      return <Code className="w-4 h-4 text-gray-500" />
  }
}

// Minimal fallback helper icons for missing react-icons
function EyeIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/><circle cx="12" cy="12" r="3"/></svg>
  )
}
function BoxIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
  )
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  // Group filters
  const filters = [
    { label: 'All Projects', value: 'All' },
    { label: 'Web Apps', value: 'Web' },
    { label: 'AI / ML', value: 'AI' },
    { label: 'Tools', value: 'Tools' },
  ]

  // Filter project cards logic
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Web') {
      return (
        project.category?.toLowerCase().includes('saas') ||
        project.category?.toLowerCase().includes('portal') ||
        project.category?.toLowerCase().includes('dashboard') ||
        project.category?.toLowerCase().includes('workflow') ||
        project.slug === 'studioflow' ||
        project.slug === 'campus-connect' ||
        project.slug === 'insight-board' ||
        project.slug === 'media-ops'
      )
    }
    if (activeFilter === 'AI') {
      return (
        project.summary?.toLowerCase().includes('ai') ||
        project.summary?.toLowerCase().includes('genai') ||
        project.summary?.toLowerCase().includes('rag') ||
        project.slug === 'portfolio' ||
        project.slug === 'support-flow' ||
        project.slug === 'studioflow'
      )
    }
    if (activeFilter === 'Tools') {
      return (
        project.slug === 'marketpulse' ||
        project.category?.toLowerCase().includes('desktop') ||
        project.stack?.join(' ').toLowerCase().includes('c++') ||
        project.stack?.join(' ').toLowerCase().includes('qt')
      )
    }
    return true
  })

  // We explicitly pull out ShopEase as the featured showcase card
  const shopEaseProject = projects.find((p) => p.slug === 'studioflow')
  const otherProjects = filteredProjects.filter((p) => p.slug !== 'studioflow')

  return (
    <motion.section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Header Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
        {/* Left Column (Headline & Subtitle) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          {/* Sparkles glass Badge capsule */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-950 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white select-none">
            <LayoutGrid size={11} className="text-white" />
            MY WORK
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight sm:text-4xl">
            Projects that solve <br className="hidden sm:inline" />
            <span className="text-black inline-block mt-0.5">real problems.</span>
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-gray-500 font-normal">
            A collection of web applications I've built with clean code,
            thoughtful design, and real-world impact.
          </p>
        </div>

        {/* Right Column (Metrics Panel Card) */}
        <div className="lg:col-span-5 w-full">
          <div className="border border-gray-200/80 bg-white rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center justify-between gap-2.5">
            {/* 1. Projects Metric */}
            <div className="flex flex-col items-center text-center flex-1">
              <span className="h-10 w-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3 shadow-[0_2px_8px_rgba(37,99,235,0.06)]">
                <Code size={18} strokeWidth={2.5} />
              </span>
              <span className="text-xl font-extrabold text-gray-900 leading-none">8+</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1.5">Projects</span>
            </div>

            {/* divider line */}
            <div className="h-14 w-[1px] bg-gray-100" />

            {/* 2. Tech Metric */}
            <div className="flex flex-col items-center text-center flex-1">
              <span className="h-10 w-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3 shadow-[0_2px_8px_rgba(16,185,129,0.06)]">
                <Cpu size={18} strokeWidth={2.5} />
              </span>
              <span className="text-xl font-extrabold text-gray-900 leading-none">5+</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1.5">Techs</span>
            </div>

            {/* divider line */}
            <div className="h-14 w-[1px] bg-gray-100" />

            {/* 3. Satisfaction Metric */}
            <div className="flex flex-col items-center text-center flex-1">
              <span className="h-10 w-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 mb-3 shadow-[0_2px_8px_rgba(245,158,11,0.06)]">
                <Star size={18} strokeWidth={2.5} />
              </span>
              <span className="text-xl font-extrabold text-gray-900 leading-none">100%</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1.5">Satisfied</span>
            </div>

            {/* divider line */}
            <div className="h-14 w-[1px] bg-gray-100" />

            {/* 4. Drive Metric */}
            <div className="flex flex-col items-center text-center flex-1">
              <span className="h-10 w-10 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-3 shadow-[0_2px_8px_rgba(225,29,72,0.06)]">
                <Rocket size={18} strokeWidth={2.5} />
              </span>
              <span className="text-xl font-extrabold text-gray-900 leading-none">Impact</span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1.5">Driven</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Filters Row */}
      <div className="mt-12 flex flex-wrap gap-2.5 justify-start select-none">
        {filters.map((filter) => {
          const isSelected = activeFilter === filter.value
          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-xl px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-neutral-950 text-white shadow-sm border border-neutral-950'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-black'
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      {/* Featured Project Card Block */}
      {shopEaseProject && (activeFilter === 'All' || activeFilter === 'Web' || activeFilter === 'AI') && (
        <div className="mt-8">
          <div className="border border-gray-200 bg-white rounded-3xl p-6 md:p-8 shadow-sm flex flex-col lg:flex-row gap-8 items-stretch w-full">
            
            {/* Left Side: CSS-only SaaS Dashboard Mockup */}
            <div className="lg:w-1/2 w-full min-h-[340px] bg-[#f8fafc] border border-slate-200/60 rounded-2xl p-4 flex gap-3 relative overflow-hidden font-sans select-none shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
              
              {/* Mock Sidebar */}
              <div className="w-[110px] shrink-0 border-r border-slate-200/80 pr-2 flex flex-col justify-between py-1 hidden sm:flex">
                <div className="flex flex-col gap-4">
                  {/* Mock Brand Header */}
                  <div className="flex items-center gap-1.5 px-1.5 py-0.5">
                    <span className="h-5 w-5 rounded-md bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <ShoppingBag size={10} />
                    </span>
                    <span className="text-[10px] font-black text-slate-800 tracking-tight">ShopEase</span>
                  </div>
                  {/* Mock Sidebar Nav */}
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-bold text-blue-600 bg-blue-50/80 border border-blue-100/30 px-2 py-1 rounded-md cursor-pointer flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-blue-600 inline-block" />
                      Overview
                    </span>
                    <span className="text-[8px] font-medium text-slate-500 hover:bg-slate-100/85 px-2 py-1 rounded-md cursor-pointer flex items-center gap-1">
                      Products
                    </span>
                    <span className="text-[8px] font-medium text-slate-500 hover:bg-slate-100/85 px-2 py-1 rounded-md cursor-pointer flex items-center gap-1">
                      Orders
                    </span>
                    <span className="text-[8px] font-medium text-slate-500 hover:bg-slate-100/85 px-2 py-1 rounded-md cursor-pointer flex items-center gap-1">
                      Customers
                    </span>
                    <span className="text-[8px] font-medium text-slate-500 hover:bg-slate-100/85 px-2 py-1 rounded-md cursor-pointer flex items-center gap-1">
                      Analytics
                    </span>
                    <span className="text-[8px] font-medium text-slate-500 hover:bg-slate-100/85 px-2 py-1 rounded-md cursor-pointer flex items-center gap-1">
                      Marketing
                    </span>
                    <span className="text-[8px] font-medium text-slate-500 hover:bg-slate-100/85 px-2 py-1 rounded-md cursor-pointer flex items-center gap-1">
                      Settings
                    </span>
                  </div>
                </div>
                <div className="px-1.5 py-1 border-t border-slate-200/80 text-[8px] text-slate-400 font-medium">
                  v2.6.4 (prod)
                </div>
              </div>

              {/* Mock Dashboard Body */}
              <div className="flex-1 flex flex-col gap-3.5 py-1">
                {/* Mock Header Search Row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 bg-white border border-slate-200 rounded-md px-2 py-1 flex items-center gap-1.5">
                    <Search size={8} className="text-slate-400" />
                    <span className="text-[8px] text-slate-400 font-sans">Search anything...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-md hover:bg-slate-200/50 flex items-center justify-center text-slate-500 relative cursor-pointer">
                      <Bell size={9} />
                      <span className="absolute top-1 right-1 h-1 w-1 rounded-full bg-rose-500" />
                    </span>
                    <div className="h-5 w-5 rounded-md border border-slate-300 bg-slate-200 overflow-hidden flex items-center justify-center">
                      <div className="h-full w-full bg-gradient-to-br from-blue-400 to-indigo-600 shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Dashboard Title & Top Card */}
                <div>
                  <h4 className="text-[11px] font-black text-slate-800 tracking-tight leading-none">Dashboard</h4>
                  
                  {/* High Fidelity Ocean Blue Line-Graph Card (Replaces Purple) */}
                  <div className="mt-2 rounded-xl bg-gradient-to-br from-[#1E40AF] via-[#1D4ED8] to-[#2563EB] p-3 text-white shadow-md relative overflow-hidden flex flex-col justify-between min-h-[105px]">
                    {/* Glowing background circles */}
                    <span className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-white/10 blur-xl pointer-events-none" />
                    <span className="absolute left-1/3 top-0 h-12 w-12 rounded-full bg-sky-400/20 blur-lg pointer-events-none" />

                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[7px] font-bold text-blue-200 uppercase tracking-widest leading-none">Total Revenue</span>
                        <span className="text-sm font-black tracking-tight leading-none mt-1">$24,8k</span>
                      </div>
                      <span className="rounded-full bg-blue-400/30 border border-blue-300/30 px-1.5 py-0.5 text-[6px] font-extrabold text-blue-100 flex items-center">
                        +12.9% vs last month
                      </span>
                    </div>

                    {/* SVG Line Graph */}
                    <div className="mt-2.5">
                      <svg className="w-full h-12 overflow-visible" viewBox="0 0 200 40">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 32 Q15 28, 30 35 T60 22 T90 14 T120 28 T150 12 T180 8 T200 2"
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0 32 Q15 28, 30 35 T60 22 T90 14 T120 28 T150 12 T180 8 T200 2 L200 40 L0 40 Z"
                          fill="url(#chartGrad)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Micro Metrics Cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="bg-white border border-slate-200/80 rounded-lg p-1.5 flex flex-col gap-0.5">
                    <span className="text-[6px] font-bold text-slate-400 uppercase tracking-wider leading-none">Orders</span>
                    <span className="text-[10px] font-extrabold text-slate-800 leading-none mt-1">1,284</span>
                    <span className="text-[6px] font-bold text-emerald-600 mt-0.5 flex items-center">+3.2%</span>
                  </div>
                  <div className="bg-white border border-slate-200/80 rounded-lg p-1.5 flex flex-col gap-0.5">
                    <span className="text-[6px] font-bold text-slate-400 uppercase tracking-wider leading-none">Customers</span>
                    <span className="text-[10px] font-extrabold text-slate-800 leading-none mt-1">3,421</span>
                    <span className="text-[6px] font-bold text-emerald-600 mt-0.5 flex items-center">+5.7%</span>
                  </div>
                  <div className="bg-white border border-slate-200/80 rounded-lg p-1.5 flex flex-col gap-0.5">
                    <span className="text-[6px] font-bold text-slate-400 uppercase tracking-wider leading-none">Conversion</span>
                    <span className="text-[10px] font-extrabold text-slate-800 leading-none mt-1">2.43%</span>
                    <span className="text-[6px] font-bold text-emerald-600 mt-0.5 flex items-center">+1.4%</span>
                  </div>
                  <div className="bg-white border border-slate-200/80 rounded-lg p-1.5 flex flex-col gap-0.5">
                    <span className="text-[6px] font-bold text-slate-400 uppercase tracking-wider leading-none">Avg. Order</span>
                    <span className="text-[10px] font-extrabold text-slate-800 leading-none mt-1">$65.8</span>
                    <span className="text-[6px] font-bold text-emerald-600 mt-0.5 flex items-center">+3.2%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Featured Project details */}
            <div className="lg:w-1/2 w-full flex flex-col justify-between items-start">
              <div className="flex flex-col items-start gap-4">
                {/* Featured project tag capsule */}
                <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-blue-600 select-none">
                  FEATURED PROJECT
                </span>

                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-none">
                    {shopEaseProject.title}
                  </h3>
                  <span className="rounded-full bg-blue-50 border border-blue-100 px-2 py-0.5 text-[8px] font-bold text-blue-600">
                    Featured
                  </span>
                </div>

                <p className="text-sm font-normal leading-relaxed text-gray-500 max-w-xl">
                  {shopEaseProject.summary}
                </p>

                {/* Technology Badges Row */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {shopEaseProject.stack?.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-8 flex flex-wrap gap-3 w-full sm:w-auto">
                <Link
                  to={'/projects/' + shopEaseProject.slug}
                  className="rounded-xl bg-black px-6 py-3 font-bold !text-white transition-all duration-300 hover:bg-neutral-900 text-center flex items-center justify-center shadow-sm text-sm shrink-0"
                >
                  View Case Study
                </Link>

                <a
                  href="https://shopease.vaibhavlohar.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-gray-250 bg-white px-6 py-3 font-bold text-gray-800 transition-all duration-300 hover:bg-gray-50 text-center flex items-center justify-center gap-2 text-sm shrink-0"
                >
                  Live Demo
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Grid of Other Projects */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {otherProjects.map((project) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              key={project.slug}
              className="group cursor-pointer rounded-3xl border border-gray-200/50 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="rounded-full bg-neutral-100 border border-neutral-200/50 px-2 py-0.5 text-[8px] font-bold text-neutral-600 uppercase tracking-widest">
                    {project.category || 'Product'}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400">
                    {project.year || '2026'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-none">
                  {project.title}
                </h3>

                <p className="text-xs font-normal text-gray-500 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack?.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200/50 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-600"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-auto flex gap-3">
                <Link
                  to={'/projects/' + project.slug}
                  className="rounded-xl bg-black px-4.5 py-3 text-center text-xs font-bold !text-white transition-all duration-300 hover:bg-neutral-900 flex items-center justify-center shadow-sm"
                >
                  Case Study
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

    </motion.section>
  )
}

export default ProjectsSection
