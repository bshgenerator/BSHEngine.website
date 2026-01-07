import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { currentAnnouncement } from '../data/announcement'
import { navLinks, getStartedLink } from '../data/navLinks'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasAnnouncement, setHasAnnouncement] = useState(() => {
    if (typeof window !== 'undefined') {
      const dismissedId = localStorage.getItem('announcement-dismissed-id')
      return dismissedId !== currentAnnouncement.id
    }
    return true
  })

  const handleHashLink = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkAnnouncement = () => {
      const dismissedId = localStorage.getItem('announcement-dismissed-id')
      setHasAnnouncement(dismissedId !== currentAnnouncement.id)
    }

    checkAnnouncement()

    const handleAnnouncementDismissed = () => {
      setHasAnnouncement(false)
    }

    window.addEventListener('announcement-dismissed', handleAnnouncementDismissed)
    window.addEventListener('storage', checkAnnouncement)

    return () => {
      window.removeEventListener('announcement-dismissed', handleAnnouncementDismissed)
      window.removeEventListener('storage', checkAnnouncement)
    }
  }, [])


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed ${hasAnnouncement ? 'top-[40px] md:top-[44px]' : 'top-0'} left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'glass border-b border-gray-200 shadow-lg bg-white/95'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <img
                src="/logo.svg"
                alt="BSH Engine Logo"
                className="w-8 h-8"
              />
            </div>
            <span className="text-xl font-bold text-gradient">BSH Engine</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 group-hover:w-full transition-all duration-300" />
                </a>
              ) : link.href.startsWith('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashLink(link.href, e)}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium text-sm relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 to-gray-700 group-hover:w-full transition-all duration-300" />
                </a>
              )
            ))}
            <motion.a
              href={getStartedLink}
              className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-semibold text-sm hover:bg-gray-800 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-200 bg-white/95"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : link.href.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleHashLink(link.href, e)}
                    className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-600 hover:text-gray-900 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <motion.a
                href={getStartedLink}
                className="block px-6 py-2.5 bg-gray-900 text-white rounded-lg font-semibold text-center hover:bg-gray-800"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

