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
  ExternalLink,
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
    case 'careerpilot-ai':
      return [
        'LangChain multi-agent prompt routing server',
        'OpenAI embeddings alignment & ATS scoring algorithms',
        'Interactive real-time mock interview simulator',
        'Custom step-by-step skill roadmap generator'
      ]
    case 'shopease-landing':
      return [
        'Semantic HTML5 structure for high SEO indexability',
        'Responsive layouts using modern CSS Flexbox and Grid',
        'Lightweight vanilla implementations with smooth hover transitions',
        'Accessible inputs and forms with native HTML5 validation'
      ]
    case 'developer-workflow':
      return [
        'Local-first persistent localStorage data architecture',
        'FileReader API base64 file attachments system',
        'Weekly productivity dashboard analytics utilizing Chart.js',
        'Midnight dark and Light mode CSS variable theme switching'
      ]
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
    case 'developer-workflow':
      return [
        {
          icon: LayoutGrid,
          iconColor: 'text-rose-700',
          iconBg: 'bg-rose-50',
          title: 'No centralized task tracker',
          description: 'Developers scattered their tasks across sticky notes, apps, and browser tabs — with no single organized view.',
        },
        {
          icon: LineChart,
          iconColor: 'text-indigo-700',
          iconBg: 'bg-indigo-50',
          title: 'Zero productivity visibility',
          description: 'There was no way to see how many tasks were done in a week, what the current streak was, or how many hours were spent learning.',
        },
        {
          icon: Lock,
          iconColor: 'text-amber-700',
          iconBg: 'bg-amber-50',
          title: 'Lost resources and notes',
          description: 'Documentation links, tutorial URLs, and quick code snippets were saved in random places and constantly lost.',
        },
        {
          icon: FileDown,
          iconColor: 'text-emerald-700',
          iconBg: 'bg-emerald-50',
          title: 'No file-to-task linking',
          description: 'There was no tool where a developer could attach a document or screenshot directly to a specific task.',
        },
        {
          icon: Sparkles,
          iconColor: 'text-sky-700',
          iconBg: 'bg-sky-50',
          title: 'No streak or habit tracking',
          description: 'Developers had no way to know if they had been consistent — no streak counter, no daily completion history.',
        },
        {
          icon: Boxes,
          iconColor: 'text-violet-700',
          iconBg: 'bg-violet-50',
          title: 'Heavy tools for a simple need',
          description: 'Existing tools like Notion or Jira are overkill for personal daily developer workflow — too complex to set up and maintain.',
        },
      ]
    case 'careerpilot-ai':
      return [
        {
          icon: Boxes,
          iconColor: 'text-rose-700',
          iconBg: 'bg-rose-50',
          title: 'Manual resume tailoring',
          description: 'Customizing resumes for every single job description is incredibly time-consuming and tedious.',
        },
        {
          icon: Shield,
          iconColor: 'text-amber-700',
          iconBg: 'bg-amber-50',
          title: 'Generic cover letters',
          description: 'Standard templates lack personalization, failing to highlight matching achievements for specific roles.',
        },
        {
          icon: Terminal,
          iconColor: 'text-indigo-700',
          iconBg: 'bg-indigo-50',
          title: 'No realistic interview practice',
          description: 'General practice questions do not simulate real-time, role-specific follow-up questions.',
        },
        {
          icon: BrainCircuit,
          iconColor: 'text-emerald-700',
          iconBg: 'bg-emerald-50',
          title: 'Unstructured skill roadmaps',
          description: "Candidates don't know exactly what skills to learn next to bridge the gap for their target roles.",
        },
        {
          icon: Search,
          iconColor: 'text-sky-700',
          iconBg: 'bg-sky-50',
          title: 'Poor ATS optimization',
          description: 'Resumes fail to pass through Applicant Tracking Systems because keywords and formats are mismatching.',
        },
        {
          icon: Layers,
          iconColor: 'text-violet-700',
          iconBg: 'bg-violet-50',
          title: 'Disconnected tools',
          description: 'Juggling between resume makers, AI tools, and spreadsheets results in a messy job search flow.',
        },
      ]
    case 'shopease-landing':
      return [
        {
          icon: Boxes,
          iconColor: 'text-violet-700',
          iconBg: 'bg-violet-50',
          title: 'Template-heavy, bloated code',
          description: 'Most e-commerce UIs rely on Bootstrap or templates — leading to unnecessary CSS overhead and hard-to-customize layouts.',
        },
        {
          icon: Shield,
          iconColor: 'text-rose-700',
          iconBg: 'bg-rose-50',
          title: 'Poor accessibility standards',
          description: 'Landing pages built without semantic HTML have no alt text, unlabeled inputs, and no screen reader support — excluding users.',
        },
        {
          icon: Sparkles,
          iconColor: 'text-amber-700',
          iconBg: 'bg-amber-50',
          title: 'No glassmorphism product UI',
          description: 'Standard product card designs look dated. A modern frosted-glass card effect with smooth hover animations was missing.',
        },
        {
          icon: Layers,
          iconColor: 'text-emerald-700',
          iconBg: 'bg-emerald-50',
          title: 'No mobile-first responsiveness',
          description: 'Many hand-coded landing pages break on mobile because Flexbox and Grid media queries are not properly implemented.',
        },
        {
          icon: Search,
          iconColor: 'text-sky-700',
          iconBg: 'bg-sky-50',
          title: 'Zero SEO consideration',
          description: 'Pages built without meta description, keywords, and viewport tags are invisible to search engines and social previews.',
        },
        {
          icon: Code2,
          iconColor: 'text-indigo-700',
          iconBg: 'bg-indigo-50',
          title: 'No reusable frontend foundation',
          description: 'Without a clean, structured HTML/CSS base, adding JavaScript interactivity or a backend later becomes complex and messy.',
        },
      ]
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

function getCoreCapabilities(slug) {
  if (slug !== 'marketpulse') return null

  return [
    {
      icon: Cuboid,
      iconColor: 'text-violet-600',
      iconBg: 'bg-violet-50',
      title: '3D loading viewer',
      description: 'Real-time 3D visualization of packed products in the container with orbit camera rotation.',
    },
    {
      icon: BrainCircuit,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      title: 'Auto bin-packing',
      description: 'Extreme Point algorithm places all products automatically — no manual placement needed.',
    },
    {
      icon: LineChart,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
      title: 'Fill rate pie chart',
      description: 'Live pie chart shows filled vs empty container space percentage after every product is added.',
    },
    {
      icon: FileDown,
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50',
      title: 'PDF report export',
      description: 'Export product summary PDF or layer-wise 2D breakdown of every Z-depth layer in the container.',
    },
    {
      icon: User,
      iconColor: 'text-sky-600',
      iconBg: 'bg-sky-50',
      title: 'Login with OTP',
      description: 'Full registration and login system with 6-digit email OTP verification via Gmail SMTP.',
    },
  ]
}

