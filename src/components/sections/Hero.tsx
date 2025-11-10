import { motion } from 'framer-motion'
import { ArrowRight, Play, Code2, Zap, Database } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-300/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium text-gray-700 border border-gray-300">
              <Zap className="w-4 h-4 mr-2" />
              Backend-as-a-Service Platform
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900">Build APIs</span>
            <br />
            <span className="text-gradient">Effortlessly</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            A powerful backend tool that helps developers start and scale their backend with ease.
            <br className="hidden md:block" />
            <span className="text-gray-700"> Eliminate boilerplate code and accelerate backend development.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#quick-start"
              className="group px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg flex items-center space-x-2 hover:bg-gray-800 hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#"
              className="px-8 py-4 glass text-gray-900 rounded-xl font-semibold text-lg flex items-center space-x-2 hover:bg-gray-50 transition-all border border-gray-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              <span>View Documentation</span>
            </motion.a>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 text-sm"
          >
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-lg">
              <Database className="w-4 h-4 text-gray-700" />
              <span className="text-gray-700">Docker-based</span>
            </div>
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-lg">
              <Code2 className="w-4 h-4 text-gray-700" />
              <span className="text-gray-700">RESTful APIs</span>
            </div>
            <div className="flex items-center space-x-2 glass px-4 py-2 rounded-lg">
              <Zap className="w-4 h-4 text-gray-700" />
              <span className="text-gray-700">Zero Boilerplate</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

