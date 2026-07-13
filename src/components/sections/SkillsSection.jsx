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
  SiJira,
  SiVitest,
} from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
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
  jira: { icon: SiJira, className: 'text-[#0052CC]' },
  vitest: { icon: SiVitest, className: 'text-[#FCC72B]' },
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

const orbitingSkills = [
  // Inner Orbit (Radius 85)
  {
    id: 'react',
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
    radius: 85,
    angle: 0,
    orbit: 'inner',
    duration: 25,
    delay: 0,
    bobDuration: 4
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#1F2937',
    glowColor: '#6366F1',
    radius: 85,
    angle: 120,
    orbit: 'inner',
    duration: 25,
    delay: 0.4,
    bobDuration: 4
  },
  {
    id: 'javascript',
    name: 'JS',
    icon: SiJavascript,
    color: '#F7DF1E',
    radius: 85,
    angle: 240,
    orbit: 'inner',
    duration: 25,
    delay: 0.8,
    bobDuration: 4
  },
  
  // Middle Orbit (Radius 145)
  {
    id: 'nodejs',
    name: 'Node',
    icon: SiNodedotjs,
    color: '#339933',
    radius: 145,
    angle: 40,
    orbit: 'middle',
    duration: 35,
    delay: 1.2,
    bobDuration: 4.5,
    direction: 'ccw'
  },
  {
    id: 'postgresql',
    name: 'Postgres',
    icon: SiPostgresql,
    color: '#4169E1',
    radius: 145,
    angle: 160,
    orbit: 'middle',
    duration: 35,
    delay: 1.6,
    bobDuration: 4.5,
    direction: 'ccw'
  },
  {
    id: 'typescript',
    name: 'TS',
    icon: SiTypescript,
    color: '#3178C6',
    radius: 145,
    angle: 280,
    orbit: 'middle',
    duration: 35,
    delay: 2.0,
    bobDuration: 4.5,
    direction: 'ccw'
  },
  
  // Outer Orbit (Radius 205)
  {
    id: 'docker',
    name: 'Docker',
    icon: SiDocker,
    color: '#2496ED',
    radius: 205,
    angle: 80,
    orbit: 'outer',
    duration: 45,
    delay: 2.4,
    bobDuration: 5
  },
  {
    id: 'aiml',
    name: 'AI / ML',
    icon: BrainCircuit,
    color: '#EC4899',
    radius: 205,
    angle: 200,
    orbit: 'outer',
    duration: 45,
    delay: 2.8,
    bobDuration: 5,
    isPulse: true
  },
  {
    id: 'copilot',
    name: 'Copilot',
    icon: SiGithubcopilot,
    color: '#24292F',
    glowColor: '#6366F1',
    radius: 205,
    angle: 320,
    orbit: 'outer',
    duration: 45,
    delay: 3.2,
    bobDuration: 5
  }
]

const hexToRgb = (hex) => {
  if (!hex || typeof hex !== 'string') return '99, 102, 241'
  let cleanHex = hex.replace('#', '')
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(char => char + char).join('')
  }
  const r = parseInt(cleanHex.substring(0, 2), 16) || 0
  const g = parseInt(cleanHex.substring(2, 4), 16) || 0
  const b = parseInt(cleanHex.substring(4, 6), 16) || 0
  return `${r}, ${g}, ${b}`
}

