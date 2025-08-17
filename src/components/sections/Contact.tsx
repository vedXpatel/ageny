'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Show success message
    toast.success('Thank you for your message! We\'ll get back to you within 24 hours.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: ''
    })
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@vedxagency.com',
      description: 'Send us an email anytime and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak directly with our team during business hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule an in-person meeting at our office'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri, 9AM - 6PM PST',
      description: 'We\'re available during standard business hours'
    }
  ]

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'API Development',
    'UI/UX Design',
    'Website Redesign',
    'Custom Software',
    'Other'
  ]

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Not Sure'
  ]

  const timelineOptions = [
    '1-2 months',
    '3-4 months',
    '5-6 months',
    '6+ months',
    'ASAP',
    'Not Sure'
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
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
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start
            <span className="text-gradient block">Your Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge digital solutions? 
            Let's discuss your project and how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="mr-2 h-6 w-6 text-blue-600" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your project.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@company.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((budget) => (
                            <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Response Guarantee */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">24-Hour Response</h3>
                  <p className="text-sm text-gray-600">
                    We guarantee to respond to all inquiries within 24 hours, even on weekends.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Free Consultation */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <AlertCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Free Consultation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get a free 30-minute consultation to discuss your project requirements.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Schedule Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Ways to Connect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Live Chat</h4>
              <p className="text-gray-600 text-sm">
                Chat with our team in real-time during business hours
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
              <p className="text-gray-600 text-sm">
                Send us detailed project requirements via email
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Phone Call</h4>
              <p className="text-gray-600 text-sm">
                Schedule a call to discuss your project in detail
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
