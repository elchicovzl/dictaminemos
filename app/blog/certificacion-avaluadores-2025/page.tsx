"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowLeft, Shield, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Blog</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Regulación
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ¡Mucho Cuidado! Solo personas certificadas pueden hacer el avalúo de su casa
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>3 de enero de 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Por La Lonja</span>
                </div>
                <span>•</span>
                <span>5 min de lectura</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              {/* Alert Box */}
              <Card className="bg-yellow-50 border-yellow-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-yellow-900 mb-2">Advertencia Importante</h3>
                      <p className="text-yellow-800">
                        Desde el 2013, es <strong>obligatorio</strong> que los avaluadores sean certificados.
                        Contratar un avaluador no certificado puede invalidar tu avalúo y comprometer tu patrimonio.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-xl text-gray-600 font-semibold">
                  A la hora de pensar en vender su casa, lo primero es preguntarse cuánto cuesta, y la respuesta
                  llegará a través de un avaluador que, tras analizar diferentes características le dará una cifra
                  que le permita comercializarla.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Más allá de la actividad inmobiliaria
                </h2>

                <p>
                  Pero hacer un avalúo no se restringe a la actividad inmobiliaria, de hecho, hay <strong>13 categorías</strong>,
                  en las que se incluyen obras de infraestructura, monumentos de conservación, maquinaria fija, obras de arte,
                  semovientes, intangibles como derechos de autor y nombres comerciales, entre otros, establecidas en el
                  <strong> Decreto 556 de 2014</strong>, que se expidió tras la <strong>Ley 1673 de 2013</strong>.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                  La importancia de la certificación
                </h2>

                <p>
                  Desde el 2013, es <strong>obligatorio</strong> que los avaluadores sean certificados y de hecho,
                  el <strong>Autorregulador Nacional de Avaluadores (ANA)</strong> es el encargado de hacerlo.
                </p>

                <Card className="bg-blue-50 border-blue-200 my-8">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2">Validez de la certificación</h4>
                        <p className="text-blue-800">
                          El documento tiene una <strong>vigencia de 30 días</strong> y el primer registro se adquiere
                          con la demostración de formación académica específica, después se renueva con el fin de mantener
                          actualizada la situación.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                  ¿Cómo verificar la certificación?
                </h2>

                <p>
                  Lo recomendable es que las personas que busquen un avaluador primero ingresen a la página web de
                  <strong> Supersociedades</strong> y validen los profesionales certificados en sus respectivas categorías.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 my-8">
                  <h4 className="font-bold text-gray-900 mb-4">Para validar la idoneidad del avaluador:</h4>
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Ingresa a la página web oficial</span>
                  </div>
                  <a
                    href="https://www.raa.org.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>https://www.raa.org.co/</span>
                  </a>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Riesgos de contratar avaluadores no certificados
                </h2>

                <Card className="bg-red-50 border-red-200 my-8">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-red-900 mb-4">Sin un avaluador certificado:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                        <span className="text-red-800">
                          <strong>No será posible acreditar su competencia</strong>, poniendo en duda el resultado final del avalúo
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                        <span className="text-red-800">
                          Será más difícil <strong>establecer responsabilidades</strong>, si las hubiera
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                        <span className="text-red-800">
                          Comprometerás tu <strong>patrimonio</strong> al no tener un respaldo técnico válido
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                        <span className="text-red-800">
                          Quienes ejerzan esta actividad sin certificación <strong>podrán ser sancionados</strong> por la SIC
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                  Beneficios de la certificación
                </h2>

                <div className="space-y-3 my-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>
                      Te otorgará la facultad de <strong>presentar quejas</strong> si es necesario
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>
                      Garantiza que el estudio realizado <strong>cumple con todos los requisitos legales</strong>
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>
                      Proporciona <strong>respaldo técnico y legal</strong> a tu inversión
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>
                      Protege tu <strong>patrimonio</strong> con información confiable
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 my-12 border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    En Dictaminemos, todos nuestros avaluadores están certificados
                  </h3>
                  <p className="text-center text-gray-700 mb-6">
                    Contamos con más de 20 años de experiencia y profesionales certificados bajo las normas vigentes.
                    Tu patrimonio está en manos expertas.
                  </p>
                  <div className="flex justify-center">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                      <Link href="/contacto">Solicitar Cotización</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Share & Navigate */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/blog" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold">
                <ArrowLeft className="h-4 w-4" />
                <span>Volver al Blog</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ¿Necesitas un avalúo certificado?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Avaluadores Certificados</h4>
                  <p className="text-sm text-gray-600">Profesionales registrados ante las autoridades competentes</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">+15 Años de Experiencia</h4>
                  <p className="text-sm text-gray-600">Trayectoria comprobada en el sector</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <ExternalLink className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Verificación Oficial</h4>
                  <p className="text-sm text-gray-600">Consulta nuestro registro en RAA</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link href="/servicios">Ver Nuestros Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
