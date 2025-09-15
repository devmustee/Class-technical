import { useState, useEffect } from "react"

export function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const clients = [
    { name: "NEPZA", fullName: "Nigerian Export Processing Zones Authority" },
    { name: "NDDC", fullName: "Niger Delta Development Commission" },
    { name: "University of Benin", fullName: "University of Benin" },
    { name: "Raycon", fullName: "Raycon Nigeria Limited" },
    { name: "Federal Ministry of Works", fullName: "Federal Ministry of Works and Housing" },
    { name: "Lagos State Government", fullName: "Lagos State Government" },
    { name: "Rivers State Government", fullName: "Rivers State Government" },
    { name: "Dangote Group", fullName: "Dangote Group of Companies" }
  ]

  const testimonials = [
    {
      quote: "Class Technical Engineering delivered our infrastructure project on time and within budget. Their professionalism and quality of work exceeded our expectations.",
      client: "NEPZA Project Manager",
      project: "Export Processing Zone Development"
    },
    {
      quote: "Outstanding construction quality and project management. They handled complex technical challenges with expertise and maintained excellent safety standards.",
      client: "University of Benin",
      project: "Campus Infrastructure Development"
    },
    {
      quote: "Reliable partner for large-scale infrastructure projects. Their equipment and technical capabilities are impressive.",
      client: "NDDC Representative",
      project: "Regional Development Project"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [clients.length])

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading government agencies, corporations, and institutions across Nigeria
          </p>
        </div>

        {/* Client Carousel */}
        <div className="mb-16 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-1/4 px-4">
                <div className="bg-card border border-border rounded-lg p-6 text-center hover-lift">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {client.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {client.fullName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Client Testimonials
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-card border border-border rounded-lg p-6 hover-lift animate-fade-in-scale stagger-${index + 1}`}
            >
              <div className="mb-4">
                <div className="text-4xl text-accent mb-2">"</div>
                <p className="text-muted-foreground italic">
                  {testimonial.quote}
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">
                  {testimonial.client}
                </div>
                <div className="text-sm text-accent">
                  {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Stats */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Building Partnerships Across Nigeria
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">8+</div>
              <p className="text-sm">Major Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <p className="text-sm">States Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <p className="text-sm">Projects Delivered</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <p className="text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}