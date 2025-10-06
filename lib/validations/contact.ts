import { z } from "zod"

// Lista de dominios de email sospechosos comunes
const suspiciousDomains = [
  "tempmail.com",
  "guerrillamail.com",
  "10minutemail.com",
  "throwaway.email",
  "mailinator.com",
]

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras"),

  lastName: z
    .string()
    .min(2, "El apellido debe tener al menos 2 caracteres")
    .max(50, "El apellido no puede exceder 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El apellido solo puede contener letras"),

  email: z
    .string()
    .min(1, "El correo electrónico es requerido")
    .email("Ingresa un correo electrónico válido")
    .refine(
      (email) => {
        const domain = email.split("@")[1]?.toLowerCase()
        return !suspiciousDomains.some((suspicious) => domain?.includes(suspicious))
      },
      { message: "Por favor usa un correo electrónico válido" }
    ),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val.trim() === "") return true
        // Acepta formatos: +57 300 123 4567, 3001234567, 300 123 4567
        const phoneRegex = /^(\+?57\s?)?[3][0-9]{2}\s?[0-9]{3}\s?[0-9]{4}$/
        return phoneRegex.test(val.replace(/\s/g, ""))
      },
      { message: "Ingresa un número de teléfono colombiano válido (ej: 300 123 4567)" }
    ),

  service: z.string().optional(),

  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder 1000 caracteres")
    .refine(
      (val) => {
        // Evita mensajes que son solo enlaces o spam obvio
        const spamPatterns = /(viagra|cialis|lottery|prize|click here|buy now)/i
        return !spamPatterns.test(val)
      },
      { message: "El mensaje contiene contenido no permitido" }
    ),

  privacy: z
    .boolean()
    .refine((val) => val === true, {
      message: "Debes aceptar la política de privacidad",
    }),

  // Honeypot field - debe estar vacío
  website: z.string().max(0, "Campo inválido").optional(),

  // Timestamp para validar tiempo mínimo de llenado
  timestamp: z.number().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Schema para validación del servidor (incluye verificaciones adicionales)
export const serverContactFormSchema = contactFormSchema.extend({
  timestamp: z.number().refine(
    (ts) => {
      const now = Date.now()
      const elapsed = now - ts
      // Debe haber tardado al menos 3 segundos en llenar el formulario
      return elapsed >= 3000
    },
    { message: "Formulario enviado demasiado rápido" }
  ),
})
