import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Noticias y Artículos sobre Avalúos",
  description: "Lee nuestro blog sobre avalúos, normativas, certificaciones de avaluadores, y novedades del sector inmobiliario en Colombia. Información actualizada para propietarios e inversionistas.",
  keywords: [
    "blog avalúos",
    "noticias avalúos Colombia",
    "certificación avaluadores",
    "normativa avalúos",
    "Ley 1673",
    "RNA Colombia",
    "artículos inmobiliarios"
  ],
  openGraph: {
    title: "Blog - Noticias y Artículos sobre Avalúos | Dictaminemos",
    description: "Blog especializado en avalúos, certificaciones y normativas del sector inmobiliario en Colombia.",
    url: "https://dictaminemos.com/blog",
    type: "website",
  },
  alternates: {
    canonical: 'https://dictaminemos.com/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
