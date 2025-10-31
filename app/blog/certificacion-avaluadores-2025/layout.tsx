import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "¡Cuidado! Solo Avaluadores Certificados Pueden Hacer Avalúos",
  description: "Desde 2013 es obligatorio que los avaluadores estén certificados por el RAA. Aprende a verificar la certificación de un avaluador en Colombia para proteger tu patrimonio.",
  keywords: [
    "avaluadores certificados",
    "certificación RAA",
    "Ley 1673 de 2013",
    "registro nacional avaluadores",
    "verificar avaluador",
    "avalúo certificado Colombia",
    "ANA avaluadores"
  ],
  openGraph: {
    title: "¡Cuidado! Solo Avaluadores Certificados Pueden Hacer Avalúos | Dictaminemos",
    description: "Desde 2013 es obligatorio que los avaluadores estén certificados por el RAA. Aprende a verificar la certificación.",
    url: "https://dictaminemos.com/blog/certificacion-avaluadores-2025",
    type: "article",
    publishedTime: "2025-01-03T00:00:00.000Z",
    authors: ["La Lonja"],
  },
  alternates: {
    canonical: 'https://dictaminemos.com/blog/certificacion-avaluadores-2025',
  },
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
