import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Shield, Code2, TrendingUp } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get your backend running in minutes with Docker. No complex configuration needed.',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: Code2,
      title: 'Zero Boilerplate',
      description: 'Focus on your business logic, not infrastructure. We handle the rest.',
      gradient: 'from-gray-600 to-gray-800',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in authentication, RBAC, and audit trails. Production-ready from day one.',
      gradient: 'from-gray-800 to-gray-900',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Designed to grow with your needs. Handle millions of requests effortlessly.',
      gradient: 'from-gray-700 to-gray-800',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
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
            <span className="text-gray-900">Why Choose </span>
            <span className="text-gradient">BSH Engine</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for developers who want to ship faster, not configure more
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative glass rounded-2xl p-8 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} bg-opacity-10`}>
                      <Icon className="w-8 h-8 text-gray-900" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-all">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass rounded-2xl p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Everything You Need
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Docker-based deployment',
              'PostgreSQL support',
              'RESTful APIs',
              'JWT Authentication',
              'Advanced search',
              'File management',
              'Email system',
              'RBAC & permissions',
              'Audit trails',
              'Postman collection',
              'TypeScript SDK',
              'Full documentation',
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle2 className="w-5 h-5 text-gray-700 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits

