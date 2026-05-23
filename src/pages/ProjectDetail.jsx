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
  Clock,
  Activity,
  AlertTriangle,
  Cpu,
  Terminal,
  Sparkles,
  Database,
  LineChart,
  FileDown,
  Check,
  Download,
  LayoutGrid,
  Shield,
  GitFork,
  Lock,
  Search,
  Award,
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
import CaseStudyMockup from '../components/ui/CaseStudyMockup.jsx'
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

function getProjectCaseStudyDetails(slug, project) {
  const duration = slug === 'studioflow' ? '4 Months'
                 : slug === 'portfolio' ? '3 Months'
                 : slug === 'marketpulse' ? '5 Months'
                 : '3 Months';

  const defaultOverviewText = project?.caseStudy?.overview ?? 'Overview of this modular project.';
  const defaultProblemText = project?.caseStudy?.problem ?? 'Problem statements solved.';
  const defaultApproachText = project?.caseStudy?.approach ?? ['Planned modern architecture.', 'Validated behavior.'];
  const defaultResultText = project?.caseStudy?.result ?? 'Key outcomes achieved.';

  const details = {
    'case-study': {
      badge: '01 OVERVIEW',
      durationLabel: `Project Duration: ${duration}`,
      title: project?.title ?? 'Overview',
      summary: project?.detailIntro ?? project?.summary ?? 'Enterprise scalability review.',
      themeColor: 'violet',
      metricsHeading: 'PROJECT IMPACT',
      metrics: slug === 'studioflow' ? [
        { value: '40%', label: 'Faster Onboarding', icon: 'TrendingUp', color: 'violet' },
        { value: '60%', label: 'Manual Task Reduction', icon: 'Boxes', color: 'emerald' },
        { value: '35%', label: 'Increase in Efficiency', icon: 'LineChart', color: 'amber' },
        { value: '25%', label: 'Better Team Collaboration', icon: 'Users', color: 'blue' }
      ] : slug === 'portfolio' ? [
        { value: '95%', label: 'Retrieval Accuracy', icon: 'Sparkles', color: 'violet' },
        { value: '<1.5s', label: 'Response Latency', icon: 'Clock', color: 'emerald' },
        { value: '100%', label: 'Fact Grounding', icon: 'Check', color: 'amber' },
        { value: '12+', label: 'RAG Data Vectors', icon: 'Database', color: 'blue' }
      ] : slug === 'marketpulse' ? [
        { value: '92%', label: 'Space Utilization', icon: 'LayoutGrid', color: 'violet' },
        { value: '<250ms', label: 'Render Latency', icon: 'Activity', color: 'emerald' },
        { value: '80%', label: 'Planning Time Saved', icon: 'Clock', color: 'amber' },
        { value: '15%', label: 'Fuel Savings', icon: 'Truck', color: 'blue' }
      ] : [
        { value: '90%', label: 'Task Automation', icon: 'Cpu', color: 'violet' },
        { value: '2.5x', label: 'Processing Speed', icon: 'Activity', color: 'emerald' },
        { value: '100%', label: 'Workflow Visibility', icon: 'Layers', color: 'amber' },
        { value: '95%', label: 'User Satisfaction', icon: 'Users', color: 'blue' }
      ],
      aboutHeading: 'About the Project',
      aboutText: defaultOverviewText,
      techHeading: 'TECHNOLOGIES USED',
      tags: project?.stack ?? ['React', 'Node.js', 'PostgreSQL']
    },
    'problem': {
      badge: '02 PROBLEM',
      durationLabel: 'Challenge Severity: High',
      title: slug === 'studioflow' ? 'Manual Inventory & GenAI Pipelines'
             : slug === 'portfolio' ? 'Static Portfolios Limit Understanding'
             : slug === 'marketpulse' ? 'Spatial Inefficiencies & Cargo Waste'
             : 'Operational Bottlenecks & Friction',
      summary: slug === 'studioflow' ? 'Traditional inventory management was slow, error-prone, and required extensive manual data typing.'
             : slug === 'portfolio' ? 'Static showcases fail to explain design patterns, architecture trade-offs, and custom skill matches dynamically.'
             : slug === 'marketpulse' ? 'Planners rely on manual estimation to stack 3D cargo, leaving up to 30% of transport containers completely empty.'
             : 'Repetitive tasks, data isolation, and lack of real-time pipeline automation delayed daily output.',
      themeColor: 'rose',
      metricsHeading: 'KEY PAIN POINTS',
      metrics: slug === 'studioflow' ? [
        { value: '120h', label: 'Weekly Manual Triage', icon: 'Clock', color: 'rose' },
        { value: '42%', label: 'Taxonomy Data Errors', icon: 'AlertTriangle', color: 'rose' },
        { value: '5+', label: 'System Context Switches', icon: 'Layers', color: 'rose' },
        { value: '3-5d', label: 'Listing Publication Lag', icon: 'Activity', color: 'rose' }
      ] : slug === 'portfolio' ? [
        { value: '10+', label: 'Pages Scanned to Match', icon: 'LayoutGrid', color: 'rose' },
        { value: 'Static', label: 'Zero Dynamic Reasoning', icon: 'Activity', color: 'rose' },
        { value: '0%', label: 'Search Intent Analytics', icon: 'Search', color: 'rose' },
        { value: 'Minutes', label: 'Traditional Resume Reading', icon: 'Clock', color: 'rose' }
      ] : slug === 'marketpulse' ? [
        { value: '30%', label: 'Wasted Container Space', icon: 'LayoutGrid', color: 'rose' },
        { value: 'Hours', label: 'Manual Cargo Math', icon: 'Clock', color: 'rose' },
        { value: 'Critical', label: 'Overweight Container Risks', icon: 'AlertTriangle', color: 'rose' },
        { value: 'Delayed', label: 'Dispatch Planning Lag', icon: 'Activity', color: 'rose' }
      ] : [
        { value: '100h+', label: 'Accumulated Workflow Friction', icon: 'Clock', color: 'rose' },
        { value: 'Manual', label: 'Triage Processing', icon: 'AlertTriangle', color: 'rose' },
        { value: 'High', label: 'Operational Context Loss', icon: 'Layers', color: 'rose' },
        { value: 'Slow', label: 'Pipeline Response Time', icon: 'Activity', color: 'rose' }
      ],
      aboutHeading: 'Understanding the Problem',
      aboutText: defaultProblemText,
      techHeading: 'AFFECTED PROCESSES',
      tags: slug === 'studioflow' ? ['Manual Merchandising', 'Variant Configuration', 'Catalog Taxonomy', 'Media Processing']
            : slug === 'portfolio' ? ['Passive Reading', 'Information Retrieval', 'Context Fragmentation', 'Candidate Triage']
            : slug === 'marketpulse' ? ['Spatial Packing Diagrams', 'Weight & Center Gravity Safety', 'Container Packing Speed', 'Supply Chain Audits']
            : ['Manual Triage', 'Coordination Latency', 'Pipeline Interrupts', 'Operations Overload']
    },
    'approach': {
      badge: '03 APPROACH',
      durationLabel: slug === 'studioflow' ? 'Architecture: Multimodal API'
                     : slug === 'portfolio' ? 'Search: Hybrid RAG'
                     : slug === 'marketpulse' ? 'Core: 3D Bin-Packing'
                     : 'Design: Decoupled API',
      title: slug === 'studioflow' ? 'Scalable AI & Database Decoupling'
             : slug === 'portfolio' ? 'Semantic Mapping & Prompt Routing'
             : slug === 'marketpulse' ? 'Algorithmic Optimization & GPU Rendering'
             : 'Flexible Services & Loose Coupling',
      summary: 'Establishing strict operational boundaries, modular hooks, and atomic transactions to guarantee high system stability.',
      themeColor: 'amber',
      metricsHeading: 'STRATEGIC PILLARS',
      metrics: slug === 'studioflow' ? [
        { value: '100%', label: 'Decoupled Server Logs', icon: 'Server', color: 'amber' },
        { value: 'Queue', label: 'Async Task Ingestion', icon: 'Cpu', color: 'amber' },
        { value: 'Atomic', label: 'Database Operations', icon: 'Database', color: 'amber' },
        { value: 'Clean', label: 'System Design Patterns', icon: 'Layers', color: 'amber' }
      ] : slug === 'portfolio' ? [
        { value: 'Vectors', label: 'Semantic Chunking Maps', icon: 'Database', color: 'amber' },
        { value: 'Hybrid', label: 'Embedding + Text Match', icon: 'Search', color: 'amber' },
        { value: 'Router', label: 'Intent Guardrails', icon: 'Cpu', color: 'amber' },
        { value: 'Strict', label: 'Prompt Grounding context', icon: 'Layers', color: 'amber' }
      ] : slug === 'marketpulse' ? [
        { value: 'Math', label: '3D Spatial Heuristics', icon: 'LayoutGrid', color: 'amber' },
        { value: 'C++', label: 'High-Performance Core', icon: 'Cpu', color: 'amber' },
        { value: 'Shader', label: 'Hardware Render Pipeline', icon: 'Activity', color: 'amber' },
        { value: 'Dynamic', label: 'Center of Gravity Logic', icon: 'Layers', color: 'amber' }
      ] : [
        { value: 'REST', label: 'Strict Protocol Standard', icon: 'Server', color: 'amber' },
        { value: 'Decoupled', label: 'Component Organization', icon: 'Layers', color: 'amber' },
        { value: 'Indexed', label: 'Database Access Tuning', icon: 'Database', color: 'amber' },
        { value: 'CI/CD', label: 'Test Pipeline Validation', icon: 'Cpu', color: 'amber' }
      ],
      aboutHeading: 'System Architecture & Engineering',
      aboutText: 'Our engineering strategy prioritized robust component design. We built core processing modules using loose coupling, ensuring that databases, internal queues, and client front-ends communicate through strictly defined, typesafe API schemas.\n\nThis approach eliminates runtime data corruption, provides deterministic state management, and enables seamless system expansion.',
      techHeading: 'DESIGN PRINCIPLES',
      tags: ['Loose Coupling', 'Typesafe Schemas', 'Atomic Processing', 'Defensive Coding']
    },
    'solution': {
      badge: '04 SOLUTION',
      durationLabel: 'Deploy State: Live Production',
      title: slug === 'studioflow' ? 'Multimodal Parser & Real-time Console'
             : slug === 'portfolio' ? 'Context-grounded Assistant Interface'
             : slug === 'marketpulse' ? 'Native Qt 3D Container Console'
             : 'Polished Interactive Dashboard',
      summary: 'A completely realized, production-ready system with highly responsive micro-interactions and smooth operational tools.',
      themeColor: 'indigo',
      metricsHeading: 'CORE CAPABILITIES',
      metrics: slug === 'studioflow' ? [
        { value: 'Vision', label: 'Automated Image Tagging', icon: 'Eye', color: 'indigo' },
        { value: 'Voice', label: 'Audio Transcription Parser', icon: 'AudioLines', color: 'indigo' },
        { value: 'JSON', label: 'Structured Info Extraction', icon: 'Cpu', color: 'indigo' },
        { value: 'Live', label: 'Dashboard Activity Grid', icon: 'LayoutGrid', color: 'indigo' }
      ] : slug === 'portfolio' ? [
        { value: 'RAG', label: 'Vector Index Lookup', icon: 'Database', color: 'indigo' },
        { value: 'Guard', label: 'Hallucination Blockers', icon: 'Lock', color: 'indigo' },
        { value: 'Dynamic', label: 'Floating Assistant Panel', icon: 'LayoutGrid', color: 'indigo' },
        { value: 'Types', label: 'Structured Answer Maps', icon: 'Cpu', color: 'indigo' }
      ] : slug === 'marketpulse' ? [
        { value: 'Qt 3D', label: 'Real-Time Container Views', icon: 'Eye', color: 'indigo' },
        { value: 'Sensor', label: 'Center of Gravity Sensor', icon: 'Activity', color: 'indigo' },
        { value: 'Excel', label: 'Exportable Packing Plans', icon: 'FileDown', color: 'indigo' },
        { value: 'C++', label: 'Native Signal-Slot UI', icon: 'Cpu', color: 'indigo' }
      ] : [
        { value: 'Web', label: 'Fully Responsive Platform', icon: 'Globe', color: 'indigo' },
        { value: 'Typesafe', label: 'Strong Schema Validation', icon: 'Lock', color: 'indigo' },
        { value: 'Dynamic', label: 'State Component Update', icon: 'LayoutGrid', color: 'indigo' },
        { value: 'Fast', label: 'Aggressive Query Caching', icon: 'Cpu', color: 'indigo' }
      ],
      aboutHeading: 'Key Technical Implementation',
      aboutText: 'The resulting system unifies automated processing with intuitive UI dashboards. We combined lightning-fast server endpoints with clean component state loops to deliver zero-friction user feedback.\n\nThe layout includes robust exception catch boundaries, security validations, and reactive elements to provide a beautiful, seamless execution experience.',
      techHeading: 'ENGINEERING ASSETS',
      tags: getSolutionPoints(slug)
    },
    'result': {
      badge: '05 RESULTS',
      durationLabel: 'Business Impact: Exceptional',
      title: 'Measurable Outcomes & Growth',
      summary: 'The final system completely eliminated manual friction, drastically accelerated operations, and created a scalable foundation.',
      themeColor: 'emerald',
      metricsHeading: 'MEASURED OUTCOMES',
      metrics: slug === 'studioflow' ? [
        { value: '40%', label: 'Faster Onboarding', icon: 'TrendingUp', color: 'emerald' },
        { value: '60%', label: 'Manual Task Reduction', icon: 'Boxes', color: 'emerald' },
        { value: '35%', label: 'Increase in Efficiency', icon: 'LineChart', color: 'emerald' },
        { value: '25%', label: 'Better Team Collaboration', icon: 'Users', color: 'emerald' }
      ] : slug === 'portfolio' ? [
        { value: '95%', label: 'Retrieval Accuracy', icon: 'Sparkles', color: 'emerald' },
        { value: '<1.5s', label: 'Response Latency', icon: 'Clock', color: 'emerald' },
        { value: '100%', label: 'Fact Grounding', icon: 'Check', color: 'emerald' },
        { value: '12+', label: 'RAG Data Vectors', icon: 'Database', color: 'emerald' }
      ] : slug === 'marketpulse' ? [
        { value: '92%', label: 'Space Utilization', icon: 'LayoutGrid', color: 'emerald' },
        { value: '<250ms', label: 'Render Latency', icon: 'Activity', color: 'emerald' },
        { value: '80%', label: 'Planning Time Saved', icon: 'Clock', color: 'emerald' },
        { value: '15%', label: 'Fuel Savings', icon: 'Truck', color: 'emerald' }
      ] : [
        { value: '90%', label: 'Task Automation', icon: 'Cpu', color: 'emerald' },
        { value: '2.5x', label: 'Processing Speed', icon: 'Activity', color: 'emerald' },
        { value: '100%', label: 'Workflow Visibility', icon: 'Layers', color: 'emerald' },
        { value: '95%', label: 'User Satisfaction', icon: 'Users', color: 'emerald' }
      ],
      aboutHeading: 'Business & Operational Impact',
      aboutText: defaultResultText,
      techHeading: 'IMPACT AREAS',
      tags: slug === 'studioflow' ? ['E-Commerce Merchandising', 'Stock Management Speed', 'Catalog Taxonomy', 'Data Quality Control']
            : slug === 'portfolio' ? ['Recruiter Engagement', 'Developer Showcase Speed', 'Fact Grounded AI', 'Portfolio Reach']
            : slug === 'marketpulse' ? ['Logistics Fuel Consumption', 'Dispatch Planning Throughput', 'Fleet Operational Overhead', 'Safety Regulation Standards']
            : ['Automation Coverage', 'Processing Throughput', 'System Reliability', 'User Ergonomics']
    }
  };

  return details;
}

