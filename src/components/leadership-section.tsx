import { Card, CardContent } from "@/components/ui/card"
import director1 from "@/assets/director-1.jpg"
import director2 from "@/assets/director-2.jpg"
import director3 from "@/assets/director-3.jpg"
import director4 from '@/assets/director-4.jpeg'

export function LeadershipSection() {
  const directors = [
    {
      name: "Mr Youssef Ibrahim",
      position: "Managing Director",
      image: director4,
      description: "Leading the company with over 20 years of experience in civil engineering and project management."
    },
    {
      name: "Engr. Jolayemi Opeyemi femi",
      position: "General Manager",
      image: director1,
      description: "Managing the company with over 7 years of experience in civil engineering and project management."
    },
    {
      name: "Engr. Majid Youssef", 
      position: "Civil Engineer",
      image: director2,
      description: "Overseeing operational excellence and ensuring quality delivery across all construction projects."
    },
    {
      name: "Engr. Peter Adejoh Egbunu",
      position: "Senior Civil Engineer", 
      image: director3,
      description: "Driving technical innovation and engineering solutions for complex infrastructure projects."
    }
  ]

  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground">
            Experienced directors guiding the company with vision, expertise, and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {directors.map((director, index) => (
            <Card 
              key={director.name} 
              className={`hover-lift animate-fade-in-scale stagger-${index + 1} overflow-hidden group`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={director.image} 
                  alt={director.name}
                  className="w-full h-64 object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {director.name}
                </h3>
                <p className="text-accent font-semibold mb-4">
                  {director.position}
                </p>
                <p className="text-muted-foreground">
                  {director.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}