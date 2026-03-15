import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { blogList } from '../data/blogData' 
import { getAsset } from '../utils/getAsset'
import 'katex/dist/katex.min.css' 

function BlogDetail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [markdown, setMarkdown] = useState("")
  
  const postMetadata = blogList.find(p => p.id === id)

  // Clean the path for GitHub Pages compatibility
  const cleanPath = postMetadata?.contentPath 
    ? postMetadata.contentPath.replace(/^(\/)?public\//, '').replace(/^\//, '')
    : "";
  
  // Calculate the subfolder for inline markdown images
  const contentFolder = cleanPath.substring(0, cleanPath.lastIndexOf('/') + 1);

  useEffect(() => {
    if (!postMetadata) return;

    setLoading(true);
    // Combine BASE_URL with the cleaned path
    const filePath = `${import.meta.env.BASE_URL}${cleanPath}`;
    
    fetch(filePath)
      .then(res => {
        const contentType = res.headers.get("content-type");
        // Prevents GH Pages from serving index.html instead of a 404
        if (!res.ok || (contentType && contentType.includes("text/html"))) {
          throw new Error("Target file is missing or returned index.html");
        }
        return res.text();
      })
      .then(text => {
        // Fix: Remove the Front Matter (--- text ---) using Regex
        const cleanBody = text.replace(/^---[\s\S]*?---/, '');
        setMarkdown(cleanBody);
        
        // Small delay to appreciate the Vista Spinner
        setTimeout(() => setLoading(false), 280);
      })
      .catch(err => {
        console.error("Fetch Error:", err.message);
        setMarkdown("## Error Loading Content\nPlease check if the file exists in the public folder.");
        setLoading(false);
      });
  }, [id, postMetadata, cleanPath]);

  if (!postMetadata) {
    return (
      <section className="page-content content-fade">
        <h2>Post Not Found</h2>
        <p>That note got lost in the note stack.</p>
        <Link to="/blog" className="app-btn-link">Back to Blog</Link>
      </section>
    )
  }

  return (
    <section className="blog-reader content-fade">
      {/* RESTORED: Back Button with Silver Arrow */}
      <Link to="/blog" className="back-app-btn">
        <span className="silver-arrow" aria-hidden="true">◀</span>
        <span>Back to Blog</span>
      </Link>

      {loading ? (
        <div className="vista-spinner-wrap" aria-live="polite" aria-label="Loading post">
          <span className="vista-spinner" />
        </div>
      ) : (
        <article className="reader-pane aero-glass">
          {/* RESTORED: Header Metadata */}
          <h2 className="aero-text-glow">{postMetadata.title}</h2>
          <p className="post-meta">{postMetadata.date} • {postMetadata.readingTime}</p>
          
          {/* RESTORED: Glossy Header Image */}
          <img 
            src={`${import.meta.env.BASE_URL}${postMetadata.image.replace(/\\/g, '/')}`} 
            alt={postMetadata.title} 
            className="reader-cover" 
            loading="lazy" 
            style={{ 
              borderRadius: '12px', 
              border: '1px solid rgba(255,255,255,0.4)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)' 
            }}
          />

          <div className="reader-body">
            <ReactMarkdown 
              remarkPlugins={[remarkMath]} 
              rehypePlugins={[rehypeKatex]}
              components={{
                // Transform inline images to use dynamic subfolders
                img: ({ src, ...props }) => {
                  const cleanSrc = src.replace(/^(\.\/|\/)/, '');
                  const finalSrc = `${import.meta.env.BASE_URL}${contentFolder}${cleanSrc}`;
                  return (
                    <img 
                      {...props} 
                      src={finalSrc} 
                      className="reader-inline-img"
                      loading="lazy"
                      alt={props.alt || "Blog visual"}
                    />
                  );
                }
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </article>
      )}
    </section>
  )
}

export default BlogDetail;