import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function NavLink({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative px-0.5 py-2 text-sm font-medium tracking-wide text-gray-500 transition-colors duration-300 hover:text-black"
    >
      {label}
      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-black transition-all duration-300 ease-out group-hover:w-full" />
    </button>
  )
}

function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
  ]

  const handleNavClick = (href) => {
    setIsOpen(false)
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const elementId = href.split('#')[1]
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
      <div className="flex max-w-full items-center justify-between px-8 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/5 border border-gray-200/50">
              <span className="text-xs font-semibold text-black">VL</span>
            </div>
            <span className="font-medium tracking-tight text-black text-sm">
              Vaibhav Lohar
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          className="hidden items-center gap-x-12 md:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
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

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="overflow-hidden border-t border-gray-100 md:hidden"
      >
        <nav className="flex flex-col gap-4 px-8 py-6 bg-white/95">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="relative text-left text-sm font-medium text-gray-500 transition-colors duration-300 hover:text-black"
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
