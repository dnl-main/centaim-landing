import { blogPosts } from "../blogData";
import { notFound } from "next/navigation";
import Article from "../(components)/(articles)/Article";

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return <Article post={post} />;
}