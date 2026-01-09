import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Keep bots out of private folders
    },
    sitemap: 'https://centaim.com/sitemap.xml',
  }
}