import { getAllPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = getAllPosts();
    
    // We explicitly type 'post' here to match the return of getAllPosts
    const searchIndex = posts.map((post: any) => ({
      title: post.frontmatter.title,
      // The slug in the manifest is already cleaned by our script
      slug: post.slug, 
      topic: post.frontmatter.topic,
    }));
    
    return NextResponse.json(searchIndex);
  } catch (error) {
    return NextResponse.json({ error: "Search index unavailable" }, { status: 500 });
  }
}