import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
       href="https://wa.me/5491150397812?text=Hola,%20me%20contacto%20desde%20la%20p%C3%A1gina%20web%20para%20realizar%20una%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-4 pl-5 pr-6 text-white shadow-lg transition-colors hover:bg-[#22c55e] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:bottom-8 sm:right-8"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="text-sm font-semibold">Escribinos</span>
    </a>
  )
}
