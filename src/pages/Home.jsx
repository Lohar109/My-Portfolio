import SiteHeader from '../components/layout/SiteHeader.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import FooterSection from '../components/sections/FooterSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'

function Home() {
  return (
    <main className="min-h-screen bg-[#F9F9FB] text-gray-900">
      <SiteHeader />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  )
}

export default Home
