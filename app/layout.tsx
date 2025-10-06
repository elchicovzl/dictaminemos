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
    default: "Dictaminemos - Avalúos, Dictámenes y Topografía en Medellín | Expertos Certificados",
    template: "%s | Dictaminemos"
  },
  description: "Avalúos comerciales, dictámenes periciales y topografía con drones en Medellín. +15 años de experiencia. Peritos certificados RNA. Servicios de avalúos urbanos, rurales, NIIF y dictámenes técnicos.",
  keywords: [
    "avalúos Medellín",
    "avalúos comerciales",
    "avalúos certificados",
    "dictámenes periciales Medellín",
    "topografía con drones",
    "avaluadores certificados RNA",
    "avalúo de inmuebles",
    "avalúo catastral",
    "perito avaluador",
    "avalúos NIIF",
    "avalúos urbanos",
    "avalúos rurales",
    "avalúo de fincas",
    "avalúo hipotecario",
    "avalúo comercial Medellín",
    "dictámenes técnicos",
    "topografía Medellín",
    "levantamiento topográfico"
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
    siteName: "Dictaminemos",
    title: "Dictaminemos - Avalúos, Dictámenes y Topografía en Medellín",
    description: "Avalúos comerciales, dictámenes periciales y topografía con drones en Medellín. +15 años de experiencia. Peritos certificados RNA.",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Dictaminemos - Avalúos y Dictámenes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictaminemos - Avalúos, Dictámenes y Topografía en Medellín",
    description: "Avalúos comerciales, dictámenes periciales y topografía con drones en Medellín. +15 años de experiencia.",
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
    "@type": "ProfessionalService",
    "@id": "https://dictaminemos.com",
    "name": "Dictaminemos",
    "description": "Avalúos comerciales, dictámenes periciales y topografía con drones en Medellín. +15 años de experiencia.",
    "url": "https://dictaminemos.com",
    "logo": "https://dictaminemos.com/images/logo.svg",
    "image": "https://dictaminemos.com/images/logo.svg",
    "telephone": "+573147030835",
    "email": "dictaminemos@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle 51 Nro. 49-11, Oficina 605. Edificio Fabricato",
      "addressLocality": "Medellín",
      "addressRegion": "Antioquia",
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
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Medellín"
    },
    "priceRange": "$$",
    "foundingDate": "2023",
    "slogan": "Avalúos, Dictámenes y Topografía de Precisión",
    "sameAs": [
      "https://www.facebook.com/dictaminemos",
      "https://www.instagram.com/dictaminemos"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Avalúos y Dictámenes",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Avalúos de Inmuebles Urbanos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Avalúos de Inmuebles Rurales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dictámenes Periciales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Topografía con Drones"
          }
        }
      ]
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