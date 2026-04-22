import { Button } from "@/components/ui/button"

export function Location() {
  return (
    <section id="ubicacion" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Content */}
          <div className="lg:col-span-5">
            
<p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
  Ubicación y contacto
</p>
<h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-5xl">
  Consultorio en Recoleta y atención para casos complejos
</h2>
<p className="mt-8 text-lg leading-relaxed text-muted-foreground">
  El consultorio está ubicado en Recoleta, con acceso práctico desde distintos puntos de la ciudad. 
  Para los tratamientos que requieren mayor complejidad, también trabajamos con resolución en quirófano cuando el caso lo indica.
</p>
            {/* Location details */}
            <div className="mt-12 space-y-8">
              <div className="border-l-2 border-primary pl-6">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Dirección
                </p>
               <p className="mt-2 font-serif text-lg text-foreground">
  Gallo 1576, 2° B
</p>
<p className="text-muted-foreground">Recoleta, Ciudad de Buenos Aires</p>
              </div>
              
              <div className="border-l-2 border-border pl-6">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Horarios
                </p>
                <p className="mt-2 text-foreground">Lunes a Viernes: 9:00 - 18:00</p>
                              </div>
              <div className="border-l-2 border-border pl-6">
  <div className="border-l-2 border-border pl-6">
  <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
    Contacto
  </p>

  <a
    href="tel:+541148265026"
    className="mt-2 block text-foreground hover:text-primary transition-colors"
  >
    Teléfono: +54 11 4826-5026
  </a>

  <a
    href="https://wa.me/5491165592319?text=Hola,%20me%20contacto%20desde%20la%20p%C3%A1gina%20web%20para%20consultar%20por%20mi%20caso."
    target="_blank"
    rel="noopener noreferrer"
    className="block text-muted-foreground hover:text-primary transition-colors"
  >
    WhatsApp: +54 9 11 6559-2319
  </a>
  <a
  href="https://instagram.com/mp_consultorio"
  target="_blank"
  rel="noopener noreferrer"
  className="block text-muted-foreground hover:text-primary transition-colors"
>
  Instagram: @mp_consultorio
</a>
</div>
</div>

              <div className="border-l-2 border-border pl-6">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Cirugías complejas
                </p>
                <p className="mt-2 text-foreground">Hospital de Clínicas José de San Martín</p>
<p className="text-muted-foreground">Resolución en quirófano para procedimientos que lo requieren</p>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" className="h-14 px-8" asChild>
  <a  href="https://wa.me/5491150397812?text=Hola,%20me%20contacto%20desde%20la%20p%C3%A1gina%20web%20para%20realizar%20una%20consulta.">Consultar por WhatsApp</a>
</Button>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="aspect-square overflow-hidden rounded-[2rem] bg-muted lg:aspect-[4/5]">
              <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4813828284746!2d-58.411998924404415!3d-34.591986972958445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca845cc6c96b%3A0x145a4975932ffe3b!2sGallo%201576%2C%20C1425EFH%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1776367902938!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del consultorio en Recoleta, Buenos Aires"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
