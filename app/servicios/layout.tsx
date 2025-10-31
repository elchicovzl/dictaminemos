import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Avalúos, Dictámenes y Topografía",
  description: "Servicios profesionales de avalúos comerciales, catastrales, NIIF, dictámenes periciales y topografía con drones en Medellín. Avaluadores certificados RAA con +20 años de experiencia.",
  keywords: [
    "servicios de avalúos",
    "avalúos comerciales Medellín",
    "avalúos urbanos",
    "avalúos rurales",
    "avalúos de fincas",
    "dictámenes periciales",
    "topografía con drones",
    "avalúos NIIF",
    "avalúos hipotecarios",
    "avalúos catastrales",
    "peritaje de inmuebles",
    "levantamiento topográfico"
  ],
  openGraph: {
    title: "Servicios de Avalúos, Dictámenes y Topografía | Dictaminemos",
    description: "Servicios profesionales de avalúos comerciales, catastrales, NIIF, dictámenes periciales y topografía con drones en Medellín.",
    url: "https://dictaminemos.com/servicios",
    type: "website",
  },
  alternates: {
    canonical: 'https://dictaminemos.com/servicios',
  },
}

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
