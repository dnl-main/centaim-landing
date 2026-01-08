import Link from "next/link";
import { blogPosts } from "./blogData";

export default function BlogIndexPage() {
  return (
    <div className="blog-index">
      <h1>Latest Stories</h1>
      <p>Select an article to start reading:</p>
      <div className="blog-list">
        {Object.entries(blogPosts).map(([id, post]) => (
          <div key={id} className="blog-item">
            <Link href={`/home/blog/${id}`}>
              <h3>{post.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}