import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-[#f5f5f7]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
              <span className="font-bold text-white">VL</span>
            </div>
            <span className="hidden font-semibold tracking-tight text-gray-900 sm:inline">
              Vaibhav
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
          className="hidden gap-1 md:flex"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-white/50 hover:text-gray-900"
            >
              {item.label}
            </button>
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
            className="block h-0.5 w-6 bg-gray-900 transition-all"
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="block h-0.5 w-6 bg-gray-900 transition-all"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            className="block h-0.5 w-6 bg-gray-900 transition-all"
          />
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-gray-200/50 md:hidden"
      >
        <nav className="flex flex-col gap-1 bg-white/50 px-6 py-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-600 transition-colors hover:bg-white hover:text-gray-900"
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
