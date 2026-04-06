import SiteHeader from '../components/layout/SiteHeader.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import FooterSection from '../components/sections/FooterSection.jsx'
import ProjectsSection from '../components/sections/ProjectsSection.jsx'
import SkillsSection from '../components/sections/SkillsSection.jsx'

function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f7f2ea_0%,#f4efe7_45%,#e8dfd1_100%)] text-stone-900">
      <SiteHeader />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  )
}

export default Home
