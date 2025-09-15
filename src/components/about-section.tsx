import { Calendar, Users, Award, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const stats = [
    { icon: Calendar, label: "Years of Experience", value: "17+" },
    { icon: Award, label: "Projects Completed", value: "500+" },
    { icon: Users, label: "Team Members", value: "200+" },
    { icon: Globe, label: "States Covered", value: "25+" },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Class Technical Engineering
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Established in 2007, Class Technical Engineering Ltd has grown to become a trusted leader 
            in civil and building construction across Nigeria. As a multinational company with deep 
            local expertise, we deliver exceptional projects that define progress.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={stat.label} className={`text-center hover-lift animate-fade-in-scale stagger-${index + 1}`}>
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To deliver world-class civil engineering and construction solutions that exceed client 
              expectations while contributing to Nigeria&apos;s infrastructure development and economic growth.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
            <p className="text-muted-foreground mb-6">
              To be the most respected and trusted civil engineering company in Nigeria, known for 
              innovation, quality, and sustainable construction practices.
            </p>

            <h3 className="text-2xl font-bold text-foreground mb-6">Our Values</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• Excellence in project delivery</li>
              <li>• Safety as our top priority</li>
              <li>• Innovation and continuous improvement</li>
              <li>• Environmental responsibility</li>
              <li>• Integrity in all business dealings</li>
            </ul>
          </div>

          <div className="animate-slide-in-right">
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">What Sets Us Apart</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Own asphalt plants for quality material production</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Granite quarry operations for construction materials</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Fleet of heavy-duty construction equipment</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Nationwide project delivery capability</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p>Government, commercial, and institutional expertise</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}