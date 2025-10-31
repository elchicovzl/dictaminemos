import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portafolio - Proyectos de Avalúos y Dictámenes Certificados | Casos de Éxito",
  description: "Conoce nuestro portafolio de +2,500 avalúos realizados: centros comerciales, conjuntos residenciales, plantas industriales, fincas rurales. Proyectos certificados RAA en Medellín, Bogotá, Cali y toda Colombia.",
  keywords: [
    "portafolio avalúos Medellín",
    "casos de éxito avalúos",
    "proyectos avalúos comerciales",
    "trabajos dictámenes periciales",
    "avalúos centros comerciales",
    "proyectos topografía drones",
    "avalúos conjuntos residenciales",
    "dictámenes realizados Colombia",
    "portafolio peritajes",
    "experiencia avalúos certificados",
    "proyectos avalúos industriales",
    "avalúos fincas rurales",
    "trabajos topografía Medellín",
    "casos éxito dictaminemos"
  ],
  openGraph: {
    title: "Portafolio - Proyectos de Avalúos Certificados | Dictaminemos",
    description: "Explora +2,500 proyectos de avalúos certificados RAA, dictámenes periciales y topografía realizados en Colombia.",
    url: "https://dictaminemos.com/portafolio",
    type: "website",
  },
  alternates: {
    canonical: 'https://dictaminemos.com/portafolio',
  },
}

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
