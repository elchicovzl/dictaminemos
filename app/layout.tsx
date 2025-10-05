import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppChatWidget } from "@/components/whatsapp-chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dictaminemos - Avalúos, Dictámenes y Topografía",
  description: "Especialistas en Derecho, Arquitectura y Tecnología Catastral con más de 15 años de experiencia",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppChatWidget />
      </body>
    </html>
  )
}
