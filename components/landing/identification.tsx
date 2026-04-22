const concerns = [
  {
    title: "Cirugías dentales complejas",
    description: "Caninos retenidos en posiciones difíciles, terceros molares impactados cerca del nervio dentario, extracciones de alto riesgo y casos que otros profesionales en Buenos Aires prefieren derivar.",
  },
  {
    title: "Pacientes con hemofilia y trastornos de coagulación",
    description: "Hemofilia A y B, enfermedad de Von Willebrand, pacientes anticoagulados y otras condiciones que requieren protocolos quirúrgicos específicos y coordinación con hematología.",
  },
  {
    title: "Ansiedad dental y experiencias previas negativas",
    description: "Fobia al dentista, experiencias traumáticas anteriores o desconfianza en tratamientos odontológicos. Un ambiente tranquilo en Recoleta y atención personalizada marca la diferencia.",
  },
]

export function Identification() {
  return (
          <section id="casos-complejos" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Casos complejos en odontología quirúrgica
          </p>
          <h2 className="mt-4 text-center font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Especialista en cirugía dental compleja para casos que requieren experiencia
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
  Muchos pacientes llegan a nuestro consultorio en Recoleta después de ser derivados por otros odontólogos. 
  Algunos de los casos complejos que tratamos y en los que más experiencia tenemos son los siguientes.
</p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {concerns.map((concern, index) => (
            <div
              key={index}
              className="flex gap-8 border-b border-border py-10 first:border-t"
            >
              <span className="font-serif text-4xl text-primary/30">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-serif text-xl font-normal text-foreground sm:text-2xl">
                  {concern.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {concern.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      <p className="mx-auto mt-12 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
  Contamos con experiencia en casos que requieren abordaje interdisciplinario, protocolos específicos y la posibilidad de trabajar en quirófano cuando el tratamiento lo requiere. 
  La tranquilidad del paciente y la seguridad clínica son parte central de cada tratamiento.
</p>
      </div>
    </section>
  )
}
