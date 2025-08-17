import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gradient">VedX Agency</h3>
            <p className="text-gray-300 leading-relaxed">
              Building digital experiences that matter. We transform ideas into powerful web applications 
              that drive business growth and user engagement.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/vedXpatel" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Applications</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">API Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@vedxagency.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <Button asChild className="w-full">
              <a href="#contact">Start Your Project</a>
            </Button>
          </div>
        </div>

        <Separator className="my-8 border-gray-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} VedX Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
