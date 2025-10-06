# 📧 Configuración del Formulario de Contacto

## ✅ Características Implementadas

### 🔒 Seguridad y Validación
- ✅ **Validación con Zod** - Cliente y servidor
- ✅ **React Hook Form** - Manejo eficiente del formulario
- ✅ **Honeypot Field** - Campo oculto para detectar bots
- ✅ **Rate Limiting** - Cliente (localStorage) y servidor (memoria)
- ✅ **Tiempo mínimo** - Requiere 3+ segundos para completar
- ✅ **Validación de email** - Bloquea dominios temporales
- ✅ **Validación de teléfono** - Formato colombiano
- ✅ **Anti-spam en mensaje** - Detecta palabras prohibidas

### 🎨 Experiencia de Usuario
- ✅ **Feedback visual** - Toasts con Sonner
- ✅ **Estados de carga** - Spinner y disabled
- ✅ **Mensajes de error** - En tiempo real
- ✅ **Limpieza automática** - Reset después de envío exitoso

## 📦 Instalación de Dependencias

### Paso 1: Instalar Resend

```bash
npm install resend
```

O si usas pnpm:

```bash
pnpm add resend
```

### Paso 2: Verificar dependencias existentes

Ya instaladas ✓:
- `react-hook-form@^7.54.1`
- `zod@^3.24.1`
- `@hookform/resolvers@^3.9.1`
- `sonner@^1.7.1`

## 🔑 Configuración de Resend

### 1. Crear cuenta en Resend

1. Ve a [resend.com](https://resend.com)
2. Regístrate con tu email
3. Ve a **API Keys** en el dashboard
4. Crea un nuevo API Key
5. Copia el key (empieza con `re_`)

### 2. Configurar variables de entorno

Edita el archivo `.env.local`:

```env
# Reemplaza con tu API key real de Resend
RESEND_API_KEY=re_tu_api_key_aqui

# Email donde recibirás los mensajes
EMAIL_TO=dictaminemos@gmail.com

# Email remitente (usa onboarding@resend.dev para testing)
EMAIL_FROM=onboarding@resend.dev
```

### 3. (Opcional) Configurar dominio personalizado

Para usar `contacto@dictaminemos.com` como remitente:

1. En Resend, ve a **Domains**
2. Agrega tu dominio `dictaminemos.com`
3. Configura los registros DNS que te indiquen
4. Una vez verificado, actualiza `.env.local`:

```env
EMAIL_FROM=contacto@dictaminemos.com
```

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)

1. Conecta tu repositorio en [vercel.com](https://vercel.com)
2. Agrega las variables de entorno en **Settings → Environment Variables**:
   - `RESEND_API_KEY`
   - `EMAIL_TO`
   - `EMAIL_FROM`
3. Despliega

### Opción 2: Netlify

1. Conecta tu repositorio en [netlify.com](https://netlify.com)
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
3. Agrega variables de entorno en **Site settings → Environment variables**
4. Despliega

**Nota**: Netlify requiere Netlify Functions para la API. Necesitarás adaptar `/app/api/contact/route.ts` a una Netlify Function.

### Opción 3: Otro hosting

Si tu hosting no soporta Next.js API Routes:

**Alternativa A**: Usar un servicio externo como [FormSubmit](https://formsubmit.co/) o [Formspree](https://formspree.io/)

**Alternativa B**: Implementar un backend separado (Node.js, PHP, etc.)

## 🧪 Pruebas

### Desarrollo Local

1. Inicia el servidor:
```bash
npm run dev
```

2. Ve a http://localhost:3000/contacto

3. Prueba el formulario:
   - ✅ Envío normal
   - ✅ Validaciones de error
   - ✅ Rate limiting (espera 60s entre envíos)
   - ✅ Honeypot (bots llenarán el campo oculto)

### Verificar emails

- **Con Resend**: Ve al dashboard → Logs
- **Localmente**: Revisa los logs de la consola del servidor

## 🔐 Protecciones Anti-Spam Implementadas

### 1. Honeypot Field ✓
- Campo oculto `website`
- Invisible para humanos
- Bots lo llenan automáticamente
- Si está lleno → Rechazo

### 2. Rate Limiting ✓
- **Cliente**: 1 envío cada 60 segundos (localStorage)
- **Servidor**: 1 envío cada 60 segundos por IP

### 3. Tiempo Mínimo ✓
- Requiere mínimo 3 segundos para completar
- Los bots envían instantáneamente

### 4. Validación de Email ✓
- Formato válido
- Bloquea dominios temporales:
  - tempmail.com
  - guerrillamail.com
  - 10minutemail.com
  - throwaway.email
  - mailinator.com

### 5. Validación de Contenido ✓
- Detecta palabras spam en el mensaje
- Límite de caracteres: 10-1000

### 6. (Futuro) reCAPTCHA v3
Para protección adicional, puedes agregar Google reCAPTCHA v3 (invisible)

## 📊 Monitoreo

### Logs del Servidor

Los envíos se registran en la consola:

```
=== NUEVO CONTACTO ===
Nombre: Juan Pérez
Email: juan@example.com
Teléfono: 300 123 4567
Servicio: avaluo-comercial
Mensaje: Necesito un avalúo...
====================
```

### Resend Dashboard

- Ve a https://resend.com/logs
- Verás todos los emails enviados
- Status: Delivered / Bounced / Failed

## 🐛 Solución de Problemas

### Error: "Email service not configured"

**Causa**: `RESEND_API_KEY` no está configurada

**Solución**:
1. Verifica que `.env.local` existe
2. Reinicia el servidor de desarrollo
3. Verifica que el API key es correcto

### Error: "Error al enviar el mensaje"

**Causas posibles**:
1. API key inválida
2. Límite de emails excedido (Resend Free: 3k/mes, 100/día)
3. Email remitente no verificado

**Solución**:
1. Verifica el API key en Resend
2. Revisa los logs en Resend Dashboard
3. Usa `onboarding@resend.dev` para testing

### Error: "Demasiadas solicitudes"

**Causa**: Rate limiting activo

**Solución**: Espera 60 segundos entre envíos

### Formulario no valida

**Causa**: JavaScript deshabilitado o error en el cliente

**Solución**:
1. Verifica la consola del navegador
2. Asegúrate de que todos los campos requeridos están llenos
3. El checkbox de privacidad debe estar marcado

## 📈 Mejoras Futuras

### Corto Plazo
- [ ] Google reCAPTCHA v3
- [ ] Notificaciones por WhatsApp (API oficial)
- [ ] Auto-respuesta al cliente

### Mediano Plazo
- [ ] Dashboard admin para ver mensajes
- [ ] Integración con CRM
- [ ] Analytics de conversión

### Largo Plazo
- [ ] Chat en vivo
- [ ] Cotizador automático
- [ ] Sistema de tickets

## 📝 Notas Importantes

1. **Nunca commites `.env.local`** - Ya está en `.gitignore`
2. **Usa `.env.local.example`** como template
3. **Resend Free Plan**: 3,000 emails/mes, 100/día
4. **Rate Limiting**: Ajusta en `/app/api/contact/route.ts` si necesitas
5. **Testing**: Usa `onboarding@resend.dev` como remitente

## 🆘 Soporte

Si necesitas ayuda:

1. Revisa los logs del servidor
2. Verifica Resend Dashboard → Logs
3. Comprueba las variables de entorno
4. Asegúrate de tener la última versión de Next.js

---

**Última actualización**: Octubre 2025
**Versión del formulario**: 2.0
**Framework**: Next.js 14.2.16
