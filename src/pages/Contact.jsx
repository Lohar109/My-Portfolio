import FooterSection from '../components/sections/FooterSection.jsx'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <motion.main
      className="min-h-screen text-gray-900 pt-15 lg:pt-7"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <FooterSection />
    </motion.main>
  )
}

export default Contact
