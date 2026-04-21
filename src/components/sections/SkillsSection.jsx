import {
  AudioWaveform,
  BrainCircuit,
  Code2,
  Database,
  Network,
  Server,
  Sparkles,
  TerminalSquare,
  Wrench,
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
} from 'react-icons/si'
import { motion } from 'framer-motion'
import { skills } from '../../data/skills.js'

const categoryIcons = {
  'FRONTEND DEVELOPMENT': Code2,
  'BACKEND ENGINEERING': Server,
  'AI & MACHINE LEARNING': BrainCircuit,
  'WORKFLOW & TOOLS': Wrench,
}

const techIcons = {
  react: { icon: SiReact, className: 'text-sky-400' },
  nextjs: { icon: SiNextdotjs, className: 'text-gray-900' },
  vue: { icon: SiVuedotjs, className: 'text-emerald-400' },
  tailwind: { icon: SiTailwindcss, className: 'text-cyan-400' },
  html5: { icon: SiHtml5, className: 'text-orange-400' },
  css: { icon: SiCss, className: 'text-blue-400' },
  javascript: { icon: SiJavascript, className: 'text-yellow-300' },
  typescript: { icon: SiTypescript, className: 'text-blue-600' },
  nodejs: { icon: SiNodedotjs, className: 'text-green-400' },
  express: { icon: SiExpress, className: 'text-gray-900' },
  supabase: { icon: SiSupabase, className: 'text-emerald-400' },
  mongodb: { icon: SiMongodb, className: 'text-emerald-500' },
  postgresql: { icon: SiPostgresql, className: 'text-blue-600' },
  sql: { icon: Database, className: 'text-indigo-300' },
  dsa: { icon: Network, className: 'text-fuchsia-500' },
  openai: { icon: SiOpenai, className: 'text-gray-900' },
  gemini: { icon: SiGooglegemini, className: 'text-violet-300' },
  rag: { icon: BrainCircuit, className: 'text-sky-300' },
  prompt: { icon: TerminalSquare, className: 'text-gray-700' },
  langchain: { icon: SiLangchain, className: 'text-indigo-300' },
  whisper: { icon: AudioWaveform, className: 'text-cyan-300' },
  git: { icon: SiGit, className: 'text-orange-400' },
  github: { icon: SiGithub, className: 'text-gray-900' },
  copilot: { icon: SiGithubcopilot, className: 'text-gray-900' },
  vercel: { icon: SiVercel, className: 'text-gray-900' },
  render: { icon: SiRender, className: 'text-blue-300' },
  docker: { icon: SiDocker, className: 'text-sky-400' },
  postman: { icon: SiPostman, className: 'text-orange-300' },
}

function TechIcon({ icon }) {
  const iconConfig = techIcons[icon]
  const IconComponent = iconConfig?.icon ?? Sparkles

  return (
    <IconComponent
      className={`h-4 w-4 shrink-0 ${iconConfig?.className ?? 'text-zinc-200'}`}
      aria-hidden="true"
    />
  )
}

function SkillPill({ skill }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/70 bg-white px-3.5 py-2 text-xs font-medium text-gray-800 shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md">
      <TechIcon icon={skill.icon} />
      {skill.name}
    </span>
  )
}

function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="relative px-6 py-24 sm:px-10 lg:px-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight leading-tight text-gray-900">
            The tools I use to build what matters.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
            I&apos;ve spent thousands of hours refining these tools to build
            products that scale. From the first pixel to the final deployment, I
            handle the full lifecycle.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          {skills.map((group) => {
            const CategoryIcon = categoryIcons[group.title] ?? Sparkles

            return (
              <article
                key={group.title}
                className="rounded-3xl border border-gray-200/50 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/50 bg-gray-50 text-gray-700">
                    <CategoryIcon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <p className="text-xs font-semibold tracking-[0.24em] text-gray-900">
                    {group.title}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <SkillPill key={item.name} skill={item} />
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default SkillsSection
