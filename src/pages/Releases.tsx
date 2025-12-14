import { motion } from 'framer-motion'
import { Calendar, Tag, Sparkles, CheckCircle2, AlertCircle, Wrench, Zap } from 'lucide-react'
import { releases } from '@/data/releases'
import type { ReleaseNote } from '@/data/releases'

const Releases = () => {
  const getNoteIcon = (type: ReleaseNote['type']) => {
    switch (type) {
      case 'feature':
        return <Sparkles className="w-4 h-4" />
      case 'improvement':
        return <Zap className="w-4 h-4" />
      case 'bugfix':
        return <Wrench className="w-4 h-4" />
      case 'breaking':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <CheckCircle2 className="w-4 h-4" />
    }
  }

  const getNoteColor = (type: ReleaseNote['type']) => {
    switch (type) {
      case 'feature':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'improvement':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'bugfix':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'breaking':
        return 'bg-red-100 text-red-700 border-red-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getNoteLabel = (type: ReleaseNote['type']) => {
    switch (type) {
      case 'feature':
        return 'Feature'
      case 'improvement':
        return 'Improvement'
      case 'bugfix':
        return 'Bug Fix'
      case 'breaking':
        return 'Breaking Change'
      default:
        return type
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Header */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 via-purple-200/30 to-pink-200/40 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="block text-gray-900 mb-2">Release Notes</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Development Progress
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Stay updated with the latest features, improvements, and fixes in BSH Engine
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Releases List */}
      <section className="relative pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {releases.map((release, index) => (
              <motion.div
                key={release.version}
                variants={itemVariants}
                className="glass rounded-2xl p-6 sm:p-8 border border-gray-200/80 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Release Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 pb-6 border-b border-gray-200">
                  <div className="mb-4 sm:mb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <Tag className="w-5 h-5 text-blue-600" />
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {release.version}
                      </h2>
                      {index === 0 && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          Latest
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {release.description}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm whitespace-nowrap">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(release.date)}
                  </div>
                </div>

                {/* Highlights */}
                {release.highlights && release.highlights.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {release.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Release Notes */}
                <div className="space-y-3">
                  {release.notes.map((note, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-50/50 hover:bg-gray-50 transition-colors"
                    >
                      <div className={`flex items-center gap-2 px-2.5 py-1 rounded-md border text-xs font-semibold flex-shrink-0 ${getNoteColor(note.type)}`}>
                        {getNoteIcon(note.type)}
                        <span>{getNoteLabel(note.type)}</span>
                      </div>
                      <div className="flex-1 pt-0.5">
                        <p className="text-gray-700">
                          {note.description}
                          {note.links && note.links.length > 0 && (
                            <span className="ml-2">
                              (
                              {note.links.map((link, linkIdx) => (
                                <span key={linkIdx}>
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-700 underline font-medium"
                                  >
                                    {link.text}
                                  </a>
                                  {linkIdx < note.links!.length - 1 && <span className="mx-1">/</span>}
                                </span>
                              ))}
                              )
                            </span>
                          )}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State Message */}
          {releases.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 text-lg">No releases available yet.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Releases

