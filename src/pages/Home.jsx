import SiteHeader from '../components/layout/SiteHeader.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import FooterSection from '../components/sections/FooterSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.main
      className="min-h-screen bg-[#F9F9FB] text-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <SiteHeader />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </motion.main>
  )
}

export default Home
