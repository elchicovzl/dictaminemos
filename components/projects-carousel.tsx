"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Centro Comercial Plaza Mayor",
    category: "Comercial",
    location: "Bogotá, Colombia",
    value: "$8,500,000,000",
    image: "/placeholder.svg?height=400&width=600&text=Centro+Comercial",
    description:
      "Avalúo comercial completo de centro comercial de tres niveles con análisis de flujo peatonal y rentabilidad.",
  },
  {
    id: 2,
    title: "Conjunto Residencial Los Arrayanes",
    category: "Residencial",
    location: "Medellín, Colombia",
    value: "$12,000,000,000",
    image: "/placeholder.svg?height=400&width=600&text=Conjunto+Residencial",
    description: "Avalúo masivo de 45 apartamentos con evaluación individual y análisis de zonas comunes.",
  },
  {
    id: 3,
    title: "Planta Industrial Textilera",
    category: "Industrial",
    location: "Cali, Colombia",
    value: "$4,200,000,000",
    image: "/placeholder.svg?height=400&width=600&text=Planta+Industrial",
    description: "Dictamen técnico estructural para proceso de seguros con análisis de maquinaria especializada.",
  },
  {
    id: 4,
    title: "Finca Ganadera El Paraíso",
    category: "Rural",
    location: "Villavicencio, Colombia",
    value: "$3,800,000,000",
    image: "/placeholder.svg?height=400&width=600&text=Finca+Ganadera",
    description: "Avalúo rural completo con análisis de suelos, infraestructura ganadera y fuentes hídricas.",
  },
]

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Proyectos Destacados</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Conoce algunos de nuestros trabajos más representativos
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={projects[currentIndex].image || "/placeholder.svg"}
                      alt={projects[currentIndex].title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {projects[currentIndex].category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{projects[currentIndex].title}</h3>
                      <p className="text-blue-200 text-lg">{projects[currentIndex].location}</p>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed">{projects[currentIndex].description}</p>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-200 mb-1">Valor del Proyecto</p>
                        <p className="text-2xl font-bold text-green-400">{projects[currentIndex].value}</p>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Ver Detalles
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Thumbnails */}
          <div className="flex justify-center mt-8 space-x-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToProject(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentIndex ? "ring-2 ring-blue-400 scale-110" : "opacity-60 hover:opacity-80"
                }`}
              >
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-20 h-12 object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
