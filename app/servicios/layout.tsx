import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "14 Servicios de Avalúos Certificados RAA, Dictámenes Periciales y Topografía | Medellín",
  description: "Servicios certificados RAA: avalúos comerciales, residenciales, rurales, NIIF, hipotecarios, catastrales. Dictámenes periciales judiciales. Topografía con drones. Avalúos de maquinaria, vehículos, intangibles. +20 años de experiencia en Medellín.",
  keywords: [
    // Servicios principales
    "servicios avalúos certificados Medellín",
    "avalúos comerciales Medellín",
    "avalúos residenciales certificados",
    "dictámenes periciales judiciales",
    "topografía con drones Medellín",

    // Avalúos urbanos
    "avalúo de casa Medellín",
    "avalúo de apartamento",
    "avalúo de oficinas",
    "avalúo de locales comerciales",
    "avalúo de bodegas",

    // Avalúos rurales
    "avalúos de fincas Colombia",
    "avalúo de terrenos rurales",
    "avalúo agropecuario",
    "avalúo de fincas ganaderas",

    // Especializados
    "avalúos NIIF Colombia",
    "avalúos hipotecarios para bancos",
    "avalúo catastral",
    "avalúo comercial certificado",
    "avalúo para seguros",
    "avalúo de maquinaria industrial",
    "avalúo de vehículos",
    "avalúo de intangibles",
    "avalúo de marcas",

    // Dictámenes
    "dictamen pericial judicial",
    "peritaje de inmuebles",
    "dictamen técnico pericial",
    "perito avaluador judicial",
    "dictamen para procesos judiciales",
    "peritaje topográfico",

    // Topografía
    "levantamiento topográfico drones",
    "fotogrametría con drones",
    "levantamiento topográfico Medellín",
    "alinderamientos",
    "planos topográficos",

    // Long-tail
    "cuánto cuesta un avalúo comercial",
    "avalúo certificado para banco",
    "avalúo hipotecario requisitos",
    "servicios perito avaluador Medellín"
  ],
  openGraph: {
    title: "14 Servicios de Avalúos Certificados y Dictámenes | Dictaminemos",
    description: "Servicios certificados RAA: avalúos comerciales, residenciales, rurales, NIIF. Dictámenes periciales. Topografía con drones en Medellín.",
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
