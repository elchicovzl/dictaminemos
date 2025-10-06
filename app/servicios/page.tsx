"use client"

import { motion } from "framer-motion"
import {
  Building, CheckCircle, FileText, Globe, Home, Landmark,
  Scale, Shield, Truck, TreePine, Coins, Factory,
  MapPin, Lightbulb, Network, Calculator
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const avaluosServices = [
  {
    icon: Building,
    title: "Avalúo de Inmuebles Urbanos",
    description: "¿Vas a comprar, vender o solicitar un crédito? Determinamos el valor justo de mercado de casas, apartamentos, oficinas, locales comerciales y bodegas.",
    features: [
      "Análisis de mercado inmobiliario",
      "Evaluación de ubicación y entorno",
      "Inspección detallada del inmueble",
      "Informe técnico certificado"
    ],
  },
  {
    icon: TreePine,
    title: "Avalúo de Inmuebles Rurales",
    description: "Maximizamos el valor de tu inversión en el campo. Realizamos avalúos técnicos de fincas, lotes y terrenos productivos.",
    features: [
      "Análisis de suelos y productividad",
      "Evaluación de cultivos y mejoras",
      "Valoración de fuentes hídricas",
      "Potencial agropecuario"
    ],
  },
  {
    icon: Factory,
    title: "Avalúo de Obras Civiles y Mejoras",
    description: "Asegúrate de que cada inversión en tu propiedad sea reconocida. Valoramos remodelaciones, ampliaciones y construcciones adicionales.",
    features: [
      "Evaluación de construcciones nuevas",
      "Valoración de remodelaciones",
      "Análisis de ampliaciones",
      "Registro de incremento patrimonial"
    ],
  },
  {
    icon: Truck,
    title: "Avalúo de Vehículos",
    description: "Conoce el valor exacto de tu vehículo o flota. Realizamos avalúos comerciales para carros, motos y maquinaria de transporte.",
    features: [
      "Inspección física del vehículo",
      "Análisis de mercado automotor",
      "Estado mecánico y estético",
      "Valoración de flota empresarial"
    ],
  },
  {
    icon: Shield,
    title: "Avalúo para Seguros y Copropiedades",
    description: "Protege la inversión de todos los copropietarios. Determinamos el valor de reconstrucción para que la póliza cubra el 100% del inmueble.",
    features: [
      "Valor de reconstrucción",
      "Valoración de zonas comunes",
      "Actualización de pólizas",
      "Prevención de infraseguro"
    ],
  },
  {
    icon: Landmark,
    title: "Avalúo de Inmuebles Especiales",
    description: "Contamos con la experiencia para valorar activos únicos: colegios, hospitales, hoteles, estaciones de servicio y plantas industriales.",
    features: [
      "Valoración especializada",
      "Análisis de uso específico",
      "Evaluación de equipamiento",
      "Potencial comercial"
    ],
  },
  {
    icon: Calculator,
    title: "Avalúo de Maquinaria y Equipo",
    description: "El valor de tu empresa reside en sus activos productivos. Determinamos el valor comercial de maquinaria industrial, equipos y mobiliario.",
    features: [
      "Valoración de activos fijos",
      "Maquinaria industrial",
      "Equipos de cómputo",
      "Mobiliario de oficina"
    ],
  },
  {
    icon: Coins,
    title: "Avalúo de Semovientes y Animales",
    description: "Ofrecemos avalúos especializados para el sector ganadero y agropecuario. Determinamos el valor de ganado, equinos y otros activos biológicos.",
    features: [
      "Valoración de ganado",
      "Evaluación de equinos",
      "Análisis de genética",
      "Inventarios pecuarios"
    ],
  },
  {
    icon: Network,
    title: "Avalúo de Activos Operacionales",
    description: "¿Cuál es el valor real de tu negocio en marcha? Valoramos establecimientos de comercio de forma integral, incluyendo Goodwill.",
    features: [
      "Valoración de negocio en marcha",
      "Análisis de clientela",
      "Goodwill y reputación",
      "Potencial de rentabilidad"
    ],
  },
  {
    icon: Lightbulb,
    title: "Avalúo de Intangibles",
    description: "Los activos más valiosos de tu empresa pueden ser invisibles. Valoramos propiedad intelectual: marcas, patentes y derechos de autor.",
    features: [
      "Valoración de marcas",
      "Patentes y derechos",
      "Secretos comerciales",
      "Capitalización de intangibles"
    ],
  },
  {
    icon: FileText,
    title: "Avalúo bajo Normas NIIF",
    description: "Garantiza el cumplimiento financiero y contable. Realizamos avalúos técnicos bajo Normas Internacionales de Información Financiera.",
    features: [
      "Valor razonable de activos",
      "Cumplimiento NIIF",
      "Estados financieros",
      "Transparencia contable"
    ],
  },
  {
    icon: Home,
    title: "Avalúo para Canon de Arrendamiento",
    description: "Establece un precio de alquiler justo y rentable. Determinamos el canon de arrendamiento adecuado según condiciones del mercado.",
    features: [
      "Análisis de mercado de arriendos",
      "Canon justo y equilibrado",
      "Maximización de ingresos",
      "Respaldo técnico"
    ],
  },
  {
    icon: Building,
    title: "Avalúo de Potencial de Desarrollo",
    description: "Descubre el verdadero potencial de tu terreno. Analizamos normativa urbanística y tendencias del mercado para determinar valor máximo.",
    features: [
      "Análisis normativo POT",
      "Potencial constructivo",
      "Máximo aprovechamiento",
      "Viabilidad de proyectos"
    ],
  },
  {
    icon: Globe,
    title: "Avalúo de Recursos Naturales",
    description: "Valoramos propiedades con enfoque ambiental: terrenos con bosques, fuentes hídricas y ecosistemas estratégicos.",
    features: [
      "Valor ecológico",
      "Compensación ambiental",
      "Restricciones de uso",
      "Cumplimiento normativo"
    ],
  },
]

const dictamenesServices = [
  {
    category: "Disputas de Propiedad",
    items: [
      "Procesos Reivindicatorios",
      "Pertenencia Adquisitiva (Usucapión)",
      "Deslinde y Amojonamiento"
    ]
  },
  {
    category: "Indemnizaciones",
    items: [
      "Servidumbres (Eléctrica, Tránsito, Acueducto)",
      "Expropiaciones",
      "Responsabilidad Civil",
      "Daño Emergente y Lucro Cesante"
    ]
  },
  {
    category: "Procesos Financieros",
    items: [
      "Procesos Ejecutivos y Remates",
      "Insolvencia y Liquidación",
      "Valoración de Frutos Civiles",
      "Obras Civiles y Mejoras"
    ]
  }
]

const topografiaServices = [
  {
    icon: MapPin,
    title: "Tomas Aéreas con Drone",
    description: "Capturamos imágenes y videos aéreos de alta resolución. Ideal para marketing, seguimiento de obra e inspecciones.",
  },
  {
    icon: MapPin,
    title: "Alinderamientos",
    description: "Define los límites de tu propiedad con certeza jurídica. Amojonamiento y verificación de linderos con tecnología GPS.",
  },
  {
    icon: Globe,
    title: "Fotogrametría y Ortofotos",
    description: "Transformamos imágenes aéreas en mapas digitales georreferenciados de alta precisión.",
  },
  {
    icon: Calculator,
    title: "Levantamiento Topográfico Híbrido",
    description: "Combinamos drone con estación total para máxima precisión en proyectos complejos.",
  },
  {
    icon: Network,
    title: "Levantamiento con GPS/GNSS",
    description: "Mapeamos grandes extensiones en tiempo récord con altísima precisión.",
  },
  {
    icon: Shield,
    title: "Amarres Geodésicos",
    description: "El más alto estándar de precisión vinculado a la red geodésica nacional (MAGNA-SIRGAS).",
  },
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
            <div className="h-1 w-64 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6" />
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
              Soluciones completas en avalúos, dictámenes técnicos y topografía
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="avaluos" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="avaluos">Avalúos</TabsTrigger>
              <TabsTrigger value="dictamenes">Dictámenes</TabsTrigger>
              <TabsTrigger value="topografia">Topografía</TabsTrigger>
            </TabsList>

            {/* Avalúos Content */}
            <TabsContent value="avaluos">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios de Avalúo</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  14 tipos especializados de avalúos para todas tus necesidades
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {avaluosServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <service.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Dictámenes Content */}
            <TabsContent value="dictamenes">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Dictámenes Periciales</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  La prueba técnica a tu favor en procesos judiciales y extrajudiciales
                </p>
              </div>

              <div className="max-w-5xl mx-auto space-y-8">
                {dictamenesServices.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-blue-600 mb-6">{category.category}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <Scale className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                              <span className="text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                <div className="bg-blue-50 rounded-lg p-8 mt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Por qué nuestros dictámenes?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Peritos registrados como auxiliares de la justicia</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Informes técnicos objetivos y contundentes</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Sustentación ante autoridades judiciales</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Respaldo profesional garantizado</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Topografía Content */}
            <TabsContent value="topografia">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Topografía y Drones</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Precisión desde el cielo con tecnología de punta
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {topografiaServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ventajas de nuestra tecnología</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Precisión milimétrica</strong>
                      <p className="text-sm text-gray-600">Equipos de última generación</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Ahorro de tiempo</strong>
                      <p className="text-sm text-gray-600">Levantamientos en tiempo récord</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Seguridad</strong>
                      <p className="text-sm text-gray-600">Sin riesgo en zonas difíciles</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Costos optimizados</strong>
                      <p className="text-sm text-gray-600">Mayor eficiencia operativa</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestro Proceso Técnico</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precisión en cada paso para garantizar resultados exactos y confiables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Inspección Inicial", description: "Visita y reconocimiento completo del inmueble" },
              { step: "02", title: "Levantamiento Topográfico", description: "Medición precisa con tecnología moderna" },
              { step: "03", title: "Análisis de Suelos", description: "Evaluación de capacidad y potencial (para fincas)" },
              { step: "04", title: "Estudio de Mercado", description: "Investigación de precios y tendencias" },
              { step: "05", title: "Valoración Final", description: "Informe técnico detallado y sustentado" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg" asChild>
                <Link href="/contacto">Solicitar Cotización</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg bg-transparent backdrop-blur-sm"
                asChild
              >
                <Link href="/blog">Conoce Más en Nuestro Blog</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
