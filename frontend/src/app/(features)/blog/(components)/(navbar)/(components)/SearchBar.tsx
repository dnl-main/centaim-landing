"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Define the shape of your post for TypeScript to match the API response
interface Post {
  title: string;
  slug: string;
  topic: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // 1. Fetch the search index once when the component mounts
  // This now pulls the optimized manifest via your API route
  useEffect(() => {
    fetch("/api/search")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // Ensure we handle cases where the API might return an error object
        if (Array.isArray(data)) {
          setAllPosts(data);
        }
      })
      .catch((err) => console.error("Search index fetch failed:", err));
  }, []);

  // 2. Filter posts as user types
  useEffect(() => {
    const searchTerm = query.toLowerCase().trim();
    
    if (searchTerm.length > 1 && allPosts.length > 0) {
      const filtered = allPosts
        .filter((post) => {
          const title = post?.title?.toLowerCase() ?? "";
          const topic = post?.topic?.toLowerCase() ?? "";
          return title.includes(searchTerm) || topic.includes(searchTerm);
        })
        .slice(0, 5); // Keeps the dropdown manageable

      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, allPosts]);

  // 3. Close search results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="search-container" ref={searchRef}>
      <input
        type="text"
        placeholder="Search articles..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // Re-open if there is text and user clicks back into input
        onFocus={() => query.length > 1 && results.length > 0 && setIsOpen(true)}
      />
      
      {isOpen && (
        <ul className="search-results">
          {results.length > 0 ? (
            results.map((post) => (
              <li key={post.slug}>
                <Link 
                  href={`/blog/${post.slug}`} 
                  onClick={() => {
                    setIsOpen(false);
                    setQuery(""); // Reset search after selection
                  }}
                >
                  <span className="result-topic">{post.topic || "General"}</span>
                  <span className="result-title">{post.title}</span>
                </Link>
              </li>
            ))
          ) : (
            query.length > 1 && <li className="search-no-results">No articles found</li>
          )}
        </ul>
      )}
    </div>
  );
}