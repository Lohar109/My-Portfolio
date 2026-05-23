import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  AudioLines,
  BrainCircuit,
  Boxes,
  Cuboid,
  Eye,
  Layers3,
  Truck,
  User,
  Target,
  TrendingUp,
  Briefcase,
  Users,
  Flag,
  Layers,
  Code,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Code2,
  Rocket,
  CheckCircle2,
} from 'lucide-react'
import {
  SiCplusplus,
  SiCloudinary,
  SiNodedotjs,
  SiPostgresql,
  SiQt,
  SiReact,
  SiRender,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiDocker,
  SiRedis,
} from 'react-icons/si'
import { FaChartLine, FaNetworkWired } from 'react-icons/fa'
import SiteHeader from '../components/layout/SiteHeader.jsx'
import CaseStudySection from '../components/ui/CaseStudySection.jsx'
import IntroVideoFrame from '../components/ui/IntroVideoFrame.jsx'
import { projects } from '../data/projects.js'

function getStackIcon(item) {
  switch (item.toLowerCase()) {
    case 'c++':
      return <SiCplusplus className="h-4 w-4 text-[#00599C]" />
    case 'qt framework':
      return <SiQt className="h-4 w-4 text-[#41CD52]" />
    case 'qt 3d':
      return <Cuboid className="h-4 w-4 text-violet-500" />
    case 'qt render':
      return <Layers3 className="h-4 w-4 text-sky-500" />
    case 'logistics tech':
      return <Truck className="h-4 w-4 text-emerald-600" />
    case 'optimization algos':
      return <BrainCircuit className="h-4 w-4 text-amber-600" />
    case 'react':
      return <SiReact className="h-4 w-4 text-[#61DAFB]" />
    case 'node.js':
      return <SiNodedotjs className="h-4 w-4 text-[#339933]" />
    case 'postgresql':
      return <SiPostgresql className="h-4 w-4 text-[#336791]" />
    case 'vision api':
      return <Eye className="h-4 w-4 text-sky-500" />
    case 'audio transcription':
      return <AudioLines className="h-4 w-4 text-violet-500" />
    case 'supabase':
      return <SiSupabase className="h-4 w-4 text-emerald-500" />
    case 'render':
      return <SiRender className="h-4 w-4 text-blue-400" />
    case 'vercel':
      return <SiVercel className="h-4 w-4 text-gray-900" />
    case 'cloudinary':
      return <SiCloudinary className="h-4 w-4 text-sky-500" />
    case 'tailwind css':
      return <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />
    case 'charts':
      return <FaChartLine className="h-4 w-4 text-indigo-500" />
    case 'api integration':
      return <FaNetworkWired className="h-4 w-4 text-blue-500" />
    case 'docker':
      return <SiDocker className="h-4 w-4 text-[#2496ED]" />
    case 'redis':
      return <SiRedis className="h-4 w-4 text-[#DC382D]" />
    default:
      return <Boxes className="h-4 w-4 text-gray-500" />
  }
}

function renderFormattedTitle(title) {
  if (!title) return ''
  const words = title.split(' ')
  return words.map((word, idx) => {
    // If the word contains "Commerce" or "Agent" or "Attractor" or similar key brand words, render it with gradient highlight!
    if (/commerce|agent|collaboration|triaging|packer|graphics/i.test(word)) {
      return (
        <span key={idx} className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          {word}{' '}
        </span>
      )
    }
    return <span key={idx}>{word} </span>
  })
}

function getHighlightIconStyle(label) {
  switch (label.toLowerCase()) {
    case 'role':
      return 'bg-violet-50/50 border border-violet-100 text-violet-600'
    case 'core focus':
      return 'bg-indigo-50/50 border border-indigo-100 text-indigo-600'
    case 'outcome':
      return 'bg-emerald-50/50 border border-emerald-100 text-emerald-600'
    case 'use case':
      return 'bg-amber-50/50 border border-amber-100 text-[#D97706]'
    case 'audience':
      return 'bg-rose-50/50 border border-rose-100 text-rose-600'
    case 'primary goal':
      return 'bg-sky-50/50 border border-sky-100 text-sky-600'
    default:
      return 'bg-gray-50/50 border border-gray-150 text-gray-600'
  }
}

function getHighlightIcon(label) {
  const iconSize = 20
  const iconClass = "stroke-[2] transition-transform duration-300 group-hover:scale-110"
  switch (label.toLowerCase()) {
    case 'role':
      return <User size={iconSize} className={iconClass} />
    case 'core focus':
      return <Target size={iconSize} className={iconClass} />
    case 'outcome':
      return <TrendingUp size={iconSize} className={iconClass} />
    case 'use case':
      return <Briefcase size={iconSize} className={iconClass} />
    case 'audience':
      return <Users size={iconSize} className={iconClass} />
    case 'primary goal':
      return <Flag size={iconSize} className={iconClass} />
    default:
      return <Layers size={iconSize} className={iconClass} />
  }
}

