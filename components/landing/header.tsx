"use client"

import { useState, useEffect } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

 
 const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicios", label: "Tratamientos" },
  { href: "#hemofilia", label: "Hemofilia" },
  { href: "#casos-complejos", label: "Casos complejos" },
  { href: "#doctora", label: "Trayectoria" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#ubicacion", label: "Ubicación" },
]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-card/90 shadow-sm backdrop-blur-md" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo - elegant monogram */}
          <a href="#" className="group flex items-center gap-4">
           <div className="flex items-center gap-3">
  <img
    src="/MP logo sinfondo.png"
    alt="Dra Miryam Parreira"
    className="h-28 w-auto object-contain"
  />
  <div className="text-sm">
    <p className="font-medium text-foreground">
      Dra. Miryam Parreira
    </p>
    <p className="text-xs text-muted-foreground">
      Odontología quirúrgica
    </p>
  </div>
</div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-3 lg:flex ml-8">
  <Button
    size="sm"
    variant="outline"
    asChild
    className="h-10 px-5"
  >
    <a href="#segunda-opinion">Segunda opinión</a>
  </Button>

  <a
    href="https://wa.me/5491150397812?text=Hola,%20me%20contacto%20desde%20la%20p%C3%A1gina%20web%20para%20consultar%20por%20mi%20caso."
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-full border border-[#25D366]/30 px-4 py-2 text-sm text-[#25D366] transition-all hover:border-[#25D366] hover:bg-[#25D366]/5"
  >
    <MessageCircle className="h-4 w-4" />
    Nuestro WhatsApp
  </a>
</div>

          {/* Mobile Menu Button */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-foreground" />
            ) : (
              <Menu className="h-5 w-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-card/95 pb-8 backdrop-blur-md lg:hidden">
            <nav className="flex flex-col pt-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-3 text-lg text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
  <Button variant="outline" asChild className="w-full">
    <a href="#segunda-opinion" onClick={() => setIsMobileMenuOpen(false)}>
      Segunda opinión
    </a>
  </Button>

  <Button asChild className="w-full gap-2 bg-[#25D366] text-white hover:bg-[#22c55e]">
    <a
      href="https://wa.me/5491150397812?text=Hola,%20me%20contacto%20desde%20la%20p%C3%A1gina%20web%20para%20consultar%20por%20mi%20caso."
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-4 w-4" />
      Nuestro WhatsApp
    </a>
  </Button>
</div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