const iconMap = {
  TrendingUp,
  Boxes,
  LineChart,
  Users,
  Clock,
  Activity,
  AlertTriangle,
  Cpu,
  Terminal,
  Sparkles,
  Database,
  FileDown,
  Check,
  Download,
  LayoutGrid,
  Layers,
  Shield,
  Brain: BrainCircuit,
  GitFork,
  Rocket,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Code2,
  CheckCircle2,
  Eye,
  AudioLines,
  Lock,
  Truck,
  Search,
  Award,
}

function renderTag(item, themeColor) {
  const icon = getStackIcon(item)
  // If getStackIcon returns default Boxes icon (grey), let's render a custom styled dot matching the themeColor
  const isDefaultIcon = icon.props.className.includes('text-gray-500')

  const themeDotClasses = {
    violet: 'bg-violet-500 shadow-violet-500/20',
    rose: 'bg-rose-500 shadow-rose-500/20',
    amber: 'bg-amber-500 shadow-amber-500/20',
    indigo: 'bg-indigo-500 shadow-indigo-500/20',
    emerald: 'bg-emerald-500 shadow-emerald-500/20',
  }[themeColor] || 'bg-violet-500'

  return (
    <span
      key={item}
      className="inline-flex items-center gap-2 rounded-xl border border-neutral-100 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm select-none cursor-default transition-all duration-200 hover:border-neutral-200 hover:shadow-md animate-[fadeIn_0.2s_ease-out]"
    >
      {isDefaultIcon ? (
        <span className={`w-1.5 h-1.5 rounded-full ${themeDotClasses} shrink-0`} />
      ) : (
        icon
      )}
      {item}
    </span>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  const [activeSection, setActiveSection] = useState('case-study')

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

  const caseStudyDetails = getProjectCaseStudyDetails(project.slug, project)
  const currentStep = caseStudyDetails[activeSection] || caseStudyDetails['case-study']

  const timelineSteps = [
    {
      id: 'case-study',
      num: '01',
      label: 'Overview',
      desc: 'Project summary & impact',
      icon: BookOpen,
      activeColor: 'bg-violet-600 border-violet-600 text-white',
      activeText: 'text-violet-600',
      activeRing: 'shadow-[0_4px_14px_rgba(124,58,237,0.35)]',
      stepColor: 'text-violet-500',
    },
    {
      id: 'problem',
      num: '02',
      label: 'Problem',
      desc: 'The challenges we solved',
      icon: HelpCircle,
      activeColor: 'bg-rose-600 border-rose-600 text-white',
      activeText: 'text-rose-600',
      activeRing: 'shadow-[0_4px_14px_rgba(225,29,72,0.3)]',
      stepColor: 'text-rose-500',
    },
    {
      id: 'approach',
      num: '03',
      label: 'Approach',
      desc: 'Our strategy & solution',
      icon: Lightbulb,
      activeColor: 'bg-amber-500 border-amber-500 text-white',
      activeText: 'text-amber-600',
      activeRing: 'shadow-[0_4px_14px_rgba(245,158,11,0.3)]',
      stepColor: 'text-amber-500',
    },
    {
      id: 'solution',
      num: '04',
      label: 'Solution',
      desc: 'Key features & capabilities',
      icon: Code2,
      activeColor: 'bg-indigo-600 border-indigo-600 text-white',
      activeText: 'text-indigo-600',
      activeRing: 'shadow-[0_4px_14px_rgba(79,70,229,0.35)]',
      stepColor: 'text-indigo-500',
    },
    {
      id: 'result',
      num: '05',
      label: 'Result',
      desc: 'Outcomes & business impact',
      icon: Rocket,
      activeColor: 'bg-emerald-600 border-emerald-600 text-white',
      activeText: 'text-emerald-600',
      activeRing: 'shadow-[0_4px_14px_rgba(16,185,129,0.3)]',
      stepColor: 'text-emerald-500',
    },
  ]

  const handleDownload = (e) => {
    e.preventDefault()
    window.print()
  }

  return (
    <main className="min-h-screen text-gray-900 bg-neutral-50/30">
      <SiteHeader isDetailPage />

      {/* Container matching mockup page sizing */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-24">

        {/* Top bar back link outside layout grid (Mobile only) */}
        <div className="mb-6 lg:hidden">
          <Link
            to={`/projects#${project.slug}`}
            className="group inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-700 transition-colors select-none duration-250 cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Dynamic Two-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-8 items-start w-full">

          {/* LEFT COLUMN: Sidebar timeline navigation */}
          <aside className="hidden lg:block select-none w-full lg:sticky lg:top-[100px]">
            {/* Desktop sticky back link */}
            <div className="mb-6">
              <Link
                to={`/projects#${project.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-700 transition-colors select-none duration-250 cursor-pointer"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Projects</span>
              </Link>
            </div>
            
            <div className="relative rounded-[28px] border border-neutral-100 bg-white p-7 shadow-xl shadow-neutral-100/30 w-full">
              
              {/* Steps vertical container */}
              <div className="space-y-6 relative z-10 w-full flex flex-col pt-2">
                {timelineSteps.map((step) => {
                  const isActive = activeSection === step.id
                  
                  const indicatorColor = {
                    'case-study': 'bg-violet-600 shadow-[0_0_8px_rgba(124,58,237,0.4)]',
                    'problem': 'bg-rose-600 shadow-[0_0_8px_rgba(244,63,94,0.4)]',
                    'approach': 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]',
                    'solution': 'bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.4)]',
                    'result': 'bg-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.4)]',
                  }[step.id] || 'bg-violet-600';

                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveSection(step.id)}
                      className="flex items-center gap-4 text-left group cursor-pointer focus:outline-none w-full relative py-1"
                    >
                      {/* Left pointer tick - fixed layout space to prevent horizontal shifting */}
                      <div className="w-2 flex justify-center shrink-0">
                        <span className={`h-5 w-1 rounded-full transition-all duration-300 ${
                          isActive 
                            ? `${indicatorColor} opacity-100 scale-100 animate-pulse` 
                            : 'bg-transparent opacity-0 scale-0'
                        }`} />
                      </div>

                      {/* Labels and subtext */}
                      <div className="flex flex-col min-w-0 pr-2">
                        <span className={`text-[13px] font-extrabold tracking-tight leading-none transition-colors duration-200 ${
                          isActive ? 'text-slate-800 font-black' : 'text-slate-700 group-hover:text-slate-900'
                        }`}>
                          {step.label}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold mt-1.5 leading-snug whitespace-nowrap overflow-hidden text-ellipsis max-w-[220px]">
                          {step.desc}
                        </span>
                      </div>
                    </button>
                  )
                })}

                {/* Download Case Study button placed directly below Result stepper item */}
                <div 
                  onClick={handleDownload}
                  className="border border-neutral-100/80 bg-neutral-50/30 p-4 rounded-2.5xl flex items-center gap-3.5 mt-8 select-none hover:bg-neutral-50 transition-colors duration-200 cursor-pointer w-full"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 shrink-0 select-none border border-violet-100/50 shadow-sm">
                    <Download size={16} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11.5px] font-extrabold text-slate-800 tracking-tight leading-none">Download Case Study</span>
                  </div>
                </div>
              </div>

            </div>
          </aside>

          {/* MOBILE TABS HEADER (Hidden on desktop) */}
          <div className="lg:hidden flex gap-2.5 overflow-x-auto pb-3 -mx-2 px-2 scrollbar-hide shrink-0 select-none">
            {timelineSteps.map((step) => {
              const Icon = step.icon
              const isActive = activeSection === step.id
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveSection(step.id)}
                  className={`flex items-center gap-2.5 whitespace-nowrap rounded-2xl border px-4 py-3 text-xs font-black transition-all duration-300 shrink-0 ${
                    isActive
                      ? 'bg-violet-600 border-violet-600 text-white shadow-[0_4px_12px_rgba(124,58,237,0.25)]'
                      : 'bg-white border-neutral-150 text-slate-500 hover:border-neutral-300 hover:text-slate-800'
                  }`}
                >
                  <Icon size={14} className="stroke-[2.5]" />
                  {step.label}
                </button>
              )
            })}
          </div>

          {/* RIGHT COLUMN: Interactive dynamic content panel */}
          <div className="flex flex-col w-full h-full min-h-[580px]">
            <article 
              key={activeSection}
              className="bg-white border border-neutral-100 rounded-[32px] p-6 sm:p-10 shadow-xl shadow-neutral-100/30 w-full h-full flex flex-col justify-between animate-fadeIn relative overflow-hidden"
            >
              <div>
                {/* 2. Main Title & Description */}
                <h2 className="mt-2 text-2.5xl sm:text-3xl font-black tracking-tight text-slate-800 font-sans leading-tight">
                  {currentStep.title}
                </h2>
                <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-500 font-sans font-semibold">
                  {currentStep.summary}
                </p>

                {/* 3. Horizontal Stats metrics box */}
                <div className="mt-8">
                  <div className="border border-neutral-100/80 bg-slate-50/30 p-5 rounded-[24px] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 items-center w-full select-none shadow-sm">
                    {currentStep.metrics.map((metric, idx) => {
                      const MetricIcon = iconMap[metric.icon] || Cpu

                      const circleColors = {
                        violet: 'bg-violet-50 text-violet-600 border-violet-100 shadow-violet-100/20',
                        rose: 'bg-rose-50 text-rose-600 border-rose-100 shadow-rose-100/20',
                        amber: 'bg-amber-50 text-amber-600 border-amber-100 shadow-amber-100/20',
                        indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100 shadow-indigo-100/20',
                        emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-emerald-100/20',
                        blue: 'bg-sky-50 text-sky-600 border-sky-100 shadow-sky-100/20',
                      }[metric.color] || 'bg-violet-50 text-violet-600 border-violet-100'

                      const textColors = {
                        violet: 'text-violet-600',
                        rose: 'text-rose-600',
                        amber: 'text-amber-600',
                        indigo: 'text-indigo-600',
                        emerald: 'text-emerald-600',
                        blue: 'text-sky-600',
                      }[metric.color] || 'text-violet-600'

                      return (
                        <div key={idx} className="flex items-center gap-3.5 group/metric select-none">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border shadow-sm transition-all duration-300 group-hover/metric:scale-105 ${circleColors}`}>
                            <MetricIcon size={16} strokeWidth={2.5} />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className={`text-base sm:text-lg font-black tracking-tight leading-none ${textColors}`}>
                              {metric.value}
                            </span>
                            <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-500 mt-1 leading-snug whitespace-nowrap overflow-hidden text-ellipsis max-w-[95px] tracking-tight">
                              {metric.label}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* 4. Bottom Split Layout (Text/Tags & Mockup Illustration) */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-8 items-start w-full">

                  {/* Left: About Text & Tags */}
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-tight leading-none uppercase">
                      {currentStep.aboutHeading}
                    </h3>
                    <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-500 font-semibold font-sans whitespace-pre-line">
                      {currentStep.aboutText}
                    </p>

                    <span className="mt-7 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2.5 font-sans">
                      {currentStep.techHeading}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentStep.tags.map((tag) => renderTag(tag, currentStep.themeColor))}
                    </div>
                  </div>

                  {/* Right: Mockup Illustration Graphic */}
                  <div className="w-full flex justify-center shrink-0">
                    <CaseStudyMockup tab={activeSection} slug={project.slug} themeColor={currentStep.themeColor} />
                  </div>

                </div>
              </div>
            </article>
          </div>

        </div>

      </div>
    </main>
  )
}

export default ProjectDetail
