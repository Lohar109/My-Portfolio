import { GitBranch, Monitor, Server } from 'lucide-react'
import { skills } from '../../data/skills.js'

const skillIcons = {
  Frontend: Monitor,
  Backend: Server,
  Workflow: GitBranch,
}

function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
            Core Skills
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The tools I use to build what matters.
          </h2>
        </div>

        <p className="max-w-xl text-base leading-7 text-gray-600">
          I&apos;ve spent thousands of hours refining these tools to build products
          that scale. From the first pixel to the final deployment, I handle the
          full lifecycle.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skills.map((group) => {
          const Icon = skillIcons[group.title]

          return (
            <article
              key={group.title}
              className="rounded-[2rem] border border-gray-100 bg-white/85 p-7 shadow-sm backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-gray-700">
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-900">
                  {group.title}
                </p>
              </div>

              <p className="mt-5 text-sm leading-6 text-gray-600">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection
