import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Article from "../(components)/(articles)/Article";
import { Metadata } from "next";

/**
 * MDX COMPONENT MAPPING
 * Maps standard Markdown tags to React elements with custom CSS classes.
 */
const mdxComponents = {
  h1: (props: any) => <h1 className="mdx-h1" {...props} />,
  h2: (props: any) => <h2 className="mdx-h2" {...props} />,
  h3: (props: any) => <h3 className="mdx-h3" {...props} />,
  p: (props: any) => <p className="mdx-p" {...props} />,
  ul: (props: any) => <ul className="mdx-list" {...props} />,
  ol: (props: any) => <ol className="mdx-list-ordered" {...props} />,
  li: (props: any) => <li className="mdx-item" {...props} />,
  strong: (props: any) => <strong className="mdx-bold" {...props} />,
  em: (props: any) => <em className="mdx-italic" {...props} />,
  a: (props: any) => (
    <a className="mdx-link" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  blockquote: (props: any) => <blockquote className="mdx-quote" {...props} />,
  code: (props: any) => <code className="mdx-code" {...props} />,
};

/**
 * 1. GENERATE STATIC PARAMS
 * Uses the fast manifest-based getAllPosts() to tell Next.js which 
 * pages to build at compile time.
 */
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * 2. DYNAMIC METADATA
 */
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const title = post.frontmatter.title;
  const description = post.frontmatter.description;

  return {
    title: `Centaim | ${title}`, 
    description: description,
    keywords: [
      "Centaim", 
      "Business Solutions", 
      "Startup Systems", 
      post.frontmatter.topic,
      ...(post.frontmatter.keywords?.split(',').map((k: string) => k.trim()) || [])
    ],
    authors: [{ name: post.frontmatter.author || "Centaim Team" }],
    openGraph: {
      title: title,
      description: description,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author || "Centaim Team"],
      url: `https://centaim.com/blog/${slug}`,
      images: [
        {
          url: post.frontmatter.image || "/og-default.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [post.frontmatter.image || "/og-default.jpg"],
    }
  };
}

/**
 * 3. PAGE COMPONENT
 */
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // JSON-LD for Rich Search Results (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    description: post.frontmatter.description,
    image: post.frontmatter.image || 'https://centaim.com/og-default.jpg',
    author: {
      '@type': 'Person',
      name: post.frontmatter.author || "Centaim Team",
    },
    publisher: {
      '@type': 'Organization',
      name: 'Centaim',
      logo: {
        '@type': 'ImageObject',
        url: 'https://centaim.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://centaim.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Article 
        title={post.frontmatter.title} 
        date={post.frontmatter.date} 
        topic={post.frontmatter.topic}
        author={post.frontmatter.author}
        content={
          <MDXRemote 
            source={post.content} 
            components={mdxComponents} 
          />
        } 
      />
    </>
  );
}