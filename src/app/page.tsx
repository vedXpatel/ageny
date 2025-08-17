import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
