// frontend/scripts/generate-manifest.mjs
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// process.cwd() points to /frontend
const POSTS_PATH = path.join(process.cwd(), 'src/content'); 
const OUTPUT_PATH = path.join(process.cwd(), 'public/blog-manifest.json');

function generateManifest() {
  console.log('🚀 Generating blog manifest...');
  
  if (!fs.existsSync(POSTS_PATH)) {
    console.error(`❌ Error: Content folder not found at ${POSTS_PATH}`);
    return;
  }

  const files = fs.readdirSync(POSTS_PATH).filter(file => /\.mdx?$/.test(file));

  const manifest = files.map(file => {
    const filePath = path.join(POSTS_PATH, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug: file.replace(/\.mdx?$/, ""),
      title: data.title || "Untitled",
      topic: data.topic || "General",
      date: data.date || "",
      description: data.description || "",
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(manifest, null, 2));
  console.log(`✅ Success! ${manifest.length} posts indexed in public/blog-manifest.json`);
}

generateManifest();