"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, Mail, MapPin, Phone, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact"

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStartTime, setFormStartTime] = useState<number>(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      timestamp: Date.now(),
    },
  })

  // Registrar cuando el usuario empieza a interactuar con el formulario
  useEffect(() => {
    setFormStartTime(Date.now())
  }, [])

  // Rate limiting del lado del cliente
  const checkRateLimit = (): boolean => {
    const lastSubmit = localStorage.getItem("lastContactSubmit")
    if (lastSubmit) {
      const timeSince = Date.now() - parseInt(lastSubmit)
      if (timeSince < 60000) {
        // 60 segundos
        const secondsLeft = Math.ceil((60000 - timeSince) / 1000)
        toast.error(`Por favor espera ${secondsLeft} segundos antes de enviar otro mensaje`)
        return false
      }
    }
    return true
  }

  const onSubmit = async (data: ContactFormData) => {
    // Verificar rate limiting
    if (!checkRateLimit()) {
      return
    }

    // Validar honeypot
    if (data.website && data.website.length > 0) {
      console.warn("Bot detected - honeypot filled")
      toast.error("Error al enviar el formulario")
      return
    }

    // Validar tiempo mínimo
    const timeElapsed = Date.now() - formStartTime
    if (timeElapsed < 3000) {
      toast.error("Por favor tómate un momento para completar el formulario")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          timestamp: formStartTime,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Error al enviar el mensaje")
      }

      // Éxito
      toast.success("¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.")

      // Guardar timestamp del último envío
      localStorage.setItem("lastContactSubmit", Date.now().toString())

      // Limpiar formulario
      reset()
      setFormStartTime(Date.now())
    } catch (error) {
      console.error("Error sending form:", error)
      toast.error(
        error instanceof Error ? error.message : "Error al enviar el mensaje. Por favor intenta nuevamente."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

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
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
            className="absolute top-16 right-20 w-32 h-32 border-2 border-teal-400/30 rounded-full"
          />

          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 20, -20, 0],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
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
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-16 text-teal-300/40"
        >
          <Phone size={50} />
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -15, 15, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-20 text-cyan-300/40"
        >
          <Mail size={45} />
        </motion.div>

        <motion.div
          animate={{
            x: [0, 25, -25, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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
                repeat: Infinity,
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
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 px-4"
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
              className="h-1 w-36 sm:w-48 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6"
            />

            <motion.p
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-teal-100 px-4"
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">Información de Contacto</h2>

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
                    <p className="text-gray-600 dark:text-gray-400">contacto@dictaminemos.com</p>
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
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                      Cerca a la estación del metro Parque Berrío
                    </p>
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
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/1CspHkjwKF/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/dictaminemos_1?igsh=MWJmN3ZhaW81aDVhMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:opacity-90 rounded-full transition-opacity"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">Cotiza con nosotros</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                          {...register("firstName")}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Tu nombre"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                        )}
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
                          {...register("lastName")}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Tu apellido"
                        />
                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email")}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="tu@email.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone")}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="300 123 4567"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Servicio de Interés
                      </label>
                      <select
                        id="service"
                        {...register("service")}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        {...register("message")}
                        disabled={isSubmitting}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Describe tu proyecto o consulta..."
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                    </div>

                    {/* Honeypot field - hidden from users, visible to bots */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website">Website (leave blank)</label>
                      <input
                        type="text"
                        id="website"
                        {...register("website")}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        {...register("privacy")}
                        disabled={isSubmitting}
                        className="mt-1"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                        Acepto el tratamiento de mis datos personales de acuerdo con la política de privacidad *
                      </label>
                    </div>
                    {errors.privacy && <p className="mt-1 text-sm text-red-600">{errors.privacy.message}</p>}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        "Enviar Mensaje"
                      )}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 px-4">Nuestra Ubicación</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">Visítanos en nuestra oficina principal en Medellín</p>
          </motion.div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890123!2d-75.5698!3d6.2518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc079e925!2sCalle%2051%20%2349-11%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
              width="100%"
              height="350"
              className="sm:h-[450px]"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 px-4">Cobertura Nacional</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Atendemos proyectos en todo el territorio colombiano con el mismo nivel de calidad y profesionalismo
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md"
            >
              <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Región Andina</h3>
                  <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-400">
                    <li>Bogotá</li>
                    <li>Medellín</li>
                    <li>Cali</li>
                    <li>Bucaramanga</li>
                    <li>Manizales</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
