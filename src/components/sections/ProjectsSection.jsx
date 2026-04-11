import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-16 pb-24 sm:px-10 lg:px-16"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
            Featured Projects
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Selected work with strong visuals and clear product thinking.
          </h2>
        </div>

        <p className="max-w-xl text-base leading-7 text-stone-700">
          Each card previews the project story. In the next phase, we can link
          these cards to dedicated project detail pages with video and case
          study content.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-[2rem] border border-stone-300/80 bg-white/80 shadow-[0_22px_55px_rgba(120,53,15,0.09)] backdrop-blur"
          >
            <div className={`p-8 ${project.previewTone}`}>
              <div className="rounded-[1.5rem] border border-white/30 bg-white/10 p-6 text-white backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
                  {project.category}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                  {project.previewText}
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">
                {project.role}
              </p>

              <p className="mt-4 text-base leading-7 text-stone-700">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-800"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-stone-200 pt-6">
                <p className="text-sm text-stone-500">
                  Open route: `/projects/{project.slug}`
                </p>
                <Link
                  to={`/projects/${project.slug}`}
                  className="bg-black !text-white font-semibold rounded-full px-6 py-3 text-center transition hover:bg-gray-800"
                >
                  Case Study
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
