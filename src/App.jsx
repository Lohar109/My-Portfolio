import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Education from './pages/Education.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import FloatingAssistant from './components/ui/FloatingAssistant.jsx'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#eaeaea] text-gray-900">
      <ScrollToTop />
      <SiteHeader />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <FloatingAssistant />
    </div>
  )
}

export default App
