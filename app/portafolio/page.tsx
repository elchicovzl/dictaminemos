"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Building, Calendar, CheckCircle, Eye, Home, MapPin, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Centro Comercial Plaza Mayor",
    category: "Comercial",
    type: "Avalúo Comercial",
    location: "Bogotá, Colombia",
    year: "2024",
    area: "15,000 m²",
    value: "$8,500,000,000",
    description:
      "Avalúo comercial de centro comercial de tres niveles con 120 locales comerciales, área de comidas y parqueaderos.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Building,
    highlights: [
      "Análisis de flujo peatonal",
      "Evaluación de rentabilidad por local",
      "Comparación con centros comerciales similares",
      "Análisis de ubicación estratégica",
    ],
  },
  {
    id: 2,
    title: "Conjunto Residencial Los Arrayanes",
    category: "Residencial",
    type: "Avalúo Masivo",
    location: "Medellín, Colombia",
    year: "2024",
    area: "45 unidades",
    value: "$12,000,000,000",
    description:
      "Avalúo masivo de conjunto residencial de 45 apartamentos distribuidos en 5 torres de 9 pisos cada una.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Home,
    highlights: [
      "Avalúo individual de 45 unidades",
      "Análisis de zonas comunes",
      "Evaluación de amenities",
      "Comparación con proyectos similares",
    ],
  },
  {
    id: 3,
    title: "Planta Industrial Textilera",
    category: "Industrial",
    type: "Dictamen Técnico",
    location: "Cali, Colombia",
    year: "2023",
    area: "8,500 m²",
    value: "$4,200,000,000",
    description: "Dictamen técnico estructural de planta industrial textilera para proceso de seguros por siniestro.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Truck,
    highlights: [
      "Evaluación de daños estructurales",
      "Análisis de maquinaria afectada",
      "Cálculo de costos de reparación",
      "Recomendaciones técnicas",
    ],
  },
  {
    id: 4,
    title: "Finca Ganadera El Paraíso",
    category: "Rural",
    type: "Avalúo Rural",
    location: "Villavicencio, Colombia",
    year: "2023",
    area: "250 hectáreas",
    value: "$3,800,000,000",
    description:
      "Avalúo de finca ganadera con infraestructura completa, pastos mejorados y sistema de riego tecnificado.",
    image: "/placeholder.svg?height=300&width=400",
    icon: MapPin,
    highlights: [
      "Análisis de calidad de suelos",
      "Evaluación de infraestructura ganadera",
      "Valoración de pastos y cultivos",
      "Análisis de fuentes hídricas",
    ],
  },
  {
    id: 5,
    title: "Edificio Corporativo Torre Azul",
    category: "Comercial",
    type: "Peritaje Técnico",
    location: "Barranquilla, Colombia",
    year: "2023",
    area: "12,000 m²",
    value: "$15,000,000,000",
    description:
      "Peritaje técnico para proceso judicial por defectos constructivos en edificio de oficinas de 20 pisos.",
    image: "/placeholder.svg?height=300&width=400",
    icon: Eye,
    highlights: [
      "Análisis de patologías estructurales",
      "Evaluación de sistemas MEP",
      "Cálculo de costos de reparación",
      "Informe pericial detallado",
    ],
  },
  {
    id: 6,
    title: "Levantamiento Topográfico Urbanización",
    category: "Topografía",
    type: "Topografía con Drones",
    location: "Cartagena, Colombia",
    year: "2024",
    area: "85 hectáreas",
    value: "$450,000,000",
    description: "Levantamiento topográfico con drones para desarrollo de urbanización de interés social.",
    image: "/placeholder.svg?height=300&width=400",
    icon: MapPin,
    highlights: [
      "Levantamiento con drones de alta precisión",
      "Modelado 3D del terreno",
      "Planos topográficos detallados",
      "Análisis de pendientes y drenajes",
    ],
  },
]

const categories = ["Todos", "Comercial", "Residencial", "Industrial", "Rural", "Topografía"]

export default function PortafolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "Todos" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 text-white overflow-hidden">
        {/* Portfolio Items Floating */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-20 left-16 w-16 h-20 bg-white/10 rounded-lg backdrop-blur-sm"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
            className="absolute top-1/3 right-20 w-12 h-12 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full"
          />

          <motion.div
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -15, 0],
            }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-24 left-1/4 w-20 h-16 bg-white/5 rounded-lg backdrop-blur-sm"
          />
        </div>

        {/* Project Icons */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute top-1/4 left-20 text-purple-300/40"
        >
          <Building size={55} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, -20, 20, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-16 text-indigo-300/40"
        >
          <Eye size={50} />
        </motion.div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 10 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 3 + i, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
              className="absolute border border-white/20 rounded-full"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm"
            >
              <Eye className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Nuestro Portafolio
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "250px" }}
              transition={{ duration: 1.2, delay: 1 }}
              className="h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 mx-auto mb-6"
            />

            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto text-purple-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Conoce algunos de los proyectos más destacados que hemos realizado para nuestros clientes
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card
                  className="h-full hover:shadow-lg:shadow-2xl transition-shadow duration-300 cursor-pointer bg-white border-gray-200"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 bg-gray-200 rounded-t-lg overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 p-2 rounded-full">
                          <project.icon className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-blue-600 font-semibold mb-3">{project.type}</p>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4" />
                          <span>{project.area}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t">
                        <p className="text-lg font-bold text-blue-600">{project.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200"
          >
            {(() => {
              const project = projects.find((p) => p.id === selectedProject)!
              return (
                <div>
                  <div className="relative h-64 bg-gray-200">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
                        <p className="text-blue-600 font-semibold text-lg">{project.type}</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <project.icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <p className="font-semibold text-gray-900">Ubicación</p>
                        <p className="text-gray-600">{project.location}</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <p className="font-semibold text-gray-900">Año</p>
                        <p className="text-gray-600">{project.year}</p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <Building className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <p className="font-semibold text-gray-900">Área</p>
                        <p className="text-gray-600">{project.area}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Aspectos Destacados</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center p-6 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Valor del Proyecto</p>
                      <p className="text-3xl font-bold text-blue-600">{project.value}</p>
                    </div>
                  </div>
                </div>
              )
            })()}
          </motion.div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestros Números</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estos números reflejan nuestro compromiso y experiencia en el sector
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2,500+", label: "Avalúos Realizados" },
              { number: "500+", label: "Clientes Atendidos" },
              { number: "15+", label: "Años de Experiencia" },
              { number: "98%", label: "Satisfacción del Cliente" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
