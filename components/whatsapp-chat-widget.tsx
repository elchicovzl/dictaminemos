"use client"

import { useState } from "react"
import { X, Send } from "lucide-react"
import Image from "next/image"

// WhatsApp Logo Component (phone icon only)
function WhatsAppLogo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const phoneNumber = "573147030835"

  const predefinedMessages = [
    "Hola, necesito información sobre avalúos",
    "Quiero solicitar un dictamen técnico",
    "Necesito información sobre topografía",
    "Solicitar cotización",
  ]

  const handleSendMessage = (customMessage?: string) => {
    const textToSend = customMessage || message
    if (textToSend.trim()) {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToSend)}`
      window.open(url, "_blank")
      setMessage("")
      setIsOpen(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <WhatsAppLogo className="h-7 w-7 text-green-600" />
              </div>
              <div className="text-white">
                <h3 className="font-semibold text-lg">Dictaminemos</h3>
                <p className="text-sm text-green-100">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Cerrar chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-gray-50 p-4 h-96 overflow-y-auto">
            {/* Welcome Message */}
            <div className="mb-4">
              <div className="bg-white p-4 rounded-lg shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-800 mb-2">
                  ¡Hola! 👋 Bienvenido a <strong>Dictaminemos</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ¿En qué podemos ayudarte hoy? Somos especialistas en avalúos, dictámenes técnicos y topografía.
                </p>
              </div>
              <span className="text-xs text-gray-400 ml-2 mt-1 block">Ahora</span>
            </div>

            {/* Quick Options */}
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-500 mb-2">Mensajes rápidos:</p>
              {predefinedMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(msg)}
                  className="w-full bg-white hover:bg-gray-100 text-left p-3 rounded-lg shadow-sm text-sm text-gray-700 transition-colors border border-gray-200"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-white p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!message.trim()}
                aria-label="Enviar mensaje"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Al enviar, serás redirigido a WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 hover:scale-110 active:scale-95 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-200 group"
        aria-label="Abrir chat de WhatsApp"
      >
        {isOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <>
            <WhatsAppLogo className="h-7 w-7" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          </>
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="fixed bottom-6 right-24 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="text-sm whitespace-nowrap">¿Necesitas ayuda? Chatea con nosotros</span>
          <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-gray-900" />
        </div>
      )}
    </>
  )
}
