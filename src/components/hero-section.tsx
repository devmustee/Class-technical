import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-construction.jpg"

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Over 17 Years of Civil Engineering 
            <span className="text-gradient block mt-2">Excellence in Nigeria</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Building roads, bridges, and structures that define progress across Nigeria and beyond
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("#projects")}
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold hover-lift"
            >
              Our Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold hover-lift"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-in stagger-3">
        <button 
          onClick={() => scrollToSection("#about")}
          className="text-white/80 hover:text-white transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}