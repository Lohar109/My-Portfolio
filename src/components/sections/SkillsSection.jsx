import {
  Bolt,
  BrainCircuit,
  Cone,
  GitBranch,
  Link2,
  Monitor,
  Server,
  Sparkles,
  Terminal,
} from 'lucide-react'
import {
  SiGithubcopilot,
  SiGooglegemini,
  SiOpenai,
  SiSupabase,
  SiVercel,
} from 'react-icons/si'
import { skills } from '../../data/skills.js'
import { motion } from 'framer-motion'

const categoryIcons = {
  Frontend: Monitor,
  Backend: Server,
  Workflow: GitBranch,
  'AI & Machine Learning': BrainCircuit,
}

const techIcons = {
  html5: {
    color: 'text-orange-600',
    path: 'M4 2h16l-1.45 16.3L12 22l-6.55-3.7L4 2Zm3.2 5.1.18 2h7.68l-.24 2.72-2.82.76-2.82-.76-.18-1.98H6.96l.32 3.7L12 14.86l4.72-1.32.64-6.44H7.2Z',
  },
  css3: {
    color: 'text-blue-600',
    path: 'M4 2h16l-1.45 16.3L12 22l-6.55-3.7L4 2Zm3.18 5.1.14 2h6.98l-.22 2.24H9.02l.16 1.98L12 14.1l2.82-.78.2-2.18.5-4.04H7.18Z',
  },
  tailwind: {
    color: 'text-cyan-500',
    path: 'M12 6.2c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.68.17 1.16.66 1.7 1.2.88.9 1.9 1.95 4.15 1.95 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.68-.17-1.16-.66-1.7-1.2-.88-.9-1.9-1.95-4.15-1.95ZM7.5 11.6c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.68.17 1.16.66 1.7 1.2.88.9 1.9 1.95 4.15 1.95 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.68-.17-1.16-.66-1.7-1.2-.88-.9-1.9-1.95-4.15-1.95Z',
  },
  react: {
    color: 'text-sky-500',
    path: 'M12 10.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm0-3.7c5 0 9 2.46 9 5.5s-4 5.5-9 5.5-9-2.46-9-5.5 4-5.5 9-5.5Zm0 2c-4.25 0-7 1.97-7 3.5s2.75 3.5 7 3.5 7-1.97 7-3.5-2.75-3.5-7-3.5Z',
  },
  javascript: {
    color: 'text-yellow-500',
    path: 'M4 4h16v16H4V4Zm8.5 12.6c.45.74 1.1 1.2 2.16 1.2 1.02 0 1.8-.53 1.8-1.5 0-.88-.5-1.26-1.53-1.7l-.54-.23c-.5-.22-.72-.4-.72-.76 0-.3.23-.53.6-.53.35 0 .58.15.82.53l1.12-.72c-.45-.78-1.08-1.08-1.94-1.08-1.22 0-2 .78-2 1.83 0 1.13.66 1.66 1.65 2.08l.54.23c.53.23.83.43.83.88 0 .37-.34.64-.86.64-.62 0-.96-.32-1.22-.76l-1.11.65Zm-3.7.02c.32.68.9 1.18 1.83 1.18 1.08 0 1.82-.58 1.82-1.9v-4h-1.36v3.98c0 .58-.24.72-.62.72-.4 0-.58-.28-.76-.6l-1.1.62Z',
  },
  responsive: {
    color: 'text-gray-700',
    path: 'M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6v2h3v1H7v-1h3v-2H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2v7h14V7H5Z',
  },
  nodejs: {
    color: 'text-green-600',
    path: 'M12 2 21 7v10l-9 5-9-5V7l9-5Zm0 2.3L5 8.15v7.7l7 3.85 7-3.85v-7.7l-7-3.85Zm-3 10.6c.7.42 1.48.65 2.28.65 1.1 0 1.78-.43 1.78-1.12 0-.62-.42-.86-1.45-1l-.74-.1c-1.36-.2-2.1-.9-2.1-2.05 0-1.38 1.1-2.28 2.84-2.28.92 0 1.82.22 2.56.66l-.62 1.08a3.8 3.8 0 0 0-1.95-.5c-.88 0-1.4.38-1.4 1 0 .58.42.82 1.34.95l.75.1c1.5.22 2.2.9 2.2 2.08 0 1.47-1.2 2.42-3.14 2.42-1.08 0-2.14-.28-2.98-.8L9 14.9Z',
  },
  express: {
    color: 'text-gray-900',
    path: 'M3 8h18v2H5v2h13v2H5v2h16v2H3V8Z',
  },
  api: {
    color: 'text-indigo-600',
    path: 'M7 7h3v2H8v6h2v2H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm7 0h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3v-2h2V9h-2V7Zm-1 1.5L10.5 16h-2L11 8.5h2Z',
  },
  mongodb: {
    color: 'text-emerald-600',
    path: 'M12 2c3 2.7 4.5 5.45 4.5 8.25 0 3.52-1.66 6.4-4.5 8.75-2.84-2.35-4.5-5.23-4.5-8.75C7.5 7.45 9 4.7 12 2Zm0 3.2v10.4c1.45-1.56 2.25-3.34 2.25-5.35 0-1.66-.75-3.35-2.25-5.05Z',
  },
  mysql: {
    color: 'text-blue-600',
    path: 'M4 14c0-2.2 3.58-4 8-4s8 1.8 8 4-3.58 4-8 4-8-1.8-8-4Zm8-2.4c-3.54 0-6.4 1.08-6.4 2.4s2.86 2.4 6.4 2.4 6.4-1.08 6.4-2.4-2.86-2.4-6.4-2.4Zm-5.5-3c1.28-1.17 3.28-1.9 5.5-1.9s4.22.73 5.5 1.9c-1.56-.72-3.44-1.1-5.5-1.1s-3.94.38-5.5 1.1Z',
  },
  postgresql: {
    color: 'text-slate-600',
    path: 'M12 3c4 0 7 2.5 7 6.2 0 3.35-2.45 5.9-5.75 6.23L12 21l-1.25-5.57C7.45 15.1 5 12.55 5 9.2 5 5.5 8 3 12 3Zm0 2c-2.85 0-5 1.75-5 4.2 0 2.55 2.08 4.25 5 4.25s5-1.7 5-4.25C17 6.75 14.85 5 12 5Z',
  },
  git: {
    color: 'text-red-600',
    path: 'M12 2 22 12 12 22 2 12 12 2Zm-1 6.2v3.1a2.5 2.5 0 0 0-1.25 2.15A2.5 2.5 0 1 0 12.2 11V8.2H11Zm4.3 5.3a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z',
  },
  github: {
    color: 'text-neutral-900',
    path: 'M12 3a9 9 0 0 0-2.84 17.54c.45.08.62-.2.62-.44v-1.56c-2.52.55-3.05-1.08-3.05-1.08-.4-1.04-.98-1.32-.98-1.32-.8-.55.06-.54.06-.54.9.06 1.37.92 1.37.92.78 1.36 2.06.97 2.56.74.08-.58.3-.97.55-1.2-2-.23-4.12-1-4.12-4.47 0-.98.35-1.8.92-2.43-.1-.23-.4-1.16.08-2.4 0 0 .76-.24 2.48.93A8.6 8.6 0 0 1 12 7.88c.77 0 1.54.1 2.26.3 1.72-1.17 2.48-.93 2.48-.93.48 1.24.18 2.17.09 2.4.57.63.91 1.45.91 2.43 0 3.48-2.12 4.24-4.14 4.47.32.28.6.82.6 1.66v2.46c0 .24.17.52.62.44A9 9 0 0 0 12 3Z',
  },
  vite: {
    color: 'text-purple-600',
    path: 'M4 3h16l-8 18L4 3Zm5.1 3 2.9 6.5L14.9 6H9.1Z',
  },
  netlify: {
    color: 'text-teal-600',
    path: 'M12 3 21 12 12 21 3 12 12 3Zm0 3.2L6.2 12l5.8 5.8 5.8-5.8L12 6.2Z',
  },
  render: {
    color: 'text-zinc-700',
    path: 'M5 5h8.5A5.5 5.5 0 0 1 19 10.5c0 2.1-1.18 3.93-2.91 4.86L19 19h-3l-2.4-3H8v3H5V5Zm3 3v5h5.4a2.5 2.5 0 0 0 0-5H8Z',
  },
}

