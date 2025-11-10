import { motion } from 'framer-motion'
import { CheckCircle2, Rocket } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { benefits, keyPoints } from '@/data/benefits'

const Benefits = () => {

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
    <section id="benefits" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl" />
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
            Why BSH Engine?
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Why To Use </span>
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">BSH Engine</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built by developers for developers who want to ship faster, not configure more
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
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
                    benefit.gradient
                  )} />
                  
                  {/* Gradient Background on Hover */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500",
                      benefit.gradient
                    )}
                  />
                  
                  <CardHeader className="space-y-5 pb-4">
                    {/* Header with Icon and Stat */}
                    <div className="flex items-start justify-between">
                      <div className={cn(
                        "relative inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br shadow-sm group-hover:shadow-md transition-all duration-300",
                        "group-hover:scale-110 group-hover:rotate-3",
                        benefit.iconBg
                      )}>
                        <Icon className={cn(
                          "w-7 h-7 transition-all duration-300",
                          "text-gray-700 group-hover:text-gray-900"
                        )} />
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300",
                          benefit.gradient
                        )} />
                      </div>
                      <div className="text-right">
                        <div className={cn(
                          "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                          benefit.gradient
                        )}>
                          {benefit.stat}
                        </div>
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                          {benefit.statLabel}
                        </div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight tracking-tight mt-4">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>

                  <Separator className="mx-6 bg-gray-200" />

                  <CardContent className="pt-6 pb-6">
                    <CardDescription className="text-gray-600 leading-relaxed text-[15px]">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>

                  {/* Hover Glow Effect */}
                  <div className={cn(
                    "absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-lg blur-2xl transition-opacity duration-500 -z-10",
                    benefit.gradient
                  )} />
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key Points Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200/80 hover:border-gray-300 transition-all duration-300 overflow-hidden group">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <CardHeader className="text-center relative z-10 pb-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <Rocket className="w-5 h-5 text-blue-500" />
                <Badge variant="outline" className="px-3 py-1 text-xs font-semibold border-blue-200 text-blue-700 bg-blue-50/50">
                  Complete Solution
                </Badge>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                Everything You Need
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
                All the tools and features you need to build, deploy, and scale your backend
              </CardDescription>
            </CardHeader>
            
            <Separator className="mx-6 bg-gray-200 relative z-10" />
            
            <CardContent className="pt-8 pb-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center space-x-3 group/item"
                  >
                    <div className="relative">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                      <div className="absolute inset-0 bg-emerald-500 rounded-full opacity-0 group-hover/item:opacity-20 blur-md transition-opacity duration-200" />
                    </div>
                    <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors font-medium">{point}</span>
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

export default Benefits

