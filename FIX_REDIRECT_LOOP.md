# 🚨 SOLUCIÓN URGENTE: Loop de Redirecciones

## 🔴 Problema Actual

Tu sitio tiene **loop de redirecciones infinito** causando:
- ❌ ERR_TOO_MANY_REDIRECTS en todos los recursos
- ❌ Sitio no carga correctamente
- ❌ Assets (CSS, JS, imágenes) no se cargan

**Causa:** El vercel.json estaba creando un conflicto con la configuración de dominio de Vercel.

---

## ✅ SOLUCIÓN INMEDIATA (5 minutos)

### Paso 1: Deploy del vercel.json Corregido

Ya corregí el archivo vercel.json. Ahora haz:

```bash
git add vercel.json
git commit -m "fix: remove redirect loop from vercel.json"
git push
```

Espera 2-3 minutos para que Vercel haga el deploy.

---

### Paso 2: Configurar Redirección en Vercel Dashboard

La forma correcta de hacer la redirección www → non-www es en el **Dashboard de Vercel**, NO en vercel.json.

#### 2.1 Ir a Vercel Dashboard

1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto "dictaminemos-website" (o como lo hayas llamado)
3. Click en **"Settings"** (arriba)

#### 2.2 Configurar Dominio

1. En el menú lateral, click en **"Domains"**
2. Debes ver algo como:

   ```
   dictaminemos.com          ← Production
   www.dictaminemos.com      ← Production
   ```

3. **Si ambos están marcados como "Production", ahí está el problema.**

#### 2.3 Configurar Redirect

**Opción A - Redireccionar www → non-www (RECOMENDADO):**

1. Encuentra `www.dictaminemos.com` en la lista
2. Click en los **3 puntos** (⋮) al lado derecho
3. Click en **"Edit"** o **"Redirect"**
4. Seleccionar: **"Redirect to dictaminemos.com"**
5. Tipo de redirect: **"Permanent (308)"** o **"301"**
6. Click **"Save"**

Después de esto, `www.dictaminemos.com` debe mostrar:
```
www.dictaminemos.com  →  Redirects to dictaminemos.com
```

**Opción B - Si prefieres www (NO recomendado pero válido):**

Hacer lo contrario:
- `dictaminemos.com` → Redirect to `www.dictaminemos.com`
- Mantener `www.dictaminemos.com` como Production

---

### Paso 3: Verificar que Funciona

**Después de 1-2 minutos**, probar:

1. **En navegador:**
   - Abrir: https://www.dictaminemos.com
   - Debe redireccionar automáticamente a: https://dictaminemos.com
   - El sitio debe cargar correctamente

2. **En terminal:**
   ```bash
   curl -I https://www.dictaminemos.com/
   ```

   Debe mostrar:
   ```
   HTTP/2 308
   location: https://dictaminemos.com/
   ```

3. **DevTools:**
   - Abrir https://dictaminemos.com
   - F12 → Console
   - NO debe haber errores ERR_TOO_MANY_REDIRECTS
   - NO debe haber errores de CORS

---

## 🔍 Si el Problema Persiste

### Revisar Configuración de DNS

1. En Vercel Dashboard → Settings → Domains
2. Verificar que AMBOS dominios estén configurados:

   ```
   dictaminemos.com
   Type: CNAME or A
   Value: cname.vercel-dns.com
   Status: Valid ✓

   www.dictaminemos.com
   Type: CNAME
   Value: cname.vercel-dns.com
   Status: Valid ✓
   ```

3. Si alguno muestra error, seguir las instrucciones de Vercel para configurar DNS

---

### Limpiar Caché

Si después de corregir aún ves el error:

1. **Limpiar caché del navegador:**
   - Chrome: Ctrl+Shift+Delete → Limpiar todo
   - O usar ventana de incógnito

2. **Limpiar caché de Vercel:**
   - Vercel Dashboard → Deployments
   - Click en el último deployment
   - Click "Redeploy"

3. **Hard refresh del navegador:**
   - Ctrl+F5 (Windows/Linux)
   - Cmd+Shift+R (Mac)

---

## 📊 Configuración Recomendada Final

### En Vercel Dashboard → Domains

```
✓ dictaminemos.com          [Production]
  └─ Git Branch: main

→ www.dictaminemos.com      [Redirects to dictaminemos.com]
  └─ Permanent Redirect (308)
```

### En vercel.json

```json
{
  "headers": [
    {
      "source": "/:path*",
      "headers": [
        {
          "key": "X-Robots-Tag",
          "value": "index, follow"
        }
      ]
    }
  ]
}
```

**NO incluir `redirects` en vercel.json** - manejar todo desde Dashboard.

---

## 🎯 Checklist de Verificación

Después de aplicar la solución:

- [ ] Deploy del vercel.json corregido completado
- [ ] En Vercel Dashboard: www → non-www configurado
- [ ] https://www.dictaminemos.com redirige a https://dictaminemos.com
- [ ] https://dictaminemos.com carga correctamente
- [ ] Sin errores ERR_TOO_MANY_REDIRECTS en Console
- [ ] CSS y JavaScript cargan correctamente
- [ ] Imágenes cargan correctamente
- [ ] Fuentes cargan correctamente

---

## 🚀 Siguiente Paso (Después de Solucionar)

Una vez que el sitio cargue correctamente:

1. **Esperar 24 horas** para que los cambios se propaguen
2. **Volver a Google Search Console**
3. **Solicitar re-indexación** de las páginas principales
4. **Monitorear errores** - deben desaparecer gradualmente

---

## 📞 Si Aún Tienes Problemas

### Opción 1: Rollback Completo

Si nada funciona, eliminar vercel.json completamente:

```bash
git rm vercel.json
git commit -m "remove vercel.json temporarily"
git push
```

Luego configurar SOLO desde Vercel Dashboard.

### Opción 2: Contactar Soporte Vercel

Si el problema persiste:

1. Ir a https://vercel.com/help
2. Describir el problema: "ERR_TOO_MANY_REDIRECTS loop with www redirect"
3. Incluir tu dominio: dictaminemos.com
4. Soporte de Vercel es muy rápido (< 24h)

---

## ⚡ Acción INMEDIATA Requerida

**AHORA MISMO (no esperes):**

1. ✅ Ya corregí vercel.json - haz git push
2. 🎯 Ve a Vercel Dashboard → Settings → Domains
3. 🔄 Configura redirect: www → non-www
4. ⏰ Espera 2-3 minutos
5. ✓ Verifica que el sitio cargue

**NO hagas ningún otro cambio hasta que esto funcione.**

---

**Tiempo estimado para solución completa: 10 minutos**

¡Hazlo ahora y avísame cuando esté funcionando! 🚨
