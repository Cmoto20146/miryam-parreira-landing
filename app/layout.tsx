import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Miryam Parreira | Odontología quirúrgica en Recoleta | Hemofilia y casos complejos',
  description:
    'Dra. Miryam Parreira, odontóloga cirujana en Recoleta con más de 40 años de experiencia. Especialista en hemofilia, caninos retenidos y casos odontológicos complejos en Buenos Aires.',
  keywords: [
    'Dra. Miryam Parreira',
    'Miryam Parreira',
    'odontología quirúrgica Recoleta',
    'odontóloga cirujana Recoleta',
    'odontólogo hemofilia Buenos Aires',
    'hemofilia odontología',
    'caninos retenidos Buenos Aires',
    'casos complejos odontología',
    'cirugía dental Recoleta',
  ],
  authors: [{ name: 'Dra. Miryam Parreira' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://TU-DOMINIO.com',
  },
  openGraph: {
    title: 'Dra. Miryam Parreira | Odontología quirúrgica en Recoleta',
    description:
      'Más de 40 años de experiencia en odontología quirúrgica, hemofilia y casos complejos. Consultorio en Recoleta, Buenos Aires.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Dra. Miryam Parreira',
    url: 'https://TU-DOMINIO.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Miryam Parreira | Odontología quirúrgica en Recoleta',
    description:
      'Odontóloga cirujana en Recoleta, especialista en hemofilia, caninos retenidos y casos complejos.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#f5f0e8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${libreBaskerville.variable} ${sourceSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
