import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <motion.main
      className="min-h-screen text-gray-900 pt-19 lg:pt-[54px]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <ProjectsSection />
    </motion.main>
  )
}

export default Projects
