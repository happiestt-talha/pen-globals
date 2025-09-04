import Navbar from "@/components/pages/Navbar"
import Hero from "@/components/pages/Hero"
import About from "@/components/pages/About"
import Solutions from "@/components/pages/Solutions"
import Product from "@/components/pages/product"
import Cases from "@/components/pages/Cases"
import Testimonials from "@/components/pages/Testimonials"
import Team from "@/components/pages/Team"
import Careers from "@/components/pages/Careers"
import News from "@/components/pages/News"
import Contact from "@/components/pages/Contact"
import Footer from "@/components/pages/Footer"

export default function PenGlobalSolutions() {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      {/* <Product /> */}
      {/* <Cases /> */}
      <Testimonials />
      <Team />
      {/* <Careers /> */}
      {/* <News /> */}
      <Contact />
      <Footer />
    </div>
  )
}
