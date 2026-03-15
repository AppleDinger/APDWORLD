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

  // FIX: Calculate contentFolder here so it's available everywhere in the component
  const cleanPath = postMetadata?.contentPath?.startsWith('/') 
    ? postMetadata.contentPath.slice(1) 
    : postMetadata?.contentPath || "";
  
  const contentFolder = cleanPath.substring(0, cleanPath.lastIndexOf('/') + 1);

  useEffect(() => {
    if (!postMetadata) return;

    setLoading(true);
    const filePath = `${import.meta.env.BASE_URL}${cleanPath}`;
    
    fetch(filePath)
      .then(res => {
        const contentType = res.headers.get("content-type");
        if (!res.ok || (contentType && contentType.includes("text/html"))) {
          throw new Error("Target file is missing or returned index.html");
        }
        return res.text();
      })
      .then(text => {
        const cleanBody = text.replace(/^---[\s\S]*?---/, '');
        setMarkdown(cleanBody);
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
      <Link to="/blog" className="back-app-btn">
        <span className="silver-arrow" aria-hidden="true">◀</span>
        <span>Back to Blog</span>
      </Link>

      {loading ? (
        <div className="vista-spinner-wrap" aria-live="polite" aria-label="Loading post">
          <span className="vista-spinner" />
        </div>
      ) : (
        <article className="reader-pane">
          <h2>{postMetadata.title}</h2>
          <p className="post-meta">{postMetadata.date} • {postMetadata.readingTime}</p>
          
          <img 
            src={`${import.meta.env.BASE_URL}${postMetadata.image.replace(/\\/g, '/')}`} 
            alt={postMetadata.title} 
            className="reader-cover" 
            loading="lazy" 
            style={{ borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }}
          />

          <div className="reader-body">
            <ReactMarkdown 
              remarkPlugins={[remarkMath]} 
              rehypePlugins={[rehypeKatex]}
              components={{
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

export default BlogDetail