export function Specialization() {
  return (
          <section id="hemofilia" className="scroll-mt-24 bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Content */}
          <div className="lg:col-span-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Dentista especializada en hemofilia, Buenos Aires
            </p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Atención odontológica segura para pacientes con hemofilia y trastornos de coagulación
            </h2>
            
            <div className="mt-10 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Los pacientes con hemofilia A, hemofilia B o enfermedad de Von Willebrand 
                requieren protocolos quirúrgicos específicos antes, durante y después de 
                cualquier procedimiento dental. Nuestra experiencia de más de 30 años 
                trabajando con la comunidad de hemofilia en Argentina nos convirtió en 
                referentes para tratamientos dentales seguros en pacientes con trastornos de coagulación.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Coordinamos cada procedimiento con hematólogos del Hospital de Clínicas José de San Martín 
                y otros centros de hemofilia de Buenos Aires. Desde extracciones simples hasta cirugías 
                complejas, garantizamos los protocolos de factor necesarios para cada paciente.
              </p>
            </div>

            {/* Key facts */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="font-serif text-4xl text-foreground">1.200<span className="text-primary">+</span></p>
                <p className="mt-2 text-sm text-muted-foreground">pacientes con hemofilia y Von Willebrand atendidos</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-foreground">30<span className="text-primary">+</span></p>
                <p className="mt-2 text-sm text-muted-foreground">años trabajando con la comunidad de hemofilia argentina</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop')",
                }}
                role="img"
                aria-label="Atención médica especializada para pacientes con hemofilia en odontología"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
