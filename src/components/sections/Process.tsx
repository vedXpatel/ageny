'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Palette, 
  Code, 
  Zap, 
  Users, 
  CheckCircle,
  Clock,
  MessageSquare,
  FileText,
  Smartphone
} from 'lucide-react'

const Process = () => {
  const processSteps = [
    {
      icon: Search,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements. This phase includes market research, competitor analysis, and technical planning.',
      duration: '1-2 weeks',
      deliverables: ['Project Brief', 'Technical Specification', 'Timeline & Budget', 'Risk Assessment'],
      color: 'blue'
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description: 'Our design team creates wireframes, mockups, and interactive prototypes. We focus on user experience, visual design, and ensuring your brand identity is properly represented.',
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'UI Mockups', 'Interactive Prototypes', 'Design System'],
      color: 'purple'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Our development team builds your solution using modern technologies and best practices. We follow agile methodologies with regular updates and testing throughout the process.',
      duration: '4-8 weeks',
      deliverables: ['Core Features', 'Responsive Design', 'API Integration', 'Testing & QA'],
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Testing & Launch',
      description: 'We conduct thorough testing across different devices and browsers, fix any issues, and prepare for launch. This includes performance optimization and security testing.',
      duration: '1-2 weeks',
      deliverables: ['Quality Assurance', 'Performance Testing', 'Security Audit', 'Launch Preparation'],
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Deployment & Support',
      description: 'We deploy your application and provide ongoing support and maintenance. This includes monitoring, updates, and helping you scale as your business grows.',
      duration: 'Ongoing',
      deliverables: ['Production Deployment', 'Monitoring Setup', 'Documentation', 'Support & Maintenance'],
      color: 'red'
    }
  ]

  const methodologies = [
    {
      icon: Clock,
      title: 'Agile Development',
      description: 'We use Scrum methodology with 2-week sprints, daily standups, and regular client demos to ensure transparency and flexibility.',
      benefits: ['Regular Updates', 'Flexible Requirements', 'Quick Iterations', 'Client Involvement']
    },
    {
      icon: MessageSquare,
      title: 'Continuous Communication',
      description: 'We maintain open lines of communication through regular meetings, progress reports, and dedicated project management tools.',
      benefits: ['Transparent Progress', 'Quick Feedback', 'Issue Resolution', 'Client Satisfaction']
    },
    {
      icon: FileText,
      title: 'Comprehensive Documentation',
      description: 'We provide detailed documentation for all aspects of your project, making it easy for your team to understand and maintain.',
      benefits: ['Easy Maintenance', 'Knowledge Transfer', 'Future Development', 'Team Onboarding']
    },
    {
      icon: Smartphone,
      title: 'Quality Assurance',
      description: 'Our QA process includes automated testing, manual testing, and cross-browser compatibility to ensure your application works flawlessly.',
      benefits: ['Bug Prevention', 'Performance Optimization', 'User Experience', 'Reliability']
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-50 relative overflow-hidden">
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
          <Badge variant="secondary" className="mb-4">Our Process</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How We
            <span className="text-gradient block">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven development process ensures quality, transparency, and successful project delivery. 
            We follow industry best practices and maintain clear communication throughout the journey.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-8`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <div className="flex items-center mb-4">
                  <Badge variant="secondary" className="mr-3">
                    Step {index + 1}
                  </Badge>
                  <Badge variant="outline">
                    {step.duration}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                  {step.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br from-${step.color}-100 to-${step.color}-200 flex items-center justify-center shadow-lg`}>
                  <step.icon className={`h-16 w-16 text-${step.color}-600`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Methodologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <methodology.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{methodology.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{methodology.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      {methodology.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Our Process Works</h3>
            <p className="text-gray-600">
              Our systematic approach ensures successful project delivery and long-term client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Projects Delivered On Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support & Communication</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
