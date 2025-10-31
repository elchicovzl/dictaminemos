import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes Somos - 20+ Años de Experiencia en Avalúos Certificados RAA | Historia Dictaminemos",
  description: "Empresa líder en avalúos certificados RAA en Medellín. Fundada en 2023 con +20 años de experiencia combinada. Dr. Abel Escobar (desde 2005) y Dr. Andrés García, peritos certificados RAA. +2,500 avalúos realizados, 500+ clientes satisfechos.",
  keywords: [
    "quiénes somos dictaminemos",
    "historia dictaminemos Medellín",
    "empresa avalúos certificados RAA",
    "avaluadores certificados Medellín",
    "experiencia avalúos 20 años",
    "peritos RAA Medellín",
    "Abel Escobar avaluador",
    "Andrés García perito",
    "empresa avalúos confiable Medellín",
    "trayectoria avaluadores",
    "certificación RAA avaluadores",
    "Ley 1673 avaluadores",
    "equipo avaluadores profesionales",
    "mejor empresa avalúos Medellín",
    "avaluadores con experiencia"
  ],
  openGraph: {
    title: "Quiénes Somos - 20+ Años Experiencia Avalúos Certificados | Dictaminemos",
    description: "Empresa líder en avalúos certificados RAA. +20 años de experiencia, +2,500 avalúos realizados. Peritos certificados en Medellín.",
    url: "https://dictaminemos.com/quienes-somos",
    type: "website",
  },
  alternates: {
    canonical: 'https://dictaminemos.com/quienes-somos',
  },
}

export default function QuienesSomosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
