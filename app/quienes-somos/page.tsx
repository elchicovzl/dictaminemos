"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, Eye, Target, Users, Zap } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute top-10 right-10 w-32 h-32 border border-purple-400/30 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
            className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg rotate-45"
          />
        </div>

        {/* Team Icons Floating */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/4 left-20 text-purple-300/40"
        >
          <Users size={50} />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -10, 10, 0],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-20 text-blue-300/40"
        >
          <Award size={45} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm"
            >
              <Users className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Quiénes Somos
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6 sm:w-[200px]"
            />

            <motion.p
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Empresa líder en avalúos certificados RAA, dictámenes periciales y topografía en Medellín. Más de 20 años de experiencia combinada
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Nuestra Historia: Pasión, Experiencia y Profesionalismo</h2>

              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3">Los Inicios de la Experiencia (Año 2005)</h3>
              <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                En el año 2005, nuestro socio fundador, el Dr. Abel Adrián Escobar Escudero, egresado de Derecho,
                inició su carrera como auxiliar de justicia. Durante 10 años, se desempeñó como avaluador certificado
                por el Registro Abierto de Avaluadores (RAA), forjando desde entonces una trayectoria especializada
                y reconocida en el campo de los avalúos.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3">La Unión de Visiones (2018 - 2021)</h3>
              <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                En 2018, el Dr. Escobar une su camino profesional con el Dr. Andrés Camilo García Hernández,
                abogado egresado en 2019. Esta asociación, que se consolidó formalmente como sociedad en 2021,
                combinó años de experiencia práctica con una perspectiva legal renovada, sentando las bases para
                un proyecto más ambicioso.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3">El Nacimiento de Dictaminemos (2023)</h3>
              <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">
                Con la formalización del sector a través de la Ley del Avaluador (Ley 1673), los socios vieron la
                clara necesidad de crear una firma que no solo cumpliera con la nueva normativa, sino que elevara
                el estándar de calidad y confianza en el mercado. Así, en 2023, nace Dictaminemos, una empresa
                creada para responder con rigor técnico y ético a las exigencias del sector inmobiliario y patrimonial.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-3">Nuestro Presente (2025)</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Hoy, en Dictaminemos sumamos una experiencia combinada de más de 20 años, ofreciendo servicios
                altamente especializados en dictámenes periciales y avalúos. Nuestro origen, basado en el conocimiento
                legal y la especialización técnica, es la garantía de seguridad y precisión que ofrecemos a cada uno
                de nuestros clientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">2005</div>
                    <p className="text-sm sm:text-base text-gray-700">Inicio de Trayectoria</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">2023</div>
                    <p className="text-sm sm:text-base text-gray-700">Fundación Dictaminemos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">2500+</div>
                    <p className="text-sm sm:text-base text-gray-700">Avalúos Realizados</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <p className="text-sm sm:text-base text-gray-700">Clientes Satisfechos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full bg-white border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
                  <p className="text-gray-600 leading-relaxed">
                    En Dictaminemos, ofrecemos servicios de avalúos, dictámenes y topografía con precisión, ética y
                    profesionalismo. Nos comprometemos a brindar información confiable y oportuna que respalde
                    decisiones seguras para particulares, empresas y entidades públicas, promoviendo la transparencia
                    y el valor justo en cada transacción.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full bg-white border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6 mx-auto">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ser la primera opción en avalúos y dictámenes, consolidándonos como una empresa referente gracias
                    a nuestro rigor técnico, imparcialidad y cumplimiento normativo. Buscamos brindar a nuestros
                    clientes confianza, agilidad y un servicio cercano que les asegure decisiones patrimoniales seguras
                    y beneficiosas.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="h-full bg-white border-gray-200">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-6 mx-auto">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
                  <div className="text-left space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Confianza</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Precisión</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Transparencia</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Compromiso</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Agilidad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Profesionalismo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-600">Innovación</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">Nuestro Equipo</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Contamos con un equipo multidisciplinario de profesionales altamente calificados y certificados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Award,
                title: "Abogados",
                description: "Especialistas en derecho inmobiliario y procesos judiciales",
                count: "3",
              },
              {
                icon: Users,
                title: "Secretaria",
                description: "Soporte administrativo y atención al cliente",
                count: "1",
              },
              {
                icon: CheckCircle,
                title: "Contador",
                description: "Gestión contable y financiera",
                count: "1",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                      <member.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{member.count}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{member.title}</h3>
                    <p className="text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 px-4">
              Certificaciones y Reconocimientos
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Nuestros profesionales cuentan con las certificaciones más importantes del sector
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl:shadow-2xl transition-shadow text-center border-2 border-blue-200 max-w-md"
            >
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="font-bold text-2xl text-gray-900 mb-4">
                Registro Abierto de Avaluadores (RAA)
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Registro oficial que certifica nuestra habilitación como avaluadores profesionales según la Ley 1673 de 2013.
                Todos nuestros avaluadores están debidamente inscritos y certificados ante el RAA, garantizando la validez
                legal de nuestros avalúos y dictámenes técnicos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
