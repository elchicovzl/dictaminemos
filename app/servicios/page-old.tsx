"use client"

import { motion } from "framer-motion"
import { Building, CheckCircle, Eye, FileText, Globe, Home, MapPin, Scale, Shield, Truck } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Building,
    title: "Avalúos Comerciales",
    description: "Valuación de propiedades comerciales, oficinas, locales comerciales y centros comerciales.",
    features: [
      "Análisis de mercado inmobiliario",
      "Evaluación de ingresos y rentabilidad",
      "Comparación con propiedades similares",
      "Informe técnico detallado",
    ],
    applications: ["Compraventa", "Garantías hipotecarias", "Seguros", "Procesos judiciales"],
  },
  {
    icon: Home,
    title: "Avalúos Residenciales",
    description: "Valuación de viviendas, apartamentos, casas y conjuntos residenciales.",
    features: [
      "Inspección física detallada",
      "Análisis del sector y ubicación",
      "Evaluación de acabados y estado",
      "Comparación con ventas recientes",
    ],
    applications: ["Créditos hipotecarios", "Herencias", "Divorcios", "Seguros de hogar"],
  },
  {
    icon: Truck,
    title: "Avalúos Industriales",
    description: "Valuación de plantas industriales, bodegas, maquinaria y equipos especializados.",
    features: [
      "Evaluación de instalaciones",
      "Análisis de maquinaria y equipo",
      "Valoración de activos fijos",
      "Consideraciones técnicas especiales",
    ],
    applications: ["Fusiones y adquisiciones", "Garantías bancarias", "Seguros industriales", "Liquidaciones"],
  },
  {
    icon: MapPin,
    title: "Avalúos Rurales",
    description: "Valuación de fincas, terrenos agrícolas, ganaderos y forestales.",
    features: [
      "Análisis de suelos y topografía",
      "Evaluación de cultivos y mejoras",
      "Consideración de fuentes hídricas",
      "Análisis de productividad",
    ],
    applications: ["Reforma agraria", "Créditos agropecuarios", "Expropiaciones", "Seguros agrícolas"],
  },
  {
    icon: Shield,
    title: "Dictámenes Técnicos",
    description: "Análisis técnico especializado para procesos legales y administrativos.",
    features: [
      "Evaluación estructural",
      "Análisis de patologías",
      "Cumplimiento normativo",
      "Recomendaciones técnicas",
    ],
    applications: ["Procesos judiciales", "Seguros", "Interventorías", "Peritajes"],
  },
  {
    icon: Globe,
    title: "Topografía",
    description: "Levantamientos topográficos precisos utilizando tecnología de última generación.",
    features: [
      "Levantamientos con GPS diferencial",
      "Uso de drones para grandes áreas",
      "Modelado 3D del terreno",
      "Planos topográficos detallados",
    ],
    applications: ["Construcción", "Urbanismo", "Catastro", "Ingeniería civil"],
  },
  {
    icon: Scale,
    title: "Peritajes",
    description: "Servicios de peritaje especializado para procesos judiciales y extrajudiciales.",
    features: [
      "Análisis técnico imparcial",
      "Documentación fotográfica",
      "Informes periciales detallados",
      "Sustentación ante autoridades",
    ],
    applications: ["Procesos civiles", "Procesos penales", "Arbitrajes", "Conciliaciones"],
  },
  {
    icon: Eye,
    title: "Inspecciones Técnicas",
    description: "Evaluaciones detalladas del estado y condiciones de inmuebles y construcciones.",
    features: [
      "Inspección visual detallada",
      "Análisis de sistemas constructivos",
      "Identificación de patologías",
      "Recomendaciones de mantenimiento",
    ],
    applications: ["Due diligence", "Mantenimiento preventivo", "Seguros", "Compraventas"],
  },
  {
    icon: FileText,
    title: "Consultoría Catastral",
    description: "Asesoría especializada en temas catastrales y regulatorios del sector inmobiliario.",
    features: [
      "Análisis normativo catastral",
      "Gestión ante entidades",
      "Actualización catastral",
      "Resolución de conflictos",
    ],
    applications: ["Actualización predial", "Procesos administrativos", "Planificación urbana", "Gestión territorial"],
  },
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-blue-900 to-teal-800 text-white overflow-hidden">
        {/* Service Icons Animation */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute top-16 left-16 text-green-300/30"
          >
            <Building size={60} />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, -15, 15, 0],
            }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 right-20 text-teal-300/30"
          >
            <Shield size={55} />
          </motion.div>

          <motion.div
            animate={{
              x: [0, 20, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 left-1/4 text-blue-300/30"
          >
            <Globe size={45} />
          </motion.div>

          <motion.div
            animate={{
              rotate: [0, 180, 360],
              y: [0, -20, 0],
            }}
            transition={{
              rotate: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute bottom-1/4 right-1/4 text-green-300/30"
          >
            <Eye size={40} />
          </motion.div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
                className="border border-white/20"
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm"
            >
              <Shield className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Nuestros Servicios
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1 w-64 bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 mx-auto mb-6"
            />

            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto text-green-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Ofrecemos una amplia gama de servicios especializados en avalúos, dictámenes técnicos y topografía
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg:shadow-2xl transition-shadow duration-300 bg-white border-gray-200">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mr-4">
                        <service.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>

                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Características:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Aplicaciones:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app, appIndex) => (
                          <span
                            key={appIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nuestro Proceso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimos un proceso estructurado y profesional para garantizar la calidad en cada proyecto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Solicitud",
                description: "Recibimos su solicitud y analizamos los requerimientos específicos del proyecto.",
              },
              {
                step: "02",
                title: "Cotización",
                description: "Elaboramos una cotización detallada con tiempos de entrega y alcance del trabajo.",
              },
              {
                step: "03",
                title: "Ejecución",
                description: "Nuestro equipo especializado realiza el trabajo de campo y análisis técnico.",
              },
              {
                step: "04",
                title: "Entrega",
                description: "Entregamos el informe final con todos los documentos y certificaciones requeridas.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Necesitas Alguno de Estos Servicios?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Contáctanos para obtener una cotización personalizada y sin compromiso
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg" asChild>
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
