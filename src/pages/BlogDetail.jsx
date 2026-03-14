import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { blogPosts } from '../data/blogData'
import { getAsset } from '../utils/getAsset'

function BlogDetail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const post = blogPosts[id]

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 280)
    return () => clearTimeout(timer)
  }, [id])

  if (!post) {
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
          <h2>{post.title}</h2>
          <p className="post-meta">{post.date} • {post.readingTime}</p>
          <img src={getAsset(post.image)} alt={post.title} className="reader-cover" loading="lazy" />
          <div className="reader-body">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      )}
    </section>
  )
}

export default BlogDetail
