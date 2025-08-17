'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Globe, 
  Smartphone, 
  Code, 
  Palette, 
  Cloud, 
  Settings, 
  Database, 
  Shield,
  Zap,
  BarChart3,
  Users,
  Target
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js. We create scalable, performant solutions that drive business growth.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Cross-browser Compatibility'],
      price: 'From $5,000',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android. We build apps that users love and businesses rely on.',
      features: ['Native iOS/Android', 'React Native', 'Flutter', 'App Store Optimization'],
      price: 'From $8,000',
      popular: true
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'Robust REST and GraphQL APIs that power your applications. We design scalable backend systems that grow with your business.',
      features: ['REST APIs', 'GraphQL', 'Authentication', 'Rate Limiting'],
      price: 'From $3,000',
      popular: false
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive, beautiful interfaces. We focus on user experience and conversion optimization.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      price: 'From $4,000',
      popular: false
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure and DevOps services to ensure your applications are scalable, secure, and always available.',
      features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Monitoring', 'Auto-scaling'],
      price: 'From $2,000',
      popular: false
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your applications running smoothly and securely.',
      features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Bug Fixes'],
      price: 'From $500/month',
      popular: false
    }
  ]

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Python', icon: '🐍' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚓' }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="text-gradient block">Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital solutions that help businesses 
            thrive in the digital age. Our expertise spans the entire development lifecycle.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover-lift ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    {service.popular && (
                      <Badge variant="default" className="bg-blue-600">Most Popular</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                    <Badge variant="outline" className="text-xs">Starting Price</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Technologies We Master</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We stay current with the latest technologies and frameworks to deliver cutting-edge solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium text-gray-700">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Development Process</h3>
            <p className="text-gray-600">
              We follow a proven methodology that ensures quality, transparency, and successful project delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Discovery', description: 'Understanding your needs and project requirements' },
              { icon: Palette, title: 'Design', description: 'Creating wireframes and visual designs' },
              { icon: Code, title: 'Development', description: 'Building your solution with clean, maintainable code' },
              { icon: Zap, title: 'Deployment', description: 'Launching and maintaining your application' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <step.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

export default Services