function DynamicSkillsIllustration() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const isOrbitPaused = hoveredCard !== null

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Map mouse position to degree rotation for 3D parallax tilt
  const rotateX = useTransform(mouseY, [-220, 220], [12, -12])
  const rotateY = useTransform(mouseX, [-220, 220], [-12, 12])

  // Add smooth springs
  const springConfig = { damping: 25, stiffness: 150 }
  const tiltX = useSpring(rotateX, springConfig)
  const tiltY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const centerX = rect.left + width / 2
    const centerY = rect.top + height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      className="relative w-full max-w-[460px] aspect-square flex items-center justify-center scale-[0.72] xs:scale-[0.85] sm:scale-100 origin-center select-none overflow-visible cursor-default"
      style={{
        rotateX: tiltX,
        rotateY: tiltY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient background soft radial glow */}
      <div className="absolute inset-0 bg-radial from-violet-300/20 via-violet-100/5 to-transparent blur-3xl rounded-full scale-125 pointer-events-none animate-pulse duration-[8s]" />

      {/* Floating background star dust particles */}
      {[
        { x: 70, y: 80, size: 4, color: '#8B5CF6', delay: 0 },
        { x: 380, y: 110, size: 5, color: '#3178C6', delay: 1.5 },
        { x: 50, y: 320, size: 3, color: '#F7DF1E', delay: 0.8 },
        { x: 410, y: 350, size: 6, color: '#EC4899', delay: 2.2 },
        { x: 210, y: 30, size: 4, color: '#06B6D4', delay: 1.1 },
        { x: 250, y: 420, size: 5, color: '#10B981', delay: 1.8 }
      ].map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full filter blur-[0.5px] pointer-events-none"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
          }}
          animate={{
            y: [-6, 6, -6],
            opacity: [0.35, 0.9, 0.35],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 3 + star.size / 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay
          }}
        />
      ))}

      {/* Orbit Track Lines with Glowing Comets */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 460 460" fill="none">
        {/* Inner Track */}
        <circle cx="230" cy="230" r="85" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="1" strokeDasharray="3 6" />
        <motion.circle 
          cx="230" cy="230" r="85" 
          stroke="url(#comet-inner)" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray="25 510"
          animate={{ strokeDashoffset: [0, -535] }}
          transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
        />

        {/* Middle Track */}
        <circle cx="230" cy="230" r="145" stroke="rgba(6, 182, 212, 0.08)" strokeWidth="1" strokeDasharray="4 8" />
        <motion.circle 
          cx="230" cy="230" r="145" 
          stroke="url(#comet-middle)" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray="35 876"
          animate={{ strokeDashoffset: [0, 911] }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        />

        {/* Outer Track */}
        <circle cx="230" cy="230" r="205" stroke="rgba(236, 72, 153, 0.06)" strokeWidth="1" strokeDasharray="5 10" />
        <motion.circle 
          cx="230" cy="230" r="205" 
          stroke="url(#comet-outer)" strokeWidth="2.5" strokeLinecap="round"
          strokeDasharray="45 1243"
          animate={{ strokeDashoffset: [0, -1288] }}
          transition={{ repeat: Infinity, duration: 19, ease: "linear" }}
        />

        <defs>
          <linearGradient id="comet-inner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="comet-middle" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="1" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="comet-outer" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="1" />
            <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.05" />
          </linearGradient>
          
          {/* Dynamic connection beam gradients */}
          {orbitingSkills.map((skill) => {
            const glow = skill.glowColor || skill.color
            return (
              <linearGradient key={skill.id} id={`beam-gradient-${skill.id}`} x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor={glow} stopOpacity="0" />
                <stop offset="30%" stopColor={glow} stopOpacity="0.8" />
                <stop offset="70%" stopColor={glow} stopOpacity="0.8" />
                <stop offset="100%" stopColor={glow} stopOpacity="0" />
              </linearGradient>
            )
          })}
        </defs>
      </svg>

      {/* Orbiting Cards Map */}
      {orbitingSkills.map((skill) => {
        const Icon = skill.icon
        const glow = skill.glowColor || skill.color
        const isCCW = skill.direction === 'ccw'

        return (
          <div
            key={skill.id}
            className="absolute w-full h-full flex items-center justify-center pointer-events-none"
            style={{
              transform: `rotate(${skill.angle}deg)`,
            }}
          >
            {/* Spinning wrapper */}
            <div
              className="absolute w-full h-full flex items-center justify-center animate-spin pointer-events-none"
              style={{
                animation: `spin ${skill.duration}s linear infinite`,
                animationPlayState: isOrbitPaused ? 'paused' : 'running',
                animationDirection: isCCW ? 'reverse' : 'normal',
              }}
            >
              {/* Bobbing Container */}
              <motion.div
                className="pointer-events-none"
                animate={{ y: [-3, 3, -3] }}
                transition={{
                  repeat: Infinity,
                  duration: skill.bobDuration,
                  ease: "easeInOut",
                  delay: skill.delay
                }}
              >
                {/* Active connection beam to the reactor centerpiece */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10" viewBox="0 0 460 460">
                  <line
                    x1="230" y1="230"
                    x2="230" y2={230 - skill.radius}
                    stroke={hoveredCard === skill.id ? `rgba(${hexToRgb(glow)}, 0.25)` : "rgba(139, 92, 246, 0.04)"}
                    strokeWidth={hoveredCard === skill.id ? "2" : "1"}
                    className="transition-all duration-300"
                  />
                  {hoveredCard === skill.id && (
                    <motion.line
                      x1="230" y1="230"
                      x2="230" y2={230 - skill.radius}
                      stroke={`url(#beam-gradient-${skill.id})`}
                      strokeWidth="2.5"
                      strokeDasharray="20 40"
                      animate={{ strokeDashoffset: [0, -60] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  )}
                </svg>

                {/* Card positioning and Counter-Rotation wrapper */}
                <div
                  className="pointer-events-auto"
                  style={{
                    transform: `translateY(${-skill.radius}px) rotate(${-skill.angle}deg)`,
                  }}
                >
                  <div
                    className="animate-spin"
                    style={{
                      animation: `spin ${skill.duration}s linear infinite`,
                      animationPlayState: isOrbitPaused ? 'paused' : 'running',
                      animationDirection: isCCW ? 'normal' : 'reverse',
                    }}
                  >
                    {/* The premium glassmorphic card itself */}
                    <motion.div
                      className="relative group flex flex-col items-center justify-center w-16 h-16 rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-md cursor-grab active:cursor-grabbing transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.02)]"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                      whileHover={{ 
                        scale: 1.15, 
                        z: 25,
                        boxShadow: `0 0 25px rgba(${hexToRgb(glow)}, 0.35), 0 10px 24px rgba(0,0,0,0.05)`,
                        borderColor: `${glow}80`
                      }}
                      onHoverStart={() => setHoveredCard(skill.id)}
                      onHoverEnd={() => setHoveredCard(null)}
                    >
                      {/* Brand colored neon glow behind card */}
                      <AnimatePresence>
                        {hoveredCard === skill.id && (
                          <motion.div
                            className="absolute -inset-1.5 rounded-2xl blur-md opacity-25 -z-10 pointer-events-none"
                            style={{ backgroundColor: glow }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.25, scale: 1.05 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.25 }}
                          />
                        )}
                      </AnimatePresence>

                      <Icon 
                        className={`h-6.5 w-6.5 transition-transform duration-300 group-hover:scale-110 ${skill.isPulse ? 'animate-pulse' : ''}`} 
                        style={{ color: skill.color }} 
                      />
                      <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider select-none">
                        {skill.name}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )
      })}

      {/* ==================== CENTRAL HUB (Advanced Reactor Sphere) ==================== */}
      {/* Outer pulsing glow ring */}
      <motion.div
        className="absolute w-[115px] h-[115px] sm:w-[130px] sm:h-[130px] rounded-full bg-indigo-500/10 border border-indigo-400/20 blur-sm pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Primary high-tech reactor glass sphere */}
      <motion.div
        className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 shadow-[0_12px_36px_rgba(99,102,241,0.4)] flex items-center justify-center overflow-hidden border border-white/20 relative z-20"
        whileHover={{ 
          scale: 1.06,
          boxShadow: '0 16px 48px rgba(99,102,241,0.55)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Mirror lighting reflection gloss */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none" />

        {/* Double counter-rotating neural connection vectors */}
        {/* Layer 1: Clockwise */}
        <motion.div
          className="absolute inset-0 opacity-50 mix-blend-screen flex items-center justify-center scale-90 pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-violet-200" strokeWidth="1" fill="none">
            <circle cx="50" cy="50" r="30" strokeDasharray="4 8" />
            <line x1="50" y1="50" x2="20" y2="30" />
            <circle cx="20" cy="30" r="3.5" fill="currentColor" className="text-[#61DAFB]" />
            <line x1="50" y1="50" x2="80" y2="70" />
            <circle cx="80" cy="70" r="3.5" fill="currentColor" className="text-[#3178C6]" />
            <line x1="50" y1="50" x2="25" y2="75" />
            <circle cx="25" cy="75" r="3" fill="currentColor" className="text-[#F7DF1E]" />
          </svg>
        </motion.div>

        {/* Layer 2: Counter-Clockwise */}
        <motion.div
          className="absolute inset-0 opacity-40 mix-blend-screen flex items-center justify-center scale-95 pointer-events-none"
          animate={{ rotate: [360, 0] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-indigo-200" strokeWidth="1" fill="none">
            <circle cx="50" cy="50" r="40" strokeDasharray="3 6" />
            <line x1="50" y1="50" x2="80" y2="30" />
            <circle cx="80" cy="30" r="2.5" fill="currentColor" className="text-[#339933]" />
            <line x1="50" y1="50" x2="20" y2="70" />
            <circle cx="20" cy="70" r="2.5" fill="currentColor" className="text-[#EC4899]" />
          </svg>
        </motion.div>

        {/* Center glowing core sparkling energy */}
        <motion.div
          className="relative z-10 flex items-center justify-center text-white pointer-events-none"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="h-8 w-8 text-white filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.45)] animate-pulse" />
        </motion.div>
      </motion.div>
    </motion.div>
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
    { value: '8+', text: 'Projects', subtext: 'Completed', icon: Rocket, bg: 'bg-rose-50 border border-rose-100 text-rose-600 shadow-[0_2px_8px_rgba(225,29,72,0.06)]' },
    { value: '100%', text: 'Commitment to', subtext: 'Quality', icon: Star, bg: 'bg-amber-50 border border-amber-100 text-amber-600 shadow-[0_2px_8px_rgba(245,158,11,0.06)]' }
  ]

  return (
    <motion.section
      id="skills"
      className="relative px-6 py-24 sm:px-10 lg:px-16 bg-slate-50/40 border-t border-slate-100 overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
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
