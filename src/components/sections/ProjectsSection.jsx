import { Link } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import { motion } from 'framer-motion'
import {
  AudioLines,
  Box,
  BrainCircuit,
  Cloud,
  Cuboid,
  Eye,
  PackageCheck,
  Sparkles,
  Truck,
} from 'lucide-react'
import { FaReact, FaChartLine, FaNetworkWired } from 'react-icons/fa'
import {
  SiCplusplus,
  SiQt,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiRender,
} from 'react-icons/si'

function getTechIcon(tech) {
  switch (tech.toLowerCase()) {
    case 'react':
      return <FaReact className="w-4 h-4 text-[#61DAFB]" />
    case 'tailwind css':
      return <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />
    case 'node.js':
      return <SiNodedotjs className="w-4 h-4 text-[#339933]" />
    case 'express':
      return <SiExpress className="w-4 h-4 text-gray-900" />
    case 'mongodb':
      return <SiMongodb className="w-4 h-4 text-[#47A248]" />
    case 'postgresql':
      return <SiPostgresql className="w-4 h-4 text-[#336791]" />
    case 'supabase':
      return <SiSupabase className="w-4 h-4 text-emerald-500" />
    case 'render':
      return <SiRender className="w-4 h-4 text-blue-400" />
    case 'vercel':
      return <SiVercel className="w-4 h-4 text-gray-900" />
    case 'cloudinary':
      return <Cloud className="w-4 h-4 text-sky-500" />
    case 'charts':
      return <FaChartLine className="w-4 h-4 text-indigo-500" />
    case 'api integration':
      return <FaNetworkWired className="w-4 h-4 text-blue-500" />
    case 'c++':
      return <SiCplusplus className="w-4 h-4 text-[#00599C]" />
    case 'qt framework':
      return <SiQt className="w-4 h-4 text-[#41CD52]" />
    case 'qt 3d':
      return <Cuboid className="w-4 h-4 text-violet-500" />
    case 'qt render':
      return <Box className="w-4 h-4 text-sky-500" />
    case 'logistics tech':
      return <Truck className="w-4 h-4 text-emerald-600" />
    case 'optimization algos':
      return <BrainCircuit className="w-4 h-4 text-amber-600" />
    case 'optimization algorithms':
      return <PackageCheck className="w-4 h-4 text-amber-600" />
    case 'genai integration':
      return <Sparkles className="w-4 h-4 text-fuchsia-500" />
    case 'vision api':
      return <Eye className="w-4 h-4 text-sky-500" />
    case 'audio transcription':
      return <AudioLines className="w-4 h-4 text-violet-500" />
    default:
      return null
  }
}

function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.isFeatured)
  const moreProjects = projects.filter((project) => !project.isFeatured)

  return (
    <motion.section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-16 pb-24 sm:px-10 lg:px-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight">
          Projects I've built from the ground up.
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
          A collection of web applications where I solved real problems with
          clean code and thoughtful design.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <motion.article
            key={project.slug}
            className="flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200/50 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="mb-5 leading-relaxed text-gray-600">
                {project.summary}
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.stack?.map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 rounded-full border border-gray-200/50 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
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

      <h3 className="mt-16 mb-6 text-xl font-bold text-gray-900">More Projects</h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {moreProjects.map((project) => (
          <article
            key={project.slug}
            className="rounded-3xl border border-gray-200/50 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>

            <p className="mt-3 text-sm text-gray-500">{project.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200/50 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700"
                >
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>

            <Link
              to={'/projects/' + project.slug}
              className="mt-4 inline-block rounded-full bg-black px-4 py-2 text-center text-sm font-medium !text-white transition-colors hover:bg-gray-800"
            >
              Case Study
            </Link>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default ProjectsSection
