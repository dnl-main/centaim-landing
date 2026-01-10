"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Filter, X, Search } from "lucide-react";
import "./related.css";

// Define the structure of the post for type safety
interface RelatedPost {
  slug: string;
  frontmatter: {
    title: string;
    topic: string;
    description: string;
    date?: string;
  };
}

export default function Related({ posts }: { posts: RelatedPost[] }) {
  const pathname = usePathname();
  const [activeTopic, setActiveTopic] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [modalSearch, setModalSearch] = useState("");

  // Get the current slug from the URL. 
  // Our manifest slugs are already clean, so we just grab the last segment.
  const currentSlug = pathname.split("/").filter(Boolean).pop();
  const isPostPage = pathname.includes("/blog/") && currentSlug !== "blog";

  // 1. Extract all unique topics safely
  const allCategories = useMemo(() => {
    const topics = posts.map((p) => p.frontmatter.topic || "General");
    return Array.from(new Set(topics)).sort();
  }, [posts]);

  // 2. Recommendation & Filtering Logic
  const displayPosts = useMemo(() => {
    let list = [...posts];

    // A. If on an article page, filter out the current post and prioritize same topic
    if (isPostPage && currentSlug) {
      const currentPost = list.find((p) => p.slug === currentSlug);
      const currentTopic = currentPost?.frontmatter.topic;

      // Filter out the active post
      list = list.filter((p) => p.slug !== currentSlug);

      // Boost same-topic posts to the top of the recommendation list
      if (currentTopic) {
        list.sort((a, b) => (a.frontmatter.topic === currentTopic ? -1 : 1));
      }
    }

    // B. Apply the Sidebar/Modal Topic filter
    if (activeTopic !== "All") {
      list = list.filter((p) => p.frontmatter.topic === activeTopic);
    }

    // C. Return only the top 6 to keep the sidebar clean
    return list.slice(0, 6);
  }, [posts, isPostPage, currentSlug, activeTopic]);

  // 3. Modal Search Filter logic
  const filteredModalCategories = allCategories.filter(cat => 
    cat.toLowerCase().includes(modalSearch.toLowerCase())
  );

  // Prevent background scrolling when topic modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showModal]);

  return (
    <aside className="related-sidebar">
      {/* SIDEBAR FILTER SECTION */}
      <div className="filter-section">
        <h2 className="sidebar-main-title">Related Topics</h2>

        <div className="filter-header">
          <Filter size={14} className="filter-icon" />
          <h3 className="sidebar-label">Filter by Topic</h3>
        </div>

        <div className="topic-pill-container">
          <button
            onClick={() => setActiveTopic("All")}
            className={`topic-pill ${activeTopic === "All" ? "active" : ""}`}
          >
            All
          </button>
          
          <button 
            className={`topic-pill more-toggle ${activeTopic !== "All" ? "active-filter" : ""}`} 
            onClick={() => setShowModal(true)}
          >
            {activeTopic === "All" ? "More Topics" : activeTopic} <ChevronDown size={12} />
          </button>
        </div>
      </div>

      {/* FEED SECTION */}
      <div className="related-feed">
        <h3 className="sidebar-label">
          {activeTopic !== "All" 
            ? `Results: ${activeTopic}` 
            : isPostPage ? "Related Stories" : "Latest Insights"
          }
        </h3>
        <div className="related-stack">
          {displayPosts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`} 
              className="related-card"
            >
              <span className="related-category">{post.frontmatter.topic}</span>
              <h4 className="related-title">{post.frontmatter.title}</h4>
              <p className="related-desc">{post.frontmatter.description}</p>
            </Link>
          ))}
          {displayPosts.length === 0 && (
            <p className="modal-no-results">No related posts found.</p>
          )}
        </div>
      </div>

      {/* TOPIC SELECTION MODAL */}
      {showModal && (
        <div className="filter-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="filter-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Browse Topics</h2>
              <button className="close-modal" onClick={() => setShowModal(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-search-wrapper">
              <Search size={16} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search topics..." 
                value={modalSearch}
                onChange={(e) => setModalSearch(e.target.value)}
                autoFocus
              />
            </div>

            <div className="modal-grid">
              {filteredModalCategories.length > 0 ? (
                filteredModalCategories.map((topic) => (
                  <button
                    key={topic}
                    className={`modal-pill ${activeTopic === topic ? "active" : ""}`}
                    onClick={() => {
                      setActiveTopic(topic);
                      setShowModal(false);
                      setModalSearch(""); 
                    }}
                  >
                    {topic}
                  </button>
                ))
              ) : (
                <p className="modal-no-results">No topics match your search.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}