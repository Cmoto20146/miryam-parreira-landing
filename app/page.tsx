import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Identification } from "@/components/landing/identification"
import { Doctor } from "@/components/landing/doctor"
import { Authority } from "@/components/landing/authority"
import { Specialization } from "@/components/landing/specialization"
import { Services } from "@/components/landing/services"
import { Philosophy } from "@/components/landing/philosophy"
import { Testimonials } from "@/components/landing/testimonials"
import { SecondOpinion } from "@/components/landing/second-opinion"
import { Location } from "@/components/landing/location"
import { Multimedia } from "@/components/landing/multimedia"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dra. Especialista en Odontología Quirúrgica",
  "description": "Especialista en cirugía dental compleja, extracción de caninos retenidos y atención odontológica para pacientes con hemofilia. Más de 40 años de experiencia en Recoleta, Buenos Aires.",
  "image": "https://example.com/doctora.jpg",
  "url": "https://example.com",
  "telephone": "+54-11-1234-5678",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Santa Fe 1234, Piso 5, Of. B",
    "addressLocality": "Recoleta",
    "addressRegion": "Ciudad Autónoma de Buenos Aires",
    "postalCode": "1425",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.5957,
    "longitude": -58.3986
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "medicalSpecialty": [
    "Cirugía Dental",
    "Cirugía Bucomaxilofacial",
    "Odontología para pacientes con hemofilia"
  ],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Extracción de caninos retenidos",
      "description": "Cirugía de caninos incluidos en paladar o vestibular con técnicas mínimamente invasivas"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Cirugía de terceros molares",
      "description": "Extracción de muelas del juicio impactadas, incluyendo casos cercanos al nervio dentario"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Atención odontológica para hemofilia",
      "description": "Protocolos especializados para pacientes con hemofilia A, hemofilia B y enfermedad de Von Willebrand"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Implantes dentales",
      "description": "Colocación de implantes en casos complejos con regeneración ósea guiada"
    }
  ],
  "areaServed": {
    "@type": "City",
    "name": "Buenos Aires",
    "containedInPlace": {
      "@type": "Country",
      "name": "Argentina"
    }
  },
  "sameAs": []
}

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Identification />
        <Doctor />
        <Authority />
        <Specialization />
        <Services />
        <Philosophy />
        <Testimonials />
        <SecondOpinion />
        <Location />
        <Multimedia />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