function getDeveloperWorkflowApproach(slug) {
  if (slug !== 'developer-workflow') return null

  return {
    steps: [
      {
        icon: Target,
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50',
        title: 'Architecture planning',
        description: 'Decided on a localStorage-first, zero-backend approach and designed the multi-page structure with shared CSS.',
      },
      {
        icon: Code2,
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-50',
        title: 'Dashboard & task logic',
        description: 'Built task CRUD with file attachment using FileReader API, real-time progress bar, and pending tasks panel.',
      },
      {
        icon: LineChart,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
        title: 'Analytics & Chart.js',
        description: 'Implemented streak calculation, weekly bar chart with Chart.js, and date-based history search with filtered results.',
      },
      {
        icon: User,
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-50',
        title: 'Profile & Settings pages',
        description: 'Added profile picture upload (base64), social links, bio, theme switching (Midnight/Light), and widget toggle controls.',
      },
      {
        icon: FileDown,
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50',
        title: 'Data export & final polish',
        description: 'Built JSON export/import for full data backup, polished responsive CSS with CSS variables for theming, and deployed on Render.',
      },
    ],
    principles: [
      {
        icon: Database,
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50',
        title: 'Local-first',
        description: 'No backend needed; all data lives in the browser.',
      },
      {
        icon: User,
        iconColor: 'text-sky-600',
        iconBg: 'bg-sky-50',
        title: 'Zero friction',
        description: 'No login, no signup, open the URL and start using.',
      },
      {
        icon: Sparkles,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
        title: 'Visual feedback',
        description: 'Every action reflects immediately in the UI (progress bar, charts, pending list).',
      },
      {
        icon: FileDown,
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50',
        title: 'Data ownership',
        description: 'Users can export all their data as a JSON backup anytime.',
      },
    ],
  }
}

function getDeveloperWorkflowCoreCapabilities(slug) {
  if (slug !== 'developer-workflow') return null

  return [
    {
      icon: LayoutGrid,
      iconColor: 'text-violet-600',
      iconBg: 'bg-violet-50',
      title: 'Daily Task Tracker',
      description: 'Add tasks, attach files, mark complete, delete — with real-time progress bar showing percentage done.',
    },
    {
      icon: FileDown,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      title: 'File Attachments',
      description: 'Attach documents or images to any task using FileReader API — stored as base64 in localStorage, downloadable anytime.',
    },
    {
      icon: LineChart,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
      title: 'Weekly Productivity Chart',
      description: 'Chart.js bar chart showing tasks completed per day over the last 7 days, themed to match the active color scheme.',
    },
    {
      icon: Sparkles,
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50',
      title: 'Daily Streak Counter',
      description: 'Automatically calculates the current consecutive day streak based on task completion timestamps.',
    },
    {
      icon: Eye,
      iconColor: 'text-sky-600',
      iconBg: 'bg-sky-50',
      title: 'Theme Switcher',
      description: 'Toggle between Midnight (dark) and Light modes with instant CSS variable switching — preference saved across sessions.',
    },
    {
      icon: Download,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      title: 'Data Export & Reset',
      description: 'Export all tasks, resources, notes, and profile data as a JSON backup file, or reset everything with one click.',
    },
  ]
}

function getShopEaseApproach(slug) {
  if (slug !== 'shopease-landing') return null

  return {
    steps: [
      {
        icon: LayoutGrid,
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50',
        title: 'Semantic HTML structure',
        description: 'Laid out the full page skeleton using HTML5 semantic tags with proper aria-labels and accessibility attributes.',
      },
      {
        icon: Code2,
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-50',
        title: 'CSS variables & base styles',
        description: 'Defined the color system with CSS custom properties and wrote reset styles and base typography with Poppins.',
      },
      {
        icon: Sparkles,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
        title: 'Navigation & hero section',
        description: 'Built the sticky glassmorphism header with Flexbox, search form, nav links, and the bold hero CTA section.',
      },
      {
        icon: Layers,
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-50',
        title: 'Grid layouts & product cards',
        description: 'Implemented the category flex grid, featured products CSS Grid with glassmorphism cards, and hover lift effects.',
      },
      {
        icon: Rocket,
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50',
        title: 'Newsletter, reviews & responsiveness',
        description: 'Added the newsletter form with validation, customer review cards, and full mobile media queries at 768px.',
      },
    ],
    principles: [
      {
        icon: BookOpen,
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50',
        title: 'Semantic first',
        description: 'HTML5 tags before styling; structure before visual design.',
      },
      {
        icon: Layers,
        iconColor: 'text-sky-600',
        iconBg: 'bg-sky-50',
        title: 'Zero dependencies',
        description: 'No Bootstrap, no jQuery, no framework; pure HTML and CSS only.',
      },
      {
        icon: Shield,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
        title: 'Accessibility built in',
        description: 'alt text, aria-labels, sr-only labels, and semantic structure from line one.',
      },
      {
        icon: Sparkles,
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50',
        title: 'CSS-only responsiveness',
        description: 'Flexbox and Grid with auto-fit handle layout changes without a single line of JavaScript.',
      },
    ],
  }
}

function getShopEaseCoreCapabilities(slug) {
  if (slug !== 'shopease-landing') return null

  return [
    {
      icon: LayoutGrid,
      iconColor: 'text-violet-600',
      iconBg: 'bg-violet-50',
      title: 'Sticky Glassmorphism Header',
      description: 'Frosted-glass sticky nav with logo, pill-shaped search bar, and smooth hover transitions on all links.',
    },
    {
      icon: Layers,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      title: 'Responsive Category Grid',
      description: 'Flexbox category cards with smooth translateY lift-up hover effect — works on all screen sizes.',
    },
    {
      icon: Sparkles,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
      title: 'Glassmorphism Product Cards',
      description: 'CSS Grid product showcase with backdrop-filter frosted-glass cards, product images, pricing, and full-width Buy Now buttons.',
    },
    {
      icon: Shield,
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50',
      title: 'Newsletter with HTML5 Validation',
      description: 'Email subscription form with native type="email" and required validation — no JavaScript needed.',
    },
    {
      icon: Users,
      iconColor: 'text-sky-600',
      iconBg: 'bg-sky-50',
      title: 'Customer Reviews Section',
      description: 'Responsive 3-column review grid with avatar images, reviewer names, and italic testimonial quotes.',
    },
    {
      icon: Rocket,
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50',
      title: 'Full Mobile Responsiveness',
      description: 'CSS media queries at 768px stack the nav, collapse all grids to single column, and make all forms full-width.',
    },
  ]
}

