import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingContact() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-40 md:hidden bg-accent hover:bg-accent-dark text-white w-14 h-14 rounded-full shadow-glow animate-bounce-in"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contact Us</span>
    </Button>
  )
}