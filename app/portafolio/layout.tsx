import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portafolio - Proyectos y Trabajos Realizados",
  description: "Explora nuestro portafolio de proyectos de avalúos comerciales, dictámenes periciales y levantamientos topográficos realizados en Medellín y Antioquia.",
  keywords: [
    "portafolio avalúos",
    "proyectos avalúos Medellín",
    "trabajos realizados",
    "casos de éxito avalúos",
    "proyectos topografía",
    "dictámenes realizados"
  ],
  openGraph: {
    title: "Portafolio - Proyectos y Trabajos Realizados | Dictaminemos",
    description: "Explora nuestro portafolio de proyectos de avalúos comerciales, dictámenes periciales y levantamientos topográficos.",
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
