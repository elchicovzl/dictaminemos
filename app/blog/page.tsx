"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Shield, FileCheck, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: "certificacion-avaluadores-2025",
    title: "¡Mucho Cuidado! Solo personas certificadas pueden hacer el avalúo de su casa",
    excerpt: "Desde el 2013, es obligatorio que los avaluadores sean certificados. Te explicamos por qué es crucial verificar la certificación antes de contratar.",
    date: "3 de enero de 2025",
    author: "La Lonja",
    category: "Regulación",
    readTime: "5 min de lectura",
    image: "/placeholder.svg?height=400&width=600",
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, transparent 45%, white 45%, white 55%, transparent 55%)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog Dictaminemos</h1>
            <div className="h-1 w-48 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-6" />
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-indigo-100">
              Noticias, consejos y artículos sobre avalúos, dictámenes y regulación del sector
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href={`/blog/${post.id}`}>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 mb-8 cursor-pointer group">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="md:col-span-1 h-64 md:h-auto bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <Shield className="h-24 w-24 text-white opacity-50" />
                      </div>
                      <div className="md:col-span-2 p-8">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                            {post.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                          <div className="flex items-center space-x-2 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                            <span>Leer artículo</span>
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center space-x-2 text-gray-500">
              <FileCheck className="h-5 w-5" />
              <span className="text-lg">Más artículos próximamente...</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">¿Tienes dudas sobre avalúos?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contáctanos y te ayudaremos a resolver todas tus preguntas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/contacto">Contactar Ahora</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 bg-transparent font-semibold" asChild>
                  <Link href="/servicios">Ver Servicios</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
