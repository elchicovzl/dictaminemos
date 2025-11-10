# 🔧 Configuración Completa de Google Search Console

## 📊 Estado Actual

Según tu captura, tienes:
- ✅ **dictaminemos.com** (Propiedad de dominio)

---

## 🎯 Configuración Recomendada (3 Propiedades)

Para tener control total y solucionar los problemas de indexación, necesitas tener **3 propiedades**:

### 1. dictaminemos.com (Propiedad de Dominio) ✅
**Estado:** Ya la tienes
**Cobertura:** Todas las variantes (http, https, www, non-www, subdominios)
**Ventaja:** Vista consolidada de todo el dominio
**Desventaja:** Menos granular, verificación más compleja (DNS)

### 2. https://dictaminemos.com (Prefijo de URL) 🆕
**Estado:** Necesitas agregarla
**Cobertura:** Solo esta URL exacta (sin www)
**Ventaja:** Datos específicos, fácil verificación
**Por qué:** Es tu URL canónica principal después del fix de vercel.json

### 3. https://www.dictaminemos.com (Prefijo de URL) 🆕
**Estado:** Necesitas agregarla
**Cobertura:** Solo esta URL exacta (con www)
**Ventaja:** Ver si hay tráfico duplicado
**Por qué:** Para monitorear redirecciones y asegurar que todo va a non-www

---

## 📝 Pasos para Agregar Propiedades con Prefijo de URL

### Paso 1: Agregar https://dictaminemos.com

#### 1.1 En Google Search Console

1. Click en el selector de propiedades (arriba a la izquierda)
2. Click en **"Añadir propiedad"** (el botón + que se ve en tu captura)
3. **IMPORTANTE:** Seleccionar **"Prefijo de URL"** (derecha)

   ```
   ┌─────────────────────────────────────┐
   │  Tipo de propiedad                  │
   ├─────────────────────────────────────┤
   │  ○ Dominio                          │
   │    Todos los protocolos y          │
   │    subdominios                      │
   │                                     │
   │  ● Prefijo de URL          ← ESTE  │
   │    Solo esta URL exacta            │
   └─────────────────────────────────────┘
   ```

4. En el campo, ingresar exactamente:
   ```
   https://dictaminemos.com
   ```
   ⚠️ **SIN barra al final**
   ⚠️ **CON https://**
   ⚠️ **SIN www**

5. Click "Continuar"

#### 1.2 Elegir Método de Verificación

Google mostrará varios métodos. **Recomendado: Etiqueta HTML**

