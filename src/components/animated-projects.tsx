'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function AnimatedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/ecommerce.jpg',
      link: 'https://github.com/vedXpatel/ecommerce-platform',
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1,
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management with authentication',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: '/task-app.jpg',
      link: 'https://github.com/vedXpatel/task-manager',
      color: 'from-purple-500 to-pink-500',
      delay: 0.2,
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio built with modern web technologies',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      image: '/portfolio.jpg',
      link: 'https://github.com/vedXpatel/portfolio',
      color: 'from-green-500 to-emerald-500',
      delay: 0.3,
    },
    {
      title: 'API Gateway',
      description: 'Microservices API gateway with rate limiting and authentication',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT'],
      image: '/api-gateway.jpg',
      link: 'https://github.com/vedXpatel/api-gateway',
      color: 'from-orange-500 to-red-500',
      delay: 0.4,
    },
  ]

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600">Showcasing our expertise through real-world applications</p>
        </motion.div>

        <div
          ref={ref}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: project.delay }}
              whileHover={{ y: -10 }}
            >
              {/* Floating Background Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(135deg, ${project.color.split(' ')[0].replace('from-', '')} 0%, ${project.color.split(' ')[1].replace('to-', '')} 100%)`,
                }}
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
              />

              <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm group-hover:bg-white">
                {/* Animated Image Placeholder */}
                <motion.div
                  className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="text-6xl opacity-20"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    💻
                  </motion.div>

                  {/* Floating Particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full"
                    animate={{
                      y: [0, 10, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.7,
                    }}
                  />
                </motion.div>

                <CardHeader className="relative">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                    <CardTitle className="text-xl group-hover:text-gray-800 transition-colors duration-500">
                      {project.title}
                    </CardTitle>
                  </motion.div>
                  <CardDescription className="text-base group-hover:text-gray-600 transition-colors duration-500">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  {/* Animated Technology Badges */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: project.delay + 0.3 }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: project.delay + 0.4 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="secondary" className="group-hover:bg-gray-100 transition-colors duration-300">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Animated Button */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500"
                    >
                      View Project
                    </Button>
                  </motion.div>
                </CardContent>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${project.color.split(' ')[0].replace('from-', '')} 0%, ${project.color.split(' ')[1].replace('to-', '')} 100%)`,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