function getCareerPilotApproach(slug) {
  if (slug !== 'careerpilot-ai') return null

  return {
    steps: [
      {
        icon: User,
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50',
        title: 'Resume Parsing & Extraction',
        description: 'Uploaded resumes are parsed using PDF extraction, transforming unstructured text blocks into a clean structured JSON schema.',
      },
      {
        icon: Target,
        iconColor: 'text-indigo-600',
        iconBg: 'bg-indigo-50',
        title: 'Job Description Alignment',
        description: 'Analyzes target job descriptions against the parsed resume to map skill overlaps and generate matching keywords.',
      },
      {
        icon: Sparkles,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
        title: 'Tailored Asset Generation',
        description: 'Leverages generative models to compose customized resume recommendations and context-aware cover letters.',
      },
      {
        icon: Terminal,
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-50',
        title: 'Mock Interview Simulator',
        description: 'Launches an interactive interview simulator that queries the candidate and asks context-aware follow-up questions.',
      },
      {
        icon: Award,
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50',
        title: 'Evaluation & Feedback',
        description: 'Compiles a performance report with scores, feedback bottlenecks, and customized learning recommendations.',
      },
    ],
    principles: [
      {
        icon: BrainCircuit,
        iconColor: 'text-violet-600',
        iconBg: 'bg-violet-50',
        title: 'Multi-Model Prompt Routing',
        description: 'Different tasks are routed to specialized, optimized LLM configurations to maximize accuracy.',
      },
      {
        icon: Search,
        iconColor: 'text-sky-600',
        iconBg: 'bg-sky-50',
        title: 'Semantic Alignment',
        description: 'Aligns skill vectors using embeddings to find matching gaps and optimize ATS keywords.',
      },
      {
        icon: Shield,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
        title: 'Interactive Feedback Loop',
        description: 'Candidates receive real-time mock interview scoring and constructive gap analysis reports.',
      },
      {
        icon: Lock,
        iconColor: 'text-rose-600',
        iconBg: 'bg-rose-50',
        title: 'Strict Context Grounding',
        description: 'Restricts the interviewer from hallucinating questions outside the scope of the target job and resume.',
      },
    ],
  }
}

function getCareerPilotCoreCapabilities(slug) {
  if (slug !== 'careerpilot-ai') return null

  return [
    {
      icon: LayoutGrid,
      iconColor: 'text-violet-600',
      iconBg: 'bg-violet-50',
      title: 'ATS Resume Analyzer',
      description: 'Scores resumes dynamically against job descriptions and provides step-by-step keyword and formatting recommendations.',
    },
    {
      icon: Code2,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      title: 'Tailored Cover Letter Generator',
      description: 'Generates professional cover letters adjusted to fit the exact tone, requirements, and keywords of the target job.',
    },
    {
      icon: Terminal,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
      title: 'AI Mock Interview Simulator',
      description: 'Simulates live technical or behavioral interviews, generating follow-up questions dynamically based on applicant answers.',
    },
    {
      icon: BrainCircuit,
      iconColor: 'text-rose-600',
      iconBg: 'bg-rose-50',
      title: 'AI Skill Roadmap Generator',
      description: 'Identifies missing skills for a desired job title and generates a step-by-step custom learning path.',
    },
    {
      icon: Layers,
      iconColor: 'text-sky-600',
      iconBg: 'bg-sky-50',
      title: 'Job Search Kanban Tracker',
      description: 'Keeps candidate applications organized with a visual pipeline showing application states and next interview steps.',
    },
    {
      icon: FileDown,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50',
      title: 'Performance Report Exporter',
      description: 'Saves and exports resume feedback and mock interview performance reviews into clean PDF reports.',
    },
  ]
}

