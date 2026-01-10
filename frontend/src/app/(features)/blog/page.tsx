import Link from "next/link";
import { ArrowRight, MapPin, Globe, MessageSquare } from "lucide-react";
import "./blogPage.css";

export default function BlogIndexPage() {
  return (
    <div className="blog-index-container">
      <div className="bento-grid">
        
        {/* Main Brand Hero Box */}
        <div className="bento-item hero-box">
          <span className="badge">Business Solutions</span>
          <h1>Empowering Startups with <span className="text-gradient">Digital Infrastructure.</span></h1>
          <p>
            Centaim helps scaling companies move away from fragmented systems into 
            automated excellence. Explore our insights on ERP, Automation, and Growth.
          </p> 
          <Link href="/get-started" className="btn-primary">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}