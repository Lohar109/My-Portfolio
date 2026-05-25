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
import { projects } from '../data/projects.js'

function getStackIcon(item) {
  switch (item.toLowerCase()) {
    case 'c++':
      return <SiCplusplus className="h-4 w-4 text-[#00599C]" />
    case 'qt framework':
    case 'qt 6 framework':
      return <SiQt className="h-4 w-4 text-[#41CD52]" />
    case 'qt 3d':
      return <Cuboid className="h-4 w-4 text-violet-500" />
    case 'qt render':
      return <Layers3 className="h-4 w-4 text-sky-500" />
    case 'qt charts':
      return <LineChart className="h-4 w-4 text-indigo-500" />
    case 'json storage':
      return <Database className="h-4 w-4 text-[#336791]" />
    case 'gmail smtp (otp)':
      return <Shield className="h-4 w-4 text-amber-500" />
    case 'optimization algorithms':
    case 'optimization algos':
      return <BrainCircuit className="h-4 w-4 text-amber-600" />
    case 'logistics tech':
      return <Truck className="h-4 w-4 text-emerald-600" />
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
        'Custom 3D bin-packing algorithm in C++',
        'Real-time Qt3D loading visualization',
        'Gmail SMTP email OTP on registration',
        'Layer-wise & product PDF export',
        'JSON-based persistent data storage',
        'Qt Charts fill percentage pie chart',
        '5 product types with icon support',
        'Duplicate & weight validation'
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

function getProblemCards(slug) {
  switch (slug) {
    case 'marketpulse':
      return [
        {
          icon: Boxes,
          iconColor: 'text-amber-700',
          iconBg: 'bg-amber-50',
          title: 'Manual cargo packing',
          description: 'Workers manually decided product placement, which led to wrong stacking, wasted volume, and rework.',
        },
        {
          icon: LayoutGrid,
          iconColor: 'text-rose-700',
          iconBg: 'bg-rose-50',
          title: 'Wasted container space',
          description: 'No optimal arrangement meant containers were never fully filled, increasing the number of trips needed.',
        },
        {
          icon: AlertTriangle,
          iconColor: 'text-indigo-700',
          iconBg: 'bg-indigo-50',
          title: 'Weight distribution errors',
          description: 'Without a system, items were placed incorrectly, creating imbalanced loads that risked damage in transit.',
        },
        {
          icon: Eye,
          iconColor: 'text-emerald-700',
          iconBg: 'bg-emerald-50',
          title: 'No visual loading plan',
          description: 'There was no tool to visualize how products fit together in 3D before loading began.',
        },
        {
          icon: Clock,
          iconColor: 'text-sky-700',
          iconBg: 'bg-sky-50',
          title: 'No fill-rate tracking',
          description: 'Teams had no way to know what percentage of a container was used, so overpacking and underpacking were common.',
        },
        {
          icon: FileDown,
          iconColor: 'text-rose-700',
          iconBg: 'bg-rose-50',
          title: 'No reportable output',
          description: 'Loading plans existed only in workers\' heads, so nothing could be saved, printed, or shared with the team.',
        },
      ]
    case 'portfolio':
      return [
        {
          icon: Search,
          iconColor: 'text-rose-700',
          iconBg: 'bg-rose-50',
          title: 'Static navigation',
          description: 'Visitors had to manually scan pages to find the right skills, projects, or experience.',
        },
        {
          icon: Layers,
          iconColor: 'text-indigo-700',
          iconBg: 'bg-indigo-50',
          title: 'Fragmented context',
          description: 'The site did not connect projects, stack, and achievements into a single reasoning flow.',
        },
        {
          icon: Clock,
          iconColor: 'text-amber-700',
          iconBg: 'bg-amber-50',
          title: 'Slow evaluation',
          description: 'Recruiters and collaborators spent too long gathering enough information to understand fit.',
        },
        {
          icon: AlertTriangle,
          iconColor: 'text-emerald-700',
          iconBg: 'bg-emerald-50',
          title: 'Weak intent matching',
          description: 'A normal portfolio could not adapt answers to the user\'s actual question or context.',
        },
        {
          icon: Eye,
          iconColor: 'text-sky-700',
          iconBg: 'bg-sky-50',
          title: 'No reasoning layer',
          description: 'The site lacked a semantic layer to explain the work behind each decision in the project.',
        },
        {
          icon: FileDown,
          iconColor: 'text-violet-700',
          iconBg: 'bg-violet-50',
          title: 'No shareable snapshot',
          description: 'There was no structured summary that could be exported or quickly reused in a conversation.',
        },
      ]
    default:
      return [
        {
          icon: Clock,
          iconColor: 'text-rose-700',
          iconBg: 'bg-rose-50',
          title: 'Manual workflow delays',
          description: 'Repeated manual steps slowed down daily execution and reduced overall output.',
        },
        {
          icon: AlertTriangle,
          iconColor: 'text-indigo-700',
          iconBg: 'bg-indigo-50',
          title: 'Operational friction',
          description: 'Teams had to switch contexts too often, which made the process harder to manage.',
        },
        {
          icon: Layers,
          iconColor: 'text-amber-700',
          iconBg: 'bg-amber-50',
          title: 'Lack of clarity',
          description: 'Information was spread across systems instead of being presented in one clear view.',
        },
        {
          icon: Eye,
          iconColor: 'text-emerald-700',
          iconBg: 'bg-emerald-50',
          title: 'Limited visibility',
          description: 'Without a visual system, it was difficult to understand the state of the work at a glance.',
        },
        {
          icon: FileDown,
          iconColor: 'text-sky-700',
          iconBg: 'bg-sky-50',
          title: 'No exportable trail',
          description: 'There was no clean way to save the process into a usable report or handoff format.',
        },
        {
          icon: Boxes,
          iconColor: 'text-violet-700',
          iconBg: 'bg-violet-50',
          title: 'Fragmented execution',
          description: 'The workflow depended on scattered manual decisions instead of one coordinated system.',
        },
      ]
  }
}

function getLoadingOptimizationApproach(slug) {
  if (slug !== 'marketpulse') return null

  return {
    steps: [
      {
        icon: Target,
        iconColor: 'text-sky-600',
        iconBg: 'bg-sky-50',
        title: 'Problem research',
        description: 'Understood the bin-packing problem and studied the Extreme Point method.',
      },
      {
        icon: Code2,
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50',
        title: 'Algorithm in C++',
        description: 'Implemented 3D placement logic with overlap detection and boundary checks.',
      },
      {
        icon: Cuboid,
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-50',
        title: 'Qt3D rendering',
        description: 'Rendered placed boxes in real-time 3D with orbit camera controls.',
      },
      {
        icon: LayoutGrid,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
        title: 'UI & features',
        description: 'Built login, product forms, container selection, pie chart, and saved data system.',
      },
      {
        icon: FileDown,
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-50',
        title: 'PDF export & testing',
        description: 'Added layer-wise 2D export, product summary PDF, and tested all edge cases.',
      },
    ],
    principles: [
      {
        icon: GitFork,
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50',
        title: 'Algorithm first',
        description: 'Core logic before UI.',
      },
      {
        icon: Eye,
        iconColor: 'text-sky-600',
        iconBg: 'bg-sky-50',
        title: 'Visual feedback',
        description: 'Every action shows in 3D live.',
      },
      {
        icon: Database,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
        title: 'Data persistence',
        description: 'JSON saves all sessions.',
      },
      {
        icon: Shield,
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50',
        title: 'Input validation',
        description: 'No duplicates or invalid data.',
      },
    ],
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
             : slug === 'marketpulse' ? 'Wasted Space & Manual Cargo Planning'
             : 'Operational Bottlenecks & Friction',
      summary: slug === 'studioflow' ? 'Traditional inventory management was slow, error-prone, and required extensive manual data typing.'
             : slug === 'portfolio' ? 'Static showcases fail to explain design patterns, architecture trade-offs, and custom skill matches dynamically.'
             : slug === 'marketpulse' ? 'Logistics workers manually guess how to stack cargo — wasting container space, increasing shipping trips, and making costly packing errors.'
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
      problemCards: getProblemCards(slug),
      techHeading: 'AFFECTED PROCESSES',
      tags: slug === 'studioflow' ? ['Manual Merchandising', 'Variant Configuration', 'Catalog Taxonomy', 'Media Processing']
            : slug === 'portfolio' ? ['Passive Reading', 'Information Retrieval', 'Context Fragmentation', 'Candidate Triage']
            : slug === 'marketpulse' ? ['Container Space Utilization', 'Cargo Weight Distribution', 'Manual Packing Time', 'Shipping Trip Count', 'Loading Plan Accuracy']
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
             : slug === 'marketpulse' ? 'Extreme Point Algorithm with Real-Time 3D Rendering'
             : 'Flexible Services & Loose Coupling',
      summary: slug === 'marketpulse'
        ? 'Used a geometric 3D bin-packing algorithm to automatically place products inside containers without overlapping, and visualized the result live using Qt3D.'
        : 'Establishing strict operational boundaries, modular hooks, and atomic transactions to guarantee high system stability.',
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
      aboutHeading: slug === 'marketpulse' ? 'How it works' : 'System Architecture & Engineering',
      aboutText: slug === 'marketpulse'
        ? 'The core of this software is the Extreme Point Method — a 3D bin-packing algorithm that I implemented in C++. The idea is simple: we start with one empty slot at position (0, 0, 0) inside the container. When a product is placed at that point, three new candidate positions are generated — one along the X axis (to the right of the placed box), one along the Y axis (on top of it), and one along the Z axis (behind it). The next product tries each of these points one by one. Before placing, the algorithm checks two things — first, whether the product fits within the container boundaries, and second, whether it overlaps with any already placed product. If both checks pass, it gets placed and three more points are added. This continues until all products are placed or no valid position is found. The result is then rendered using Qt3D as a live 3D wireframe container filled with colored boxes, where each product type has its own unique color assigned by the user. An orbit camera controller lets you rotate and inspect the loaded container from any angle.'
        : 'Our engineering strategy prioritized robust component design. We built core processing modules using loose coupling, ensuring that databases, internal queues, and client front-ends communicate through strictly defined, typesafe API schemas.\n\nThis approach eliminates runtime data corruption, provides deterministic state management, and enables seamless system expansion.',
      loadingOptimizationApproach: getLoadingOptimizationApproach(slug),
      techHeading: 'DESIGN PRINCIPLES',
      tags: slug === 'marketpulse'
        ? ['Extreme Point Algorithm', '3D Bin Packing', 'Overlap Detection', 'Qt3D Real-Time Rendering', 'JSON Persistence', 'OTP Email Verification']
        : ['Loose Coupling', 'Typesafe Schemas', 'Atomic Processing', 'Defensive Coding']
    },
    'solution': {
      badge: '04 SOLUTION',
      durationLabel: 'Deploy State: Live Production',
      title: slug === 'studioflow' ? 'Multimodal Parser & Real-time Console'
             : slug === 'portfolio' ? 'Context-grounded Assistant Interface'
             : slug === 'marketpulse' ? 'Complete C++ Desktop App — From Login to 3D Loading Plan'
             : 'Polished Interactive Dashboard',
      summary: slug === 'marketpulse'
        ? 'A fully working desktop application with user registration, email OTP, product management, container selection, live 3D packing, and PDF export — all built in C++ with Qt6.'
        : 'A completely realized, production-ready system with highly responsive micro-interactions and smooth operational tools.',
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
      aboutText: slug === 'marketpulse'
        ? 'The software works end to end. A user first registers with their name, company name, email, mobile number, and password. Email verification uses a 6-digit OTP sent via Gmail SMTP directly from the app — built using Qt\'s SSL socket. After login, users can add and save products with name, type (box, bag, barrel, sack, pipe), dimensions in centimeters, weight in kg, and quantity — all stored in a local JSON file. Users can also save multiple trucks, containers, train bogis, and warehouses. When loading, you select a container, pick products from your saved list (or enter them directly), assign a unique color to each product type, and hit "Add in Container." The algorithm runs instantly and the 3D view updates live. Users can add or remove products one at a time and watch the container re-pack in real time. A pie chart shows filled vs empty percentage. Finally, two types of PDF reports can be exported — one showing the product summary with type icons and colors, and one showing a layer-wise 2D visual of every Z-depth layer in the container.'
        : 'The resulting system unifies automated processing with intuitive UI dashboards. We combined lightning-fast server endpoints with clean component state loops to deliver zero-friction user feedback.\n\nThe layout includes robust exception catch boundaries, security validations, and reactive elements to provide a beautiful, seamless execution experience.',
      techHeading: 'ENGINEERING ASSETS',
      tags: getSolutionPoints(slug)
    },
    'result': {
      badge: '05 RESULTS',
      durationLabel: 'Business Impact: Exceptional',
      title: slug === 'marketpulse' ? 'Won Competition · Got 4.8 LPA Job Offer as a Student' : 'Measurable Outcomes & Growth',
      summary: slug === 'marketpulse'
        ? 'This project was selected as the best submission in a C++ challenge by Webtech Developers Pvt. Ltd., Pune — earning a full-time job offer which I chose to decline to complete my MCA.'
        : 'The final system completely eliminated manual friction, drastically accelerated operations, and created a scalable foundation.',
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
            : slug === 'marketpulse' ? ['Won coding competition', '4.8 LPA job offer received', 'Manual loading time — seconds', 'Zero packing overlap errors', 'PDF report export', 'Industry recognized project']
            : ['Automation Coverage', 'Processing Throughput', 'System Reliability', 'User Ergonomics']
    },
    'images': {
      badge: '06 IMAGES',
      durationLabel: 'Media Assets: Interactive',
      title: 'Interactive Design & Interface Mockups',
      summary: 'Explore the high-fidelity user interface states, systems pipelines, and real-time visualization dashboards engineered for this project.',
      themeColor: 'violet',
      aboutHeading: 'Interface & Architecture Mockups',
      aboutText: 'This interactive gallery showcases the primary operational states of the platform. Switch between the different views to see live charts, bottleneck flowcharts, pipeline architecture schemes, interactive terminal mockups, and performance reports.',
      techHeading: 'VISUAL ASSETS',
      tags: ['System Mockups', 'State Visualizations', 'Interactive Previews', 'UI Prototypes']
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
    {
      id: 'images',
      num: '06',
      label: 'Images',
      desc: 'Visual mockups & screenshots',
      icon: LayoutGrid,
      activeColor: 'bg-violet-600 border-violet-600 text-white',
      activeText: 'text-violet-600',
      activeRing: 'shadow-[0_4px_14px_rgba(124,58,237,0.35)]',
      stepColor: 'text-violet-500',
    },
  ]



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
                      className="flex items-center gap-4 text-left group cursor-pointer outline-none focus:outline-none focus-visible:outline-none focus:ring-0 w-full relative py-1"
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
                  className={`flex items-center gap-2.5 whitespace-nowrap rounded-2xl border px-4 py-3 text-xs font-black transition-all duration-300 shrink-0 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ${
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
                {/* 2. Main Title & Description (rendered full-width only for non-Overview sections) */}
                {activeSection !== 'case-study' && (
                  <>
                    <h2 className="mt-2 text-2.5xl sm:text-3xl font-black tracking-tight text-slate-800 font-sans leading-tight">
                      {currentStep.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-500 font-sans font-semibold">
                      {currentStep.summary}
                    </p>
                  </>
                )}

                {/* 4. Bottom Layout */}
                {activeSection === 'case-study' ? (
                  <div className="mt-2 flex flex-col gap-8 w-full animate-fadeIn">
                    {/* Upper Split Grid: Project Name & Summary (Left) vs Video (Right) */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.0fr_1.0fr] gap-8 items-start w-full">
                      {/* Left: Title & Summary */}
                      <div className="flex flex-col min-w-0">
                        <h2 className="text-2.5xl sm:text-3xl font-black tracking-tight text-slate-800 font-sans leading-tight animate-slideInUp">
                          {currentStep.title}
                        </h2>
                        <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-500 font-sans font-semibold animate-slideInUp anim-delay-100">
                          {currentStep.summary}
                        </p>
                      </div>

                      {/* Right: Intro Video Player Box */}
                      <div className="w-full flex justify-center shrink-0">
                        <IntroVideoFrame />
                      </div>
                    </div>

                    {/* Middle Full-Width: About the Project */}
                    <div className="w-full flex flex-col min-w-0 animate-slideInUp anim-delay-200">
                      <h3 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-tight leading-none uppercase">
                        {currentStep.aboutHeading}
                      </h3>
                      <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-500 font-semibold font-sans whitespace-pre-line">
                        {currentStep.aboutText}
                      </p>
                    </div>

                    {/* Lower Full-Width: Technologies Used */}
                    <div className="w-full border-t border-neutral-100/70 pt-6">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3 font-sans">
                        {currentStep.techHeading}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentStep.tags.map((tag) => renderTag(tag, currentStep.themeColor))}
                      </div>
                    </div>
                  </div>
                ) : project.slug === 'marketpulse' && activeSection === 'problem' ? (
                  <div className="mt-6 flex flex-col gap-8 w-full animate-fadeIn">
                    <div className="w-full flex flex-col min-w-0">
                      <h3 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-tight leading-none uppercase">
                        {currentStep.aboutHeading}
                      </h3>
                      <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-500 font-semibold font-sans whitespace-pre-line max-w-4xl">
                        {currentStep.aboutText}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                      {currentStep.problemCards?.map((card) => {
                        const Icon = card.icon
                        return (
                          <div
                            key={card.title}
                            className="group rounded-[24px] border border-neutral-200/70 bg-white p-5 sm:p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300"
                          >
                            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconBg} ${card.iconColor} ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105`}>
                              <Icon size={20} strokeWidth={2.25} />
                            </div>
                            <h4 className="mt-4 text-[17px] font-bold tracking-tight text-slate-800 font-sans">
                              {card.title}
                            </h4>
                            <p className="mt-2 text-[14px] leading-relaxed text-slate-600 font-medium font-sans">
                              {card.description}
                            </p>
                          </div>
                        )
                      })}
                    </div>

                    <div className="w-full border-t border-neutral-100/70 pt-6">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3 font-sans">
                        {currentStep.techHeading}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentStep.tags.map((tag) => renderTag(tag, currentStep.themeColor))}
                      </div>
                    </div>
                  </div>
                ) : project.slug === 'marketpulse' && activeSection === 'approach' ? (
                  <div className="mt-6 flex flex-col gap-8 w-full animate-fadeIn">
                    <div className="w-full flex flex-col min-w-0">
                      <h3 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-tight leading-none uppercase">
                        {currentStep.aboutHeading}
                      </h3>
                      <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-500 font-semibold font-sans whitespace-pre-line max-w-4xl">
                        {currentStep.aboutText}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-4 items-start">
                      {currentStep.loadingOptimizationApproach?.steps.map((step, idx) => {
                        const Icon = step.icon
                        return (
                          <div key={step.title} className="relative flex flex-col items-center text-center px-2">
                            {idx < currentStep.loadingOptimizationApproach.steps.length - 1 && (
                              <div className="hidden lg:flex absolute top-10 left-[calc(50%+2.75rem)] right-[-1.25rem] items-center justify-center text-slate-300 text-2xl font-light select-none pointer-events-none">
                                →
                              </div>
                            )}

                            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${step.iconBg} ${step.iconColor} shadow-sm ring-1 ring-black/5`}>
                              <Icon size={22} strokeWidth={2.3} />
                            </div>

                            <h4 className="mt-5 text-[17px] font-bold tracking-tight text-slate-800 font-sans leading-snug">
                              {step.title}
                            </h4>
                            <p className="mt-2 text-[14px] leading-relaxed text-slate-600 font-medium font-sans max-w-[15rem]">
                              {step.description}
                            </p>
                          </div>
                        )
                      })}
                    </div>

                    <div className="pt-2">
                      <h4 className="text-sm sm:text-[15px] font-black uppercase tracking-[0.18em] text-slate-600">
                        KEY PRINCIPLES FOLLOWED
                      </h4>

                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                        {currentStep.loadingOptimizationApproach?.principles.map((item) => {
                          const Icon = item.icon
                          return (
                            <div key={item.title} className="rounded-2xl border border-[#ece8db] bg-[#f7f5ee] px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                              <div className="flex items-start gap-3">
                                <div className={`mt-0.5 shrink-0 ${item.iconColor}`}>
                                  <Icon size={18} strokeWidth={2.4} />
                                </div>
                                <div>
                                  <h5 className="text-[16px] font-bold tracking-tight text-slate-800 font-sans">
                                    {item.title}
                                  </h5>
                                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600 font-medium font-sans">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      <div className="w-full border-t border-neutral-100/70 pt-6 mt-8">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3 font-sans">
                          {currentStep.techHeading}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {currentStep.tags.map((tag) => renderTag(tag, currentStep.themeColor))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : activeSection === 'problem' ? (
                  <div className="mt-8 w-full animate-fadeIn">
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-tight leading-none uppercase">
                        {currentStep.aboutHeading}
                      </h3>
                      <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-500 font-semibold font-sans whitespace-pre-line">
                        {currentStep.aboutText}
                      </p>

                      {/* Lower Full-Width: Technologies Used */}
                      <div className="w-full border-t border-neutral-100/70 pt-6 mt-8">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3 font-sans">
                          {currentStep.techHeading}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {currentStep.tags.map((tag) => renderTag(tag, currentStep.themeColor))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : activeSection === 'images' ? (
                  <div className="mt-8 w-full animate-fadeIn">
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-tight leading-none uppercase">
                        {currentStep.aboutHeading}
                      </h3>
                      <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-500 font-semibold font-sans whitespace-pre-line">
                        {currentStep.aboutText}
                      </p>

                      {/* Premium Image Grid / Placeholder for User's Custom Images */}
                      <div className="mt-8">
                        {project.images && project.images.length > 0 ? (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.images.map((imgSrc, idx) => (
                              <div 
                                key={idx} 
                                className="group relative rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-50 aspect-[4/3] shadow-sm hover:shadow-md transition-all duration-300"
                              >
                                <img 
                                  src={imgSrc} 
                                  alt={`${project.title} screenshot ${idx + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                  <span className="text-white text-xs font-bold font-sans">
                                    View Image {idx + 1}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="border-2 border-dashed border-neutral-200 rounded-[24px] p-8 sm:p-12 text-center flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50/80 transition-all select-none">
                            <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center mb-4 border border-violet-100/50">
                              <LayoutGrid size={20} strokeWidth={2.5} />
                            </div>
                            <h4 className="text-sm font-extrabold text-slate-800 font-sans tracking-tight">No Custom Images Added Yet</h4>
                            <p className="text-xs text-slate-400 mt-2 max-w-sm font-semibold leading-relaxed font-sans">
                              Add image paths (e.g. <code className="bg-white border border-neutral-150 px-1.5 py-0.5 rounded text-[10px] text-violet-600 font-mono">"/images/your-screenshot.png"</code>) to <code className="bg-white border border-neutral-150 px-1.5 py-0.5 rounded text-[10px] text-violet-600 font-mono">src/data/projects.js</code> under the <code className="bg-white border border-neutral-150 px-1.5 py-0.5 rounded text-[10px] text-violet-600 font-mono">images</code> key for this project to showcase your custom gallery here!
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Lower Full-Width: Technologies Used */}
                      <div className="w-full border-t border-neutral-100/70 pt-6 mt-8">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3 font-sans">
                          {currentStep.techHeading}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {currentStep.tags.map((tag) => renderTag(tag, currentStep.themeColor))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 w-full animate-fadeIn">
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-tight leading-none uppercase">
                        {currentStep.aboutHeading}
                      </h3>
                      <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-500 font-semibold font-sans whitespace-pre-line">
                        {currentStep.aboutText}
                      </p>

                      {/* Lower Full-Width: Technologies Used */}
                      <div className="w-full border-t border-neutral-100/70 pt-6 mt-8">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3 font-sans">
                          {currentStep.techHeading}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {currentStep.tags.map((tag) => renderTag(tag, currentStep.themeColor))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          </div>

        </div>

      </div>
    </main>
  )
}

export default ProjectDetail