function getProjectCaseStudyDetails(slug, project) {
  const duration = slug === 'studioflow' ? '4 Months'
                 : slug === 'portfolio' ? '3 Months'
                 : slug === 'marketpulse' ? '5 Months'
                 : slug === 'careerpilot-ai' ? '3 Months'
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
      themeColor: slug === 'developer-workflow' || slug === 'careerpilot-ai' ? 'indigo' : 'violet',
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
      ] : slug === 'shopease-landing' ? [
        { value: '0', label: 'External Frameworks', icon: 'Layers', color: 'violet' },
        { value: '7', label: 'Product Categories', icon: 'LayoutGrid', color: 'emerald' },
        { value: '3', label: 'Glassmorphism Cards', icon: 'Sparkles', color: 'amber' },
        { value: '100%', label: 'CSS Mobile Responsive', icon: 'Shield', color: 'blue' }
      ] : slug === 'careerpilot-ai' ? [
        { value: '85%', label: 'Interview Prep Boost', icon: 'Terminal', color: 'violet' },
        { value: '4x', label: 'Faster Resume Tailor', icon: 'Layers', color: 'emerald' },
        { value: '15+', label: 'Custom Career Paths', icon: 'LayoutGrid', color: 'amber' },
        { value: '<2s', label: 'Response Latency', icon: 'Clock', color: 'blue' }
      ] : slug === 'developer-workflow' ? [
        { value: '0 ms', label: 'Server Load Time', icon: 'Clock', color: 'indigo' },
        { value: '100%', label: 'Offline Capable', icon: 'Shield', color: 'emerald' },
        { value: '4 Pages', label: 'App Architecture', icon: 'LayoutGrid', color: 'amber' },
        { value: '7-Day', label: 'Productivity Chart', icon: 'LineChart', color: 'blue' }
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
             : slug === 'shopease-landing' ? 'No Professional UI Foundation for E-Commerce'
             : slug === 'developer-workflow' ? 'Scattered Tools & No Developer-Specific Tracker'
             : slug === 'careerpilot-ai' ? 'Job Search Exhaustion & ATS Disconnects'
             : 'Operational Bottlenecks & Friction',
      summary: slug === 'studioflow' ? 'Traditional inventory management was slow, error-prone, and required extensive manual data typing.'
             : slug === 'portfolio' ? 'Static showcases fail to explain design patterns, architecture trade-offs, and custom skill matches dynamically.'
             : slug === 'marketpulse' ? 'Logistics workers manually guess how to stack cargo — wasting container space, increasing shipping trips, and making costly packing errors.'
             : slug === 'shopease-landing' ? 'Most beginner e-commerce sites are built with templates or Bootstrap — lacking clean semantic structure, accessibility, and a truly professional design.'
             : slug === 'developer-workflow' ? 'Developers juggle tasks across multiple apps with no single place to track daily progress, attach resources, and visualize consistency.'
             : slug === 'careerpilot-ai' ? 'Candidates spend hours tailoring resumes and cover letters for each job description, while traditional interview prep lacks real-time, personalized feedback loops.'
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
      ] : slug === 'shopease-landing' ? [
        { value: 'Bloat', label: 'Template Overhead', icon: 'Boxes', color: 'rose' },
        { value: 'Poor', label: 'Accessibility Rules', icon: 'Shield', color: 'rose' },
        { value: 'None', label: 'Mobile Optimization', icon: 'Layers', color: 'rose' },
        { value: 'Zero', label: 'SEO Consideration', icon: 'Search', color: 'rose' }
      ] : slug === 'careerpilot-ai' ? [
        { value: 'Hours', label: 'Spent Tailoring Resumes', icon: 'Clock', color: 'rose' },
        { value: 'Low', label: 'ATS Compatibility Scores', icon: 'AlertTriangle', color: 'rose' },
        { value: 'None', label: 'Real-time Mock Feedback', icon: 'Terminal', color: 'rose' },
        { value: 'Cluttered', label: 'Application Trackers', icon: 'Layers', color: 'rose' }
      ] : slug === 'developer-workflow' ? [
        { value: '5+', label: 'Disconnected Tools', icon: 'Boxes', color: 'rose' },
        { value: 'Manual', label: 'Streak Tracking', icon: 'AlertTriangle', color: 'rose' },
        { value: 'Lost', label: 'Resources & Notes', icon: 'Lock', color: 'rose' },
        { value: 'None', label: 'File-to-Task Link', icon: 'FileDown', color: 'rose' }
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
            : slug === 'shopease-landing' ? ['E-Commerce UI Foundation', 'Mobile Responsiveness', 'Accessibility Compliance', 'SEO Readiness', 'Product Card Design', 'Newsletter Capture']
            : slug === 'careerpilot-ai' ? ['Resume Customization', 'ATS Formatting & Keyword Optimization', 'Cover Letter Composition', 'Mock Interview Practice', 'Skill Gap Discovery', 'Job Search Pipeline Management']
            : slug === 'developer-workflow' ? ['Daily Task Management', 'Learning Streak Tracking', 'Resource & Link Organization', 'Productivity Visualization', 'File Attachment to Tasks', 'Developer Habit Building']
            : ['Manual Triage', 'Coordination Latency', 'Pipeline Interrupts', 'Operations Overload']
    },
    'approach': {
      badge: '03 APPROACH',
      durationLabel: slug === 'studioflow' ? 'Architecture: Multimodal API'
                     : slug === 'portfolio' ? 'Search: Hybrid RAG'
                     : slug === 'marketpulse' ? 'Core: 3D Bin-Packing'
                     : slug === 'shopease-landing' ? 'Architecture: Zero-Dependency'
                     : slug === 'developer-workflow' ? 'Architecture: Local-First'
                     : slug === 'careerpilot-ai' ? 'Core: LangChain Agent Routing'
                     : 'Design: Decoupled API',
      title: slug === 'studioflow' ? 'Scalable AI & Database Decoupling'
             : slug === 'portfolio' ? 'Semantic Mapping & Prompt Routing'
             : slug === 'marketpulse' ? 'Extreme Point Algorithm with Real-Time 3D Rendering'
             : slug === 'shopease-landing' ? 'Semantic-First, Zero-Dependency Frontend Architecture'
             : slug === 'developer-workflow' ? 'Local-First, Zero-Backend Productivity Architecture'
             : slug === 'careerpilot-ai' ? 'Multi-Agent Prompt Routing & Vector Embeddings Alignment'
             : 'Flexible Services & Loose Coupling',
      summary: slug === 'marketpulse'
        ? 'Used a geometric 3D bin-packing algorithm to automatically place products inside containers without overlapping, and visualized the result live using Qt3D.'
        : slug === 'shopease-landing'
        ? 'Built entirely with HTML5 and CSS3 — no frameworks, no libraries — following accessibility, SEO, and glassmorphism design standards from the ground up.'
        : slug === 'developer-workflow'
        ? 'Built entirely in the browser using localStorage as the data layer — no server, no login, no dependency.'
        : slug === 'careerpilot-ai'
        ? 'Utilized a multi-agent system with LangChain to route different user requests (such as interview prep versus resume analysis) to specialized generative models, using semantic alignment for skill scoring.'
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
      ] : slug === 'shopease-landing' ? [
        { value: 'HTML5', label: 'Semantic First', icon: 'BookOpen', color: 'amber' },
        { value: 'Pure CSS', label: 'Zero Bloat', icon: 'Layers', color: 'amber' },
        { value: 'WCAG', label: 'Accessibility Built-in', icon: 'Shield', color: 'amber' },
        { value: 'Auto-Fit', label: 'Grid Responsiveness', icon: 'Sparkles', color: 'amber' }
      ] : slug === 'careerpilot-ai' ? [
        { value: 'Router', label: 'LangChain Multi-Agent', icon: 'Cpu', color: 'amber' },
        { value: 'OpenAI', label: 'Semantic Matcher', icon: 'Search', color: 'amber' },
        { value: 'React', label: 'Interactive Dashboard', icon: 'LayoutGrid', color: 'amber' },
        { value: 'Guard', label: 'Hallucination Blockers', icon: 'Shield', color: 'amber' }
      ] : slug === 'developer-workflow' ? [
        { value: 'Local', label: 'localStorage DB', icon: 'Database', color: 'amber' },
        { value: 'Zero', label: 'Auth Friction', icon: 'User', color: 'amber' },
        { value: 'Instant', label: 'UI State Feedback', icon: 'Sparkles', color: 'amber' },
        { value: 'JSON', label: 'Data Export/Import', icon: 'FileDown', color: 'amber' }
      ] : [
        { value: 'REST', label: 'Strict Protocol Standard', icon: 'Server', color: 'amber' },
        { value: 'Decoupled', label: 'Component Organization', icon: 'Layers', color: 'amber' },
        { value: 'Indexed', label: 'Database Access Tuning', icon: 'Database', color: 'amber' },
        { value: 'CI/CD', label: 'Test Pipeline Validation', icon: 'Cpu', color: 'amber' }
      ],
      aboutHeading: slug === 'marketpulse' ? 'How it works'
                  : slug === 'developer-workflow' ? 'How It Works'
                  : slug === 'shopease-landing' ? 'How It Works'
                  : slug === 'careerpilot-ai' ? 'How It Works'
                  : 'System Architecture & Engineering',
      aboutText: slug === 'marketpulse'
        ? 'The core of this software is the Extreme Point Method — a 3D bin-packing algorithm that I implemented in C++. The idea is simple: we start with one empty slot at position (0, 0, 0) inside the container. When a product is placed at that point, three new candidate positions are generated — one along the X axis (to the right of the placed box), one along the Y axis (on top of it), and one along the Z axis (behind it). The next product tries each of these points one by one. Before placing, the algorithm checks two things — first, whether the product fits within the container boundaries, and second, whether it overlaps with any already placed product. If both checks pass, it gets placed and three more points are added. This continues until all products are placed or no valid position is found. The result is then rendered using Qt3D as a live 3D wireframe container filled with colored boxes, where each product type has its own unique color assigned by the user. An orbit camera controller lets you rotate and inspect the loaded container from any angle.'
        : slug === 'shopease-landing'
        ? 'The entire layout is built using HTML5 semantic tags — header, nav, main, section, footer — giving the page a clear document structure for both browsers and screen readers. CSS custom properties (--bg-color, --text-color, --primary-color, --card-bg, --card-border) define the entire color system, making future theming or dark mode a one-line change per variable. The navigation uses CSS Flexbox with justify-content: space-between for the logo, search form, and nav links. The category grid and product showcase use CSS Grid with auto-fit and minmax() — meaning the layout automatically adjusts from 3 columns to 1 column as the screen shrinks, with no JavaScript required. The glassmorphism effect on product cards is achieved using background: rgba(255,255,255,0.45), backdrop-filter: blur(12px), and a semi-transparent border — creating a frosted-glass look that sits on top of the gradient background. The sticky header uses position: sticky with backdrop-filter: blur(8px) so it stays at the top while remaining visually light. The newsletter form uses HTML5 type="email" and required attributes for built-in client-side validation. A .sr-only class hides form labels visually while keeping them accessible to screen readers.'
        : slug === 'developer-workflow'
        ? 'The core design decision was to make this app work completely offline in the browser using the localStorage API as a persistent data store. All tasks, resources, notes, profile data, and settings are saved as JSON strings in localStorage under named keys (devfocus-tasks, devfocus-resources, devfocus-notes, dev-profile-data, devfocus-settings). The dashboard reads from and writes to these keys on every action. For the Analytics page, Chart.js reads the task completion timestamps and builds a 7-day bar chart dynamically. The streak counter scans completion dates in reverse to find consecutive days. The date picker feature filters tasks and resources by completion date using JavaScript\'s Date comparison. For file attachments, the FileReader API converts uploaded files to base64 data URLs and stores them inside the task object — meaning files are also saved in localStorage and can be re-downloaded any time without a server.'
        : slug === 'careerpilot-ai'
        ? 'The system begins by parsing uploaded resume PDF files. The backend extracts the raw text blocks and transforms them into a structured JSON profile containing sections for education, experience, and skills. When a user inputs a target job description, the system calculates a semantic similarity score using vector embeddings (OpenAI text-embedding-ada-002) to map the overlap between the resume and the job requirements. Based on the calculated gap, a LangChain-powered prompt router determines the best model configuration to use for downstream tasks. For cover letter generation, the request is routed to a GPT-4o agent optimized for template alignment and professional tone. For mock interviews, the system initiates a conversational state loop where the agent asks realistic technical or behavioral questions, records user responses, and prompts context-aware follow-ups based on the user\'s answers. A separate evaluation agent rates each response, checking for accuracy, formatting, and keywords compatibility, compiling the scoring metrics into exportable PDF summaries.'
        : 'Our engineering strategy prioritized robust component design. We built core processing modules using loose coupling, ensuring that databases, internal queues, and client front-ends communicate through strictly defined, typesafe API schemas.\n\nThis approach eliminates runtime data corruption, provides deterministic state management, and enables seamless system expansion.',
      approachDetails: slug === 'marketpulse' ? getLoadingOptimizationApproach(slug)
                       : slug === 'developer-workflow' ? getDeveloperWorkflowApproach(slug)
                       : slug === 'shopease-landing' ? getShopEaseApproach(slug)
                       : slug === 'careerpilot-ai' ? getCareerPilotApproach(slug)
                       : null,
      techHeading: 'DESIGN PRINCIPLES',
      tags: slug === 'marketpulse'
        ? ['Extreme Point Algorithm', '3D Bin Packing', 'Overlap Detection', 'Qt3D Real-Time Rendering', 'JSON Persistence', 'OTP Email Verification']
        : slug === 'shopease-landing'
        ? ['HTML5 Semantic Architecture', 'CSS Custom Properties (Variables)', 'Glassmorphism UI Pattern', 'CSS Grid Auto-Fit Layout', 'Flexbox Navigation', 'Mobile-First Media Queries', 'SEO Meta Tags', 'WCAG Accessibility Standards']
        : slug === 'developer-workflow'
        ? ['localStorage as Database', 'FileReader API for File Attachments', 'Chart.js Visualization', 'CSS Variables for Theming', 'Multi-page SPA Architecture', 'Date-based History Filtering']
        : slug === 'careerpilot-ai'
        ? ['LangChain Prompt Router', 'Multi-Agent State Orchestrator', 'Vector Embeddings Semantic Alignment', 'PDF Text Parsing & JSON Mapping', 'Conversational Feedback Loops', 'Mock Interview Simulator']
        : ['Loose Coupling', 'Typesafe Schemas', 'Atomic Processing', 'Defensive Coding']
    },
    'solution': {
      badge: '04 SOLUTION',
      durationLabel: 'Deploy State: Live Production',
      title: slug === 'studioflow' ? 'Multimodal Parser & Real-time Console'
             : slug === 'portfolio' ? 'Context-grounded Assistant Interface'
             : slug === 'marketpulse' ? 'Complete C++ Desktop App — From Login to 3D Loading Plan'
             : slug === 'shopease-landing' ? 'Complete E-Commerce Landing Page — From Hero to Footer'
             : slug === 'developer-workflow' ? 'Complete Developer Dashboard — From Tasks to Analytics'
             : slug === 'careerpilot-ai' ? 'Complete AI Career Companion — From Profile Parsing to Offer'
             : 'Polished Interactive Dashboard',
      summary: slug === 'marketpulse'
        ? 'A fully working desktop application with user registration, email OTP, product management, container selection, live 3D packing, and PDF export — all built in C++ with Qt6.'
        : slug === 'shopease-landing'
        ? 'A fully hand-coded, zero-dependency landing page with sticky nav, glassmorphism product cards, responsive grid, newsletter validation, and SEO meta tags — built in pure HTML5 and CSS3.'
        : slug === 'developer-workflow'
        ? 'A fully working browser app with task tracking, file attachments, productivity charts, daily streak, theme switching, and data export — all in Vanilla JS with no backend.'
        : slug === 'careerpilot-ai'
        ? 'A unified career management platform featuring ATS resume scoring, personalized cover letter generation, interactive mock interviews, and visual application pipelines.'
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
      ] : slug === 'shopease-landing' ? [
        { value: 'Glass', label: 'Frosted Nav & Cards', icon: 'Sparkles', color: 'indigo' },
        { value: 'Auto-Fit', label: 'Fluid CSS Grid', icon: 'LayoutGrid', color: 'indigo' },
        { value: 'HTML5', label: 'Native Form Validation', icon: 'Shield', color: 'indigo' },
        { value: 'SEO', label: 'Open Graph Metadata', icon: 'Search', color: 'indigo' }
      ] : slug === 'careerpilot-ai' ? [
        { value: 'ATS', label: 'Interactive Analyzer', icon: 'Shield', color: 'indigo' },
        { value: 'Cover', label: 'Tailored Letter Composer', icon: 'FileDown', color: 'indigo' },
        { value: 'Mock', label: 'Live Interview simulator', icon: 'Terminal', color: 'indigo' },
        { value: 'Roadmap', label: 'AI Study Guide planner', icon: 'BrainCircuit', color: 'indigo' }
      ] : slug === 'developer-workflow' ? [
        { value: 'Vanilla', label: 'ES6+ Implementation', icon: 'Code2', color: 'indigo' },
        { value: 'Base64', label: 'File Storage Mode', icon: 'FileDown', color: 'indigo' },
        { value: 'Dynamic', label: 'Midnight/Light Themes', icon: 'Sparkles', color: 'indigo' },
        { value: 'Chart.js', label: 'Interactive Graphs', icon: 'LineChart', color: 'indigo' }
      ] : [
        { value: 'Web', label: 'Fully Responsive Platform', icon: 'Globe', color: 'indigo' },
        { value: 'Typesafe', label: 'Strong Schema Validation', icon: 'Lock', color: 'indigo' },
        { value: 'Dynamic', label: 'State Component Update', icon: 'LayoutGrid', color: 'indigo' },
        { value: 'Fast', label: 'Aggressive Query Caching', icon: 'Cpu', color: 'indigo' }
      ],
      aboutHeading: 'Key Technical Implementation',
      aboutText: slug === 'marketpulse'
        ? 'The software works end to end. A user first registers with their name, company name, email, mobile number, and password. Email verification uses a 6-digit OTP sent via Gmail SMTP directly from the app — built using Qt\'s SSL socket. After login, users can add and save products with name, type (box, bag, barrel, sack, pipe), dimensions in centimeters, weight in kg, and quantity — all stored in a local JSON file. Users can also save multiple trucks, containers, train bogis, and warehouses. When loading, you select a container, pick products from your saved list (or enter them directly), assign a unique color to each product type, and hit "Add in Container." The algorithm runs instantly and the 3D view updates live. Users can add or remove products one at a time and watch the container re-pack in real time. A pie chart shows filled vs empty percentage. Finally, two types of PDF reports can be exported — one showing the product summary with type icons and colors, and one showing a layer-wise 2D visual of every Z-depth layer in the container.'
        : slug === 'shopease-landing'
        ? 'The page works as a complete, professional e-commerce frontend foundation. The sticky header uses backdrop-filter: blur(8px) with rgba transparency so it looks frosted over the content as users scroll. The search form inside the nav uses pill-shaped border-radius on each side of the input and button so they join into one seamless element. The category cards use a hover translateY(-8px) transition for a smooth lift effect. The product grid uses grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) — meaning it automatically becomes 3 columns on desktop, 2 columns on tablet, and 1 column on mobile with zero media query needed for the grid itself. Each product card uses backdrop-filter: blur(12px) with a semi-transparent white background and a translucent border for the glassmorphism effect. The newsletter input uses type="email" and required attributes — the browser blocks submission and shows a native error if the email is invalid or empty. All buttons share a base style with a translateY(-3px) hover lift and box-shadow transition. The CSS uses a linear-gradient background on the body (from #f3f4f6 to #e5e7eb) that gives the glassmorphism cards their frosted contrast. The footer is minimal and centered, and the full page collapses cleanly on mobile at 768px with the nav stacking vertically, the newsletter form going full-width, and all grids reducing to a single column.'
        : slug === 'developer-workflow'
        ? 'The app works end to end. A developer opens the dashboard and immediately sees their personalized welcome message and profile picture (fetched from localStorage). They add tasks with an optional file attachment — the FileReader API reads the file, converts it to a base64 data URL, and stores it inside the task object in localStorage, so it persists across page refreshes and can be re-downloaded anytime. Completed tasks are timestamped with an ISO date string, which the Analytics page uses to build the weekly bar chart, calculate the current daily streak, and allow date-based history search. The Settings page uses CSS custom properties (--accent-color, --bg-color) to switch instantly between Midnight dark mode and Light mode — the theme is saved to localStorage and applied on every page load via an inline script before the body renders, preventing any flash of unstyled content. The data export feature serializes all localStorage keys into a single JSON file which the user can download as a backup.'
        : slug === 'careerpilot-ai'
        ? 'The platform works as a comprehensive career coach. A user uploads their current resume, and the ATS analyzer immediately displays a compatibility score alongside keyword optimization lists and layout tips. The cover letter generator creates custom documents targeted at specific job listings. The mock interview module initiates an interactive session: the AI asks a question, records the user\'s text or voice answer, and generates context-aware follow-up queries. An evaluation block scores each response, checks for ATS keyword inclusion, and outlines key talking points. Users can also generate personalized learning paths (AI Skill Roadmaps) containing links and milestones to acquire missing skills. The Kanban Board helps track progress across various interview stages, and all optimized documents and performance reports can be downloaded as clean PDFs.'
        : 'The resulting system unifies automated processing with intuitive UI dashboards. We combined lightning-fast server endpoints with clean component state loops to deliver zero-friction user feedback.\n\nThe layout includes robust exception catch boundaries, security validations, and reactive elements to provide a beautiful, seamless execution experience.',
      techHeading: 'ENGINEERING ASSETS',
      coreCapabilities: slug === 'marketpulse' ? getCoreCapabilities(slug)
                        : slug === 'developer-workflow' ? getDeveloperWorkflowCoreCapabilities(slug)
                        : slug === 'shopease-landing' ? getShopEaseCoreCapabilities(slug)
                        : slug === 'careerpilot-ai' ? getCareerPilotCoreCapabilities(slug)
                        : null,
      solutionBannerText: slug === 'marketpulse'
        ? 'Loading Optimization Software brings automation and visual clarity to every stage of cargo planning — helping teams load smarter, faster, and with complete documentation.'
        : slug === 'developer-workflow'
        ? 'Developer Workflow brings structure and visibility to your daily developer routine — keeping tasks, attachments, reference links, and weekly consistency metrics in a single private local space.'
        : slug === 'shopease-landing'
        ? 'ShopEase brings a pixel-perfect, WCAG-compliant frontend design with a frosted-glass glassmorphism aesthetic and auto-fit responsive grids — built entirely with zero external CSS frameworks.'
        : slug === 'careerpilot-ai'
        ? 'CareerPilot-AI brings prompt routing, ATS parsing alignment, and mock interview simulators to your job hunt — helping you prepare smarter and customize applications in seconds.'
        : '',
      tags: getSolutionPoints(slug)
    },
    'result': {
      badge: '05 RESULTS',
      durationLabel: slug === 'developer-workflow' || slug === 'shopease-landing' ? 'Deploy State: Live Production' : 'Business Impact: Exceptional',
      title: slug === 'marketpulse' ? 'Won Competition · Got 4.8 LPA Job Offer as a Student'
             : slug === 'shopease-landing' ? 'Live & Deployed — A Professional Frontend Foundation'
             : slug === 'developer-workflow' ? 'Deployed & Live — Used as a Personal Productivity Tool'
             : 'Measurable Outcomes & Growth',
      summary: slug === 'marketpulse'
        ? 'This project was selected as the best submission in a C++ challenge by Webtech Developers Pvt. Ltd., Pune — earning a full-time job offer which I chose to decline to complete my MCA.'
        : slug === 'shopease-landing'
        ? 'ShopEase is live at shopease-ecom-landing.onrender.com as a clean, professional e-commerce frontend — demonstrating that a modern, accessible, responsive landing page needs zero libraries or frameworks.'
        : slug === 'developer-workflow'
        ? 'Developer Workflow is live at developer-workflow.onrender.com and serves as a fully functional personal productivity app — built and deployed from scratch with zero dependencies except Chart.js.'
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
      ] : slug === 'shopease-landing' ? [
        { value: '0', label: 'External CSS Frameworks', icon: 'Layers', color: 'emerald' },
        { value: '7', label: 'Product Categories', icon: 'LayoutGrid', color: 'emerald' },
        { value: '3', label: 'Featured Product Cards', icon: 'Sparkles', color: 'emerald' },
        { value: '100%', label: 'Mobile Responsive CSS', icon: 'Shield', color: 'emerald' }
      ] : slug === 'developer-workflow' ? [
        { value: '0 ms', label: 'Server Load Time', icon: 'Clock', color: 'emerald' },
        { value: '100%', label: 'Offline Capable', icon: 'Shield', color: 'emerald' },
        { value: '4 Pages', label: 'Dashboard & Modules', icon: 'LayoutGrid', color: 'emerald' },
        { value: '7-Day', label: 'Productivity Chart', icon: 'LineChart', color: 'emerald' }
      ] : [
        { value: '90%', label: 'Task Automation', icon: 'Cpu', color: 'emerald' },
        { value: '2.5x', label: 'Processing Speed', icon: 'Activity', color: 'emerald' },
        { value: '100%', label: 'Workflow Visibility', icon: 'Layers', color: 'emerald' },
        { value: '95%', label: 'User Satisfaction', icon: 'Users', color: 'emerald' }
      ],
      aboutHeading: 'Business & Operational Impact',
      aboutText: defaultResultText,
      businessOutcomes: slug === 'marketpulse' ? [
        { title: 'Time saved', description: 'Hours of manual planning reduced to seconds.', icon: 'Clock', iconColor: 'text-amber-500' },
        { title: 'Fewer trips', description: 'Better fill rate means less trips per shipment.', icon: 'Truck', iconColor: 'text-indigo-600' },
        { title: 'Documented plans', description: 'PDF reports replace verbal instructions.', icon: 'FileDown', iconColor: 'text-violet-600' },
        { title: 'Industry recognition', description: 'Impressed Webtech Developers enough for a job offer.', icon: 'Award', iconColor: 'text-rose-600' }
      ] : slug === 'shopease-landing' ? [
        { title: 'Instant scalability', description: 'Clean semantic HTML structure is ready for JavaScript cart logic and backend API integration without refactoring.', icon: 'Cpu', iconColor: 'text-violet-600' },
        { title: 'SEO ready from day one', description: 'Meta description, keywords, viewport, and Open Graph tags built in at the start.', icon: 'Search', iconColor: 'text-sky-600' },
        { title: 'Accessible to all users', description: 'aria-labels, alt text, sr-only labels, and semantic tags pass basic WCAG accessibility checks.', icon: 'Shield', iconColor: 'text-emerald-500' },
        { title: 'Premium visual design', description: 'Glassmorphism product cards and smooth hover animations create a professional, modern look with pure CSS.', icon: 'Sparkles', iconColor: 'text-amber-500' }
      ] : slug === 'developer-workflow' ? [
        { title: 'Time saved', description: 'Developers spend zero time on setup — no account, no config, just open and use.', icon: 'Clock', iconColor: 'text-amber-500' },
        { title: 'Habit visibility', description: 'Streak counter and weekly chart make daily consistency visible and measurable.', icon: 'Sparkles', iconColor: 'text-emerald-500' },
        { title: 'Nothing lost', description: 'Resource links, file attachments, and notes all stay organized and searchable by date.', icon: 'LayoutGrid', iconColor: 'text-indigo-600' },
        { title: 'Full data control', description: 'JSON export means the user always owns their data and can move it anywhere.', icon: 'FileDown', iconColor: 'text-violet-600' }
      ] : null,
      testimonial: slug === 'marketpulse' ? {
        quote: '“This was the best project submitted in the challenge — it solved a real problem, worked end-to-end, and showed strong technical depth in C++ and 3D rendering.”',
        author: 'Webtech Developers Pvt. Ltd., Pune',
        link: '#'
      } : slug === 'shopease-landing' ? {
        quote: '“Wanted to prove that a clean, modern, accessible e-commerce UI doesn\'t need Bootstrap or a framework — just well-written HTML and CSS.”',
        author: 'Vaibhav Lohar, Developer',
        link: null
      } : slug === 'developer-workflow' ? {
        quote: '“Built this to solve my own problem — I needed a fast, no-login tool to track what I\'m learning and how consistent I\'m being. It\'s now part of my daily workflow.”',
        author: 'Vaibhav Lohar, Developer',
        link: null
      } : null,
      techHeading: 'IMPACT AREAS',
      tags: slug === 'studioflow' ? ['E-Commerce Merchandising', 'Stock Management Speed', 'Catalog Taxonomy', 'Data Quality Control']
            : slug === 'portfolio' ? ['Recruiter Engagement', 'Developer Showcase Speed', 'Fact Grounded AI', 'Portfolio Reach']
            : slug === 'marketpulse' ? ['Won coding competition', '4.8 LPA job offer received', 'Manual loading time — seconds', 'Zero packing overlap errors', 'PDF report export', 'Industry recognized project']
            : slug === 'shopease-landing' ? ['Live deployed on Render', 'Zero external CSS frameworks', 'Glassmorphism UI with backdrop-filter', 'CSS Grid auto-fit product layout', 'WCAG-compliant accessibility patterns', 'SEO meta tags and Open Graph', 'Full mobile responsiveness via media queries', 'HTML5 email validation on newsletter form']
            : slug === 'developer-workflow' ? ['Live deployed on Render', 'Zero backend, zero login', 'File attachments via FileReader API', 'Streak tracking with date comparison', 'Chart.js weekly productivity chart', 'Full JSON data export', 'Midnight & Light theme support']
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

