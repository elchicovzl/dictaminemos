import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dictaminemos.com'

  // Fechas específicas para mejor SEO
  const lastUpdate = new Date('2025-01-15') // Última actualización del sitio
  const blogPostDate = new Date('2025-01-03')

  return [
    {
      url: baseUrl,
      lastModified: lastUpdate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly',
      priority: 0.95, // Aumentado - página muy importante para conversión
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.95, // Aumentado - página de conversión clave
    },
    {
      url: `${baseUrl}/quienes-somos`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.85, // Importante para confianza y autoridad
    },
    {
      url: `${baseUrl}/portafolio`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly',
      priority: 0.80, // Prueba social importante
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: blogPostDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/certificacion-avaluadores-2025`,
      lastModified: blogPostDate,
      changeFrequency: 'monthly',
      priority: 0.70,
    },
  ]
}
