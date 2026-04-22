import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "Me derivo mi Pediatra, Marcelo K., tenia 9 años y mi Madre no conseguía un odontólogo dispuesto a atenderme mi caso era muy complicado. Me gusto mucho que nos diera su celular para seguimiento además ella llamaba a mi Madre para saber como estaba",
    author: "Micaela C.",
    context: "Caninos retenidos en posiciones complejas",
    rating: 5,
  },
  {
    quote:
      "Como paciente con hemofilia, siempre tuve miedo de ir al dentista. A Miryam la encontre en la Fundación de la Hemofilia (FHA). Aqui encontré un equipo que entiende mi condición y me trata con todos los cuidados necesarios. Hoy puedo ir al odontólogo sin angustia.",
    author: "Hernan L.",
    context: "Paciente con hemofilia",
    rating: 5,
  },
  {
    quote:
      "Mi hijo de 5 años tenía pánico al dentista por una mala experiencia previa. La Dra. tuvo una paciencia increíble y ahora él va contento a sus controles. Estamos muy agradecidos.",
    author: "Carolina M.",
    context: "Mamá de paciente pediátrico",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Experiencias de Pacientes
            </p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Lo que dicen nuestros Pacientes
            </h2>
            
            {/* Overall rating */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Tomado desde Google
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-muted-foreground lg:mt-12">
              Cada caso tiene su historia. La confianza también se construye a partir 
              de la experiencia de quienes ya pasaron por este proceso.
            </p>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-3xl bg-card p-8 shadow-sm ring-1 ring-border/50 transition-shadow hover:shadow-md lg:p-10"
            >
              {/* Stars */}
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                ))}
              </div>
              
              <blockquote className="relative">
                <p className="text-lg leading-relaxed text-foreground">
                  {`"${testimonial.quote}"`}
                </p>
              </blockquote>
              
              <footer className="mt-8 border-t border-border pt-6">
                <p className="font-serif text-lg text-foreground">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {testimonial.context}
                </p>
              </footer>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Si querés evaluar tu caso, podés contactarnos.
          </p>
          <Button size="lg" className="mt-6 h-14 gap-3 px-8 shadow-lg shadow-primary/20" asChild>
            <a href="#reservar">
              Solicitar evaluación
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
