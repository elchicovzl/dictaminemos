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
          experience: Math.floor(20 * progress),
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/medellin.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="block text-blue-400 mb-2">Dictaminemos</span>
              <span className="block text-white">Expertos en Avalúos y Topografía</span>
            </h1>

            <div className="h-1 w-24 bg-blue-500 mx-auto mb-8 rounded-full" />

            <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed font-light">
              Más de 20 años brindando certeza y precisión. Especialistas en avalúos certificados RAA,
              dictámenes periciales judiciales y topografía de alta tecnología en Medellín y Antioquia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href="/servicios" className="flex items-center gap-2">
                  Nuestros Servicios
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg rounded-full backdrop-blur-sm w-full sm:w-auto transition-all duration-300"
                asChild
              >
                <Link href="/contacto">
                  Solicitar Cotización
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Descubre Más</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-5" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Nuestra Diferencia</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">¿Por Qué Elegirnos?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Somos líderes en el sector con un enfoque integral que combina experiencia, tecnología y compromiso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Experiencia Comprobada",
                description: "Más de 20 años en el mercado respaldando nuestros servicios con resultados exitosos.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Clock,
                title: "Entrega Oportuna",
                description: "Cumplimos estrictamente con los tiempos acordados sin comprometer la calidad del dictamen.",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Star,
                title: "Calidad Certificada",
                description: "Profesionales certificados bajo normas internacionales y registro RAA vigente.",
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                icon: Users,
                title: "Equipo Multidisciplinario",
                description: "Arquitectos, ingenieros, abogados y topógrafos especializados trabajando en sinergia.",
                color: "bg-purple-100 text-purple-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="h-full p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
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