1. Seleccionar **"Etiqueta HTML"**
2. Google te dará un código como:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ456DEF789..." />
   ```
3. **Copiar solo la parte del content:**
   ```
   ABC123XYZ456DEF789...
   ```

#### 1.3 Agregar el Código a Tu Sitio

1. Abrir el archivo `app/layout.tsx`
2. Buscar la línea 111 que dice:
   ```typescript
   verification: {
     google: 'REEMPLAZAR_CON_CODIGO_DE_GOOGLE',
   },
   ```
3. Reemplazar con el código que copiaste:
   ```typescript
   verification: {
     google: 'ABC123XYZ456DEF789...',
   },
   ```
4. Guardar el archivo

#### 1.4 Deploy y Verificar

1. **Hacer commit y push:**
   ```bash
   git add app/layout.tsx
   git commit -m "add: Google Search Console verification code"
   git push
   ```

2. **Esperar que Vercel haga el deploy** (1-2 minutos)

3. **Verificar que el código esté en el sitio:**
   - Abrir https://dictaminemos.com en navegador
   - Click derecho → "Ver código fuente" o "Inspeccionar"
   - Buscar (Ctrl+F): `google-site-verification`
   - Debe aparecer tu código en el `<head>`

4. **Volver a Google Search Console**
   - Click en **"Verificar"**
   - ✅ Debe decir "Propiedad verificada"

---

### Paso 2: Agregar https://www.dictaminemos.com

Repetir **exactamente** el mismo proceso que en Paso 1, pero:

1. URL a ingresar:
   ```
   https://www.dictaminemos.com
   ```
   ⚠️ **CON www esta vez**

2. Google puede usar el mismo código de verificación, o darte uno nuevo
3. Si da uno nuevo, puedes agregar múltiples códigos separados por coma:
   ```typescript
   verification: {
     google: ['CODIGO1', 'CODIGO2'],
   },
   ```

---

## ✅ Verificar que Todo Funciona

### Después de Agregar las 3 Propiedades

Deberías ver en el selector de propiedades:

```
┌─────────────────────────────────────────────┐
│ 📊 dictaminemos.com                         │
│    Propiedad de dominio                     │
├─────────────────────────────────────────────┤
│ 🔗 https://dictaminemos.com                 │
│    Prefijo de URL                           │
├─────────────────────────────────────────────┤
│ 🔗 https://www.dictaminemos.com             │
│    Prefijo de URL                           │
└─────────────────────────────────────────────┘
```

---

## 🔍 Qué Hacer Después de Verificar

### 1. Configurar Dominio Preferido (Importante)

1. Ir a **https://dictaminemos.com** (la propiedad sin www)
2. Menú lateral → **"Configuración"** (⚙️ icono de engranaje)
3. En la sección de configuración, puede haber opción de "Dominio preferido"
4. Seleccionar: **"Mostrar URLs sin www"**

**Nota:** En las nuevas versiones de Search Console, esto puede no ser necesario si ya tienes las redirecciones correctas con vercel.json.

---

### 2. Enviar Sitemap en TODAS las Propiedades

Para **cada una de las 3 propiedades**, hacer:

1. Seleccionar la propiedad
2. Ir a **"Sitemaps"** (menú lateral)
3. En "Agregar un sitemap nuevo", ingresar:
   ```
   sitemap.xml
   ```
4. Click "Enviar"
5. Esperar confirmación (24-48 horas)

---

### 3. Solicitar Indexación de Páginas Principales

**Importante:** Hacer esto en la propiedad **https://dictaminemos.com** (sin www)

Para cada URL:

1. En la barra superior, pegar la URL completa:
   ```
   https://dictaminemos.com/
   https://dictaminemos.com/servicios
   https://dictaminemos.com/contacto
   https://dictaminemos.com/quienes-somos
   https://dictaminemos.com/portafolio
   https://dictaminemos.com/blog
   ```

2. Presionar Enter
3. Esperar análisis (30-60 seg)
4. Si dice "La URL no está en Google", click **"Solicitar indexación"**
5. Esperar confirmación (1-2 min)

**Límite:** Solo puedes solicitar ~10-12 indexaciones por día.

---

## 🕐 Línea de Tiempo Esperada

| Acción | Cuándo | Duración |
|--------|--------|----------|
| Deploy vercel.json | HOY | 5 min |
| Agregar propiedades Search Console | HOY | 15 min |
| Verificar propiedades | HOY | 5 min |
| Enviar sitemaps | HOY | 5 min |
| Google procesa sitemaps | 24-48h | - |
| Solicitar indexación | DÍA 2 | 20 min |
| Primera página indexada | DÍA 3-5 | - |
| Todas las páginas indexadas | SEMANA 2-3 | - |
| Tráfico orgánico inicial | SEMANA 3-4 | - |

---

## 📊 Cómo Monitorear el Progreso

### Revisión Diaria (Primeros 7 días)

Ir a **https://dictaminemos.com** (propiedad sin www):

1. **Cobertura / Páginas:**
   - Ver cuántas están indexadas
   - Revisar errores nuevos

2. **Inspección de URL:**
   - Verificar estado de páginas solicitadas
   - Ver si ya fueron rastreadas

---

### Revisión Semanal (Después de primera semana)

1. **Rendimiento:**
   - Impresiones (cuántas veces apareció en búsquedas)
   - Clics (cuántas veces hicieron click)
   - CTR (tasa de clicks)
   - Posición promedio

2. **Cobertura:**
   - Total de páginas indexadas (meta: 7)
   - Errores (meta: 0)
   - Advertencias (revisar y solucionar)

---

## ⚠️ Problemas Comunes y Soluciones

### "No se pudo verificar la propiedad"

**Causa:** El código no está en el sitio o el deploy no se completó

**Solución:**
1. Verificar que hiciste push del código
2. Verificar que Vercel completó el deploy
3. Abrir https://dictaminemos.com/
4. Ver código fuente (Ctrl+U)
5. Buscar `google-site-verification`
6. Si no aparece, revisar el layout.tsx y volver a hacer deploy

---

### "La URL ya está verificada en otra propiedad"

**Esto es normal** si tienes la propiedad de dominio.

**Solución:**
- Continuar igual
- Puedes tener ambas (dominio + prefijo URL)
- Es recomendado tener ambas para más datos

---

### "Sitemap no se pudo leer"

**Causa:** Error en formato o URL incorrecta

**Solución:**
1. Verificar que sitemap.xml sea accesible en:
   ```
   https://dictaminemos.com/sitemap.xml
   ```
2. Abrir en navegador, debe mostrar XML válido
3. Si hay error, revisar archivo app/sitemap.ts
4. Volver a enviar en Search Console

---

### "Error de redirección" persiste

**Causa:** vercel.json aún no está deployado o mal configurado

**Solución:**
1. Verificar que vercel.json esté en raíz del proyecto
2. Verificar que hiciste push y deploy
3. Probar manualmente:
   ```bash
   curl -I https://www.dictaminemos.com/
   ```
4. Debe mostrar:
   ```
   HTTP/2 301
   Location: https://dictaminemos.com/
   ```
5. Si no, revisar configuración de Vercel

---

## 📋 Checklist Completo

### Configuración Inicial
- [ ] Deploy de vercel.json
- [ ] Verificar que www → non-www funcione
- [ ] Agregar propiedad https://dictaminemos.com
- [ ] Agregar propiedad https://www.dictaminemos.com
- [ ] Actualizar código de verificación en layout.tsx
- [ ] Deploy del código de verificación
- [ ] Verificar ambas propiedades en Search Console
- [ ] Enviar sitemap.xml en las 3 propiedades

### Indexación
- [ ] Solicitar indexación de homepage
- [ ] Solicitar indexación de /servicios
- [ ] Solicitar indexación de /contacto
- [ ] Solicitar indexación de /quienes-somos
- [ ] Solicitar indexación de /portafolio
- [ ] Solicitar indexación de /blog
- [ ] Solicitar indexación de blog post

### Monitoreo (Semana 1)
- [ ] Día 1: Revisar que sitemaps sean procesados
- [ ] Día 3: Verificar si alguna página fue indexada
- [ ] Día 5: Revisar errores nuevos
- [ ] Día 7: Documentar progreso (cuántas indexadas)

### Monitoreo (Semana 2)
- [ ] Día 10: Verificar 5+ páginas indexadas
- [ ] Día 14: Meta - 7 páginas indexadas ✅

---

## 🎯 Métricas de Éxito

### Semana 1
- ✅ 3 propiedades verificadas en Search Console
- ✅ Sitemaps enviados y procesados
- ✅ 0 errores de redirección
- ✅ 2-3 páginas comenzando a indexarse

### Semana 2
- ✅ 5-6 páginas indexadas
- ✅ Primeras impresiones en Google
- ✅ 0 errores críticos

### Semana 3-4
- ✅ 7/7 páginas indexadas 🎉
- ✅ 50-200 impresiones/día
- ✅ Primeros clics orgánicos
- ✅ Keywords comenzando a rankear

---

## 📞 Recursos de Ayuda

### Si Tienes Problemas
1. **Documentación oficial:** https://support.google.com/webmasters
2. **Comunidad:** https://support.google.com/webmasters/community
3. **Search Central:** https://developers.google.com/search

### Herramientas Útiles
- **Redirect Checker:** https://httpstatus.io/
- **Canonical Checker:** https://www.internetmarketingninjas.com/tools/google-sitemap/
- **Rich Results Test:** https://search.google.com/test/rich-results

---

## 💡 Tips Finales

1. **Ten paciencia:** La indexación puede tomar 1-2 semanas
2. **No solicites múltiples veces:** Una vez por URL es suficiente
3. **Monitorea semanalmente:** Revisa Search Console cada lunes
4. **Documenta todo:** Anota fechas y cambios
5. **Celebra pequeños logros:** Primera página indexada, primeros clics, etc.

---

**¡Éxito con la configuración! 🚀**

Para más información, consulta:
- [FIXING_INDEXING_ISSUES.md](./FIXING_INDEXING_ISSUES.md) - Solución a problemas específicos
- [GOOGLE_INDEXING_GUIDE.md](./GOOGLE_INDEXING_GUIDE.md) - Guía general de indexación
- [INDEXING_CHECKLIST.md](./INDEXING_CHECKLIST.md) - Checklist rápido
