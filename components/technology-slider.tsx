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
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-2 block">Innovación</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tecnología de Vanguardia</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Utilizamos las herramientas más avanzadas del mercado para garantizar precisión milimétrica
          </p>
        </motion.div>

        {/* Infinite Scroll Effect */}
        <div className="relative mb-20">
          <div className="flex animate-scroll hover:pause-animation">
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-4"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 w-72 h-64 flex flex-col items-center justify-center text-center border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-xl">
                  <div className="mb-6 transform hover:scale-110 transition-transform duration-300 text-blue-400">
                    {tech.icon({ className: "w-16 h-16" })}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{tech.name}</h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">{tech.description}</p>
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-10 max-w-4xl mx-auto border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap className="w-40 h-40 text-white" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex-shrink-0 bg-blue-600/20 p-6 rounded-full border border-blue-500/30">
                {technologies[currentIndex].icon({ className: "w-20 h-20 text-blue-300" })}
              </div>

              <div className="text-left flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full border border-yellow-500/30 uppercase tracking-wide">
                    Tecnología Destacada
                  </span>
                  <span className="text-xs font-medium text-gray-400">{technologies[currentIndex].category}</span>
                </div>

                <h3 className="text-3xl font-bold mb-3 text-white">{technologies[currentIndex].name}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {technologies[currentIndex].description}. Esta tecnología nos permite entregar resultados superiores en tiempo récord, minimizando errores y maximizando la calidad de la información entregada al cliente.
                </p>
              </div>
            </div>
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
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
