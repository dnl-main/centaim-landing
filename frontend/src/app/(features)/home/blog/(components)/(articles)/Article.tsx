export default function Article({ post }: { post: any }) {
  return (
    <article className="articleBlog">
      <p>{post.title}</p>
      <p className="date">{post.date}</p>
      <div className="content">
        {post.content}
      </div>
    </article>
  );
}