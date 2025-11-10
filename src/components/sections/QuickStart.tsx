import { motion } from 'framer-motion'
import { Terminal, ArrowRight, Book, Github, Package } from 'lucide-react'

const QuickStart = () => {
  const steps = [
    {
      number: '01',
      title: 'Pull Docker Image',
      description: 'Get the latest BSH Engine image from Docker Hub',
      code: 'docker pull bsh-engine:latest',
      icon: Package,
    },
    {
      number: '02',
      title: 'Configure & Run',
      description: 'Set up your environment variables and start the container',
      code: 'docker-compose up -d',
      icon: Terminal,
    },
    {
      number: '03',
      title: 'Start Building',
      description: 'Access the API at localhost:7071 and begin creating entities',
      code: 'curl http://localhost:7071/health',
      icon: ArrowRight,
    },
  ]

  const resources = [
    { name: 'Documentation', icon: Book, href: '#' },
    { name: 'GitHub Repository', icon: Github, href: '#' },
    { name: 'Docker Hub', icon: Package, href: '#' },
  ]

  return (
    <section id="quick-start" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900">Get Started in </span>
            <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have your backend running in minutes, not hours
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Connection Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gray-700 to-gray-900 z-0" style={{ width: 'calc(100% - 4rem)' }} />
                )}

                <div className="relative glass rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all hover:bg-gray-50">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-900/20 border border-gray-300">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  {/* Code Block */}
                  <div className="relative bg-gray-100 rounded-lg p-4 border border-gray-200 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-700">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
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
          <div className="glass rounded-2xl p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Build?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join developers who are already building faster with BSH Engine
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <motion.a
                href="#"
                className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold text-lg flex items-center space-x-2 hover:bg-gray-800 hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Documentation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="px-8 py-4 glass text-gray-900 rounded-xl font-semibold text-lg flex items-center space-x-2 hover:bg-gray-50 transition-all border border-gray-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </motion.a>
            </div>

            {/* Resource Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {resources.map((resource, index) => {
                const ResourceIcon = resource.icon
                return (
                  <motion.a
                    key={index}
                    href={resource.href}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all text-gray-700 hover:text-gray-900"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ResourceIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">{resource.name}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuickStart

