import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Solicita tu Avalúo o Dictamen",
  description: "Contacta a Dictaminemos para servicios de avalúos y dictámenes en Medellín. Oficina en Calle 51 #49-11, Edificio Fabricato. Tel: 314 703 0835. Cotizaciones sin compromiso.",
  keywords: [
    "contacto avalúos Medellín",
    "solicitar avalúo",
    "cotización avalúo",
    "contacto dictaminemos",
    "avaluadores Medellín contacto",
    "solicitar dictamen pericial"
  ],
  openGraph: {
    title: "Contacto - Solicita tu Avalúo o Dictamen | Dictaminemos",
    description: "Contacta a Dictaminemos para servicios de avalúos y dictámenes en Medellín. Cotizaciones sin compromiso.",
    url: "https://dictaminemos.com/contacto",
    type: "website",
  },
  alternates: {
    canonical: 'https://dictaminemos.com/contacto',
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
