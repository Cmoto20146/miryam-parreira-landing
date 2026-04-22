const values = [
  {
    number: "01",
    title: "Prioridad en casos urgentes",
    description: "Los casos que requieren atención rápida tienen prioridad en la agenda, con evaluación según la necesidad de cada paciente.",
  },
  {
    number: "02",
    title: "Seguimiento cercano",
    description: "Después del tratamiento, el seguimiento forma parte del cuidado. La evolución del paciente se acompaña de forma activa y personalizada.",
  },
  {
    number: "03",
    title: "Contacto directo",
    description: "Ante dudas o inquietudes, el paciente puede contar con una comunicación clara y directa, sin intermediarios innecesarios.",
  },
  {
    number: "04",
    title: "Trabajo interdisciplinario cuando hace falta",
    description: "En los casos que lo requieren, el abordaje se coordina con otros profesionales y con protocolos específicos para brindar mayor seguridad.",
  },
]

export function Philosophy() {
  return (
    <section id="experiencia" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Content */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
  Forma de trabajo
</p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-5xl">
  Atención cercana, seguimiento real y experiencia clínica
</h2>
           <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
  Cada paciente recibe una atención directa, clara y personalizada. En casos complejos, el seguimiento y la tranquilidad durante todo el proceso son tan importantes como el tratamiento en sí.
</p>
          </div>

          {/* Values list */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-1">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group flex gap-6 border-b border-border py-8 first:border-t"
                >
                  <span className="font-serif text-sm text-primary">{value.number}</span>
                  <div>
                    <h3 className="font-serif text-xl font-normal text-foreground transition-colors group-hover:text-primary">
                      {value.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
