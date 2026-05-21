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



import { useEffect } from 'react';
import { seedDatabase } from './services/supabaseSeeder'; // Import statement

function App() {
  useEffect(() => {
    const runSeeder = async () => {
      console.log("🚀 Seeding trigger detected from frontend UI...");
      const baselineResult = await seedDatabase();
      if (baselineResult) {
        console.log("🎯 SUCCESS! Saara data vector banke Supabase mein upload ho gaya hai.");
      } else {
        console.log("❌ Seeding failed. Browser console ke errors check karo.");
      }
    };

    // IS LINE KO UNCOMMENT KARKE EK BAAR RUN KARNA HAI:
    runSeeder();
  }, []);

  // Tumhara baaki ka return JSX code nache jaisa hai waisa hi rahega...
  return (
    <div>
       {/* Tera portfolio layout */}
    </div>
  );
}

export default App;





// function App() {
//   return (
//     <div className="flex min-h-screen flex-col bg-[#eaeaea] text-gray-900">
//       <ScrollToTop />
//       <SiteHeader />
//       <div className="flex-1">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/education" element={<Education />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/projects/:slug" element={<ProjectDetail />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//       <FloatingAssistant />
//     </div>
//   )
// }

// export default App
