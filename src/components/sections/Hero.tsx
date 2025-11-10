import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Animated Background Elements */}
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
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/40 via-orange-200/30 to-red-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-100/20 to-blue-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative"
        >
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Enhanced Badge */}
            <motion.div variants={itemVariants} className="mb-6 lg:mb-8 flex justify-center lg:justify-start">
              <Badge 
                variant="outline" 
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-gray-300/80 bg-white/90 backdrop-blur-sm shadow-sm hover:border-gray-400 hover:shadow-md transition-all duration-300 group"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-4 h-4 mr-2 text-blue-600 group-hover:text-blue-700" />
                </motion.div>
                <span className="text-gray-700 group-hover:text-gray-900">Backend-as-a-Service Platform</span>
              </Badge>
            </motion.div>

            {/* Enhanced Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-[1.1] tracking-tight"
            >
              <span className="block text-gray-900 mb-2">Build APIs</span>
              <motion.span 
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              >
                Effortlessly
              </motion.span>
            </motion.h1>

            {/* Enhanced Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 lg:mb-10 leading-relaxed font-medium"
            >
              A powerful backend tool that helps developers{' '}
              <span className="text-gray-900 font-semibold">start and scale</span> their backend with ease.
              <br className="hidden sm:block" />
              <span className="text-gray-700"> Eliminate boilerplate code and accelerate backend development.</span>
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-5"
            >
              <motion.a
                href="#quick-start"
                className="group relative px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-semibold text-base lg:text-lg flex items-center space-x-3 overflow-hidden shadow-2xl shadow-gray-900/30 hover:shadow-gray-900/50 transition-all duration-300 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              
              <motion.a
                href="#"
                className="group px-8 lg:px-10 py-4 lg:py-5 glass text-gray-900 rounded-2xl font-semibold text-base lg:text-lg flex items-center space-x-3 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 border-2 border-gray-300/80 hover:border-gray-400 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span>View Documentation</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Engine Screenshot */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-visible"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-300/60 bg-white w-[150%] lg:w-[180%] max-w-none"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Screenshot Image */}
              <div className="relative">
                <img
                  src="/bsgengine.png"
                  alt="BshEngine Screenshot"
                  className="w-full h-auto object-contain"
                  loading="eager"
                  decoding="async"
                />
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl -z-10 opacity-50"></div>
            </motion.div>
            
            {/* Floating decorative elements around image */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl -z-10"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-xl -z-10"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 right-20 hidden lg:block"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl rotate-45" />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-32 left-16 hidden lg:block"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-xl" />
      </motion.div>
    </section>
  )
}

export default Hero

