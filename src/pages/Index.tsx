import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { LeadershipSection } from "@/components/leadership-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import { FloatingContact } from "@/components/floating-contact"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <LeadershipSection />
        <ServicesSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <ClientsSection />
        <ContactSection />
      </main>

      {/* Floating Contact Button for Mobile */}
      <FloatingContact />

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Class Technical Engineering</h3>
              <p className="text-white/80 text-sm">
                Building Nigeria's future through excellence in civil engineering and construction.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Road Construction</li>
                <li>Bridge Engineering</li>
                <li>Building Construction</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>About Us</li>
                <li>Leadership</li>
                <li>Capabilities</li>
                <li>Safety Standards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+234 (0) 1 234 5678</li>
                <li>info@classtechnicaleng.com</li>
                <li>Victoria Island, Lagos</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2024 Class Technical Engineering Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index