import { NextRequest, NextResponse } from "next/server"
import { serverContactFormSchema } from "@/lib/validations/contact"

// En-memory rate limiting (en producción usar Redis o similar)
const submissions = new Map<string, number>()

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const lastSubmission = submissions.get(ip)

  if (lastSubmission && now - lastSubmission < 60000) {
    // 60 segundos
    return false
  }

  submissions.set(ip, now)

  // Limpiar entradas antiguas cada 10 minutos
  if (submissions.size > 1000) {
    const tenMinutesAgo = now - 600000
    for (const [key, value] of submissions.entries()) {
      if (value < tenMinutesAgo) {
        submissions.delete(key)
      }
    }
  }

  return true
}

export async function POST(request: NextRequest) {
  try {
    // Obtener IP del cliente
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"

    // Verificar rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Por favor espera un momento antes de intentar nuevamente." },
        { status: 429 }
      )
    }

    // Parsear el body
    const body = await request.json()

    // Validar con Zod (incluye validación de honeypot y timestamp)
    const validatedData = serverContactFormSchema.parse(body)

    // Verificar honeypot nuevamente
    if (validatedData.website) {
      console.warn(`Bot detected from IP: ${ip}`)
      return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 })
    }

    // Intentar enviar email con Resend
    let emailSent = false
    let errorMessage = ""

    try {
      // Verificar si Resend está configurado
      if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_your_api_key_here") {
        throw new Error("Resend API key not configured")
      }

      // Importar Resend dinámicamente con manejo de errores
      let Resend: any
      try {
        const ResendModule = await import("resend")
        Resend = ResendModule.Resend
      } catch (importError) {
        throw new Error("Resend package not installed. Run: npm install resend")
      }
      const resend = new Resend(process.env.RESEND_API_KEY)

      const { data, error } = await resend.emails.send({
        from: process.env.EMAIL_FROM || "Formulario de Contacto <noreply@dictaminemos.com>",
        to: process.env.EMAIL_TO || "contacto@dictaminemos.com",
        subject: `Nuevo contacto: ${validatedData.service || "Consulta general"}`,
        replyTo: validatedData.email,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af;">Nuevo mensaje de contacto</h2>

            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Información del Cliente</h3>
              <p><strong>Nombre:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              ${validatedData.phone ? `<p><strong>Teléfono:</strong> ${validatedData.phone}</p>` : ""}
              ${validatedData.service ? `<p><strong>Servicio de interés:</strong> ${validatedData.service}</p>` : ""}
            </div>

            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #1e40af; margin: 20px 0;">
              <h3 style="margin-top: 0;">Mensaje</h3>
              <p style="white-space: pre-wrap;">${validatedData.message}</p>
            </div>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

            <p style="color: #6b7280; font-size: 12px;">
              Este mensaje fue enviado desde el formulario de contacto de Dictaminemos<br>
              Fecha: ${new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })}
            </p>
          </div>
        `,
      })

      if (error) {
        errorMessage = error.message || "Error desconocido de Resend"
        throw new Error(errorMessage)
      }

      emailSent = true
      console.log("✅ Email sent successfully:", data)
    } catch (emailError) {
      console.error("❌ Email service error:", emailError)

      // Log del contacto para no perder la información
      console.log("\n=== NUEVO CONTACTO (Email no enviado) ===")
      console.log("Nombre:", validatedData.firstName, validatedData.lastName)
      console.log("Email:", validatedData.email)
      console.log("Teléfono:", validatedData.phone || "No proporcionado")
      console.log("Servicio:", validatedData.service || "No especificado")
      console.log("Mensaje:", validatedData.message)
      console.log("==========================================\n")

      // Si Resend no está configurado, mostrar instrucciones
      if (emailError instanceof Error && emailError.message.includes("not configured")) {
        console.warn("\n⚠️  RESEND NOT CONFIGURED")
        console.warn("Para configurar Resend:")
        console.warn("1. Instala: npm install resend")
        console.warn("2. Agrega tu API key en .env.local:")
        console.warn("   RESEND_API_KEY=re_tu_api_key")
        console.warn("3. Reinicia el servidor\n")
      }
    }

    // Retornar éxito siempre (para no bloquear al usuario)
    return NextResponse.json(
      {
        success: true,
        message: emailSent
          ? "Mensaje enviado exitosamente"
          : "Mensaje recibido. Nos pondremos en contacto pronto.",
        ...(! emailSent && process.env.NODE_ENV === "development" && { dev_note: "Email not sent - check server logs" }),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
