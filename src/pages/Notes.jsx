import NotesSection from '../components/sections/NotesSection.jsx'
import { motion } from 'framer-motion'

function Notes() {
  return (
    <motion.main
      className="min-h-screen text-gray-900 pt-25 lg:pt-[30px]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <NotesSection />
    </motion.main>
  )
}

export default Notes
