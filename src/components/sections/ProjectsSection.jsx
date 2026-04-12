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
            className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-video bg-gray-100 p-4">
              <div className="flex h-full items-center justify-center rounded-[1.25rem] border border-gray-200 bg-white text-sm font-medium text-gray-400">
                Project video
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                {project.summary}
              </p>

              <div className="mt-6 flex justify-end">
                <Link
                  to={`/projects/${project.slug}`}
                  className="rounded-full bg-black px-6 py-2 text-center font-semibold !text-white transition hover:bg-gray-800"
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
