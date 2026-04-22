import { Award, GraduationCap, Users, Heart } from "lucide-react"

const stats = [
  {
    icon: Award,
    value: "40",
    suffix: "+",
    label: "años de experiencia",
    description: "Ejerciendo odontología quirúrgica",
  },
  {
    icon: Users,
    value: "60k",
    suffix: "+",
    label: "pacientes atendidos",
    description: "En nuestro consultorio de Recoleta",
  },
  {
    icon: GraduationCap,
    value: "18k",
    suffix: "+",
    label: "cirugías realizadas",
    description: "Procedimientos complejos exitosos",
  },
  {
    icon: Heart,
    value: "1.2k",
    suffix: "+",
    label: "pacientes con hemofilia",
    description: "Tratados con protocolos especializados",
  },
]

export function Authority() {
  return (
    <section className="bg-foreground py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.35em] text-white/60">
  Por qué elegirnos
</p>
          <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-5xl">
            Trayectoria que genera confianza
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Décadas de dedicación a la odontología quirúrgica y el cuidado 
            de pacientes con necesidades especiales.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="group relative text-center">
              {/* Icon */}
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <stat.icon className="h-7 w-7 text-white" />
              </div>
              
              {/* Number */}
              <p className="font-serif text-5xl font-normal text-white sm:text-6xl">
  {stat.value}<span className="text-emerald-400 font-semibold">{stat.suffix}</span>
</p>
              
              {/* Label */}
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white">
                {stat.label}
              </p>
              
              {/* Description */}
              <p className="mt-2 text-sm text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

       {/* Trust badges */}
<div className="mt-20 border-t border-card/10 pt-12">

  {/* WFH destacado */}
  <div className="mb-10 flex justify-center">
    <div className="flex items-center gap-4 text-white">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/60 bg-white/5">
        <span className="font-serif text-base text-white">WFH</span>
      </div>
      <div>
        <p className="text-base font-medium text-white">Vice Chair</p>
        <p className="text-sm text-gray-300">World Federation of Hemophilia · desde 2024</p>
      </div>
    </div>
  </div>

  {/* secundarios */}
  <div className="flex flex-wrap items-center justify-center gap-8">
    <div className="flex items-center gap-3 text-card/80">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-card/20">
        <span className="font-serif text-sm">UBA</span>
      </div>
      <span className="text-sm">Docente Titular</span>
    </div>

    <div className="flex items-center gap-3 text-card/80">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-card/20">
        <span className="font-serif text-sm">FHA</span>
      </div>
      <span className="text-sm">Fundación de la Hemofilia, Jefe de servicio</span>
    </div>
  </div>

 </div>
 </div>   //
    </section>
  )
}
