import { Construction, Building2, Wrench, DraftingCompass } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Construction,
      title: "Civil Works",
      description: "Roads, bridges, drainage systems, and infrastructure development projects across Nigeria",
      features: ["Highway Construction", "Bridge Engineering", "Drainage Systems", "Infrastructure Development"]
    },
    {
      icon: Building2,
      title: "Building Construction", 
      description: "Commercial, industrial, and government building projects with focus on quality and durability",
      features: ["Commercial Buildings", "Industrial Facilities", "Government Projects", "Institutional Buildings"]
    },
    {
      icon: Wrench,
      title: "Project Management",
      description: "End-to-end project supervision and management ensuring timely delivery within budget",
      features: ["Project Planning", "Quality Control", "Timeline Management", "Budget Oversight"]
    },
    {
      icon: DraftingCompass,
      title: "Design & Engineering",
      description: "Comprehensive design and engineering solutions for complex construction challenges",
      features: ["Structural Design", "Engineering Solutions", "Technical Planning", "Site Analysis"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive civil engineering and construction services delivered with excellence and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`hover-lift animate-fade-in-scale stagger-${index + 1} group h-full`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}