"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/logo.svg"
              alt="Dictaminemos"
              width={250}
              height={75}
              className="brightness-0 invert"
              priority
            />
          </div>

          {/* 404 Text */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-white/20 leading-none">
              404
            </h1>
            <div className="relative -mt-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Página No Encontrada
              </h2>
              <div className="h-1 w-32 bg-blue-400 mx-auto mb-6" />
            </div>
          </div>

          {/* Message */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-6 text-lg"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Ir al Inicio
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg bg-transparent"
            >
              <Link href="/servicios">
                <Search className="mr-2 h-5 w-5" />
                Ver Servicios
              </Link>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Volver Atrás
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-blue-200 mb-4">Enlaces útiles:</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/"
                className="text-white hover:text-blue-300 transition-colors underline"
              >
                Inicio
              </Link>
              <Link
                href="/quienes-somos"
                className="text-white hover:text-blue-300 transition-colors underline"
              >
                Quiénes Somos
              </Link>
              <Link
                href="/servicios"
                className="text-white hover:text-blue-300 transition-colors underline"
              >
                Servicios
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-blue-300 transition-colors underline"
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                className="text-white hover:text-blue-300 transition-colors underline"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-blue-400/30 rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500/20 rounded-lg rotate-45 animate-pulse" />
      </div>
    </div>
  )
}
