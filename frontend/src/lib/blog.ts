import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. Define the TypeScript Interface for the Manifest
interface ManifestEntry {
  slug: string;
  title: string;
  topic: string;
  date: string;
  description: string;
}

const contentDirectory = path.join(process.cwd(), "src/content");
const manifestPath = path.join(process.cwd(), "public/blog-manifest.json");

/**
 * FAST: Reads the pre-generated JSON manifest.
 * Use this for sidebars, related posts, and the blog index.
 * It is now fully typed to avoid "implicit any" errors.
 */
export function getAllPosts() {
  try {
    const fileContents = fs.readFileSync(manifestPath, "utf8");
    const manifest: ManifestEntry[] = JSON.parse(fileContents);
    
    return manifest.map((post: ManifestEntry) => ({
      slug: post.slug,
      frontmatter: {
        title: post.title,
        topic: post.topic,
        date: post.date,
        description: post.description
      }
    }));
  } catch (e) {
    console.warn("⚠️ Blog manifest not found. Run 'npm run dev' to generate it.");
    return [];
  }
}

/**
 * SPECIFIC: Reads only the one MDX file requested.
 * Used for the actual individual blog post page.
 */
export function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { slug, frontmatter: data, content };
  } catch (e) {
    return null;
  }
}