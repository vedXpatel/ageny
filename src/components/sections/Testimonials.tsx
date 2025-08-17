'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: '/api/placeholder/100/100',
      content: 'VedX Agency transformed our business with a stunning e-commerce platform. The team was professional, communicative, and delivered beyond our expectations. Our online sales increased by 300% within the first month!',
      rating: 5,
      project: 'E-commerce Platform',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL']
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'HealthFlow',
      image: '/api/placeholder/100/100',
      content: 'Working with VedX Agency was a game-changer for our healthcare startup. They built a complex patient management system that\'s both beautiful and functional. The attention to detail and user experience is outstanding.',
      rating: 5,
      project: 'Healthcare Management System',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GreenEats',
      image: '/api/placeholder/100/100',
      content: 'The team at VedX Agency delivered a mobile app that exceeded our expectations. They understood our vision perfectly and created an intuitive interface that our users love. Highly recommended!',
      rating: 5,
      project: 'Food Delivery App',
      technologies: ['React Native', 'Firebase', 'Stripe']
    },
    {
      name: 'David Thompson',
      role: 'CTO',
      company: 'FinTech Solutions',
      image: '/api/placeholder/100/100',
      content: 'VedX Agency built our financial dashboard with complex data visualization and real-time updates. The performance is incredible, and the code quality is exceptional. They\'re true professionals.',
      rating: 5,
      project: 'Financial Dashboard',
      technologies: ['Vue.js', 'D3.js', 'WebSocket']
    },
    {
      name: 'Lisa Wang',
      role: 'Product Manager',
      company: 'EduTech Pro',
      image: '/api/placeholder/100/100',
      content: 'The learning management system VedX Agency built for us is phenomenal. It handles thousands of users seamlessly and provides an excellent learning experience. The team was responsive and delivered on time.',
      rating: 5,
      project: 'Learning Management System',
      technologies: ['Angular', 'Node.js', 'Redis']
    },
    {
      name: 'Robert Kim',
      role: 'Operations Manager',
      company: 'LogiChain',
      image: '/api/placeholder/100/100',
      content: 'VedX Agency developed our logistics tracking system that revolutionized our operations. The real-time tracking and analytics features have improved our efficiency significantly. Outstanding work!',
      rating: 5,
      project: 'Logistics Tracking System',
      technologies: ['React', 'GraphQL', 'PostgreSQL']
    }
  ]

  const stats = [
    { number: '4.9', label: 'Average Rating', icon: Star },
    { number: '100%', label: 'Client Satisfaction', icon: Quote },
    { number: '50+', label: 'Happy Clients', icon: Quote },
    { number: '95%', label: 'Project Success Rate', icon: Quote }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
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
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our
            <span className="text-gradient block">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience 
            working with VedX Agency and the results we've delivered.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs">{testimonial.project}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <blockquote className="text-gray-600 leading-relaxed mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16"
        >
          <div className="text-center">
            <Quote className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
              "VedX Agency didn't just build us a website—they built us a digital foundation that has transformed our business. 
              Their expertise in modern web technologies, attention to detail, and commitment to our success exceeded all expectations. 
              The team's professionalism and technical skills are unmatched. We've seen a 400% increase in online engagement and our 
              customers love the new experience. If you're looking for a development partner who truly understands business needs 
              and delivers exceptional results, look no further than VedX Agency."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/api/placeholder/100/100" alt="Featured Client" />
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xl">
                  VP
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-lg">Ved Patel</div>
                <div className="text-gray-600">CEO & Founder, VedX Agency</div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with our proven development expertise and commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Start Your Project
              </a>
              <a 
                href="https://github.com/vedXpatel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
