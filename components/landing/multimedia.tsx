const galleryImages = [
  {
    src: "/Panoramica consultorio.jpeg",
    alt: "Espacio de atención del consultorio odontológico en Recoleta",
  },
  {
    src: "/Gabinete amplio.jpeg",
    alt: "Gabinete odontológico con equipamiento profesional",
  },
  {
    src: "/Sillon Lampara.jpeg",
    alt: "Detalle del equipamiento odontológico del consultorio",
  },
  {
    src: "/Equipo MP.jpeg",
    alt: "Equipo de atención en el consultorio",
  },
]

export function Multimedia() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Consultorio
            </p>
            <h2 className="mt-4 font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-5xl">
              Un espacio pensado para atenderte con tranquilidad
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-lg leading-relaxed text-muted-foreground lg:mt-12">
              Nuestro consultorio en Recoleta está preparado para brindar una atención cercana,
              profesional y cuidada, en un entorno cómodo para pacientes y acompañantes.
            </p>
          </div>
        </div>

        {/* Main image */}
        <div className="mt-16 overflow-hidden rounded-[2rem] bg-muted">
          <div
            className="aspect-[16/9] w-full bg-cover bg-center transition-transform duration-500 hover:scale-[1.02]"
            style={{ backgroundImage: `url('${galleryImages[0].src}')` }}
            role="img"
            aria-label={galleryImages[0].alt}
          />
        </div>

        {/* Gallery */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {galleryImages.slice(1).map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-muted"
            >
              <div
                className="aspect-[4/3] h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url('${image.src}')` }}
                role="img"
                aria-label={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}