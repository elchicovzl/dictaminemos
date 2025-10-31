"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import {
  GPSIcon,
  DroneIcon,
  StationIcon,
  CADIcon,
  GISIcon,
  PhotogrammetryIcon,
  LaserScannerIcon,
  Modeling3DIcon,
} from "./technology-icons"

const technologies = [
  {
    name: "GPS Diferencial",
    description: "Precisión centimétrica en levantamientos",
    icon: GPSIcon,
    category: "Topografía",
  },
  {
    name: "Drones Topográficos",
    description: "Mapeo aéreo de alta resolución",
    icon: DroneIcon,
    category: "Tecnología Aérea",
  },
  {
    name: "Estación Total",
    description: "Mediciones angulares y de distancia",
    icon: StationIcon,
    category: "Instrumentos",
  },
  {
    name: "Software CAD",
    description: "Diseño asistido por computadora",
    icon: CADIcon,
    category: "Software",
  },
  {
    name: "GIS Avanzado",
    description: "Sistemas de información geográfica",
    icon: GISIcon,
    category: "Análisis",
  },
  {
    name: "Fotogrametría",
    description: "Medición a través de fotografías",
    icon: PhotogrammetryIcon,
    category: "Captura",
  },
  {
    name: "Láser Escáner",
    description: "Captura 3D de alta precisión",
    icon: LaserScannerIcon,
    category: "3D",
  },
  {
    name: "Modelado 3D",
    description: "Representación tridimensional",
    icon: Modeling3DIcon,
    category: "Visualización",
  },
]

export function TechnologySlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length)
    }, 2000) // Cambiado de 3000ms a 2000ms (más rápido)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tecnología de Vanguardia</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Utilizamos las herramientas más avanzadas del mercado
          </p>
        </motion.div>

        {/* Infinite Scroll Effect */}
        <div className="relative">
          <div className="flex animate-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-4"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 w-72 h-56 flex flex-col items-center justify-center text-center border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="mb-4 sm:mb-6 transform hover:scale-110 transition-transform duration-300">
                    {tech.icon({ className: "w-14 h-14 sm:w-16 sm:h-16" })}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white px-2">{tech.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 leading-relaxed px-2">{tech.description}</p>
                  <span className="text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Technology */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 max-w-3xl mx-auto border border-white/10">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-yellow-400" />
                <span className="text-sm bg-yellow-400/10 text-yellow-300 px-4 py-2 rounded-full border border-yellow-400/20">
                  Tecnología Destacada
                </span>
              </div>
            </div>

            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
              {technologies[currentIndex].icon({ className: "w-24 h-24 mx-auto" })}
            </div>

            <h3 className="text-3xl font-bold mb-4 text-white">{technologies[currentIndex].name}</h3>
            <p className="text-gray-300 text-xl mb-6 leading-relaxed max-w-2xl mx-auto">
              {technologies[currentIndex].description}
            </p>

            <span className="inline-block px-6 py-3 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 font-semibold">
              {technologies[currentIndex].category}
            </span>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
