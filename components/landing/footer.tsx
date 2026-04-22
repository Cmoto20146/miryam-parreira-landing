export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-12">
          
         {/* Marca */}
<div className="lg:col-span-5">
  <div className="flex items-center gap-4">
    <img
      src="/MP logo sinfondo.png"
      alt="Dra. Miryam Parreira"
      className="h-36 w-auto object-contain opacity-90"
    />

    <div>
      <p className="font-serif text-lg text-foreground">
        Dra. Miryam Parreira
      </p>
      <p className="text-sm text-muted-foreground">
        Odontología quirúrgica especializada
      </p>
    </div>
  </div>

  <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
    Más de 40 años de experiencia en odontología quirúrgica de alta complejidad.
    Especialista en pacientes con hemofilia y casos derivados.
  </p>
</div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-6 lg:col-start-7 lg:grid-cols-3">
            
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Navegación
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#servicios" className="text-sm hover:text-primary">
                    Tratamientos
                  </a>
                </li>
                <li>
                  <a href="#hemofilia" className="text-sm hover:text-primary">
                    Hemofilia
                  </a>
                </li>
                <li>
                  <a href="#doctora" className="text-sm hover:text-primary">
                    Trayectoria
                  </a>
                </li>
                <li>
                  <a href="#experiencia" className="text-sm hover:text-primary">
                    Experiencia
                  </a>
                </li>
                <li>
                  <a href="#ubicacion" className="text-sm hover:text-primary">
                    Ubicación
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Contacto
              </p>

              <ul className="mt-4 space-y-3">
                <li>
                  <a href="tel:+541148265026" className="text-sm hover:text-primary">
                    +54 11 4826-5026
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/5491150397812"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary"
                  >
                    WhatsApp
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com/mp_consultorio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary"
                  >
                    Instagram @mp_consultorio
                  </a>
                </li>
              </ul>
            </div>

            {/* Ubicación */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Ubicación
              </p>

              <p className="mt-4 text-sm leading-relaxed text-foreground">
                Gallo 1576<br />
                Piso 2 B<br />
                Recoleta, CABA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dra. Miryam Parreira · Todos los derechos reservados
          </p>
        </div>

      </div>
    </footer>
  )
}