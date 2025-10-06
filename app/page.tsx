"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Building, Calculator, Users, TrendingUp, Clock, Star } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Lazy load heavy components
const FAQSection = dynamic(() => import("@/components/faq-section").then((mod) => ({ default: mod.FAQSection })), {
  loading: () => <div className="py-20 bg-gray-50" />,
})
const TestimonialsSlider = dynamic(
  () => import("@/components/testimonials-slider").then((mod) => ({ default: mod.TestimonialsSlider })),
  {
    loading: () => <div className="py-20" />,
  },
)
const ServicesSlider = dynamic(
  () => import("@/components/services-slider").then((mod) => ({ default: mod.ServicesSlider })),
  {
    loading: () => <div className="py-20 bg-gray-50" />,
  },
)
const TechnologySlider = dynamic(
  () => import("@/components/technology-slider").then((mod) => ({ default: mod.TechnologySlider })),
  {
    loading: () => <div className="py-20" />,
  },
)

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const [counters, setCounters] = useState({
    experience: 0,
    appraisals: 0,
    clients: 0,
  })

  useEffect(() => {
    const animateCounters = () => {
      const duration = 1500 // Reduced from 2000
      const steps = 40 // Reduced from 60 for better performance
      const stepDuration = duration / steps

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          experience: Math.floor(15 * progress),
          appraisals: Math.floor(2500 * progress),
          clients: Math.floor(500 * progress),
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)

      return interval
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters()
          observer.disconnect()
        }
      },
      { threshold: 0.3, rootMargin: "0px" }, // Optimized threshold
    )

    const statsSection = document.getElementById("stats")
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"
        />

        {/* Optimized Geometric Shapes - reduced animation complexity */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute -top-20 -left-20 w-40 h-40 border border-blue-400/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 35,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-1/4 right-10 w-32 h-32 border-2 border-blue-300/30 rotate-45"
          />
        </div>

        {/* Simplified Floating Icons - reduced to 2 icons with simpler animations */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 text-blue-300/30 hidden md:block"
        >
          <Building size={50} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-10 text-blue-300/30 hidden md:block"
        >
          <Calculator size={45} />
        </motion.div>

        {/* Reduced Particle Effect - only 5 particles for performance */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
              className="absolute w-1 h-1 bg-blue-300/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${80 + Math.random() * 20}%`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            {/* Main Title with Stagger Effect */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {"Dictaminemos".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative"
            >
              <p className="text-lg sm:text-xl md:text-2xl mb-4 text-blue-200">Avalúos, Dictámenes y Topografía</p>
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 1, delay: 1.5 }}
                className="h-0.5 bg-blue-400 mx-auto mb-6"
                style={{ maxWidth: "300px" }}
              />
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Especialistas en Derecho, Arquitectura y Tecnología Catastral con más de 15 años de experiencia brindando
              soluciones integrales
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg shadow-lg w-full sm:w-auto"
                  asChild
                >
                  <Link href="/servicios">
                    Conoce Nuestros Servicios
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="ml-2"
                    >
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg bg-transparent shadow-lg backdrop-blur-sm w-full sm:w-auto"
                  asChild
                >
                  <Link href="/blog">Leer Blog</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Outside main content container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-32 md:bottom-40 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-blue-200"
          >
            <span className="text-sm mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-blue-200 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-blue-200 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{counters.experience}+</div>
              <p className="text-lg sm:text-xl text-gray-700">Años de Experiencia</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{counters.appraisals.toLocaleString()}+</div>
              <p className="text-lg sm:text-xl text-gray-700">Avalúos Realizados</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{counters.clients}+</div>
              <p className="text-lg sm:text-xl text-gray-700">Clientes Satisfechos</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">¿Por Qué Elegirnos?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Somos líderes en el sector con un enfoque integral que combina experiencia, tecnología y compromiso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Experiencia Comprobada",
                description: "Más de 15 años en el mercado respaldando nuestros servicios",
              },
              {
                icon: Clock,
                title: "Entrega Oportuna",
                description: "Cumplimos con los tiempos acordados sin comprometer la calidad",
              },
              {
                icon: Star,
                title: "Calidad Certificada",
                description: "Profesionales certificados bajo normas internacionales",
              },
              {
                icon: Users,
                title: "Equipo Multidisciplinario",
                description: "Arquitectos, ingenieros, abogados y topógrafos especializados",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Slider */}
      <ServicesSlider />

      {/* Technology Slider */}
      <TechnologySlider />

      {/* Testimonials Slider */}
      <TestimonialsSlider />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">¿Necesitas un Avalúo o Dictamen?</h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-blue-100 px-4">
              Contáctanos hoy mismo y obtén una cotización personalizada para tu proyecto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg w-full sm:w-auto" asChild>
                <Link href="/contacto">Solicitar Cotización</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg bg-transparent w-full sm:w-auto"
                asChild
              >
                <Link href="/blog">Leer Nuestro Blog</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
