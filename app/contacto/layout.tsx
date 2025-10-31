import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto - Cotiza Avalúos Certificados RAA y Dictámenes en Medellín",
  description: "Solicita cotización de avalúos certificados RAA, dictámenes periciales y topografía. Oficina en Edificio Fabricato, Medellín centro. WhatsApp: 314 703 0835. Atención inmediata y cotizaciones sin compromiso.",
  keywords: [
    "contacto avalúos Medellín",
    "cotización avalúo certificado",
    "solicitar avalúo RAA",
    "presupuesto avalúo comercial",
    "contacto perito avaluador Medellín",
    "cotizar dictamen pericial",
    "avalúos Edificio Fabricato Medellín",
    "whatsapp avalúos Medellín",
    "cotización topografía drones",
    "solicitar avalúo hipotecario",
    "oficina avalúos Medellín centro",
    "contacto avaluadores certificados",
    "cuánto cuesta un avalúo Medellín",
    "presupuesto dictamen técnico"
  ],
  openGraph: {
    title: "Contacto - Cotiza Avalúos Certificados y Dictámenes | Dictaminemos",
    description: "Solicita cotización de avalúos certificados RAA y dictámenes periciales en Medellín. Atención inmediata, WhatsApp disponible.",
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
