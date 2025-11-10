import { motion } from 'framer-motion'
import { Terminal, ArrowRight, Book, Github, Package, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const QuickStart = () => {
  const steps = [
    {
      number: '01',
      title: 'Pull Docker Image',
      description: 'Get the latest BSH Engine image from Docker Hub',
      code: 'docker pull bsh-engine:latest',
      icon: Package,
      gradient: 'from-blue-500 to-indigo-600',
      iconBg: 'from-blue-50 to-indigo-50',
    },
    {
      number: '02',
      title: 'Configure & Run',
      description: 'Set up your environment variables and start the container',
      code: 'docker-compose up -d',
      icon: Terminal,
      gradient: 'from-purple-500 to-pink-600',
      iconBg: 'from-purple-50 to-pink-50',
    },
    {
      number: '03',
      title: 'Start Building',
      description: 'Access the API at localhost:7071 and begin creating entities',
      code: 'curl http://localhost:7071/health',
      icon: ArrowRight,
      gradient: 'from-emerald-500 to-teal-600',
      iconBg: 'from-emerald-50 to-teal-50',
    },
  ]

  const resources = [
    { name: 'Documentation', icon: Book, href: '#' },
    { name: 'GitHub Repository', icon: Github, href: '#' },
    { name: 'Docker Hub', icon: Package, href: '#' },
  ]

  return (
    <section id="quick-start" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium border-gray-300 text-gray-600 bg-white/50">
            Quick Start
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Get Started in </span>
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">3 Simple Steps</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have your backend running in minutes, not hours
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connection Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-20 left-full items-center justify-center z-0" style={{ width: 'calc(100% - 2rem)', transform: 'translateX(-1rem)' }}>
                    <div className={cn(
                      "flex-1 h-0.5 bg-gradient-to-r",
                      step.gradient
                    )} />
                    <div className={cn(
                      "relative w-12 h-12 flex items-center justify-center",
                    )}>
                      <div className={cn(
                        "absolute w-8 h-8 rounded-full bg-gradient-to-r opacity-20 blur-md",
                        step.gradient
                      )} />
                      <ChevronRight className={cn(
                        "w-6 h-6 relative z-10",
                        "text-gray-400"
                      )} />
                    </div>
                    <div className={cn(
                      "flex-1 h-0.5 bg-gradient-to-l opacity-30",
                      steps[index + 1].gradient
                    )} />
                  </div>
                )}

                <Card className={cn(
                  "relative h-full bg-white/90 backdrop-blur-sm border-2 border-gray-200/80 overflow-hidden",
                  "hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500",
                  "hover:bg-white group-hover:scale-[1.02]"
                )}>
                  {/* Gradient Accent Border */}
                  <div className={cn(
                    "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    step.gradient
                  )} />
                  
                  {/* Gradient Background on Hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500",
                      step.gradient
                    )}
                  />

                  <CardContent className="p-8 relative">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -left-4 z-20">
                      <div className={cn(
                        "relative w-16 h-16 rounded-2xl bg-gradient-to-br shadow-lg",
                        "flex items-center justify-center text-xl font-bold text-white",
                        "group-hover:scale-110 group-hover:rotate-3 transition-all duration-300",
                        step.gradient
                      )}>
                        <span>{step.number}</span>
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300",
                          step.gradient
                        )} />
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 mt-6">
                      <div className={cn(
                        "relative inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br shadow-sm",
                        "group-hover:shadow-md transition-all duration-300",
                        "group-hover:scale-110 group-hover:rotate-3",
                        step.iconBg
                      )}>
                        <Icon className={cn(
                          "w-7 h-7 transition-all duration-300",
                          "text-gray-700 group-hover:text-gray-900"
                        )} />
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300",
                          step.gradient
                        )} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors leading-tight tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                      {step.description}
                    </p>

                    {/* Code Block */}
                    <div className="relative group/code">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg opacity-0 group-hover/code:opacity-100 blur transition-opacity duration-300" />
                      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 border border-gray-700/50 overflow-x-auto">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          </div>
                          <span className="text-xs text-gray-500 font-mono ml-2">Terminal</span>
                        </div>
                        <pre className="text-sm font-mono text-gray-100">
                          <code className="text-emerald-400">{step.code}</code>
                        </pre>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={cn(
                      "absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-lg blur-2xl transition-opacity duration-500 -z-10",
                      step.gradient
                    )} />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200/80 hover:border-gray-300 transition-all duration-300 overflow-hidden group">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardContent className="p-12 relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Ready to Build?
              </h3>
              <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join developers who are already building faster with BSH Engine
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <motion.a
                  href="#"
                  className="relative group/btn px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold text-lg flex items-center space-x-2 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">View Documentation</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-300" />
                </motion.a>
                
                <motion.a
                  href="#"
                  className="relative group/btn px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 rounded-xl font-semibold text-lg flex items-center space-x-2 border-2 border-gray-200 hover:border-gray-300 transition-all overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <Github className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">View on GitHub</span>
                </motion.a>
              </div>

              {/* Resource Links */}
              <div className="flex flex-wrap justify-center gap-3">
                {resources.map((resource, index) => {
                  const ResourceIcon = resource.icon
                  return (
                    <motion.a
                      key={index}
                      href={resource.href}
                      className="group/resource flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 hover:bg-white transition-all text-gray-700 hover:text-gray-900"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <ResourceIcon className="w-4 h-4 group-hover/resource:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium">{resource.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default QuickStart

