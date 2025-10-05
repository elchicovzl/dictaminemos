"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "María González",
    position: "Gerente de Proyectos",
    company: "Constructora Andina",
    content:
      "Dictaminemos nos ha brindado servicios de avalúos excepcionales durante más de 5 años. Su profesionalismo y precisión son incomparables.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=MG",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "Director Financiero",
    company: "Banco Nacional",
    content:
      "Los dictámenes técnicos de Dictaminemos son siempre detallados y confiables. Han sido fundamentales para nuestras decisiones de inversión.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=CR",
  },
  {
    id: 3,
    name: "Ana Martínez",
    position: "Abogada Especialista",
    company: "Bufete Jurídico Martínez",
    content:
      "Su experiencia en peritajes judiciales es excepcional. Los informes son claros, precisos y siempre entregados a tiempo.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=AM",
  },
  {
    id: 4,
    name: "Roberto Silva",
    position: "Ingeniero Civil",
    company: "Desarrollos Urbanos S.A.",
    content:
      "Los levantamientos topográficos con drones han revolucionado nuestros proyectos. Tecnología de punta y resultados impecables.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80&text=RS",
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative"
            >
              <div className="absolute top-6 left-6 text-blue-200">
                <Quote size={40} />
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-blue-600 font-semibold">{testimonials[currentIndex].position}</p>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-white/80 backdrop-blur-sm hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
