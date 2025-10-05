"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "573001234567" // Reemplazar con el número real
  const message = "Hola, me gustaría obtener más información sobre sus servicios de avalúos y dictámenes."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 hover:scale-110 active:scale-95 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-200"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
