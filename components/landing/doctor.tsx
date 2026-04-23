const milestones = [
  { year: "1984", text: "Graduada de la Facultad de Odontología, Universidad de Buenos Aires" },
  { year: "1985", text: "Docente en la Facultad de Odontología, UBA" },
  { year: "1990", text: "Especialización en Cirugía y Traumatología Bucomaxilofacial" },
  { year: "1994", text: "Inicio de trabajo con pacientes con hemofilia en la Fundación de la Hemofilia" },
  { year: "2024", text: "Designada Vice Chair de la World Federation of Hemophilia (WFH)" },
]

export function Doctor() {
  return (
    <section id="doctora" className="bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Image column */}
          <div className="relative lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted relative">
                <div
                  
                  className="h-full w-full bg-cover brightness-110 contrast-105"
                  style={{
                    backgroundImage: "url('/mpland.jpeg')",
                    backgroundPosition: "55% 20%",
                  }}
                  role="img"
                  aria-label="Dra. Miryam Parreira en su consultorio"
                />
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full border border-primary/20" />
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full border border-primary/10" />
            </div>
          </div>

          {/* Content column */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Trayectoria profesional
            </p>

            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Experiencia clínica, docencia universitaria y participación internacional
            </h2>

            <div className="mt-10 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Dra. Miryam Parreira, odontóloga cirujana formada en la Universidad de Buenos Aires, con especialización en cirugía bucomaxilofacial y más de 40 años de experiencia en el tratamiento de casos complejos.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Su práctica se centra en cirugías de alta complejidad, pacientes con hemofilia y condiciones médicas especiales, combinando experiencia clínica, protocolos específicos y trabajo interdisciplinario cuando el caso lo requiere.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Actualmente se desempeña como Vice Chair de la World Federation of Hemophilia (WFH), participando activamente en el desarrollo de estándares internacionales de atención para pacientes con trastornos de coagulación.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Como docente en la UBA, formó a generaciones de odontólogos mientras atendía a miles de pacientes en su consultorio de Recoleta. Cada caso recibe atención personalizada y el tiempo necesario para un resultado óptimo.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-16 border-t border-border pt-12">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Principales hitos
              </p>

              <div className="mt-8 space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6">
                    <span className="font-serif text-lg text-primary">
                      {milestone.year}
                    </span>
                    <span className="text-foreground">
                      {milestone.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
