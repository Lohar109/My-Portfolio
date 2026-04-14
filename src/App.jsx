import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import ScrollToTop from './components/layout/ScrollToTop.jsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </>
  )
}

export default App
