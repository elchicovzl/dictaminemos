# Guía de Deployment - Dictaminemos

## 🚀 Build y Deployment

### Preparar para Producción

```bash
# 1. Instalar dependencias
pnpm install

# 2. Build de producción
pnpm run build

# 3. El sitio estático estará en la carpeta 'out/'
```

## 🌐 Opciones de Hosting

### Opción 1: Vercel (Recomendado - Gratis)

**Más fácil y rápido:**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Para producción
vercel --prod
```

**O desde el dashboard:**
1. Ir a [vercel.com](https://vercel.com)
2. Importar repositorio
3. Configurar:
   - Framework Preset: Next.js
   - Build Command: `pnpm run build`
   - Output Directory: `out`
4. Deploy automático

**Ventajas:**
- ✅ SSL gratis
- ✅ CDN global
- ✅ Deploy automático desde Git
- ✅ Preview deployments
- ✅ Analytics integrado

---

### Opción 2: Netlify (Gratis)

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=out
```

**O desde el dashboard:**
1. Ir a [netlify.com](https://netlify.com)
2. Nuevo sitio desde Git
3. Configurar:
   - Build command: `pnpm run build`
   - Publish directory: `out`
4. Deploy

**Ventajas:**
- ✅ SSL gratis
- ✅ CDN global
- ✅ Forms integrados
- ✅ Edge functions

---

### Opción 3: Cloudflare Pages (Gratis)

1. Ir a [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conectar repositorio Git
3. Configurar:
   - Build command: `pnpm run build`
   - Build output directory: `out`
4. Deploy

**Ventajas:**
- ✅ CDN ultra-rápido de Cloudflare
- ✅ Sin límites de bandwidth
- ✅ SSL gratis
- ✅ Workers para backend

---

### Opción 4: GitHub Pages (Gratis)

```bash
# 1. Build
pnpm run build

# 2. Agregar archivo .nojekyll en out/
touch out/.nojekyll

# 3. Deploy a gh-pages branch
npx gh-pages -d out
```

**Configurar en GitHub:**
1. Repositorio → Settings → Pages
2. Source: Deploy from branch
3. Branch: gh-pages / root
4. Save

**Acceder en:** `https://username.github.io/repo-name`

---

### Opción 5: AWS S3 + CloudFront

```bash
# 1. Crear bucket S3
aws s3 mb s3://dictaminemos-website

# 2. Configurar como website
aws s3 website s3://dictaminemos-website --index-document index.html

# 3. Sync archivos
aws s3 sync out/ s3://dictaminemos-website --delete

# 4. Configurar CloudFront (CDN)
# Seguir wizard en AWS Console
```

**Costo:** ~$1-5/mes dependiendo del tráfico

---

### Opción 6: Hosting Tradicional (cPanel, etc.)

```bash
# 1. Build
pnpm run build

# 2. Comprimir carpeta 'out'
cd out && tar -czf ../website.tar.gz .

# 3. Subir por FTP/SFTP a public_html o www
# 4. Descomprimir en el servidor
```

---

## 📝 Configuración Post-Deployment

### 1. Variables de Ambiente (si las usas)

Crear archivo `.env.local`:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
NEXT_PUBLIC_CONTACT_EMAIL=info@dictaminemos.com
```

**IMPORTANTE:** Nunca commitear `.env.local` al repositorio.

### 2. Configurar Dominio Personalizado

**En Vercel/Netlify/Cloudflare:**
1. Agregar dominio custom en dashboard
2. Configurar DNS:
   ```
   Type: CNAME
   Name: @
   Value: [proveedor].app
   ```

**DNS para dictaminemos.com:**
```
A     @     [IP del hosting]
CNAME www   [dominio del hosting]
```

### 3. SSL Certificate

Todos los hostings mencionados proveen SSL gratis automáticamente con Let's Encrypt.

---

## 🔧 CI/CD Automático

### GitHub Actions (Opcional)

Crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## ✅ Checklist Pre-Deployment

- [ ] Actualizar número de WhatsApp en `whatsapp-button.tsx`
- [ ] Actualizar datos de contacto en `footer.tsx`
- [ ] Verificar links de redes sociales
- [ ] Optimizar imágenes (convertir a WebP)
- [ ] Probar build localmente: `pnpm run build && npx serve out`
- [ ] Verificar responsive en mobile
- [ ] Probar todos los links
- [ ] Configurar Google Analytics (opcional)
- [ ] Configurar Google Search Console
- [ ] Crear sitemap.xml
- [ ] Crear robots.txt

---

## 📊 Post-Deployment

### 1. Verificar Performance

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --collect.url=https://tudominio.com
```

### 2. Monitoreo

**Opciones gratuitas:**
- Google Analytics
- Vercel Analytics
- Cloudflare Web Analytics
- Microsoft Clarity (heatmaps)

### 3. SEO

```bash
# Sitemap
https://tudominio.com/sitemap.xml

# Robots.txt
https://tudominio.com/robots.txt

# Enviar a Google Search Console
```

---

## 🆘 Troubleshooting

### Build falla

```bash
# Limpiar cache
rm -rf .next out node_modules
pnpm install
pnpm run build
```

### Imágenes no cargan

Verificar que las rutas sean relativas desde `/public`:
```tsx
<Image src="/images/logo.jpg" /> // ✅ Correcto
<Image src="../public/images/logo.jpg" /> // ❌ Incorrecto
```

### 404 en rutas

Para GitHub Pages, agregar `basePath` en `next.config.mjs`:
```javascript
basePath: '/repo-name'
```

---

## 📞 Soporte

Para problemas técnicos:
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Netlify Support: https://www.netlify.com/support/

---

**Última actualización:** 2024
**Versión Next.js:** 14.2.16
