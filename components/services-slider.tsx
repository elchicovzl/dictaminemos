"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Building, Shield, Globe, Calculator, Eye, Scale, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    icon: Building,
    title: "Avalúos Comerciales",
    description:
      "Valuación profesional de propiedades comerciales, oficinas y centros comerciales con análisis detallado del mercado.",
    features: ["Análisis de mercado", "Evaluación de rentabilidad", "Informes técnicos"],
    color: "from-blue-500 to-blue-600",
    image: "/images/services/commercial.png"
  },
  {
    icon: Shield,
    title: "Dictámenes Técnicos",
    description: "Análisis técnico especializado para procesos legales y administrativos con respaldo profesional.",
    features: ["Evaluación estructural", "Análisis de patologías", "Cumplimiento normativo"],
    color: "from-green-500 to-green-600",
    image: "/images/services/technical.png"
  },
  {
    icon: Globe,
    title: "Topografía Avanzada",
    description: "Levantamientos topográficos precisos utilizando tecnología de drones y GPS diferencial.",
    features: ["Drones topográficos", "Modelado 3D", "GPS diferencial"],
    color: "from-purple-500 to-purple-600",
    image: "/images/services/topography.png"
  },
  {
    icon: Calculator,
    title: "Avalúos Residenciales",
    description: "Valuación de viviendas, apartamentos y conjuntos residenciales con metodología certificada.",
    features: ["Inspección detallada", "Análisis de ubicación", "Comparación de mercado"],
    color: "from-orange-500 to-orange-600",
    image: "/images/services/residential.png"
  },
  {
    icon: Eye,
    title: "Inspecciones Técnicas",
    description: "Evaluaciones detalladas del estado y condiciones de inmuebles y construcciones.",
    features: ["Inspección visual", "Análisis constructivo", "Recomendaciones"],
    color: "from-teal-500 to-teal-600",
    image: "/images/services/inspection.png"
  },
  {
    icon: Scale,
    title: "Peritajes Judiciales",
    description: "Servicios de peritaje especializado para procesos judiciales y extrajudiciales.",
    features: ["Análisis imparcial", "Documentación completa", "Sustentación legal"],
    color: "from-red-500 to-red-600",
    image: "/images/services/legal.png"
  },
]

export function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = services.length - slidesToShow
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [slidesToShow])

  const nextSlide = () => {
    const maxIndex = services.length - slidesToShow
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    const maxIndex = services.length - slidesToShow
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Nuestras Soluciones</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">Servicios Especializados</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Combinamos experiencia técnica y tecnología de punta para entregar resultados precisos
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden px-2 py-4">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {services.map((service, index) => (
                <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / slidesToShow}%` }}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-white rounded-2xl">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                      <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 bg-gradient-to-r ${service.color}`} />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <span className="text-blue-600 text-sm font-semibold flex items-center group-hover:translate-x-2 transition-transform cursor-pointer">
                          Más Información <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute -left-2 sm:-left-6 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white shadow-xl hover:bg-gray-50 border-gray-200 z-10 hidden md:flex"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute -right-2 sm:-right-6 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 bg-white shadow-xl hover:bg-gray-50 border-gray-200 z-10 hidden md:flex"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </Button>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: services.length - slidesToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
