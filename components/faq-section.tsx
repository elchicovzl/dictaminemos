"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqCategories = [
  {
    category: "Sobre los Avalúos",
    key: "avaluos",
    faqs: [
      {
        question: "¿Qué es un avalúo y para qué sirve?",
        answer: "Es un estudio técnico que determina el valor real de un bien (inmueble, terreno, maquinaria, etc.). Sirve como respaldo en procesos de compra-venta, créditos, herencias, impuestos y decisiones financieras.",
      },
      {
        question: "¿Qué tipos de avalúos realizan?",
        answer: "Realizamos 14 tipos especializados: Inmuebles urbanos y rurales, vehículos, maquinaria, semovientes, intangibles, bajo normas NIIF, para seguros, canon de arrendamiento, potencial de desarrollo, recursos naturales, y más.",
      },
      {
        question: "¿Cuál es la diferencia entre un avalúo comercial y un avalúo catastral?",
        answer: "El avalúo comercial refleja el valor real de mercado del inmueble. El catastral es el que registra la autoridad municipal para fines tributarios y suele ser menor.",
      },
      {
        question: "¿Cuánto tiempo tarda en realizarse un avalúo?",
        answer: "Dependiendo del tipo de propiedad, entre 2 y 5 días hábiles después de la visita y entrega de documentos.",
      },
      {
        question: "¿Qué documentos necesito para solicitar un avalúo?",
        answer: "Escritura pública, certificado de tradición y libertad, cédula del propietario, planos (si se tienen) y recibos de servicios o impuestos.",
      },
      {
        question: "¿Un avalúo tiene validez legal?",
        answer: "Sí, todos nuestros avalúos cuentan con soporte técnico y son firmados por peritos registrados, con validez ante bancos, notarías y entidades oficiales.",
      },
      {
        question: "¿Con qué frecuencia se recomienda actualizar un avalúo?",
        answer: "Lo ideal es cada 1 año, o cuando se realicen mejoras o cambios importantes en la propiedad.",
      },
      {
        question: "¿El avalúo es aceptado por bancos e instituciones financieras?",
        answer: "Sí, nuestros avalúos son reconocidos por entidades financieras y notarías.",
      },
      {
        question: "¿Un avalúo es lo mismo que una inspección técnica?",
        answer: "No. La inspección técnica evalúa el estado físico de la propiedad, mientras que el avalúo determina su valor económico en el mercado.",
      },
      {
        question: "¿El avalúo determina el precio final de venta de una propiedad?",
        answer: "No necesariamente. El avalúo es una referencia técnica; el precio final puede variar según la negociación entre comprador y vendedor.",
      },
    ]
  },
  {
    category: "Sobre el Proceso",
    key: "proceso",
    faqs: [
      {
        question: "¿Cómo puedo solicitar un avalúo con su empresa?",
        answer: "Puedes hacerlo vía WhatsApp al 314 703 0835, correo a contacto@dictaminemos.com o usando nuestro chat de WhatsApp en la web.",
      },
      {
        question: "¿Realizan visitas físicas al inmueble?",
        answer: "Sí, siempre realizamos inspecciones en sitio para garantizar un avalúo preciso y confiable.",
      },
      {
        question: "¿Qué aspectos se consideran para determinar el valor de una propiedad?",
        answer: "Ubicación, área, estado de conservación, servicios, vías de acceso, entorno, y comparativos del mercado actual.",
      },
      {
        question: "¿Puedo solicitar un avalúo para una propiedad que aún está en construcción?",
        answer: "Sí, realizamos avalúos de proyectos en desarrollo o en planos.",
      },
      {
        question: "¿Realizan avalúos en todo el país o solo en determinadas ciudades?",
        answer: "Prestamos servicio principalmente en Medellín y Antioquia, pero podemos coordinar avalúos en otras zonas según la necesidad del cliente.",
      },
      {
        question: "¿Qué diferencia hay entre un avalúo urbano y uno rural?",
        answer: "El urbano se aplica a viviendas, locales o edificios en ciudad; el rural a fincas, lotes agrícolas o terrenos fuera de áreas urbanas.",
      },
      {
        question: "¿Qué pasa si no tengo todos los documentos del inmueble?",
        answer: "Podemos asesorarte en la gestión y solicitar los documentos necesarios ante la entidad correspondiente.",
      },
      {
        question: "¿Puedo estar presente durante la visita técnica?",
        answer: "Sí, recomendamos que estés presente para resolver cualquier duda en el momento de la inspección.",
      },
      {
        question: "¿Cómo se entrega el informe final del avalúo?",
        answer: "En formato digital (PDF) y, si el cliente lo requiere, en físico con firma y sello de nuestros peritos.",
      },
    ]
  },
  {
    category: "Costos y Pagos",
    key: "costos",
    faqs: [
      {
        question: "¿Cuánto cuesta un avalúo?",
        answer: "El valor depende del tipo de bien y su complejidad. Te entregamos una cotización clara antes de iniciar.",
      },
      {
        question: "¿Cómo se determina el costo del servicio?",
        answer: "Se calcula según el tipo de avalúo, tamaño del inmueble, ubicación y la documentación requerida.",
      },
      {
        question: "¿Ofrecen cotizaciones previas sin compromiso?",
        answer: "Sí, puedes solicitarnos una cotización gratuita y sin compromiso.",
      },
      {
        question: "¿Qué formas de pago aceptan?",
        answer: "Efectivo, transferencia bancaria, consignación y pago vía plataformas digitales.",
      },
      {
        question: "¿El costo del avalúo incluye impuestos?",
        answer: "Sí, te entregamos un valor final sin costos ocultos.",
      },
      {
        question: "¿El valor del avalúo depende del tipo de inmueble o del uso que se le dé?",
        answer: "Sí, varía según si es vivienda, local comercial, terreno, finca o industria.",
      },
    ]
  },
  {
    category: "Sobre la Empresa",
    key: "empresa",
    faqs: [
      {
        question: "¿Qué experiencia tiene su empresa en el sector?",
        answer: "Contamos con más de 20 años de experiencia en avalúos, dictámenes y topografía, respaldados por cientos de clientes satisfechos.",
      },
      {
        question: "¿Los avalúos los realizan profesionales certificados?",
        answer: "Sí, todos nuestros peritos cuentan con registro ante el RAA, formación especializada y experiencia comprobada.",
      },
      {
        question: "¿Además de avalúos, realizan dictámenes o servicios de topografía?",
        answer: "Sí, ofrecemos servicios complementarios de dictámenes técnicos, topografía con drones y asesoría inmobiliaria.",
      },
      {
        question: "¿Por qué debería elegir su empresa frente a otras?",
        answer: "Porque ofrecemos avalúos precisos, decisiones seguras, con atención personalizada, experiencia comprobada de 20+ años y respaldo técnico-legal.",
      },
    ]
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">Preguntas Frecuentes</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Encuentra respuestas a las 30 preguntas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="avaluos" className="w-full">
            <TabsList className="flex flex-wrap justify-center w-full max-w-4xl mx-auto mb-12 h-auto gap-3 bg-transparent p-0">
              <TabsTrigger
                value="avaluos"
                className="text-sm sm:text-base px-6 py-3 rounded-full border border-gray-200 bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 shadow-sm hover:border-blue-300 transition-all duration-300 min-w-[120px]"
              >
                Avalúos
              </TabsTrigger>
              <TabsTrigger
                value="proceso"
                className="text-sm sm:text-base px-6 py-3 rounded-full border border-gray-200 bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 shadow-sm hover:border-blue-300 transition-all duration-300 min-w-[120px]"
              >
                Proceso
              </TabsTrigger>
              <TabsTrigger
                value="costos"
                className="text-sm sm:text-base px-6 py-3 rounded-full border border-gray-200 bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 shadow-sm hover:border-blue-300 transition-all duration-300 min-w-[120px]"
              >
                Costos
              </TabsTrigger>
              <TabsTrigger
                value="empresa"
                className="text-sm sm:text-base px-6 py-3 rounded-full border border-gray-200 bg-white data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-blue-600 shadow-sm hover:border-blue-300 transition-all duration-300 min-w-[120px]"
              >
                Empresa
              </TabsTrigger>
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.key} value={category.key}>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => {
                    const key = `${category.key}-${index}`
                    const isOpen = openIndex === key
                    return (
                      <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : key)}
                          className="w-full p-4 sm:p-6 hover:bg-gray-50 transition-colors text-left flex justify-between items-center"
                        >
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
