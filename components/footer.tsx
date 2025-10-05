import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo.jpg"
              alt="Dictaminemos Logo"
              width={200}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Especialistas en avalúos, dictámenes y topografía con más de 15 años de experiencia en el sector.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Avalúos Inmobiliarios
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Dictámenes Técnicos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Topografía
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Peritajes
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Consultoría Catastral
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos" className="hover:text-white transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>314 703 0835</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Dictaminemos@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  Calle 51 Nro. 49-11, Oficina 605
                  <br />
                  Edificio Fabricato, Medellín
                  <br />
                  Cerca al Metro Parque Berrío
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dictaminemos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
