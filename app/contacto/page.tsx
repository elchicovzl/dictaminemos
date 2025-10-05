"use client"

import { motion } from "framer-motion"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 via-blue-900 to-cyan-800 text-white overflow-hidden">
        {/* Communication Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            }}
            className="absolute top-16 right-20 w-32 h-32 border-2 border-teal-400/30 rounded-full"
          />

          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 20, -20, 0],
            }}
            transition={{
              y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              x: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg rotate-12"
          />
        </div>

        {/* Contact Icons */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/4 left-16 text-teal-300/40"
        >
          <Phone size={50} />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -15, 15, 0],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-20 text-cyan-300/40"
        >
          <Mail size={45} />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 25, -25, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/4 text-teal-300/40"
        >
          <MapPin size={40} />
        </motion.div>

        {/* Message Bubbles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
              className="absolute w-3 h-3 bg-white/30 rounded-full"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
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
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-sm"
            >
              <Mail className="h-10 w-10 text-white" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Contáctanos
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1 w-48 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6"
            />

            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto text-teal-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Estamos aquí para ayudarte con todos tus proyectos de avalúos y dictámenes técnicos
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Información de Contacto</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-400">314 703 0835</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">WhatsApp disponible</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Correo Electrónico</h3>
                    <p className="text-gray-600 dark:text-gray-400">Dictaminemos@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Dirección</h3>
                    <p className="text-gray-600 dark:text-gray-400">Calle 51 Nro. 49-11, Oficina 605</p>
                    <p className="text-gray-600 dark:text-gray-400">Edificio Fabricato, Medellín</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Cerca a la estación del metro Parque Berrío</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Horarios de Atención</h3>
                    <p className="text-gray-600 dark:text-gray-400">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Sábados: 8:00 AM - 12:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Síguenos en Redes Sociales</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    Facebook
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cotiza con nosotros</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Apellido *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Tu apellido"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="+57 300 123 4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Servicio de Interés
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="avaluo-comercial">Avalúo Comercial</option>
                        <option value="avaluo-residencial">Avalúo Residencial</option>
                        <option value="avaluo-industrial">Avalúo Industrial</option>
                        <option value="avaluo-rural">Avalúo Rural</option>
                        <option value="dictamen-tecnico">Dictamen Técnico</option>
                        <option value="topografia">Topografía</option>
                        <option value="peritaje">Peritaje</option>
                        <option value="consultoria">Consultoría</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Describe tu proyecto o consulta..."
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="privacy" name="privacy" required className="mt-1" />
                      <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                        Acepto el tratamiento de mis datos personales de acuerdo con la política de privacidad *
                      </label>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nuestra Ubicación</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Visítanos en nuestra oficina principal en Medellín</p>
          </motion.div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890123!2d-75.5698!3d6.2518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc079e925!2sCalle%2051%20%2349-11%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Dictaminemos - Edificio Fabricato, Medellín"
            />
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Cobertura Nacional</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Atendemos proyectos en todo el territorio colombiano con el mismo nivel de calidad y profesionalismo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                region: "Región Andina",
                cities: ["Bogotá", "Medellín", "Cali", "Bucaramanga", "Manizales"],
              },
              {
                region: "Región Caribe",
                cities: ["Barranquilla", "Cartagena", "Santa Marta", "Montería", "Valledupar"],
              },
              {
                region: "Región Pacífica",
                cities: ["Cali", "Buenaventura", "Tumaco", "Quibdó", "Popayán"],
              },
              {
                region: "Región Orinoquía",
                cities: ["Villavicencio", "Yopal", "Arauca", "Puerto Carreño", "Inírida"],
              },
            ].map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{region.region}</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      {region.cities.map((city, cityIndex) => (
                        <li key={cityIndex}>{city}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
