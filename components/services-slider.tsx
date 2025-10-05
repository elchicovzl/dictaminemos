"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Building, Shield, Globe, Calculator, Eye, Scale, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building,
    title: "Avalúos Comerciales",
    description:
      "Valuación profesional de propiedades comerciales, oficinas y centros comerciales con análisis detallado del mercado.",
    features: ["Análisis de mercado", "Evaluación de rentabilidad", "Informes técnicos"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Dictámenes Técnicos",
    description: "Análisis técnico especializado para procesos legales y administrativos con respaldo profesional.",
    features: ["Evaluación estructural", "Análisis de patologías", "Cumplimiento normativo"],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Globe,
    title: "Topografía Avanzada",
    description: "Levantamientos topográficos precisos utilizando tecnología de drones y GPS diferencial.",
    features: ["Drones topográficos", "Modelado 3D", "GPS diferencial"],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Calculator,
    title: "Avalúos Residenciales",
    description: "Valuación de viviendas, apartamentos y conjuntos residenciales con metodología certificada.",
    features: ["Inspección detallada", "Análisis de ubicación", "Comparación de mercado"],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Eye,
    title: "Inspecciones Técnicas",
    description: "Evaluaciones detalladas del estado y condiciones de inmuebles y construcciones.",
    features: ["Inspección visual", "Análisis constructivo", "Recomendaciones"],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Scale,
    title: "Peritajes Judiciales",
    description: "Servicios de peritaje especializado para procesos judiciales y extrajudiciales.",
    features: ["Análisis imparcial", "Documentación completa", "Sustentación legal"],
    color: "from-red-500 to-red-600",
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
    }, 4000)

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestros Servicios Especializados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de servicios profesionales
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {services.map((service, index) => (
                <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / slidesToShow}%` }}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
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
            size="sm"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 rounded-full w-12 h-12 p-0 bg-white shadow-lg hover:shadow-xl z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 rounded-full w-12 h-12 p-0 bg-white shadow-lg hover:shadow-xl z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: services.length - slidesToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
