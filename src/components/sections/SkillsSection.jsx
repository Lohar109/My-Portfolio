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

  // Define tools for the bottom tools row
  const bottomTools = [
    { name: 'VS Code', icon: 'vscode' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Figma', icon: 'figma' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'Notion', icon: 'notion' },
    { name: 'PostgreSQL', icon: 'postgresql' }
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
          <div className="lg:col-span-6 space-y-4">
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

          {/* Metrics Card on the right */}
          <div className="lg:col-span-6 w-full">
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

        {/* Bottom Marquee element: Tools I Use */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 space-y-6"
        >
          <h4 className="text-sm font-bold text-slate-800 tracking-wider uppercase font-sans">
            Tools I Use
          </h4>
          
          <div className="bg-white border border-slate-100 rounded-3xl p-4 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
            {bottomTools.map((tool) => (
              <div
                key={tool.name}
                className="group flex items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-200 hover:bg-slate-50/50 hover:-translate-y-0.5 cursor-default select-none"
              >
                <TechIcon icon={tool.icon} />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default SkillsSection
