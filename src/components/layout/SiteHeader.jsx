import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import programmerLogo from '../../assets/programmer.png'

function NavLink({ label, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`group relative px-0.5 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
        isActive ? 'text-black font-semibold' : 'text-gray-550 hover:text-black'
      }`}
    >
      {label}
      <span className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-black transition-all duration-300 ease-out ${
        isActive ? 'w-full' : 'w-0 group-hover:w-full'
      }`} />
    </button>
  )
}

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Education', href: '/education' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Notes', href: '/notes' },
    { label: 'Contact', href: '/contact' },
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)
    navigate(href)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto w-full max-w-7xl px-6 py-4 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200/50 bg-black/5 overflow-hidden">
                <img src={programmerLogo} alt="Logo" className="h-full w-full object-cover" />
              </div>
              <span className="text-sm font-medium tracking-tight text-black">
                Vaibhav Lohar
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            className="hidden items-center gap-x-6 md:flex"
          >
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== '/' && location.pathname.startsWith(item.href))
              return (
                <NavLink
                  key={item.label}
                  label={item.label}
                  isActive={isActive}
                  onClick={() => handleNavClick(item.href)}
                />
              )
            })}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-3.5 -m-3.5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="block h-0.5 w-5 bg-black transition-all duration-300"
            />
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="block h-0.5 w-5 bg-black transition-all duration-300"
            />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="block h-0.5 w-5 bg-black transition-all duration-300"
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="overflow-hidden border-t border-gray-100 md:hidden"
      >
        <nav className="flex flex-col gap-4 px-8 py-6 bg-white/95">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.href ||
              (item.href !== '/' && location.pathname.startsWith(item.href))
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-left text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-black font-semibold' : 'text-gray-500 hover:text-black'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 -ml-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-black" />
                )}
              </button>
            )
          })}
        </nav>
      </motion.div>
    </header>
  )
}

export default SiteHeader
