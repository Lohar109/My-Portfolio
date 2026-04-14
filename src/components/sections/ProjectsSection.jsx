import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import { motion } from 'framer-motion'
import { FaReact, FaChartLine, FaNetworkWired } from 'react-icons/fa'
import { SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si'

function getTechIcon(tech) {
  switch (tech.toLowerCase()) {
    case 'react':
      return <FaReact className="w-3.5 h-3.5 text-[#61DAFB]" />
    case 'tailwind css':
      return <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" />
    case 'node.js':
      return <SiNodedotjs className="w-3.5 h-3.5 text-[#339933]" />
    case 'express':
      return <SiExpress className="w-3.5 h-3.5 text-gray-900" />
    case 'mongodb':
      return <SiMongodb className="w-3.5 h-3.5 text-[#47A248]" />
    case 'charts':
      return <FaChartLine className="w-3.5 h-3.5 text-indigo-500" />
    case 'api integration':
      return <FaNetworkWired className="w-3.5 h-3.5 text-blue-500" />
    default:
      return null
  }
}

function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-16 pb-24 sm:px-10 lg:px-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">
          Projects I've built from the ground up.
        </h2>

        <p className="mt-7 max-w-2xl text-base leading-7 text-gray-600">
          A collection of web applications where I solved real problems with
          clean code and thoughtful design.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.slug}
            className="flex flex-col justify-between overflow-hidden bg-white border border-gray-100 rounded-3xl shadow-sm p-8 transition-shadow duration-300 hover:shadow-md"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="mb-6 leading-relaxed text-gray-600">
                {project.summary}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack?.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-100 rounded-full text-xs font-medium text-gray-700 shadow-sm"
                  >
                    {getTechIcon(tech)}
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex justify-start">
              <Link
                to={'/projects/' + project.slug}
                className="rounded-full bg-black px-6 py-2 text-center font-semibold !text-white transition hover:bg-gray-800"
              >
                Case Study
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default ProjectsSection
