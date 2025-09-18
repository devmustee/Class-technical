import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    })
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to discuss your next construction project? Get in touch with our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Head Office</h3>
                    <p className="text-muted-foreground">
                    No 102 Sapele Road <br /> 
                    Benin City Edo State<br />
                      Nigeria
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone Numbers</h3>
                    <p className="text-muted-foreground">
                      +234 07035505000<br />
                      +234 0816322222
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Addresses</h3>
                    <p className="text-muted-foreground">
                      Youssef@classtechnical.com<br />
                      Youssefslieman@gmail.com<br />
                      admin@classtechnicaleng.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-primary relative">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    {/* <MapPin className="h-12 w-12 mx-auto mb-4 opacity-80" /> */}
                    {/* <p className="text-lg font-semibold">Find Us Here</p>
                    
                    <p className="text-white/80">Victoria Island, Lagos</p> */}
                  </div>
                  <div className="w-full h-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.728671361786!2d5.627616975049996!3d6.299340193689767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3e426d8329b%3A0xd467a8682d18297!2s102%20Benin%20Sapele%20Rd%2C%20State%2C%20eternit%40cybaaspace.net%20345096%2C%20Delta!5e0!3m2!1sen!2sng!4v1758232616270!5m2!1sen!2sng"
          className="w-full h-full rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full"
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent-dark text-white py-3 text-lg font-semibold"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              From planning to completion, we're here to make your construction project a success. 
              Contact us today for a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-3 font-semibold"
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-accent hover:bg-white hover:text-primary px-8 py-3 font-semibold"
              >
                <a href="http://">Download Company Profile</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}