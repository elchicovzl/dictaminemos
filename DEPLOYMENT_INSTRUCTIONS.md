# 🚀 Instrucciones de Despliegue - Formulario de Contacto

## ⚠️ IMPORTANTE: Instalar Resend

Debido a un problema con npm en tu sistema, necesitas instalar Resend manualmente:

```bash
# Opción 1: Limpiar caché de npm e intentar de nuevo
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm install resend

# Opción 2: Usar yarn
npm install -g yarn
yarn add resend

# Opción 3: Desplegar directamente en Vercel (recomendado)
# Vercel instalará automáticamente las dependencias
```

## 📋 Pasos para Desplegar en Vercel

### 1. Preparar el Repositorio

```bash
# Inicializar git si no lo has hecho
git init
git add .
git commit -m "feat: Formulario de contacto con validación y anti-spam"

# Subir a GitHub/GitLab/Bitbucket
git remote add origin <tu-repositorio-url>
git push -u origin main
```

### 2. Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en "Add New Project"
3. Importa tu repositorio
4. Configura las variables de entorno:

```
RESEND_API_KEY=re_RCYVuS7x_AuuR43cYso7oJiLQr7tsnNHG
EMAIL_TO=dictaminemos@gmail.com
EMAIL_FROM=onboarding@resend.dev
```

5. Click en "Deploy"

### 3. Verificar el Funcionamiento

1. Una vez desplegado, ve a `tu-dominio.vercel.app/contacto`
2. Prueba el formulario
3. Verifica los emails en el dashboard de Resend: https://resend.com/emails

## 🔧 Si Quieres Probar Localmente

### Opción A: Instalar Resend y Usar API Route

```bash
# 1. Instalar dependencias (si npm no funciona, usa yarn)
npm install resend
# o
yarn add resend

# 2. Verificar que .env.local existe con:
RESEND_API_KEY=re_RCYVuS7x_AuuR43cYso7oJiLQr7tsnNHG
EMAIL_TO=dictaminemos@gmail.com
EMAIL_FROM=onboarding@resend.dev

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Ir a http://localhost:3000/contacto
```

### Opción B: Usar FormSubmit (Sin Backend)

Si no puedes instalar resend, puedes usar un servicio externo temporalmente:

1. Edita `/app/contacto/page.tsx`
2. Cambia el `onSubmit` para usar FormSubmit:

```typescript
const onSubmit = async (data: ContactFormData) => {
  // ... validaciones existentes ...

  const formData = new FormData()
  formData.append('_subject', `Nuevo contacto: ${data.service || 'Consulta'}`)
  formData.append('name', `${data.firstName} ${data.lastName}`)
  formData.append('email', data.email)
  formData.append('phone', data.phone || '')
  formData.append('service', data.service || '')
  formData.append('message', data.message)

  try {
    const response = await fetch('https://formsubmit.co/dictaminemos@gmail.com', {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      toast.success('¡Mensaje enviado!')
      reset()
    }
  } catch (error) {
    toast.error('Error al enviar')
  }
}
```

## ✅ Características Implementadas

### 🔒 Seguridad
- ✅ Validación Zod (cliente + servidor)
- ✅ Honeypot anti-bot
- ✅ Rate limiting (60seg entre envíos)
- ✅ Tiempo mínimo (3+ segundos)
- ✅ Bloqueo de emails temporales
- ✅ Detección de spam en mensajes

### 🎨 UX
- ✅ React Hook Form
- ✅ Toast notifications (Sonner)
- ✅ Estados de carga
- ✅ Validación en tiempo real
- ✅ Mensajes de error claros

## 📊 Monitoreo

### Resend Dashboard
- **URL**: https://resend.com/emails
- **Ver emails enviados**: Logs completos
- **Límite Free**: 3,000 emails/mes, 100/día

### Logs del Servidor (Vercel)
1. Ve a tu proyecto en Vercel
2. Click en "Logs"
3. Verás todos los contactos recibidos

## 🐛 Solución de Problemas

### Error: "Module not found: Can't resolve 'resend'"

**Solución**:
```bash
npm install resend
# o
yarn add resend
```

### Error: "Email service not configured"

**Solución**:
1. Verifica que `.env.local` existe
2. Verifica que tiene `RESEND_API_KEY`
3. Reinicia el servidor: `npm run dev`

### Formulario no envía

**Solución**:
1. Abre DevTools → Console
2. Busca errores JavaScript
3. Verifica que todos los campos requeridos están llenos
4. Marca el checkbox de privacidad

### Emails no llegan

**Solución**:
1. Verifica Resend Dashboard → Logs
2. Revisa la carpeta de Spam
3. Verifica que `EMAIL_TO` es correcto en `.env.local`

## 📝 Notas Finales

1. **API Key de Resend**: Ya configurada en `.env.local`
2. **Next.js Config**: `output: 'export'` está comentado para permitir API routes
3. **Para export estático**: Usa FormSubmit o similar (sin API routes)
4. **Para Vercel/Netlify**: Usa la API route con Resend (recomendado)

## 🎯 Próximos Pasos Recomendados

1. [ ] Desplegar en Vercel
2. [ ] Probar formulario en producción
3. [ ] Configurar dominio personalizado en Resend (opcional)
4. [ ] Agregar Google reCAPTCHA v3 (futuro)
5. [ ] Auto-respuesta al cliente (futuro)

---

**Archivos Importantes**:
- `/app/contacto/page.tsx` - Formulario con validación
- `/app/api/contact/route.ts` - API endpoint
- `/lib/validations/contact.ts` - Schema Zod
- `/.env.local` - Variables de entorno (NO commitear)
- `/CONTACT_FORM_SETUP.md` - Documentación completa

**Estado**: ✅ Listo para desplegar en Vercel
**Última actualización**: Octubre 2025
