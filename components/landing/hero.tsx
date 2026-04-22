import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-16 py-12 lg:grid-cols-12 lg:gap-8">
          {/* Content - takes 7 columns */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Eyebrow */}
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Cirugía Dental Compleja en Recoleta, Buenos Aires
            </p>
          <h1 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
  <span className="text-balance">
    Odontología quirúrgica de alta especialización
    <span className="block mt-4 text-lg text-muted-foreground">
      Atención segura y personalizada para cada paciente
    </span>
  </span>
</h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Dra. Miryam Parreira, odontóloga cirujana con más de 40 años de trayectoria, 
              especialista en casos complejos y referente en pacientes con hemofilia en CABA.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
  Atención humana, personalizada y profesional para niños, adultos y cirugías 
  de alta complejidad, con seguimiento cercano incluso después del tratamiento.
</p>
            
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" asChild className="h-14 gap-3 px-8 text-base">
                <a href="#reservar">
                  Solicitar evaluación 
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-14 gap-3 border-[#25D366] px-8 text-base text-[#25D366] hover:bg-[#25D366]/10">
                <a  href="https://wa.me/5491150397812?text=Hola,%20me%20contacto%20desde%20la%20p%C3%A1gina%20web%20para%20realizar%20una%20consulta." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Consultar por WhatsApp
                </a>
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/50 pt-8">
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Atención personalizada para cada caso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Prioridad en situaciones urgentes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground">Seguimiento cercano durante todo el proceso</span>
              </div>
            </div>
          </div>

          {/* Image - takes 5 columns */}
          <div className="relative lg:col-span-5">
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop')",
                  }}
                  role="img"
                  aria-label="Consultorio dental moderno con equipamiento de última generación para cirugía odontológica"
                />
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-5 shadow-md sm:-left-10">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-normal text-foreground">40</span>
                  <span className="text-xl text-primary">+</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">años de trayectoria</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust bar */}
        <div className="border-t border-border/50 py-12">
          <p className="sr-only">Experiencia y trayectoria en odontología quirúrgica en Buenos Aires</p>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <p className="font-serif text-3xl font-normal text-foreground lg:text-4xl">60.000<span className="text-primary">+</span></p>
              <p className="mt-1 text-sm text-muted-foreground">pacientes atendidos en Recoleta</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-normal text-foreground lg:text-4xl">18.000<span className="text-primary">+</span></p>
              <p className="mt-1 text-sm text-muted-foreground">cirugías dentales complejas</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-normal text-foreground lg:text-4xl">1.200<span className="text-primary">+</span></p>
              <p className="mt-1 text-sm text-muted-foreground">pacientes con hemofilia tratados</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-normal text-foreground lg:text-4xl">24000+</p>
              <p className="mt-1 text-sm text-muted-foreground">niños atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
