import {
  AudioWaveform,
  BrainCircuit,
  Code2,
  Database,
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
  SiNpm,
  SiOpenai,
  SiPnpm,
  SiPostman,
  SiReact,
  SiRender,
  SiSupabase,
  SiTailwindcss,
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
  nextjs: { icon: SiNextdotjs, className: 'text-zinc-100' },
  vue: { icon: SiVuedotjs, className: 'text-emerald-400' },
  tailwind: { icon: SiTailwindcss, className: 'text-cyan-400' },
  html5: { icon: SiHtml5, className: 'text-orange-400' },
  css: { icon: SiCss, className: 'text-blue-400' },
  javascript: { icon: SiJavascript, className: 'text-yellow-300' },
  nodejs: { icon: SiNodedotjs, className: 'text-green-400' },
  express: { icon: SiExpress, className: 'text-zinc-100' },
  supabase: { icon: SiSupabase, className: 'text-emerald-400' },
  mongodb: { icon: SiMongodb, className: 'text-emerald-500' },
  sql: { icon: Database, className: 'text-indigo-300' },
  openai: { icon: SiOpenai, className: 'text-zinc-100' },
  gemini: { icon: SiGooglegemini, className: 'text-violet-300' },
  rag: { icon: BrainCircuit, className: 'text-sky-300' },
  prompt: { icon: TerminalSquare, className: 'text-zinc-300' },
  langchain: { icon: SiLangchain, className: 'text-indigo-300' },
  whisper: { icon: AudioWaveform, className: 'text-cyan-300' },
  git: { icon: SiGit, className: 'text-orange-400' },
  github: { icon: SiGithub, className: 'text-zinc-100' },
  copilot: { icon: SiGithubcopilot, className: 'text-violet-300' },
  vercel: { icon: SiVercel, className: 'text-zinc-100' },
  render: { icon: SiRender, className: 'text-blue-300' },
  docker: { icon: SiDocker, className: 'text-sky-400' },
  postman: { icon: SiPostman, className: 'text-orange-300' },
}

function TechIcon({ icon }) {
  if (icon === 'npmPnpm') {
    return (
      <span className="inline-flex items-center gap-1.5" aria-hidden="true">
        <SiNpm className="h-4 w-4 text-rose-300" />
        <SiPnpm className="h-4 w-4 text-amber-300" />
      </span>
    )
  }

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
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-medium text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-cyan-300/45 hover:bg-white/10">
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
                className="group relative rounded-3xl bg-[linear-gradient(135deg,rgba(148,163,184,0.4),rgba(148,163,184,0.12),rgba(34,211,238,0.35))] p-[1px] shadow-[0_22px_60px_-38px_rgba(15,23,42,0.9)] transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="relative h-full rounded-[calc(1.5rem-1px)] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),rgba(15,23,42,0.95)_45%,rgba(2,6,23,0.98)_100%)] p-7 backdrop-blur-xl">
                  <div className="pointer-events-none absolute inset-0 rounded-[calc(1.5rem-1px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-30px_55px_rgba(2,6,23,0.4)]" />

                  <div className="relative flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-zinc-100">
                      <CategoryIcon size={20} strokeWidth={1.9} aria-hidden="true" />
                    </span>
                    <p className="text-xs font-semibold tracking-[0.26em] text-zinc-200">
                      {group.title}
                    </p>
                  </div>

                  <p className="relative mt-4 text-sm leading-6 text-zinc-400">
                    {group.description}
                  </p>

                  <div className="relative mt-5 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <SkillPill key={item.name} skill={item} />
                    ))}
                  </div>
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