function getProjectExternalLinks(slug) {
  switch (slug) {
    case 'studioflow':
      return {
        github: 'https://github.com/Lohar109/ShopEase-Ecommerce',
        demo: 'https://shop-ease-ecommerce-delta.vercel.app/'
      }
    case 'portfolio':
      return {
        github: 'https://github.com/Lohar109/My-Portfolio',
        demo: null
      }
    case 'marketpulse':
      return {
        github: 'https://github.com/Lohar109/Loading-Optimization-Software',
        demo: null
      }
    case 'shopease-landing':
      return {
        github: 'https://github.com/Lohar109/ShopEase-Ecom-Landing',
        demo: 'https://shopease-ecom-landing.onrender.com'
      }
    case 'developer-workflow':
      return {
        github: 'https://github.com/Lohar109/Developer-Workflow',
        demo: 'https://developer-workflow.onrender.com'
      }
    default:
      return {
        github: null,
        demo: null
      }
  }
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  const [activeSection, setActiveSection] = useState('case-study')
  const [carouselIndex, setCarouselIndex] = useState(0)

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
  const externalLinks = getProjectExternalLinks(project.slug)
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
                {activeSection !== 'case-study' && activeSection !== 'images' && (
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
                    {/* Project Name & Summary */}
                    <div className="flex flex-col min-w-0 w-full">
                      <h2 className="text-2.5xl sm:text-3xl font-black tracking-tight text-slate-800 font-sans leading-tight animate-slideInUp">
                        {currentStep.title}
                      </h2>
                      <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-500 font-sans font-semibold animate-slideInUp anim-delay-100">
                        {currentStep.summary}
                      </p>

                      {/* External Action Links (Live Site & GitHub) */}
                      {(externalLinks.demo || externalLinks.github) && (
                        <div className="mt-5 flex flex-wrap gap-4 animate-slideInUp anim-delay-150 select-none">
                          {externalLinks.demo && (
                            <div className="thick-black-border-wrapper h-9 active:scale-[0.98]">
                              <a
                                href={externalLinks.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-8 px-4 rounded-[8px] bg-white flex items-center justify-center gap-1.5 text-xs font-bold text-gray-700 hover:text-violet-600 transition-all duration-200 cursor-pointer select-none"
                              >
                                <ExternalLink size={12} />
                                <span>Visit Live Site</span>
                              </a>
                            </div>
                          )}
                          {externalLinks.github && (
                            <div className="thick-black-border-wrapper h-9 active:scale-[0.98]">
                              <a
                                href={externalLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-8 px-4 rounded-[8px] bg-white flex items-center justify-center gap-1.5 text-xs font-bold text-gray-700 hover:text-violet-600 transition-all duration-200 cursor-pointer select-none"
                              >
                                <GitFork size={12} />
                                <span>View Source Code</span>
                              </a>
                            </div>
                          )}
                        </div>
                      )}
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
                ) : (project.slug === 'marketpulse' || project.slug === 'developer-workflow' || project.slug === 'shopease-landing') && activeSection === 'problem' ? (
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
                ) : (project.slug === 'marketpulse' || project.slug === 'developer-workflow' || project.slug === 'shopease-landing') && activeSection === 'approach' ? (
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
                      {currentStep.approachDetails?.steps.map((step, idx) => {
                        const Icon = step.icon
                        return (
                          <div key={step.title} className="relative flex flex-col items-center text-center px-2">
                            {idx < currentStep.approachDetails.steps.length - 1 && (
                              <div className="hidden lg:flex absolute top-0 h-14 left-[calc(50%+2.75rem)] right-[-1.25rem] items-center justify-center text-slate-300 text-2xl font-light select-none pointer-events-none">
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
                        {currentStep.approachDetails?.principles.map((item) => {
                          const Icon = item.icon
                          return (
                            <div key={item.title} className={`rounded-2xl border px-4 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${
                              project.slug === 'marketpulse'
                                ? 'border-[#ece8db] bg-[#f7f5ee]'
                                : 'border-neutral-100 bg-neutral-50/50'
                            }`}>
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

                      <div className="w-full border-t border-neutral-100/70 pt-6 mt-4">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3 font-sans">
                          {currentStep.techHeading}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {currentStep.tags.map((tag) => renderTag(tag, currentStep.themeColor))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (project.slug === 'marketpulse' || project.slug === 'developer-workflow' || project.slug === 'shopease-landing') && activeSection === 'solution' ? (
                  <div className="mt-6 flex flex-col gap-8 w-full animate-fadeIn">
                    <div className="w-full flex flex-col min-w-0">
                      <h3 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-tight leading-none uppercase">
                        {currentStep.aboutHeading}
                      </h3>
                      <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-500 font-semibold font-sans whitespace-pre-line max-w-4xl">
                        {currentStep.aboutText}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-[15px] font-black uppercase tracking-[0.08em] text-slate-700">
                        {currentStep.metricsHeading}
                      </h4>

                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentStep.coreCapabilities?.map((cap) => {
                          const Icon = cap.icon
                          return (
                            <div key={cap.title} className="rounded-2xl border border-neutral-100 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition">
                              <div className="flex items-start gap-4">
                                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${cap.iconBg} ${cap.iconColor} shadow-sm ring-1 ring-black/5`}>
                                  <Icon size={20} strokeWidth={2.2} />
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-[16px] font-bold tracking-tight text-slate-800 font-sans">
                                    {cap.title}
                                  </h5>
                                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600 font-medium font-sans">
                                    {cap.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className={`rounded-2xl border px-5 py-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] flex items-start gap-4 ${
                        project.slug === 'marketpulse'
                          ? 'border-[#ece8db] bg-[#f7f5ee]'
                          : 'border-neutral-100 bg-neutral-50/50'
                      }`}>
                        <div className="flex-shrink-0 text-violet-600 mt-0.5">
                          <Sparkles size={20} strokeWidth={1.8} />
                        </div>
                        <p className="text-[14px] leading-relaxed text-slate-700 font-medium max-w-4xl">
                          {currentStep.solutionBannerText}
                        </p>
                      </div>
                    </div>

                    <div className="w-full border-t border-neutral-100/70 pt-6 mt-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3 font-sans">
                        {currentStep.techHeading}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {currentStep.tags.map((tag) => renderTag(tag, currentStep.themeColor))}
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
                      <div className="w-full border-t border-neutral-100/70 pt-6 mt-4">
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
                  <div className="w-full animate-fadeIn">
                    {project.images && project.images.length > 0 ? (
                      <div className="w-full flex flex-col items-center">
                        <div className="relative w-full max-w-4xl">
                          <div className="group relative rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-50 aspect-[16/9] shadow-sm">
                            <img
                              src={project.images[carouselIndex].src}
                              alt={`${project.title} screenshot ${carouselIndex + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />

                            {/* Left button */}
                            <button
                              onClick={() => setCarouselIndex((i) => (i - 1 + project.images.length) % project.images.length)}
                              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-white"
                              aria-label="Previous image"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                                <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                              </svg>
                            </button>

                            {/* Right button */}
                            <button
                              onClick={() => setCarouselIndex((i) => (i + 1) % project.images.length)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-white"
                              aria-label="Next image"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                                <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                              </svg>
                            </button>

                            <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/40 to-transparent text-white opacity-100">
                              <div className="text-sm font-bold">{project.images[carouselIndex].caption}</div>
                              <div className="text-[11px] text-white/80 mt-1">Image {carouselIndex + 1} of {project.images.length}</div>
                            </div>
                          </div>
                        </div>
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
                ) : (
                  <div className="mt-8 w-full animate-fadeIn">
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-xs sm:text-[13px] font-black text-slate-800 tracking-tight leading-none uppercase">
                        {currentStep.aboutHeading}
                      </h3>
                      <p className="mt-2.5 text-[13px] sm:text-[14px] leading-relaxed text-slate-500 font-semibold font-sans whitespace-pre-line">
                        {currentStep.aboutText}
                      </p>

                      {activeSection === 'result' && (project.slug === 'marketpulse' || project.slug === 'developer-workflow' || project.slug === 'shopease-landing') && (
                        <div className="mt-6">
                          <h4 className="text-sm sm:text-[15px] font-black uppercase tracking-[0.06em] text-slate-700">
                            {currentStep.metricsHeading}
                          </h4>

                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentStep.metrics.map((m) => (
                              <div key={m.label} className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm">
                                <div className="text-[26px] font-extrabold text-slate-800">{m.value}</div>
                                <div className="mt-1 text-xs text-slate-500 font-semibold">{m.label}</div>
                              </div>
                            ))}
                          </div>

                          <h4 className="text-sm sm:text-[15px] font-black uppercase tracking-[0.06em] text-slate-700 mt-6">
                            BUSINESS OUTCOMES
                          </h4>

                          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {currentStep.businessOutcomes?.map((outcome) => {
                              const Icon = iconMap[outcome.icon] || Clock
                              return (
                                <div key={outcome.title} className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm flex items-start gap-3">
                                  <div className={`${outcome.iconColor} mt-1`}><Icon size={18} /></div>
                                  <div>
                                    <h5 className="text-[14px] font-bold text-slate-800">{outcome.title}</h5>
                                    <p className="mt-1 text-xs text-slate-500">{outcome.description}</p>
                                  </div>
                                </div>
                              )
                            })}
                          </div>

                          {currentStep.testimonial && (
                            <div className={`mt-6 rounded-2xl border px-6 py-4 flex items-start gap-4 ${
                              project.slug === 'marketpulse'
                                ? 'border-[#ece8db] bg-[#f7f5ee]'
                                : 'border-neutral-100 bg-neutral-50/50'
                            }`}>
                              <div className="w-10 h-10 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center flex-shrink-0">
                                <User size={16} />
                              </div>
                              <div>
                                <p className="text-[14px] text-slate-800 font-medium">{currentStep.testimonial.quote}</p>
                                {currentStep.testimonial.link ? (
                                  <a className="mt-2 inline-block text-violet-600 font-medium font-sans text-xs sm:text-[13px] font-bold" href={currentStep.testimonial.link} target="_blank" rel="noopener noreferrer">
                                    — {currentStep.testimonial.author}
                                  </a>
                                ) : (
                                  <span className="mt-2 inline-block text-slate-500 font-sans text-xs sm:text-[13px] font-bold">
                                    — {currentStep.testimonial.author}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

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
