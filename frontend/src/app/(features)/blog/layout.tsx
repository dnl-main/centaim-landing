import "./blogLayout.css";
import Sidebar from "./(components)/(sidebar)/Sidebar";
import Navbar from "./(components)/(navbar)/Navbar";
import Related from "./(components)/(related)/Related";
import Social from "./(components)/(social)/Social";

import { getAllPosts } from "@/lib/blog";

export default function BlogLayout({ children }: { children: React.ReactNode }) {

  const posts = getAllPosts();
  
  return (
    <div className="blog">
      {/* <Sidebar /> */}
      <main className="blog-main">
        <Navbar />
        <div className="blog-main-content">
          <div className="blog-main-content-left">
            {children} {/* This is where page.tsx or [id]/page.tsx will inject */} 
          </div>
          <div className="blog-main-content-right">
            {/* <Social /> */}
            <Related posts={posts} />
          </div>
        </div>
      </main>
    </div>
  );
}