"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Qué tipos de avalúos realizan?",
    answer:
      "Realizamos avalúos comerciales, residenciales, industriales, rurales, de maquinaria y equipo, para fines hipotecarios, judiciales, fiscales y de seguros.",
  },
  {
    question: "¿Cuánto tiempo toma realizar un avalúo?",
    answer:
      "El tiempo varía según la complejidad del inmueble. Generalmente, un avalúo residencial toma de 3-5 días hábiles, mientras que avalúos comerciales o industriales pueden tomar de 7-15 días hábiles.",
  },
  {
    question: "¿Están certificados para realizar avalúos?",
    answer:
      "Sí, contamos con avaluadores certificados por el ICONTEC bajo la norma ISO/IEC 17024 y registrados ante la Superintendencia de Notariado y Registro.",
  },
  {
    question: "¿Qué documentos necesito para solicitar un avalúo?",
    answer:
      "Necesitará escritura pública, certificado de libertad y tradición, planos arquitectónicos (si los tiene), y documento de identidad del propietario.",
  },
  {
    question: "¿Realizan trabajos en todo el país?",
    answer:
      "Sí, tenemos cobertura nacional. Contamos con profesionales en las principales ciudades de Colombia y aliados estratégicos para atender proyectos en cualquier región.",
  },
  {
    question: "¿Qué incluye un dictamen técnico?",
    answer:
      "Un dictamen técnico incluye análisis estructural, evaluación de patologías, estado de conservación, cumplimiento normativo y recomendaciones técnicas detalladas.",
  },
  {
    question: "¿Ofrecen servicios de topografía con drones?",
    answer:
      "Sí, utilizamos tecnología de drones para levantamientos topográficos, fotogrametría aérea y modelado 3D, especialmente útil para grandes extensiones de terreno.",
  },
  {
    question: "¿Cuáles son sus tarifas?",
    answer:
      "Las tarifas varían según el tipo de servicio, complejidad y ubicación del inmueble. Ofrecemos cotizaciones gratuitas y personalizadas para cada proyecto.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white mx-4 px-6 pb-6 rounded-b-lg"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