function getSolutionPoints(slug) {
  switch (slug) {
    case 'studioflow':
      return [
        'AI-powered product data extraction from images & voice',
        'Automated categorization & intelligent inventory mapping',
        'Real-time dashboard for catalog & inventory operations',
        'Scalable microservice architecture with clean API layer'
      ]
    case 'portfolio':
      return [
        'LangChain-based RAG pipeline with real-time vector search',
        'Context-aware developer journey and project intelligence',
        'Streamlined React assistant interface with fluid animations',
        'Multi-model routing with strict intent guardrails'
      ]
    case 'marketpulse':
      return [
        'Custom 3D bin-packing space optimization algorithm',
        'High-fidelity real-time 3D loading plans via Qt 3D',
        'Relational load dimension calculations under weight limits',
        'Interactive C++ desktop interface with zero-latency render'
      ]
    case 'campus-connect':
      return [
        'Centralized academic tracking for attendance and notices',
        'Relational student database mapping under PostgreSQL',
        'Role-based faculty dashboard controls and notices queue',
        'Fast state synchronization across classroom assignment modules'
      ]
    case 'insight-board':
      return [
        'Near real-time operational KPI analytics tracker',
        'Supabase-backed live database query updates',
        'Lightweight React dashboard with modular review widgets',
        'Zero-overhead Vercel integration for quick releases'
      ]
    case 'support-flow':
      return [
        'AI-assisted ticket categorization and intent routing',
        'Generative contextual draft suggestions for support agents',
        'Clean Express API layer with high-burst queue workers',
        'Cloudinary integration for structured media attachment tracking'
      ]
    case 'media-ops':
      return [
        'High-volume file ingestion and automated tag pipeline',
        'Cloudinary image transformation and responsive delivery presets',
        'Supabase-based search catalog for real-time asset retrieval',
        'Modular React console showing publication and storage capacity'
      ]
    default:
      return [
        'Scalable frontend architecture with modular React components',
        'Robust data layers designed for secure context isolation',
        'Polished responsive layouts with micro-interaction states',
        'Modern code testing, validation, and zero-downtime release pipelines'
      ]
  }
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)
  const stackItems = project?.stack?.length
    ? project.stack
    : ['React', 'Node.js', 'PostgreSQL']

  const topInfoCards = project?.topInfoCards?.length
    ? project.topInfoCards
    : [
        { label: 'Role', value: project?.role ?? 'Full Stack Development' },
        {
          label: 'Core Focus',
          value: project?.challenge ?? 'Product architecture and implementation',
        },
        { label: 'Outcome', value: project?.outcome ?? 'Improved workflow outcomes' },
      ]

  const statsCards = project?.stats?.length
    ? project.stats
    : [
        { label: 'Use Case', value: 'Business workflow optimization' },
        { label: 'Audience', value: 'Cross-functional product teams' },
        { label: 'Primary Goal', value: 'Ship a reliable and scalable experience' },
      ]

  const caseStudy = {
    overview:
      project?.caseStudy?.overview ??
      'This project was designed to solve a practical product problem with a clear architecture and polished user experience.',
    problem:
      project?.caseStudy?.problem ??
      'The team needed a dependable implementation that reduced operational friction and improved execution quality.',
    approach:
      project?.caseStudy?.approach?.length
        ? project.caseStudy.approach
        : [
            'Planned a modular architecture to keep implementation maintainable as features evolve.',
            'Implemented a focused front-end and API workflow with clear state and data boundaries.',
            'Validated behavior through iterative testing and quality checks before release.',
          ],
    result:
      project?.caseStudy?.result ??
      'The delivered solution improved usability, reduced repetitive manual work, and created a strong base for future iterations.',
  }

  const [activeSection, setActiveSection] = useState('case-study')

  const timelineSteps = [
    { id: 'case-study', num: '01', label: 'Case Study', icon: BookOpen, color: 'bg-violet-50/50 border-violet-100 text-violet-600', activeRing: 'shadow-[0_4px_12px_rgba(124,58,237,0.25)]' },
    { id: 'problem', num: '02', label: 'Problem', icon: HelpCircle, color: 'bg-rose-50/50 border-rose-100 text-rose-600', activeRing: 'shadow-[0_4px_12px_rgba(225,29,72,0.2)]' },
    { id: 'approach', num: '03', label: 'Approach', icon: Lightbulb, color: 'bg-amber-50/50 border-amber-100 text-amber-600', activeRing: 'shadow-[0_4px_12px_rgba(217,119,6,0.2)]' },
    { id: 'solution', num: '04', label: 'Solution', icon: Code2, color: 'bg-indigo-50/50 border-indigo-100 text-indigo-600', activeRing: 'shadow-[0_4px_12px_rgba(79,70,229,0.25)]' },
    { id: 'result', num: '05', label: 'Result', icon: Rocket, color: 'bg-emerald-50/50 border-emerald-100 text-emerald-600', activeRing: 'shadow-[0_4px_12px_rgba(5,150,105,0.2)]' },
  ]

  if (!project) {
    return (
      <main className="min-h-screen px-6 py-20 text-gray-900">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Project Not Found
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            This case study does not exist yet.
          </h1>
          <Link
            to="/projects"
            className="mt-8 inline-flex rounded-full border border-stone-700 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400"
          >
            &lt;- Back
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen text-gray-900 bg-neutral-50/30">
      <SiteHeader isDetailPage />
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-28 sm:px-10 lg:px-16 lg:pb-16">
        
        {/* Back Link styled exactly as mockup */}
        <Link
          to={`/projects#${project.slug}`}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors select-none duration-250 cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>



        {/* Top Info Section: Title, Description, Stack Badges and Video Box */}
        <section className="mt-4 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="flex flex-col justify-center">
            {/* Title formatted with gradient highlighted keyword */}
            <h1 className="max-w-md text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight mt-5">
              {renderFormattedTitle(project.title)}
            </h1>
            
            {/* Description */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-500 font-sans font-medium">
              {project.detailIntro ?? project.summary}
            </p>

            {/* Premium Outline Technology Badges */}
            <div className="mt-8 flex flex-wrap gap-2.5 max-w-xl">
              {stackItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 shadow-sm hover:shadow-md transition-all duration-200 select-none cursor-default"
                >
                  {getStackIcon(item)}
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Standalone Video Box matching the Home page exactly */}
          <div className="w-full flex items-center justify-center">
            <IntroVideoFrame />
          </div>
        </section>

        {/* Combined 5-column Highlights Dashboard Row */}
        <section className="mt-8 border border-gray-200/50 bg-white rounded-3xl p-8 shadow-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-4.5 items-start select-none w-full">
          {[...topInfoCards, ...statsCards]
            .filter((item) => item.label.toLowerCase() !== 'role')
            .map((item) => (
              <div key={item.label} className="group flex flex-col items-center text-center">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border shadow-sm mb-3 select-none transition-all duration-300 ${getHighlightIconStyle(item.label)}`}>
                  {getHighlightIcon(item.label)}
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-900 block mb-1.5 font-sans leading-none">
                  {item.label}
                </span>
                <span className="text-xs text-gray-500 font-semibold leading-relaxed font-sans max-w-[140px]">
                  {item.value}
                </span>
              </div>
            ))}
        </section>

        {/* Two-Column split layout for Case Study details — Tab-based */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-stretch">
          
          {/* Vertical timeline sidebar (Left Column) */}
          <aside className="hidden lg:flex flex-col select-none">
            <div className="relative pl-6 rounded-3xl border border-gray-200/50 bg-white p-6 shadow-sm h-full">
              {/* Vertical connector line track line */}
              <div className="absolute left-[58px] top-10 bottom-10 w-[2px] bg-gray-200/60 z-0" />
              
              {/* Steps list */}
              <div className="space-y-7 relative z-10 flex flex-col justify-center h-full">
                {timelineSteps.map((step) => {
                  const Icon = step.icon
                  const isActive = activeSection === step.id
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveSection(step.id)}
                      className="flex items-center gap-4 text-left group cursor-pointer focus:outline-none w-full"
                    >
                      {/* Active Indicator Pointer Line */}
                      <div className="w-1.5 flex justify-center">
                        {isActive && (
                          <span className="h-4.5 w-1 rounded-full bg-violet-600 shadow-[0_0_8px_rgba(124,58,237,0.4)] animate-pulse" />
                        )}
                      </div>
                      
                      {/* Icon container — unique color per step, matching highlights style */}
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border shadow-sm transition-all duration-300 ${step.color} ${
                        isActive
                          ? `${step.activeRing} scale-105`
                          : 'opacity-60 group-hover:opacity-100 group-hover:scale-105'
                      }`}>
                        <Icon size={18} className="stroke-[2]" />
                      </div>

                      {/* Number & label description stack */}
                      <div className="flex flex-col">
                        <span className={`text-sm font-bold tracking-tight leading-none transition-colors duration-200 ${
                          isActive ? 'text-slate-800' : 'text-gray-400 group-hover:text-gray-700'
                        }`}>
                          {step.label}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </aside>

          {/* Mobile horizontal tab bar (shown on small screens) */}
          <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {timelineSteps.map((step) => {
              const Icon = step.icon
              const isActive = activeSection === step.id
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveSection(step.id)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-2xl border px-4 py-2.5 text-xs font-bold transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-violet-600 border-violet-600 text-white shadow-[0_4px_12px_rgba(124,58,237,0.25)]'
                      : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <Icon size={14} className="stroke-[2]" />
                  {step.label}
                </button>
              )
            })}
          </div>

          {/* Single active card (Right Column) — height matches sidebar */}
          <div className="flex flex-col">
            {/* 01: Case Study overview */}
            {activeSection === 'case-study' && (
              <article 
                key="case-study"
                className="rounded-3xl border border-violet-200/70 bg-violet-50/15 p-7 sm:p-9 shadow-md ring-1 ring-violet-200/20 flex flex-col gap-5 h-full animate-[fadeIn_0.35s_ease-out]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-violet-50/50 border border-violet-100 flex items-center justify-center text-violet-600 shadow-sm select-none">
                    <BookOpen size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-gray-900 leading-none">CASE STUDY</h3>
                </div>
                <div className="flex-1 flex items-start">
                  <p className="text-base leading-relaxed text-gray-600 font-medium font-sans">
                    {caseStudy.overview}
                  </p>
                </div>
              </article>
            )}

            {/* 02: Problem */}
            {activeSection === 'problem' && (
              <article 
                key="problem"
                className="rounded-3xl border border-violet-200/70 bg-violet-50/15 p-7 sm:p-9 shadow-md ring-1 ring-violet-200/20 flex flex-col gap-5 h-full animate-[fadeIn_0.35s_ease-out]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-violet-50/50 border border-violet-100 flex items-center justify-center text-violet-600 shadow-sm select-none">
                    <HelpCircle size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-gray-900 leading-none">PROBLEM</h3>
                </div>
                <div className="flex-1 flex items-start">
                  <p className="text-base leading-relaxed text-gray-600 font-medium font-sans">
                    {caseStudy.problem}
                  </p>
                </div>
              </article>
            )}

            {/* 03: Approach */}
            {activeSection === 'approach' && (
              <article 
                key="approach"
                className="rounded-3xl border border-violet-200/70 bg-violet-50/15 p-7 sm:p-9 shadow-md ring-1 ring-violet-200/20 flex flex-col gap-5 h-full animate-[fadeIn_0.35s_ease-out]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-violet-50/50 border border-violet-100 flex items-center justify-center text-violet-600 shadow-sm select-none">
                    <Lightbulb size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-gray-900 leading-none">APPROACH</h3>
                </div>
                <div className="flex-1 flex items-start">
                  <div className="space-y-3.5">
                    {caseStudy.approach.map((step, idx) => (
                      <p key={idx} className="text-base leading-relaxed text-gray-600 font-medium font-sans m-0">
                        {step}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            )}

            {/* 04: Solution */}
            {activeSection === 'solution' && (
              <article 
                key="solution"
                className="rounded-3xl border border-violet-200/70 bg-violet-50/15 p-7 sm:p-9 shadow-md ring-1 ring-violet-200/20 flex flex-col gap-5 h-full animate-[fadeIn_0.35s_ease-out]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-violet-50/50 border border-violet-100 flex items-center justify-center text-violet-600 shadow-sm select-none">
                    <Code2 size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-gray-900 leading-none">SOLUTION</h3>
                </div>
                <div className="flex-1 flex items-start">
                  <div className="space-y-4 w-full">
                    {getSolutionPoints(project.slug).map((point, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 size={18} className="text-violet-600 mt-1 shrink-0" strokeWidth={2.5} />
                        <p className="text-base leading-snug text-slate-800 font-bold tracking-tight font-sans m-0">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            )}

            {/* 05: Result */}
            {activeSection === 'result' && (
              <article 
                key="result"
                className="rounded-3xl border border-violet-200/70 bg-violet-50/15 p-7 sm:p-9 shadow-md ring-1 ring-violet-200/20 flex flex-col gap-5 h-full animate-[fadeIn_0.35s_ease-out]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-violet-50/50 border border-violet-100 flex items-center justify-center text-violet-600 shadow-sm select-none">
                    <Rocket size={20} strokeWidth={2} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-gray-900 leading-none">RESULT</h3>
                </div>
                <div className="flex-1 flex items-start">
                  <p className="text-base leading-relaxed text-gray-600 font-medium font-sans">
                    {caseStudy.result}
                  </p>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectDetail
