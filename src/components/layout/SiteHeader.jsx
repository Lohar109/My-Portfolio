import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function NavLink({ label, href, onClick }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-1 py-2 text-sm font-medium text-gray-700 tracking-wide transition-colors hover:text-gray-900"
    >
      {label}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gray-900"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ originX: 0 }}
      />
    </button>
  )
}

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/#hero' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)
    const elementId = href.split('#')[1]
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/30 bg-[#f5f5f7]/95 backdrop-blur-md">
      <div className="flex max-w-full items-center justify-between px-6 py-5 md:px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-900">
              <span className="text-sm font-bold text-white">V</span>
            </div>
            <span className="hidden font-medium tracking-tight text-gray-900 sm:inline text-sm">
              Vaibhav
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          className="hidden gap-8 md:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
            />
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            className="block h-0.5 w-5 bg-gray-900 transition-all"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="block h-0.5 w-5 bg-gray-900 transition-all"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="block h-0.5 w-5 bg-gray-900 transition-all"
          />
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-gray-200/30 md:hidden"
      >
        <nav className="flex flex-col gap-4 px-6 py-5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-left text-sm font-medium text-gray-700 tracking-wide transition-colors hover:text-gray-900"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </motion.div>
    </header>
  )
}

export default SiteHeader
