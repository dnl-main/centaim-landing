import './article.css';

interface ArticleProps {
  title: string;
  date: string;
  topic?: string;
  author?: string; // New Prop
  content: React.ReactNode;
}

export default function Article({ title, date, topic, author, content }: ArticleProps) {
  return (
    <article className="article-main-wrapper">
      <header className="article-header-section">
        <nav className="article-breadcrumb">
          <span className="topic-badge-pill">{topic || "General"}</span>
          <span className="breadcrumb-separator">/</span>
          
          <div className="article-meta-info">
            <time className="article-date">{date}</time>
            {author && (
              <>
                <span className="meta-dot">•</span>
                <span className="article-author">By {author}</span>
              </>
            )}
          </div>
        </nav>
        <h1 className="article-display-title">{title}</h1>
      </header>

      {/* The mdx-stack handles spacing for all children elements */}
      <div className="article-body-content mdx-stack">
        {content}
      </div>
    </article>
  );
}