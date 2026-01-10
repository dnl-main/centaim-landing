import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://centaim.com'
  
  // Get all posts from the MDX content folder
  const posts = getAllPosts()

  // Map them to the correct URL structure
  const dynamicBlogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(), // Ideally, use post.frontmatter.date if it's a valid Date object
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
      url: `${baseUrl}/blog`, 
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...dynamicBlogPosts,
  ]
}