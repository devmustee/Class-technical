import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import project1 from "@/assets/project-1.jpg"
import project2 from "@/assets/project-2.jpg"
import project3 from "@/assets/project-3.jpg"

export function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projects = [
    {
      title: "Highway Construction Project",
      client: "NEPZA (Nigerian Export Processing Zones Authority)",
      year: "2023",
      description: "Multi-lane highway development with modern infrastructure and safety features",
      image: project1
    },
    {
      title: "University Infrastructure Development",
      client: "University of Benin",
      year: "2022",
      description: "Comprehensive campus infrastructure including roads, bridges, and facilities",
      image: project2
    },
    {
      title: "Commercial Building Complex",
      client: "NDDC (Niger Delta Development Commission)",
      year: "2023",
      description: "Modern commercial building with sustainable design and construction practices",
      image: project3
    }
  ]

  const previousProjects = [
    {
      title: "Lagos-Ibadan Expressway Expansion",
      description: "Major highway expansion project improving connectivity",
      image: project1
    },
    {
      title: "Abuja Bridge Construction",
      description: "Strategic bridge construction enhancing urban infrastructure",
      image: project2
    },
    {
      title: "Port Harcourt Industrial Complex",
      description: "Large-scale industrial facility development",
      image: project3
    },
    {
      title: "Kano State Government Buildings",
      description: "Government administrative complex construction",
      image: project1
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Current Projects */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing our portfolio of completed and ongoing projects across Nigeria
          </p>
        </div>

        {/* Project Slideshow */}
        <div className="relative mb-20">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 md:h-[500px]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-accent-light font-semibold mb-2">
                          {project.client} • {project.year}
                        </p>
                        <p className="text-white/90">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white h-12 w-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white h-12 w-12"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-accent' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Previous Projects Grid */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Previous Projects
          </h3>
          <p className="text-muted-foreground">
            Highlights of our completed works across Nigeria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previousProjects.map((project, index) => (
            <Card 
              key={index}
              className={`hover-lift animate-fade-in-scale stagger-${(index % 4) + 1} overflow-hidden group`}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-semibold mb-1 text-sm">
                    {project.title}
                  </h4>
                  <p className="text-xs text-white/90">
                    {project.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}