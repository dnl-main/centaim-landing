import { MetadataRoute } from 'next'
// Corrected the import name to match your file
import { blogPosts } from './(features)/home/blog/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://centaim.com'

  // Convert the blogPosts object into an array of sitemap URLs
  const dynamicBlogPosts = Object.keys(blogPosts).map((id) => ({
    url: `${baseUrl}/home/blog/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0, 
    },
    {
      url: `${baseUrl}/home`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/home/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...dynamicBlogPosts,
  ]
}