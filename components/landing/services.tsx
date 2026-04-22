const services = [
  {
    number: "01",
    title: "Caninos retenidos",
    description:
      "Abordaje de caninos incluidos en posiciones complejas y tratamiento coordinado con ortodoncia cuando el caso lo requiere. Planificación cuidada para preservar tejido y favorecer una recuperación segura.",
  },
  {
    number: "02",
    title: "Pacientes con hemofilia",
    description:
      "Atención odontológica con protocolos específicos para pacientes con hemofilia y otros trastornos de coagulación, en coordinación con hematología cuando es necesario.",
  },
  {
    number: "03",
    title: "Terceros molares complejos",
    description:
      "Extracción de muelas del juicio en posiciones difíciles, incluidos casos cercanos al nervio dentario, con evaluación previa y planificación quirúrgica precisa.",
  },
  {
    number: "04",
    title: "Implantes en casos complejos",
    description:
      "Colocación de implantes en pacientes que requieren evaluación especial, regeneración ósea u otras técnicas complementarias para lograr un resultado predecible.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
  Tratamientos y abordajes especializados
</p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-5xl">
  Tratamientos pensados para casos que requieren experiencia
</h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-muted-foreground lg:mt-12">
  Cada tratamiento se evalúa de forma individual, con experiencia clínica, diagnóstico preciso y el cuidado que requieren los casos complejos.
</p>
          </div>
        </div>

        {/* Services list - editorial style */}
        <div className="mt-20 border-t border-border">
          {services.map((service, index) => (
            <div
              key={index}
              className="group grid gap-6 border-b border-border py-10 sm:py-12 lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-1">
                <span className="font-serif text-sm text-primary">{service.number}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl font-normal text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                  {service.title}
                </h3>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
