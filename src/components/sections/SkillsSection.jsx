import { skills } from '../../data/skills.js'

function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
            Core Skills
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            A balanced stack across interface, backend, and delivery.
          </h2>
        </div>

        <p className="max-w-xl text-base leading-7 text-stone-700">
          This section is driven by a simple data file, so you can add or remove
          technologies without touching the component layout.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {skills.map((group) => (
          <article
            key={group.title}
            className="rounded-[2rem] border border-stone-300/80 bg-white/75 p-7 shadow-[0_18px_45px_rgba(120,53,15,0.08)] backdrop-blur"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
              {group.title}
            </p>
            <p className="mt-4 text-sm leading-6 text-stone-600">
              {group.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-800"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
