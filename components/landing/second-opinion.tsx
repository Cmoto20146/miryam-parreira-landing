import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SecondOpinion() {
  return (
   <section id="segunda-opinion" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl bg-accent p-10 sm:p-16 lg:p-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Evaluación profesional del caso
            </p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl">
              ¿Te propusieron una cirugía y tenés dudas?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cada caso merece una evaluación adecuada. La experiencia permite analizar
               cada situación con criterio y definir el mejor abordaje según las 
               características del paciente.
            </p>
            
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="h-14 gap-3 px-8 shadow-lg shadow-primary/20" asChild>
                <a href="#reservar">
                  Solicitar evaluación
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="h-14 gap-3 px-8 text-[#25D366] hover:bg-[#25D366]/5 hover:text-[#25D366]" asChild>
                <a href="https://wa.me/5491150397812?text=Hola,%20me%20contacto%20desde%20la%20p%C3%A1gina%20web%20para%20consultar%20por%20mi%20caso." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Consultar por WhatsApp
                </a>
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
              La evaluación profesional es el primer paso para un tratamiento seguro y bien planificado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