function TechIcon({ icon }) {
  if (icon === 'supabase') {
    return <SiSupabase className="h-6 w-6 shrink-0 text-[#3ECF8E]" aria-hidden="true" />
  }

  if (icon === 'vercel') {
    return <SiVercel className="h-6 w-6 shrink-0 text-black" aria-hidden="true" />
  }

  if (icon === 'copilot') {
    return <SiGithubcopilot className="h-6 w-6 shrink-0 text-gray-900" aria-hidden="true" />
  }

  if (icon === 'openaiGemini') {
    return (
      <span className="inline-flex shrink-0 items-center gap-1" aria-hidden="true">
        <SiOpenai className="h-4 w-4 text-gray-900" />
        <SiGooglegemini className="h-4 w-4 text-violet-600" />
      </span>
    )
  }

  if (icon === 'langchain') {
    return <Link2 className="h-6 w-6 shrink-0 text-indigo-600" aria-hidden="true" />
  }

  if (icon === 'groq') {
    return <Bolt className="h-6 w-6 shrink-0 text-amber-600" aria-hidden="true" />
  }

  if (icon === 'vercelAi') {
    return <SiVercel className="h-6 w-6 shrink-0 text-black" aria-hidden="true" />
  }

  if (icon === 'pinecone') {
    return <Cone className="h-6 w-6 shrink-0 text-emerald-600" aria-hidden="true" />
  }

  if (icon === 'ragPrompt') {
    return (
      <span className="inline-flex shrink-0 items-center gap-1" aria-hidden="true">
        <BrainCircuit className="h-4 w-4 text-sky-600" />
        <Terminal className="h-4 w-4 text-gray-700" />
      </span>
    )
  }

  const techIcon = techIcons[icon]

  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 shrink-0 ${techIcon?.color ?? 'text-gray-700'}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={techIcon?.path ?? techIcons.responsive.path} />
    </svg>
  )
}

function SkillPill({ skill }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-gray-200/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 shadow-sm transition-all hover:shadow-md">
      <TechIcon icon={skill.icon} />
      {skill.name}
    </span>
  )
}

function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="px-6 py-24 sm:px-10 lg:px-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">
            The tools I use to build what matters.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
            I&apos;ve spent thousands of hours refining these tools to build
            products that scale. From the first pixel to the final deployment, I
            handle the full lifecycle.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {skills.map((group) => {
          const Icon = categoryIcons[group.title]

          return (
            <article
              key={group.title}
              className="rounded-3xl border border-gray-200/50 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200/50 bg-gray-50 text-gray-700">
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-900">
                  {group.title}
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {group.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <SkillPill key={item.name} skill={item} />
                ))}
              </div>
            </article>
          )
        })}
        </div>

        <div className="mt-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-2 text-xs font-medium tracking-wide text-blue-900">
            <Sparkles size={14} strokeWidth={1.9} aria-hidden="true" />
            Currently learning GenAI System Design and DevOps through a course.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default SkillsSection
