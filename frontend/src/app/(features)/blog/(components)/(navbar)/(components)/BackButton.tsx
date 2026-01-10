"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const pathname = usePathname();

  // Hide button if on the main blog index page
  if (pathname === "/blog") return null;

  return (
    <Link href="/blog" className="back-home-btn">
      <ArrowLeft size={18} strokeWidth={2.5} className="back-icon" />
      <span className="nav-brand-text">Back to home</span>
    </Link>
  );
}