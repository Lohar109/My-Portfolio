import HeroSection from '../components/sections/HeroSection.jsx'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.main
      className="min-h-screen text-gray-900 pt-25"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <HeroSection />
    </motion.main>
  )
}

export default Home
