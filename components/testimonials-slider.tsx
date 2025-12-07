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
    gender: "female",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    position: "Director Financiero",
    company: "Banco Nacional",
    content:
      "Los dictámenes técnicos de Dictaminemos son siempre detallados y confiables. Han sido fundamentales para nuestras decisiones de inversión.",
    rating: 5,
    gender: "male",
  },
  {
    id: 3,
    name: "Ana Martínez",
    position: "Abogada Especialista",
    company: "Bufete Jurídico Martínez",
    content:
      "Su experiencia en peritajes judiciales es excepcional. Los informes son claros, precisos y siempre entregados a tiempo.",
    rating: 5,
    gender: "female",
  },
  {
    id: 4,
    name: "Roberto Silva",
    position: "Ingeniero Civil",
    company: "Desarrollos Urbanos S.A.",
    content:
      "Los levantamientos topográficos con drones han revolucionado nuestros proyectos. Tecnología de punta y resultados impecables.",
    rating: 5,
    gender: "male",
  },
]

const MaleAvatar = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-100">
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path
      d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
      fill="#3B82F6"
    />
    <path
      d="M12 15C8.13401 15 5 18.134 5 22H19C19 18.134 15.866 15 12 15Z"
      fill="#3B82F6"
    />
  </svg>
)

const FemaleAvatar = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-100">
    <circle cx="12" cy="12" r="12" fill="currentColor" />
    <path
      d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
      fill="#8B5CF6"
    />
    <path
      d="M12 15C8.13401 15 5 18.134 5 22H19C19 18.134 15.866 15 12 15Z"
      fill="#8B5CF6"
    />
  </svg>
)

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)

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
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-2 block">Testimonios</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light">
            La satisfacción de nuestros clientes es nuestro mayor logro y mejor carta de presentación
          </p>
        </motion.div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 relative mx-4 md:mx-12"
            >
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 text-blue-500 bg-white rounded-full p-4 shadow-lg">
                <Quote size={40} className="fill-current" />
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                    {/* @ts-ignore */}
                    {testimonials[currentIndex].image ? (
                      // @ts-ignore
                      <img
                        // @ts-ignore
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full rounded-full object-cover border-4 border-white"
                      />
                    ) : testimonials[currentIndex].gender === "female" ? (
                      <div className="w-full h-full rounded-full border-4 border-white bg-purple-50">
                        <FemaleAvatar />
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-full border-4 border-white bg-blue-50">
                        <MaleAvatar />
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-center md:text-left flex-1">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-lg md:text-2xl text-gray-700 mb-6 leading-relaxed italic font-light">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div>
                    <h4 className="font-bold text-xl text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-blue-600 font-medium">{testimonials[currentIndex].position}</p>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white hidden md:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white hidden md:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/30 w-2 hover:bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
