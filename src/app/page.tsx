import { Navigation } from "@/components/navigation";
import { AnimatedHero } from "@/components/animated-hero";
import { AnimatedServices } from "@/components/animated-services";
import { AnimatedProjects } from "@/components/animated-projects";
import { AnimatedCTA } from "@/components/animated-cta";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <AnimatedHero />

      {/* Services Section */}
      <AnimatedServices />

      {/* Projects Section */}
      <AnimatedProjects />

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Our Agency
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We&apos;re a team of passionate developers and designers committed to excellence
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To deliver exceptional digital solutions that empower businesses to thrive in the digital age. 
                  We combine technical expertise with creative innovation to create meaningful user experiences.
                </p>
                <h3 className="text-xl font-semibold text-gray-900">Our Approach</h3>
                <p className="text-gray-600">
                  We believe in collaborative development, transparent communication, and delivering projects 
                  that exceed expectations. Every project is an opportunity to push boundaries and create something extraordinary.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Why Choose Us</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Proven track record of successful projects
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Modern tech stack and best practices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Dedicated team and ongoing support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Competitive pricing and transparent quotes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedCTA />

      {/* Footer */}
      <footer className="bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <h3 className="text-sm font-semibold leading-6 text-white">Agency</h3>
              <p className="text-sm leading-6 text-gray-300">
                Building digital experiences that matter. We transform ideas into powerful web applications.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                  <ul className="mt-6 space-y-4">
                    <li><a href="#services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Web Development</a></li>
                    <li><a href="#services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Mobile Apps</a></li>
                    <li><a href="#services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">API Development</a></li>
                    <li><a href="#services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">UI/UX Design</a></li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul className="mt-6 space-y-4">
                    <li><a href="#about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">About</a></li>
                    <li><a href="#projects" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Projects</a></li>
                    <li><a href="#contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Contact</a></li>
                    <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Separator className="mt-8 border-gray-800" />
          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm leading-5 text-gray-400">
              © 2024 Agency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/vedXpatel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
