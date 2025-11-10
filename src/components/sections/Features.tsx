import { motion } from 'framer-motion'
import {
  Database,
  Key,
  Search,
  Shield,
  Mail,
  Zap,
  Code2,
  Layers,
  Upload,
  Webhook,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const Features = () => {
  const features = [
    {
      icon: Database,
      title: 'Easy Installation & Setup',
      description: 'Docker-based deployment with simple docker-compose setup. Start your backend in minutes.',
      color: 'from-blue-500 to-indigo-600',
      iconBg: 'from-blue-50 to-indigo-50',
      category: 'Infrastructure',
    },
    {
      icon: Layers,
      title: 'Data Modeling',
      description: 'Create and manage entities with flexible primary keys, composite keys, and custom data types.',
      color: 'from-purple-500 to-pink-600',
      iconBg: 'from-purple-50 to-pink-50',
      category: 'Core',
    },
    {
      icon: Code2,
      title: 'Comprehensive REST API',
      description: 'Full CRUD operations with advanced filtering, pagination, and standardized JSON responses.',
      color: 'from-emerald-500 to-teal-600',
      iconBg: 'from-emerald-50 to-teal-50',
      category: 'API',
    },
    {
      icon: Key,
      title: 'Authentication System',
      description: 'User management with secure login/registration flow and access + refresh tokens.',
      color: 'from-amber-500 to-orange-600',
      iconBg: 'from-amber-50 to-orange-50',
      category: 'Security',
    },
    {
      icon: Search,
      title: 'Advanced Search (BSH Search)',
      description: 'Logical and comparison filters with TypeScript type-safe query builder.',
      color: 'from-cyan-500 to-blue-600',
      iconBg: 'from-cyan-50 to-blue-50',
      category: 'API',
    },
    {
      icon: Shield,
      title: 'Security & Access Control',
      description: 'RBAC roles, policies, entity-level permissions, API keys, and audit trails.',
      color: 'from-red-500 to-rose-600',
      iconBg: 'from-red-50 to-rose-50',
      category: 'Security',
    },
    {
      icon: Upload,
      title: 'File Management',
      description: 'Uploads, configurable storage, and file serving capabilities.',
      color: 'from-violet-500 to-purple-600',
      iconBg: 'from-violet-50 to-purple-50',
      category: 'Storage',
    },
    {
      icon: Mail,
      title: 'Email/Mailing System',
      description: 'Template-based email sending with configurable service integrations.',
      color: 'from-sky-500 to-cyan-600',
      iconBg: 'from-sky-50 to-cyan-50',
      category: 'Communication',
    },
    {
      icon: Webhook,
      title: 'Triggers',
      description: 'Event-driven automation with webhooks, conditional logic, and chaining.',
      color: 'from-fuchsia-500 to-pink-600',
      iconBg: 'from-fuchsia-50 to-pink-50',
      category: 'Automation',
      badge: 'Beta',
    },
    {
      icon: Zap,
      title: 'Developer Experience',
      description: 'Postman Collection, TypeScript SDK (planned), RESTful type-safe APIs, and full documentation.',
      color: 'from-yellow-500 to-amber-600',
      iconBg: 'from-yellow-50 to-amber-50',
      category: 'Tools',
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
    <section id="features" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-100/30 to-orange-100/30 rounded-full blur-3xl" />
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
            Feature Rich
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Powerful </span>
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to build and scale your backend infrastructure
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className={cn(
                  "group relative h-full bg-white/90 backdrop-blur-sm border-2 border-gray-200/80 overflow-hidden",
                  "hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500",
                  "hover:bg-white"
                )}>
                  {/* Gradient Accent Border */}
                  <div className={cn(
                    "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    feature.color
                  )} />
                  
                  {/* Gradient Background on Hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500",
                      feature.color
                    )}
                  />
                  
                  <CardHeader className="space-y-5 pb-4">
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between">
                      <div className={cn(
                        "relative inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br shadow-sm group-hover:shadow-md transition-all duration-300",
                        "group-hover:scale-110 group-hover:rotate-3",
                        feature.iconBg
                      )}>
                        <Icon className={cn(
                          "w-7 h-7 transition-all duration-300",
                          "text-gray-700 group-hover:text-gray-900"
                        )} />
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300",
                          feature.color
                        )} />
                      </div>
                      {feature.badge && (
                        <Badge variant="secondary" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-md hover:shadow-lg transition-shadow">
                          {feature.badge}
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight tracking-tight mt-4">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <Separator className="mx-6 bg-gray-200" />

                  <CardContent className="pt-6 pb-6">
                    <CardDescription className="text-gray-600 leading-relaxed text-[15px]">
                      {feature.description}
                    </CardDescription>
                  </CardContent>

                  {/* Hover Glow Effect */}
                  <div className={cn(
                    "absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-lg blur-2xl transition-opacity duration-500 -z-10",
                    feature.color
                  )} />
                </Card>
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
          className="mt-24"
        >
          <Card className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200/80 hover:border-gray-300 transition-all duration-300 overflow-hidden group">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="text-center relative z-10 pb-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-amber-500" />
                <Badge variant="outline" className="px-3 py-1 text-xs font-semibold border-amber-200 text-amber-700 bg-amber-50/50">
                  Roadmap
                </Badge>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                Coming Soon
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
                Exciting features we're working on to make your development experience even better
              </CardDescription>
            </CardHeader>
            
            <Separator className="mx-6 bg-gray-200 relative z-10" />
            
            <CardContent className="pt-8 pb-8 relative z-10">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {['Caching', 'WebSocket Support', 'Derived Entities', 'Multi-database Support'].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="px-5 py-2.5 text-sm font-medium border-gray-300 text-gray-700 bg-white/80 hover:bg-white hover:border-gray-400 hover:shadow-md transition-all cursor-default"
                    >
                      {item}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

