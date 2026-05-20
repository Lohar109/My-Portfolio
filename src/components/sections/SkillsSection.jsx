import { useState } from 'react'
import {
  Code2,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  Wrench,
  Briefcase,
  Rocket,
  Star,
  Sparkles,
  ArrowRight,
  FileCode2,
  Key,
  Network,
  Cpu,
  Terminal,
  Bot,
  MousePointerClick,
} from 'lucide-react'
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiPostgresql,
  SiReact,
  SiRender,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiPrisma,
  SiRedis,
  SiNginx,
  SiPython,
  SiTensorflow,
  SiFigma,
  SiNotion,
  SiEslint,
  SiGraphql,
  SiGithubactions,
  SiAnthropic,
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { motion, AnimatePresence } from 'framer-motion'
import { skills } from '../../data/skills.js'

const categoryIcons = {
  'Frontend Development': Code2,
  'Backend Development': Server,
  'Database & Storage': Database,
  'DevOps & Deployment': Cloud,
  'AI / Machine Learning': BrainCircuit,
  'Tools & Others': Wrench,
}

const categoryColors = {
  'Frontend Development': 'bg-blue-50 border border-blue-100 text-blue-600 shadow-[0_2px_8px_rgba(37,99,235,0.06)]',
  'Backend Development': 'bg-violet-50 border border-violet-100 text-violet-600 shadow-[0_2px_8px_rgba(139,92,246,0.06)]',
  'Database & Storage': 'bg-emerald-50 border border-emerald-100 text-emerald-600 shadow-[0_2px_8px_rgba(16,185,129,0.06)]',
  'DevOps & Deployment': 'bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-[0_2px_8px_rgba(79,70,229,0.06)]',
  'AI / Machine Learning': 'bg-rose-50 border border-rose-100 text-rose-600 shadow-[0_2px_8px_rgba(225,29,72,0.06)]',
  'Tools & Others': 'bg-amber-50 border border-amber-100 text-amber-600 shadow-[0_2px_8px_rgba(245,158,11,0.06)]',
}


const techIcons = {
  // Frontend
  react: { icon: SiReact, className: 'text-[#61DAFB]' },
  nextjs: { icon: SiNextdotjs, className: 'text-[#000000]' },
  typescript: { icon: SiTypescript, className: 'text-[#3178C6]' },
  tailwind: { icon: SiTailwindcss, className: 'text-[#06B6D4]' },
  javascript: { icon: SiJavascript, className: 'text-[#F7DF1E]' },
  vue: { icon: SiVuedotjs, className: 'text-[#4FC08D]' },
  html5: { icon: SiHtml5, className: 'text-[#E34F26]' },
  css: { icon: SiCss, className: 'text-[#1572B6]' },
  
  // Backend
  nodejs: { icon: SiNodedotjs, className: 'text-[#339933]' },
  express: { icon: SiExpress, className: 'text-[#000000]' },
  rest: { icon: FileCode2, className: 'text-violet-500' },
  graphql: { icon: SiGraphql, className: 'text-[#E10098]' },
  jwt: { icon: Key, className: 'text-indigo-500' },
  dsa: { icon: Network, className: 'text-indigo-600' },
  
  // Database
  postgresql: { icon: SiPostgresql, className: 'text-[#4169E1]' },
  mongodb: { icon: SiMongodb, className: 'text-[#47A248]' },
  redis: { icon: SiRedis, className: 'text-[#DC382D]' },
  prisma: { icon: SiPrisma, className: 'text-[#2D3748]' },
  supabase: { icon: SiSupabase, className: 'text-[#3ECF8E]' },
  sql: { icon: Database, className: 'text-[#00758F]' },
  
  // DevOps
  docker: { icon: SiDocker, className: 'text-[#2496ED]' },
  vercel: { icon: SiVercel, className: 'text-[#000000]' },
  git: { icon: SiGit, className: 'text-[#F05032]' },
  cicd: { icon: SiGithubactions, className: 'text-[#2088FF]' },
  nginx: { icon: SiNginx, className: 'text-[#009639]' },
  render: { icon: SiRender, className: 'text-[#46E3B7]' },
  
  // AI/ML
  openai: { icon: SiOpenai, className: 'text-[#000000]' },
  langchain: { icon: SiLangchain, className: 'text-[#1389FD]' },
  pinecone: { icon: BrainCircuit, className: 'text-[#EC4899]' },
  python: { icon: SiPython, className: 'text-[#3776AB]' },
  tensorflow: { icon: SiTensorflow, className: 'text-[#FF6F00]' },
  gemini: { icon: SiGooglegemini, className: 'text-[#1A73E8]' },
  rag: { icon: Cpu, className: 'text-emerald-500' },
  prompt: { icon: Terminal, className: 'text-slate-600' },
  
  // Tools
  vscode: { icon: TbBrandVscode, className: 'text-[#007ACC]' },
  postman: { icon: SiPostman, className: 'text-[#FF6C37]' },
  figma: { icon: SiFigma, className: 'text-[#F24E1E]' },
  eslint: { icon: SiEslint, className: 'text-[#4B32C3]' },
  notion: { icon: SiNotion, className: 'text-[#000000]' },
  copilot: { icon: SiGithubcopilot, className: 'text-[#000000]' },
  antigravity: { icon: Bot, className: 'text-[#6366F1]' },
  claude: { icon: SiAnthropic, className: 'text-[#CC9966]' },
  cursor: { icon: MousePointerClick, className: 'text-[#3B82F6]' },
}

