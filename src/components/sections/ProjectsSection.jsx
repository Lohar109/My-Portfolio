import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Code,
  Users,
  Star,
  Rocket,
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
  ListFilter,
} from 'lucide-react'
import { FaReact, FaChartLine, FaNetworkWired, FaGithub } from 'react-icons/fa'
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
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" /><circle cx="12" cy="12" r="3" /></svg>
  )
}
function BoxIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
  )
}

function getProjectLinks(slug) {
  switch (slug) {
    case 'studioflow':
      return {
        github: 'https://github.com/Lohar109/ShopEase-Ecommerce',
        demo: 'https://shop-ease-ecommerce-delta.vercel.app/'
      }
    case 'portfolio':
      return {
        github: 'https://github.com/Lohar109/My-Portfolio',
        demo: '/'
      }
    case 'marketpulse':
      return {
        github: 'https://github.com/Lohar109/Loading-Optimisation-Software',
        demo: '/projects/marketpulse'
      }
    case 'campus-connect':
      return {
        github: 'https://github.com/Lohar109/Campus-Connect-Portal',
        demo: '/projects/campus-connect'
      }
    case 'insight-board':
      return {
        github: 'https://github.com/Lohar109/InsightBoard-Analytics',
        demo: '/projects/insight-board'
      }
    case 'support-flow':
      return {
        github: 'https://github.com/Lohar109/SupportFlow-Assistant',
        demo: '/projects/support-flow'
      }
    case 'media-ops':
      return {
        github: 'https://github.com/Lohar109/MediaOps-Studio',
        demo: '/projects/media-ops'
      }
    default:
      return {
        github: 'https://github.com/Lohar109',
        demo: '#'
      }
  }
}

function getCategoryDotColor(category) {
  const cat = (category || '').toLowerCase()
  if (cat.includes('ai') || cat.includes('ml') || cat.includes('intelligent') || cat.includes('support')) {
    return 'bg-blue-600' // blue dot
  }
  if (cat.includes('web') || cat.includes('saas') || cat.includes('portal') || cat.includes('dashboard') || cat.includes('edtech')) {
    return 'bg-violet-600' // purple dot
  }
  if (cat.includes('desktop') || cat.includes('tool') || cat.includes('logistics')) {
    return 'bg-amber-600' // amber dot
  }
  return 'bg-gray-400'
}

