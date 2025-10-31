import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog de Avalúos - Guías, Normativas y Certificación RAA | Dictaminemos",
  description: "Blog especializado en avalúos certificados: Ley 1673, certificación RAA, normativas NIIF, guías para propietarios, precios de avalúos, requisitos legales. Información actualizada sobre el sector inmobiliario y avalúos en Colombia.",
  keywords: [
    "blog avalúos Colombia",
    "noticias avalúos certificados",
    "certificación avaluadores RAA",
    "Ley 1673 avalúos",
    "normativa avalúos Colombia",
    "guía avalúos inmuebles",
    "RAA registro abierto avaluadores",
    "artículos avalúos inmobiliarios",
    "cómo obtener avalúo certificado",
    "requisitos avaluador certificado",
    "precio avalúo comercial",
    "avalúos NIIF normativa",
    "consejos avalúos propiedades",
    "información avalúos Colombia",
    "blog dictaminemos"
  ],
  openGraph: {
    title: "Blog de Avalúos - Guías y Normativas | Dictaminemos",
    description: "Blog especializado en avalúos certificados: Ley 1673, RAA, normativas NIIF. Información actualizada del sector inmobiliario en Colombia.",
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
