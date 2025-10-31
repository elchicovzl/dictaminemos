import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes Somos - Nuestra Historia y Experiencia",
  description: "Conoce a Dictaminemos: 20+ años de experiencia en avalúos y dictámenes. Fundada en 2023 por expertos certificados. Dr. Abel Escobar y Dr. Andrés García, profesionales RAA especializados.",
  keywords: [
    "quienes somos dictaminemos",
    "historia dictaminemos",
    "avaluadores certificados Medellín",
    "experiencia avalúos",
    "empresa avalúos Medellín",
    "peritos certificados RAA"
  ],
  openGraph: {
    title: "Quiénes Somos - Nuestra Historia y Experiencia | Dictaminemos",
    description: "Conoce a Dictaminemos: 20+ años de experiencia en avalúos y dictámenes periciales en Medellín.",
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
