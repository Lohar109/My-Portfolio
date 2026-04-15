import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-gray-900">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

export default App
