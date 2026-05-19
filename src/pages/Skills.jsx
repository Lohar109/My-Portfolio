import SkillsSection from '../components/sections/SkillsSection.jsx'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <motion.main
      className="min-h-screen text-gray-900 pt-20"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <SkillsSection />
    </motion.main>
  )
}

export default Skills
