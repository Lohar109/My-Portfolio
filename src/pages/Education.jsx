import EducationSection from '../components/sections/EducationSection.jsx'
import { motion } from 'framer-motion'

function Education() {
  return (
    <motion.main
      className="min-h-screen text-gray-900 pt-25"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <EducationSection />
    </motion.main>
  )
}

export default Education
