import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppChatWidget } from "@/components/whatsapp-chat-widget"
import { Toaster } from "sonner"
import Script from "next/script"
import { PostHogProvider } from "@/components/PostHogProvider"

const inter = Inter({ subsets: ["latin"], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://dictaminemos.com'),
  title: {
    default: "Dictaminemos - Avalúos Certificados RAA, Dictámenes Periciales y Topografía en Medellín | +20 Años",
    template: "%s | Dictaminemos"
  },
  description: "Avalúos comerciales y residenciales certificados RAA en Medellín. Dictámenes periciales judiciales, topografía con drones, avalúos NIIF, hipotecarios y rurales. +20 años de experiencia. Peritos expertos en Antioquia y Colombia.",
  keywords: [
    // Keywords primarios
    "avalúos Medellín",
    "avalúos certificados RAA Medellín",
    "perito avaluador certificado Medellín",
    "dictámenes periciales Colombia",
    "avaluadores certificados Antioquia",

    // Long-tail comerciales
    "avalúos comerciales Medellín",
    "cuánto cuesta un avalúo en Medellín",
    "avalúo de casa Medellín",
    "avalúo de apartamento certificado",
    "avalúo comercial para banco",
    "avalúo hipotecario Medellín",

    // Servicios específicos
    "dictámenes periciales judiciales",
    "peritaje de inmuebles",
    "perito avaluador judicial",
    "dictamen técnico pericial",
    "avalúo para procesos judiciales",

    // Topografía
    "topografía con drones Medellín",
    "levantamiento topográfico drones",
    "fotogrametría con drones",
    "levantamiento topográfico Medellín",

    // NIIF y especializados
    "avalúos NIIF Colombia",
    "avalúos bajo normas internacionales",
    "avalúo catastral",
    "avalúo comercial certificado",

    // Rurales
    "avalúos rurales Colombia",
    "avalúo de fincas",
    "avalúo de terrenos rurales",
    "avalúo agropecuario",

    // Urbanos
    "avalúos urbanos Medellín",
    "avalúo de oficinas",
    "avalúo de locales comerciales",
    "avalúo de bodegas",

    // Locales
    "avalúos El Poblado",
    "avaluadores Medellín centro",
    "avalúos Envigado",
    "perito avaluador Antioquia",

    // Certificación
    "Ley 1673 avalúos",
    "RAA Colombia",
    "avaluadores inscritos RAA",
    "perito certificado registro abierto avaluadores"
  ],
  authors: [{ name: "Dictaminemos" }],
  creator: "Dictaminemos",
  publisher: "Dictaminemos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://dictaminemos.com",
    siteName: "Dictaminemos - Avalúos Certificados RAA",
    title: "Dictaminemos - Avalúos Certificados RAA, Dictámenes Periciales | Medellín",
    description: "Avalúos certificados RAA, dictámenes periciales judiciales y topografía con drones en Medellín. +20 años de experiencia. Peritos expertos certificados.",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Dictaminemos - Avalúos Certificados RAA y Dictámenes Periciales en Medellín",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictaminemos - Avalúos, Dictámenes y Topografía en Medellín",
    description: "Avalúos comerciales, dictámenes periciales y topografía con drones en Medellín. +20 años de experiencia.",
    images: ["/images/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  alternates: {
    canonical: 'https://dictaminemos.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
    "@id": "https://dictaminemos.com",
    "name": "Dictaminemos - Avalúos Certificados RAA",
    "legalName": "Dictaminemos S.A.S.",
    "alternateName": "Dictaminemos",
    "description": "Empresa líder en avalúos certificados RAA, dictámenes periciales judiciales y topografía con drones en Medellín y Colombia. Más de 20 años de experiencia combinada. Peritos avaluadores certificados ante el Registro Abierto de Avaluadores (RAA).",
    "url": "https://dictaminemos.com",
    "logo": "https://dictaminemos.com/images/logo.svg",
    "image": "https://dictaminemos.com/images/logo.svg",
    "telephone": "+573147030835",
    "email": "contacto@dictaminemos.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle 51 Nro. 49-11, Oficina 605. Edificio Fabricato",
      "addressLocality": "Medellín",
      "addressRegion": "Antioquia",
      "postalCode": "050012",
      "addressCountry": "CO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.2476",
      "longitude": "-75.5658"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Medellín"
      },
      {
        "@type": "State",
        "name": "Antioquia"
      },
      {
        "@type": "Country",
        "name": "Colombia"
      }
    ],
    "priceRange": "$$",
    "foundingDate": "2023",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 5
    },
    "slogan": "Avalúos, Dictámenes y Topografía de Precisión",
    "sameAs": [
      "https://www.facebook.com/share/1CspHkjwKF/?mibextid=wwXIfr",
      "https://www.instagram.com/dictaminemos_1?igsh=MWJmN3ZhaW81aDVhMQ=="
    ],
    "knowsAbout": [
      "Avalúos Comerciales",
      "Dictámenes Periciales",
      "Topografía",
      "Avalúos NIIF",
      "Peritaje Judicial",
      "Ley 1673 de 2013",
      "Registro Abierto de Avaluadores RAA"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Avalúos y Dictámenes",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Avalúos de Inmuebles Urbanos",
            "description": "Avalúos comerciales y residenciales certificados para casas, apartamentos, oficinas y locales comerciales",
            "provider": {
              "@type": "Organization",
              "name": "Dictaminemos"
            },
            "areaServed": "Medellín, Colombia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Avalúos de Inmuebles Rurales",
            "description": "Avalúos técnicos de fincas, terrenos rurales y propiedades agropecuarias",
            "provider": {
              "@type": "Organization",
              "name": "Dictaminemos"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dictámenes Periciales Judiciales",
            "description": "Peritajes técnicos para procesos judiciales, reivindicatorios, servidumbres y expropiaciones",
            "provider": {
              "@type": "Organization",
              "name": "Dictaminemos"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Topografía con Drones",
            "description": "Levantamientos topográficos con drones, fotogrametría y ortofotos de alta precisión",
            "provider": {
              "@type": "Organization",
              "name": "Dictaminemos"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Avalúos NIIF",
            "description": "Avalúos bajo Normas Internacionales de Información Financiera para estados financieros",
            "provider": {
              "@type": "Organization",
              "name": "Dictaminemos"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Avalúos Hipotecarios",
            "description": "Avalúos certificados para créditos hipotecarios y entidades financieras",
            "provider": {
              "@type": "Organization",
              "name": "Dictaminemos"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <PostHogProvider>
          <Toaster position="top-right" richColors />
          <Navigation />
          <main className="pt-20">{children}</main>
          <Footer />
          <WhatsAppChatWidget />
        </PostHogProvider>
      </body>
    </html>
  )
}