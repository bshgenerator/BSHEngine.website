import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { currentAnnouncement } from '../data/announcement'

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      const dismissedId = localStorage.getItem('announcement-dismissed-id')
      return dismissedId !== currentAnnouncement.id
    }
    return true
  })

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('has-announcement')
    } else {
      document.body.classList.remove('has-announcement')
    }
  }, [isVisible])

  const handleDismiss = () => {
    setIsVisible(false)
    // Store the current announcement ID so we know this specific announcement was dismissed
    localStorage.setItem('announcement-dismissed-id', currentAnnouncement.id)
    window.dispatchEvent(new CustomEvent('announcement-dismissed'))
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-2.5 md:py-3 relative">
              <p className="text-xs md:text-sm font-medium text-center px-8">
                {currentAnnouncement.icon && (
                  <span className="mr-1">{currentAnnouncement.icon}</span>
                )}
                {currentAnnouncement.message}
                {currentAnnouncement.linkText && currentAnnouncement.linkHref && (
                  <a
                    href={currentAnnouncement.linkHref}
                    target="_blank"
                    className="ml-2 underline hover:no-underline font-semibold transition-all"
                  >
                    {currentAnnouncement.linkText}
                  </a>
                )}
              </p>
              <button
                onClick={handleDismiss}
                className="absolute right-4 p-1 hover:bg-white/10 rounded-md transition-colors"
                aria-label="Dismiss announcement"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AnnouncementBar

