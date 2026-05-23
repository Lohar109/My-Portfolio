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

function getHighlightIcon(label) {
  switch (label.toLowerCase()) {
    case 'role':
      return <User size={16} />
    case 'core focus':
      return <Target size={16} />
    case 'outcome':
      return <TrendingUp size={16} />
    case 'use case':
      return <Briefcase size={16} />
    case 'audience':
      return <Users size={16} />
    case 'primary goal':
      return <Flag size={16} />
    default:
      return <Layers size={16} />
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
            to="/#projects"
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
          to="/#projects"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors select-none duration-250 cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Case Study Tag Capsule */}
        <div>
          <div className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-violet-50/50 border border-violet-100/50 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-violet-600 select-none">
            <span className="h-0.5 w-3 bg-violet-500 rounded-full inline-block" />
            <span>Case Study</span>
          </div>
        </div>

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

        {/* Combined 6-column Highlights Dashboard Row */}
        <section className="mt-8 border border-gray-200/50 bg-white rounded-3xl p-8 shadow-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-4.5 items-start select-none w-full">
          {[...topInfoCards, ...statsCards].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <span className="inline-flex h-9.5 w-9.5 items-center justify-center rounded-xl bg-violet-50 border border-violet-100/50 text-violet-600 shadow-sm mb-3">
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

        {/* Case Study Details */}
        <section id="case-study" className="mt-16 grid gap-6">
          <CaseStudySection eyebrow="Case Study">
            <p>{caseStudy.overview}</p>
          </CaseStudySection>

          <CaseStudySection eyebrow="Problem">
            <p>{caseStudy.problem}</p>
          </CaseStudySection>

          <CaseStudySection
            eyebrow="Approach"
            contentClassName="space-y-2 [&>p]:m-0"
          >
            {caseStudy.approach.map((step) => (
              <p key={step}>{step}</p>
            ))}
          </CaseStudySection>

          <CaseStudySection eyebrow="Result">
            <p>{caseStudy.result}</p>
          </CaseStudySection>
        </section>
      </div>
    </main>
  )
}

export default ProjectDetail
