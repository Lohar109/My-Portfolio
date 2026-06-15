import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Education from './pages/Education.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Notes from './pages/Notes.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import FloatingAssistant from './components/ui/FloatingAssistant.jsx'

// NOTE: The seeding helper is intentionally disabled to avoid duplicate rows.
// If you need to re-run the frontend seeder once, uncomment the import
// and the `useEffect` block below, run once, then comment it out again.
// import { useEffect } from 'react';
// import { seedDatabase } from './services/supabaseSeeder';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7] text-gray-900">
      <ScrollToTop />
      <SiteHeader />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <FloatingAssistant />
    </div>
  )
}

export default App