function TechIcon({ icon }) {
  const iconConfig = techIcons[icon]
  const IconComponent = iconConfig?.icon ?? Sparkles

  return (
    <IconComponent
      className={`h-4.5 w-4.5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${iconConfig?.className ?? 'text-slate-400'}`}
      aria-hidden="true"
    />
  )
}

function SkillPill({ skill }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-200 hover:bg-slate-50 hover:shadow-md cursor-default select-none">
      <TechIcon icon={skill.icon} />
      {skill.name}
    </span>
  )
}

function DynamicSkillsIllustration() {
  const orbitRadiusInner = 85
  const orbitRadiusMiddle = 145
  const orbitRadiusOuter = 205

  return (
    <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center scale-[0.72] xs:scale-[0.85] sm:scale-100 origin-center select-none overflow-visible">
      {/* Soft purple radial halo glow in background */}
      <div className="absolute inset-0 bg-radial from-violet-300/30 via-violet-100/5 to-transparent blur-3xl rounded-full scale-125 pointer-events-none animate-pulse duration-[8s]" />

      {/* Orbit Track Lines */}
      <div className="absolute w-[170px] h-[170px] rounded-full border border-dashed border-violet-200/50 pointer-events-none" />
      <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-violet-200/40 pointer-events-none" />
      <div className="absolute w-[410px] h-[410px] rounded-full border border-dashed border-violet-200/30 pointer-events-none" />

      {/* ==================== INNER ORBIT (Clockwise) ==================== */}
      {/* Card 1: React */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <motion.div
          style={{ y: -orbitRadiusInner }}
          animate={{ rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="group hover:scale-110 active:scale-95 transition-all duration-300 rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(97,218,251,0.05)] hover:shadow-[0_12px_24px_rgba(97,218,251,0.12)] flex flex-col items-center justify-center w-16 h-16 cursor-grab active:cursor-grabbing"
        >
          <SiReact className="text-[#61DAFB] h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">React</span>
        </motion.div>
      </motion.div>

      {/* Card 2: Next.js */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        style={{ rotate: 180 }}
        animate={{ rotate: [180, 540] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <motion.div
          style={{ y: -orbitRadiusInner }}
          animate={{ rotate: [-180, -540] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="group hover:scale-110 active:scale-95 transition-all duration-300 rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center w-16 h-16 cursor-grab active:cursor-grabbing"
        >
          <SiNextdotjs className="text-black h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">Next.js</span>
        </motion.div>
      </motion.div>

      {/* ==================== MIDDLE ORBIT (Counter-Clockwise) ==================== */}
      {/* Card 3: Node.js */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        style={{ rotate: 90 }}
        animate={{ rotate: [90, -270] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        <motion.div
          style={{ y: -orbitRadiusMiddle }}
          animate={{ rotate: [-90, 270] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="group hover:scale-110 active:scale-95 transition-all duration-300 rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(51,153,51,0.05)] hover:shadow-[0_12px_24px_rgba(51,153,51,0.12)] flex flex-col items-center justify-center w-16 h-16 cursor-grab active:cursor-grabbing"
        >
          <SiNodedotjs className="text-[#339933] h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">Node</span>
        </motion.div>
      </motion.div>

      {/* Card 4: PostgreSQL */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        style={{ rotate: 270 }}
        animate={{ rotate: [270, -90] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        <motion.div
          style={{ y: -orbitRadiusMiddle }}
          animate={{ rotate: [-270, 90] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="group hover:scale-110 active:scale-95 transition-all duration-300 rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(65,105,225,0.05)] hover:shadow-[0_12px_24px_rgba(65,105,225,0.12)] flex flex-col items-center justify-center w-16 h-16 cursor-grab active:cursor-grabbing"
        >
          <SiPostgresql className="text-[#4169E1] h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">Postgres</span>
        </motion.div>
      </motion.div>

      {/* ==================== OUTER ORBIT (Clockwise) ==================== */}
      {/* Card 5: Docker */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        style={{ rotate: 45 }}
        animate={{ rotate: [45, 405] }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
      >
        <motion.div
          style={{ y: -orbitRadiusOuter }}
          animate={{ rotate: [-45, -405] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="group hover:scale-110 active:scale-95 transition-all duration-300 rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(36,150,237,0.05)] hover:shadow-[0_12px_24px_rgba(36,150,237,0.12)] flex flex-col items-center justify-center w-16 h-16 cursor-grab active:cursor-grabbing"
        >
          <SiDocker className="text-[#2496ED] h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">Docker</span>
        </motion.div>
      </motion.div>

      {/* Card 6: AI / ML */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        style={{ rotate: 225 }}
        animate={{ rotate: [225, 585] }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
      >
        <motion.div
          style={{ y: -orbitRadiusOuter }}
          animate={{ rotate: [-225, -585] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="group hover:scale-110 active:scale-95 transition-all duration-300 rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(236,72,153,0.05)] hover:shadow-[0_12px_24px_rgba(236,72,153,0.12)] flex flex-col items-center justify-center w-16 h-16 cursor-grab active:cursor-grabbing"
        >
          <BrainCircuit className="text-[#EC4899] h-6 w-6 transition-transform duration-300 group-hover:scale-110 animate-pulse" />
          <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">AI / ML</span>
        </motion.div>
      </motion.div>

      {/* ==================== CENTRAL HUB (Pulsing Sphere) ==================== */}
      {/* Outer Halo Glow */}
      <motion.div
        className="absolute w-[115px] h-[115px] sm:w-[130px] sm:h-[130px] rounded-full bg-indigo-500/10 border border-indigo-400/20 blur-sm pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Glass Center Globe */}
      <motion.div
        className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 shadow-[0_12px_36px_rgba(99,102,241,0.4)] flex items-center justify-center overflow-hidden border border-white/20 relative z-20 group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Soft lighting overlay reflection */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none" />

        {/* Dynamic rotating internal neural connection graphic */}
        <motion.div
          className="absolute inset-0 opacity-40 mix-blend-screen flex items-center justify-center scale-90 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-violet-200" strokeWidth="1.5" fill="none">
            {/* Center Node */}
            <circle cx="50" cy="50" r="4" fill="currentColor" className="text-white" />
            {/* Inner Ring Connections */}
            <circle cx="50" cy="50" r="25" strokeDasharray="3 5" />
            <line x1="50" y1="50" x2="30" y2="35" />
            <circle cx="30" cy="35" r="3" fill="currentColor" className="text-[#61DAFB]" />
            <line x1="50" y1="50" x2="70" y2="35" />
            <circle cx="70" cy="35" r="3" fill="currentColor" className="text-[#339933]" />
            <line x1="50" y1="50" x2="50" y2="75" />
            <circle cx="50" cy="75" r="3" fill="currentColor" className="text-[#EC4899]" />
            {/* Outer Ring Connections */}
            <line x1="30" y1="35" x2="20" y2="60" />
            <circle cx="20" cy="60" r="2" fill="currentColor" />
            <line x1="70" y1="35" x2="80" y2="60" />
            <circle cx="80" cy="60" r="2" fill="currentColor" />
          </svg>
        </motion.div>

        {/* Central glowing icon symbol */}
        <motion.div
          className="relative z-10 flex items-center justify-center text-white"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="h-8 w-8 text-white filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)] animate-pulse" />
        </motion.div>
      </motion.div>
    </div>
  )
}

function SkillsSection() {
  const [activeTab, setActiveTab] = useState('All')

  const filterTabs = [
    { label: 'All', value: 'All' },
    { label: 'Frontend', value: 'Frontend Development' },
    { label: 'Backend', value: 'Backend Development' },
    { label: 'Database', value: 'Database & Storage' },
    { label: 'DevOps', value: 'DevOps & Deployment' },
    { label: 'AI / ML', value: 'AI / Machine Learning' },
    { label: 'Tools & Others', value: 'Tools & Others' },
  ]

  const filteredSkills = activeTab === 'All'
    ? skills
    : skills.filter(group => group.title === activeTab)

  // Define top metric configurations
  const metrics = [
    { value: '10+', text: 'Technologies', subtext: 'Worked With', icon: Code2, bg: 'bg-blue-50 border border-blue-100 text-blue-600 shadow-[0_2px_8px_rgba(37,99,235,0.06)]' },
    { value: '5+', text: 'Years of', subtext: 'Learning', icon: Briefcase, bg: 'bg-emerald-50 border border-emerald-100 text-emerald-600 shadow-[0_2px_8px_rgba(16,185,129,0.06)]' },
    { value: '20+', text: 'Projects', subtext: 'Completed', icon: Rocket, bg: 'bg-rose-50 border border-rose-100 text-rose-600 shadow-[0_2px_8px_rgba(225,29,72,0.06)]' },
    { value: '100%', text: 'Commitment to', subtext: 'Quality', icon: Star, bg: 'bg-amber-50 border border-amber-100 text-amber-600 shadow-[0_2px_8px_rgba(245,158,11,0.06)]' }
  ]

  return (
    <motion.section
      id="skills"
      className="relative px-6 py-24 sm:px-10 lg:px-16 bg-slate-50/40 border-t border-slate-100"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight font-sans">
                Tools, Technologies & Expertise I Use To Build{' '}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Impactful Products.
                </span>
              </h2>
              <p className="max-w-xl text-base sm:text-lg text-gray-500 leading-relaxed font-medium">
                A combination of technical skills, frameworks, and tools that help me build scalable, performant, and user-friendly applications.
              </p>
            </div>

            {/* Metrics Card positioned underneath the adjacent paragraph */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.03)] transition-shadow duration-300 grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y divide-slate-100 sm:divide-y-0 sm:divide-x divide-solid">
              {metrics.map((metric, idx) => {
                const Icon = metric.icon
                return (
                  <div key={idx} className={`flex flex-col items-center justify-center text-center w-full ${idx >= 2 ? 'pt-4 sm:pt-0' : ''} ${idx % 2 === 1 ? 'border-l sm:border-l-0 border-slate-100' : ''} ${idx >= 2 && idx % 2 === 0 ? 'sm:border-t-0' : ''}`}>
                    <div className={`w-10 h-10 rounded-2xl ${metric.bg} flex items-center justify-center mb-2.5 transition-transform duration-300 hover:scale-105`}>
                      <Icon size={18} className="stroke-[2.5]" />
                    </div>
                    <span className="text-xl font-extrabold text-gray-900 tracking-tight leading-none">
                      {metric.value}
                    </span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1.5 leading-none">
                      {metric.text}
                    </span>
                    <span className="text-[9px] font-medium text-gray-400 mt-0.5 leading-none">
                      {metric.subtext}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column: Premium Dynamic Orbiting Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <DynamicSkillsIllustration />
          </div>
        </div>

        {/* Explore by Category section */}
        <div className="space-y-6 mb-10">
          <h3 className="text-lg font-bold text-slate-800 tracking-tight font-sans">
            Explore by Category
          </h3>
          
          {/* Tabs row as Premium Pill Tabs */}
          <div className="flex flex-wrap select-none">
            <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-gray-50/90 border border-gray-200/50 rounded-2xl shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] relative z-10 backdrop-blur-sm">
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab.value
                return (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(tab.value)}
                    className={`relative px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-500 hover:text-gray-800 hover:bg-white/40'
                    }`}
                  >
                    <span className="relative z-10">{tab.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTabBg"
                        className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl shadow-[0_4px_12px_rgba(109,40,217,0.25)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Grid of Categories */}
        <motion.div 
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((group) => {
              const CategoryIcon = categoryIcons[group.title] ?? Sparkles
              const categoryColorClass = categoryColors[group.title] ?? 'bg-violet-50 border border-violet-100 text-violet-600'

              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={group.title}
                  className="rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_36px_rgba(139,92,246,0.04)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Icon + Title */}
                    <div className="flex items-center gap-3.5">
                      <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${categoryColorClass}`}>
                        <CategoryIcon size={20} strokeWidth={2.2} aria-hidden="true" />
                      </span>
                      <h4 className="text-base font-bold tracking-tight text-slate-800 font-sans">
                        {group.title}
                      </h4>
                    </div>


                    {/* Subtitle/Description */}
                    <p className="mt-3.5 text-xs font-semibold text-slate-400 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Pills container */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <SkillPill key={item.name} skill={item} />
                      ))}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default SkillsSection