function renderProjectVisual(project) {
  const slug = project.slug
  switch (slug) {
    case 'portfolio':
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] to-[#1e293b] flex flex-col justify-between p-3.5 font-mono text-[9px] text-sky-400 select-none overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] text-slate-400 font-semibold tracking-wider uppercase">Agent Active</span>
            </span>
            <span className="text-slate-500 text-[8px]">v1.0.4</span>
          </div>

          <div className="flex flex-col gap-2 my-1">
            <div className="self-start max-w-[85%] bg-blue-600/10 border border-blue-500/25 text-blue-300 px-2 py-1 rounded-lg rounded-tl-none leading-normal">
              Querying technical journey...
            </div>
            <div className="self-end max-w-[90%] bg-slate-800/40 border border-slate-700/30 text-emerald-400 px-2 py-1 rounded-lg rounded-tr-none text-right leading-normal">
              RAG: Retrieved 3 projects.
            </div>
          </div>

          <div className="flex items-center justify-between text-[7px] text-slate-500 pt-1.5 border-t border-slate-800/80">
            <span>model: gemini-3</span>
            <span>latency: 48ms</span>
          </div>
        </div>
      )

    case 'marketpulse':
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#fef3c7] flex flex-col justify-between p-3 select-none overflow-hidden">
          <div className="flex items-center justify-between text-[8px] text-amber-800 font-bold border-b border-amber-200/60 pb-1">
            <span>3D CONTAINER PACKING</span>
            <span className="bg-amber-100 px-1 py-0.5 rounded text-amber-700 font-black">94.8% OPT</span>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-1.5">
            <div className="w-[120px] h-[55px] border-2 border-amber-600/30 rounded bg-white/40 relative flex items-center justify-center">
              <div className="absolute left-2 bottom-1.5 w-8 h-6 bg-amber-500 rounded-sm shadow-sm border border-amber-600/20 text-white text-[6px] font-black flex items-center justify-center">B1</div>
              <div className="absolute left-11 bottom-1.5 w-10 h-7 bg-orange-500 rounded-sm shadow-sm border border-orange-600/20 text-white text-[6px] font-black flex items-center justify-center">B2</div>
              <div className="absolute left-6 bottom-4 w-9 h-5 bg-teal-500 rounded-sm shadow-sm border border-teal-600/20 text-white text-[6px] font-black flex items-center justify-center">B3</div>
              <div className="absolute inset-x-2 bottom-6 border-b border-dashed border-emerald-500 flex justify-between text-[6px] text-emerald-600 font-bold">
                <span>VOL LIMIT</span>
                <span>SAFE</span>
              </div>
            </div>
          </div>

          <div className="text-[7px] text-amber-700 font-semibold flex justify-between">
            <span>ITEMS: 142</span>
            <span>SPACE WASTED: 5.2%</span>
          </div>
        </div>
      )

    case 'campus-connect':
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#e0f2fe] flex flex-col justify-between p-3.5 select-none overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <span className="text-[9px] font-black text-slate-800 tracking-tight">CAMPUS CONNECT</span>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          </div>

          <div className="flex gap-2 items-center my-1.5">
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-1.5 flex flex-col gap-0.5 shadow-sm">
              <span className="text-[6px] font-bold text-slate-400 uppercase leading-none">Schedule</span>
              <span className="text-[8px] font-extrabold text-slate-700 leading-none mt-0.5">Algorithms</span>
              <span className="text-[6px] font-medium text-blue-600 mt-0.5">Room 404 • 10:00 AM</span>
            </div>

            <div className="h-11 w-11 rounded-lg bg-white border border-slate-200 flex flex-col items-center justify-center shadow-sm shrink-0">
              <span className="text-[8px] font-black text-emerald-600 leading-none">92.4%</span>
              <span className="text-[5px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">ATTEND</span>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200/50 rounded px-1.5 py-0.5 text-[6px] font-bold text-amber-700 flex items-center justify-between">
            <span>Notice: Assignment 3 tonight!</span>
            <span className="text-amber-800">⚠️</span>
          </div>
        </div>
      )

    case 'insight-board':
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#fafafa] to-[#ecfdf5] flex flex-col justify-between p-3 select-none overflow-hidden">
          <div className="flex items-center justify-between text-[8px] text-emerald-800 font-bold border-b border-emerald-100 pb-1">
            <span>INSIGHTBOARD ANALYTICS</span>
            <span className="bg-emerald-100 px-1 py-0.5 rounded text-emerald-700 font-black">LIVE</span>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-1.5">
            <div className="w-full h-[40px] relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 160 40">
                <defs>
                  <linearGradient id="widgetGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 35 Q20 20, 40 28 T80 12 T120 18 T160 5"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0 35 Q20 20, 40 28 T80 12 T120 18 T160 5 L160 40 L0 40 Z"
                  fill="url(#widgetGrad)"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5 mt-1 border-t border-emerald-100/60 pt-1 text-[7px] text-emerald-700 font-semibold">
            <span>DAU: 4,820 <span className="text-emerald-500 font-bold">(+12%)</span></span>
            <span className="text-right">BOUNCE: 24.3%</span>
          </div>
        </div>
      )

    case 'support-flow':
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#eff6ff] flex flex-col justify-between p-3 select-none overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1">
            <span className="text-[9px] font-black text-slate-800 tracking-tight">SUPPORTFLOW</span>
            <span className="text-[6px] font-bold bg-blue-100 text-blue-800 px-1 py-0.5 rounded">AI AUTO-TRIAGE</span>
          </div>

          <div className="flex flex-col gap-1.5 my-1.5">
            <div className="bg-white border border-slate-200 rounded p-1 flex items-center justify-between shadow-sm">
              <span className="text-[7px] font-bold text-slate-700">#4819 API Timeout</span>
              <span className="text-[5px] font-black bg-rose-100 text-rose-700 px-1 py-0.2 rounded uppercase">HIGH</span>
            </div>
            <div className="bg-white border border-slate-200 rounded p-1 flex items-center justify-between shadow-sm">
              <span className="text-[7px] font-bold text-slate-700">#4818 Billing Reset</span>
              <span className="text-[5px] font-black bg-emerald-100 text-emerald-700 px-1 py-0.2 rounded uppercase">DRAFT READY</span>
            </div>
          </div>

          <div className="text-[7px] text-slate-500 flex justify-between">
            <span>AVG RESP: 4m 12s</span>
            <span>ACCURACY: 98.4%</span>
          </div>
        </div>
      )

    case 'media-ops':
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] flex flex-col justify-between p-3 select-none overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-1">
            <span className="text-[9px] font-black text-slate-200 tracking-tight">MEDIAOPS STUDIO</span>
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          </div>

          <div className="grid grid-cols-3 gap-1.5 my-1.5">
            <div className="h-8 rounded bg-gradient-to-br from-amber-400 to-rose-600 relative overflow-hidden flex items-center justify-center shadow-md">
              <span className="absolute bottom-0.5 right-0.5 text-[5px] bg-black/60 text-emerald-400 font-bold px-0.5 rounded">CDN</span>
            </div>
            <div className="h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden flex items-center justify-center shadow-md">
              <span className="absolute bottom-0.5 right-0.5 text-[5px] bg-black/60 text-emerald-400 font-bold px-0.5 rounded">CDN</span>
            </div>
            <div className="h-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 relative overflow-hidden flex items-center justify-center shadow-md">
              <span className="absolute bottom-0.5 right-0.5 text-[5px] bg-black/60 text-yellow-400 font-bold px-0.5 rounded">80%</span>
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="flex justify-between text-[6px] text-slate-400 font-bold">
              <span>STORAGE CAP</span>
              <span>64.2 GB / 100 GB</span>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[64.2%]" />
            </div>
          </div>
        </div>
      )

    default:
      return (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
          <Code className="w-8 h-8 text-slate-400" />
        </div>
      )
  }
}

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [sortBy, setSortBy] = useState('latest')
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // Group filters
  const filters = [
    { label: 'All Projects', value: 'All' },
    { label: 'Web Apps', value: 'Web' },
    { label: 'AI / ML', value: 'AI' },
    { label: 'Tools', value: 'Tools' },
  ]

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue)
    setCurrentPage(1)
  }

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

  // Sort other projects
  const sortedProjects = [...otherProjects].sort((a, b) => {
    if (sortBy === 'latest') {
      return parseInt(b.year || '2026') - parseInt(a.year || '2026')
    }
    if (sortBy === 'oldest') {
      return parseInt(a.year || '2026') - parseInt(b.year || '2026')
    }
    if (sortBy === 'alphabetical') {
      return a.title.localeCompare(b.title)
    }
    return 0
  })

  // Paginate other projects
  const itemsPerPage = 4
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProjects = sortedProjects.slice(startIndex, startIndex + itemsPerPage)

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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
        {/* Left Column (Headline & Subtitle) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
            Projects That Solve{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Real Problems.
            </span>
          </h2>

          <p className="max-w-xl text-base sm:text-lg text-gray-500 leading-relaxed font-medium">
            A collection of web applications I've built with clean code,
            thoughtful design, and real-world impact.
          </p>
        </div>

        {/* Right Column (Metrics Panel Card) */}
        <div className="lg:col-span-5 w-full lg:translate-y-8">
          <div className="border border-gray-200/80 bg-white rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center justify-between gap-2.5">
            {/* 1. Projects Metric */}
            <div className="flex flex-col items-center text-center flex-1">
              <span className="h-10 w-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3 shadow-[0_2px_8px_rgba(37,99,235,0.06)]">
                <Code size={18} strokeWidth={2.5} />
              </span>
              <span className="text-xl font-extrabold text-gray-900 leading-none">6+</span>
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

      {/* Interactive Filters Row as Premium Pill Tabs */}
      <div className="mt-12 select-none">
        <div className="inline-flex items-center gap-1.5 p-1.5 bg-gray-50/90 border border-gray-200/50 rounded-2xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] relative z-10 backdrop-blur-sm">
          {filters.map((filter) => {
            const isSelected = activeFilter === filter.value
            return (
              <button
                key={filter.value}
                onClick={() => handleFilterChange(filter.value)}
                className={`relative px-4.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer select-none ${
                  isSelected
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-white/40'
                }`}
              >
                <span className="relative z-10">{filter.label}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activeProjectTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl shadow-[0_4px_12px_rgba(109,40,217,0.25)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>
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
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-none">
                    {shopEaseProject.title}
                  </h3>
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
              <div className="mt-8 flex items-center justify-start sm:justify-end gap-3 w-full">
                <div className="static-gradient-border-wrapper h-10 active:scale-[0.98]">
                  <Link
                    to={'/projects/' + shopEaseProject.slug}
                    className="h-9 px-5 rounded-[10px] bg-white flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-gray-700 hover:text-violet-600 transition-all duration-205 cursor-pointer select-none"
                  >
                    Case Study
                  </Link>
                </div>
                <div className="static-gradient-border-wrapper h-10 w-10 active:scale-[0.98]">
                  <a
                    href={getProjectLinks(shopEaseProject.slug).github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-[10px] bg-white flex items-center justify-center text-gray-700 hover:text-violet-600 transition-all duration-205 shrink-0 cursor-pointer select-none"
                    title="GitHub Repository"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* All Projects Header with Sort Option */}
      <div className="mt-16 flex items-center justify-between border-b border-gray-100 pb-5">
        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          All Projects
        </h3>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs md:text-sm font-semibold text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-all duration-200 select-none shadow-sm cursor-pointer"
          >
            <ListFilter size={15} />
            <span>
              {sortBy === 'latest' && 'Latest First'}
              {sortBy === 'oldest' && 'Oldest First'}
              {sortBy === 'alphabetical' && 'Alphabetical'}
            </span>
            <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${sortDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {sortDropdownOpen && (
              <>
                {/* Backdrop to close */}
                <div className="fixed inset-0 z-10" onClick={() => setSortDropdownOpen(false)} />

                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-44 bg-white border border-gray-150 rounded-xl shadow-lg py-1.5 z-20 overflow-hidden"
                >
                  <button
                    onClick={() => {
                      setSortBy('latest');
                      setCurrentPage(1);
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors duration-155 ${sortBy === 'latest' ? 'text-blue-600 bg-blue-50/40' : 'text-gray-700'}`}
                  >
                    Latest First
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('oldest');
                      setCurrentPage(1);
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors duration-155 ${sortBy === 'oldest' ? 'text-blue-600 bg-blue-50/40' : 'text-gray-700'}`}
                  >
                    Oldest First
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('alphabetical');
                      setCurrentPage(1);
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs md:text-sm font-medium hover:bg-gray-50 transition-colors duration-155 ${sortBy === 'alphabetical' ? 'text-blue-600 bg-blue-50/40' : 'text-gray-700'}`}
                  >
                    Alphabetical
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Horizontal Cards for Other Projects */}
      <div className="mt-8 flex flex-col gap-6">
        <AnimatePresence mode="popLayout">
          {paginatedProjects.map((project) => {
            const links = getProjectLinks(project.slug);
            const githubUrl = links.github;
            const demoUrl = links.demo;

            return (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                key={project.slug}
                className="group bg-white border border-gray-200/80 rounded-3xl p-5 md:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-300 flex flex-col lg:flex-row gap-6 items-stretch"
              >
                {/* Left Side: Dynamic high fidelity CSS visual preview */}
                <div className="w-full lg:w-[260px] h-[160px] rounded-2xl overflow-hidden shrink-0 border border-gray-100 flex items-center justify-center bg-gray-50/50 relative group-hover:border-gray-200 transition-colors duration-300">
                  {renderProjectVisual(project)}
                </div>

                {/* Middle Content: Project details, technology badges, category/year metadata */}
                <div className="flex-1 flex flex-col justify-between py-1 self-stretch">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 tracking-tight leading-tight group-hover:text-indigo-600 transition-colors duration-200">
                      {project.title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-500 font-normal leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack?.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-gray-205 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm"
                        >
                          {getTechIcon(tech)}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category and Year Metadata */}
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-400 select-none">
                    <span className="flex items-center gap-1.5">
                      <span className={`h-2.5 w-2.5 rounded-full ${getCategoryDotColor(project.category)}`} />
                      {project.category || 'Web App'}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                      {project.year || '2026'}
                    </span>
                  </div>
                </div>

                {/* Right Side: Case Study and GitHub action buttons aligned at the bottom on desktop */}
                <div className="flex items-center lg:items-end justify-start lg:justify-end gap-3 mt-4 lg:mt-0 shrink-0 lg:pl-6 w-full lg:w-auto lg:self-end lg:pb-1">
                  {/* View Case Study / Live Demo */}
                  <div className="static-gradient-border-wrapper h-10 active:scale-[0.98]">
                    {demoUrl.startsWith('http') ? (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 px-5 rounded-[10px] bg-white flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-gray-700 hover:text-violet-600 transition-all duration-205 cursor-pointer select-none"
                        title="Live Demo"
                      >
                        <span>Case Study</span>
                      </a>
                    ) : (
                      <Link
                        to={demoUrl}
                        className="h-9 px-5 rounded-[10px] bg-white flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-gray-700 hover:text-violet-600 transition-all duration-205 cursor-pointer select-none"
                        title="View Case Study"
                      >
                        <span>Case Study</span>
                      </Link>
                    )}
                  </div>

                  {/* GitHub Repo */}
                  <div className="static-gradient-border-wrapper h-10 w-10 active:scale-[0.98]">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 w-9 rounded-[10px] bg-white flex items-center justify-center text-gray-700 hover:text-violet-600 transition-all duration-205 shrink-0 cursor-pointer select-none"
                      title="GitHub Repository"
                    >
                      <FaGithub size={16} />
                    </a>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`h-10 w-10 rounded-xl border flex items-center justify-center text-sm font-semibold transition-all duration-200 select-none cursor-pointer ${currentPage === 1
              ? 'border-gray-100 bg-gray-50/50 text-gray-300 cursor-not-allowed'
              : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300'
              }`}
          >
            &lt;
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, idx) => {
            const pageNum = idx + 1;
            const isActive = pageNum === currentPage;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`h-10 w-10 rounded-xl border flex items-center justify-center text-sm font-bold transition-all duration-200 select-none cursor-pointer ${isActive
                  ? 'border-indigo-500 bg-indigo-50/20 text-indigo-600'
                  : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                  }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`h-10 w-10 rounded-xl border flex items-center justify-center text-sm font-semibold transition-all duration-200 select-none cursor-pointer ${currentPage === totalPages
              ? 'border-gray-100 bg-gray-50/50 text-gray-300 cursor-not-allowed'
              : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300'
              }`}
          >
            &gt;
          </button>
        </div>
      )}

    </motion.section>
  )
}

export default ProjectsSection
