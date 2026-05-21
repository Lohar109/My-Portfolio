import { Link, useLocation } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'

function SiteFooter() {
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="mt-20 w-full border-t border-gray-250/20 py-16 bg-white/40 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white font-extrabold font-sans shadow-md shadow-violet-250 select-none">
                VL
              </span>
              <div className="flex flex-col text-left">
                <span className="text-base font-bold text-slate-800 font-sans leading-none">
                  Vaibhav Lohar
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600 mt-1 leading-none">
                  Software Engineer
                </span>
              </div>
            </div>
            <p className="text-sm font-normal text-gray-500 leading-relaxed text-left max-w-xs font-sans">
              Building modern, scalable and impactful digital products.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start md:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 select-none">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-left w-full">
              {links.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <li key={link.name} className="flex items-center gap-2">
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    )}
                    <Link
                      to={link.path}
                      className={`text-sm font-semibold transition-colors duration-200 ${
                        isActive ? 'text-violet-600' : 'text-gray-500 hover:text-slate-800'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col items-start md:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 select-none">
              Connect
            </span>
            <div className="space-y-3.5 text-left w-full">
              <a 
                href="mailto:vaibhavlohar109@gmail.com" 
                className="flex items-center gap-2.5 text-sm font-semibold text-gray-550 hover:text-slate-800 transition-colors"
              >
                <Mail size={16} className="text-gray-400" />
                <span className="truncate">vaibhavlohar109@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/vaibhav-lohar-ba7824315" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-sm font-semibold text-gray-550 hover:text-slate-800 transition-colors"
              >
                <FaLinkedinIn size={16} className="text-[#0A66C2]" />
                <span className="truncate">linkedin.com/in/vaibhav-lohar</span>
              </a>
              <a 
                href="https://github.com/Lohar109" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2.5 text-sm font-semibold text-gray-550 hover:text-slate-800 transition-colors"
              >
                <FaGithub size={16} className="text-gray-400" />
                <span className="truncate">github.com/lohar109</span>
              </a>
            </div>
          </div>

          {/* Follow Me Column */}
          <div className="flex flex-col items-start md:pl-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 select-none">
              Follow Me
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Lohar109"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:text-slate-900 hover:border-slate-350 hover:shadow transition-all duration-200"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/vaibhav-lohar-ba7824315"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:text-slate-900 hover:border-slate-350 hover:shadow transition-all duration-200"
              >
                <FaLinkedinIn size={18} className="text-[#0A66C2]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:text-slate-900 hover:border-slate-350 hover:shadow transition-all duration-200"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:text-slate-900 hover:border-slate-350 hover:shadow transition-all duration-200"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="mt-12 pt-8 border-t border-gray-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs font-semibold text-gray-400">
            &copy; {new Date().getFullYear()} Vaibhav Lohar. All rights reserved.
          </p>
          <p className="font-sans text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Built with React.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter