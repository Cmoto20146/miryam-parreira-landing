import { MessageCircle, Phone, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section id="reservar" className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Eyebrow */}
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Disponibilidad para consultas
          </p>

          {/* Title */}
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Coordiná una consulta para evaluar tu caso
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            En la consulta analizamos tu situación, te explicamos las opciones de tratamiento 
            y resolvemos todas tus dudas con un enfoque claro y profesional.
          </p>
          
          {/* Trust signals */}
          <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Clock className="h-5 w-5" />
              <span className="text-sm">Respuesta ágil</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">Evaluación profesional del caso</span>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-14 gap-3 bg-[#25D366] px-8 text-base font-semibold text-white hover:bg-[#22c55e]"
              asChild
            >
              <a
                href="https://wa.me/5491150397812?text=Hola,%20me%20contacto%20desde%20la%20p%C3%A1gina%20web%20para%20consultar%20por%20mi%20caso."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Consultar por WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="h-14 gap-3 px-8 text-base text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+5491148265026">
                <Phone className="h-5 w-5" />
                Llamar ahora
              </a>
            </Button>
          </div>
          
          {/* Urgency */}
          <p className="mt-8 text-sm text-primary-foreground/60">
            Atendemos casos urgentes. Si tenés dolor o una situación que requiere atención, escribinos y te damos prioridad.
          </p>
        </div>
      </div>
    </section>
  )
}
