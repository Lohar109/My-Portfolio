import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-16 pb-24 sm:px-10 lg:px-16"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">
          Projects I&apos;ve built from the ground up.
        </h2>

        <p className="mt-7 max-w-2xl text-base leading-7 text-gray-600">
          A collection of web applications where I solved real problems with
          clean code and thoughtful design.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm"
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
                    className="rounded-full border border-gray-100 bg-white px-3 py-1 text-xs font-medium text-gray-800"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-end gap-4 border-t border-gray-100 pt-6">
                <Link
                  to={`/projects/${project.slug}`}
                  className="rounded-full bg-black px-6 py-3 text-center font-semibold !text-white transition hover:bg-gray-800"
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
