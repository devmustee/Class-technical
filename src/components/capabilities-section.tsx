import { Truck, Shield, Zap, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import equipmentImage from "@/assets/equipment.jpg"

export function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Truck,
      title: "Heavy-Duty Equipment",
      description: "Fleet of modern construction equipment including excavators, bulldozers, and specialized machinery"
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description: "Comprehensive safety protocols and quality assurance systems ensuring zero-accident projects"
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Utilization of cutting-edge construction technologies and modern engineering solutions"
    },
    {
      icon: Settings,
      title: "Material Production",
      description: "Owned asphalt plants and granite quarry for consistent quality material supply"
    }
  ]

  return (
    <section id="capabilities" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Capabilities
          </h2>
          <p className="text-lg text-muted-foreground">
            Advanced equipment, safety standards, and quality systems that set us apart
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Equipment Image */}
          <div className="animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={equipmentImage} 
                alt="Heavy construction equipment"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Modern Equipment Fleet</h3>
                <p className="text-white/90">State-of-the-art machinery for every project need</p>
              </div>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <Card 
                key={capability.title}
                className={`hover-lift animate-fade-in-scale stagger-${index + 1} h-full`}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                    <capability.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Capabilities Info */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Comprehensive Infrastructure Solutions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <p className="text-sm">Asphalt Plants</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1</div>
                <p className="text-sm">Granite Quarry</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <p className="text-sm">Heavy Equipment</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Our integrated approach ensures complete control over material quality, 
                project timelines, and cost efficiency for every construction project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}