import { motion } from 'framer-motion'
import {
  Database,
  Key,
  Search,
  Shield,
  FileText,
  Mail,
  Zap,
  Code2,
  Layers,
  Lock,
  Upload,
  Webhook,
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Database,
      title: 'Easy Installation & Setup',
      description: 'Docker-based deployment with simple docker-compose setup. Start your backend in minutes.',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: Layers,
      title: 'Data Modeling',
      description: 'Create and manage entities with flexible primary keys, composite keys, and custom data types.',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: Code2,
      title: 'Comprehensive REST API',
      description: 'Full CRUD operations with advanced filtering, pagination, and standardized JSON responses.',
      color: 'from-gray-800 to-gray-900',
    },
    {
      icon: Key,
      title: 'Authentication System',
      description: 'User management with secure login/registration flow and access + refresh tokens.',
      color: 'from-gray-700 to-gray-800',
    },
    {
      icon: Search,
      title: 'Advanced Search (BSH Search)',
      description: 'Logical and comparison filters with TypeScript type-safe query builder.',
      color: 'from-gray-600 to-gray-700',
    },
    {
      icon: Shield,
      title: 'Security & Access Control',
      description: 'RBAC roles, policies, entity-level permissions, API keys, and audit trails.',
      color: 'from-gray-800 to-gray-900',
    },
    {
      icon: Upload,
      title: 'File Management',
      description: 'Uploads, configurable storage, and file serving capabilities.',
      color: 'from-gray-700 to-gray-800',
    },
    {
      icon: Mail,
      title: 'Email/Mailing System',
      description: 'Template-based email sending with configurable service integrations.',
      color: 'from-gray-600 to-gray-700',
    },
    {
      icon: Webhook,
      title: 'Triggers (Beta)',
      description: 'Event-driven automation with webhooks, conditional logic, and chaining.',
      color: 'from-gray-800 to-gray-900',
    },
    {
      icon: Zap,
      title: 'Developer Experience',
      description: 'Postman Collection, TypeScript SDK (planned), RESTful type-safe APIs, and full documentation.',
      color: 'from-gray-700 to-gray-800',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8">
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
            <span className="text-gray-900">Powerful </span>
            <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build and scale your backend infrastructure
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative glass rounded-2xl p-6 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />
                
                {/* Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10`}>
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-all">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl blur-xl transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600">
              <span className="px-4 py-2 rounded-lg bg-gray-100">Caching</span>
              <span className="px-4 py-2 rounded-lg bg-gray-100">WebSocket Support</span>
              <span className="px-4 py-2 rounded-lg bg-gray-100">Derived Entities</span>
              <span className="px-4 py-2 rounded-lg bg-gray-100">Multi-database Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

