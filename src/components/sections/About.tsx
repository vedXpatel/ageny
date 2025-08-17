'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Target, Users, Zap, Shield, Heart } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to ensure their vision becomes reality.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver on time, every time, with robust and scalable solutions.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about creating digital experiences that make a difference.'
    },
    {
      icon: CheckCircle,
      title: 'Quality',
      description: 'Quality is non-negotiable. We test thoroughly and maintain high standards.'
    }
  ]

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
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
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            We're More Than Just
            <span className="text-gradient block">Developers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate creators, problem-solvers, and digital innovators 
            dedicated to transforming businesses through exceptional web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2019, VedX Agency began with a simple mission: to create web applications 
                that don't just look good, but drive real business results. What started as a small 
                team of developers has grown into a full-service digital agency.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to have helped dozens of businesses transform their digital presence, 
                from startups to enterprise companies, across various industries and markets.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance user engagement, and create lasting competitive advantages in the digital marketplace.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our diverse team brings together expertise in development, design, strategy, and business 
            to deliver comprehensive solutions that drive results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">VP</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Ved Patel</h4>
                <p className="text-blue-600 font-medium mb-2">Founder & Lead Developer</p>
                <p className="text-gray-600 text-sm">
                  Full-stack developer with expertise in modern web technologies and a passion for creating exceptional user experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">JD</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h4>
                <p className="text-blue-600 font-medium mb-2">Senior Developer</p>
                <p className="text-gray-600 text-sm">
                  Specialized in React and Node.js development with a focus on scalable architecture and performance optimization.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="pt-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">JS</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h4>
                <p className="text-blue-600 font-medium mb-2">UI/UX Designer</p>
                <p className="text-gray-600 text-sm">
                  Creative designer focused on user-centered design principles and creating intuitive, beautiful interfaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
