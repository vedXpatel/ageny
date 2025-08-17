'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Globe, Smartphone } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Next.js, featuring product management, user authentication, payment processing, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      category: 'Web Application',
      link: 'https://github.com/vedXpatel/ecommerce-platform',
      liveLink: 'https://ecommerce-demo.vercel.app',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      category: 'Web Application',
      link: 'https://github.com/vedXpatel/task-manager',
      liveLink: 'https://task-manager-demo.vercel.app',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3', 'Responsive Design'],
      category: 'Web Application',
      link: 'https://github.com/vedXpatel/weather-dashboard',
      liveLink: 'https://weather-demo.vercel.app',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimal performance.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Responsive'],
      category: 'Website',
      link: 'https://github.com/vedXpatel/portfolio',
      liveLink: 'https://portfolio-demo.vercel.app',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, message encryption, and file sharing capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Socket.io', 'JWT', 'MongoDB'],
      category: 'Web Application',
      link: 'https://github.com/vedXpatel/chat-app',
      liveLink: 'https://chat-demo.vercel.app',
      featured: false
    },
    {
      title: 'Recipe Finder',
      description: 'A recipe discovery application that helps users find recipes based on available ingredients and dietary preferences.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Spoonacular API', 'CSS3', 'Responsive Design', 'Local Storage'],
      category: 'Web Application',
      link: 'https://github.com/vedXpatel/recipe-finder',
      liveLink: 'https://recipe-finder-demo.vercel.app',
      featured: false
    }
  ]

  // const categories = ['All', 'Web Application', 'Website', 'Mobile App', 'API']

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
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
          <Badge variant="secondary" className="mb-4">Our Work</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured
            <span className="text-gradient block">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that demonstrate our expertise in creating 
            innovative digital solutions across various industries and technologies.
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="overflow-hidden hover-lift">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600">Project Preview</p>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-blue-600">Featured</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl mb-4">{project.title}</CardTitle>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover-lift overflow-hidden">
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-16 w-16 text-gray-600 mx-auto mb-2" />
                      <p className="text-gray-600 text-sm">Project Preview</p>
                    </div>
                    <Badge className="absolute top-3 left-3" variant="outline">
                      {project.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" asChild className="flex-1">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Live
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-3 w-3" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life with our expertise in modern web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Get Free Consultation</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/vedXpatel" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View More on GitHub
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
