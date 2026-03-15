import { Link } from 'react-router-dom'
import { blogList } from '../data/blogData'

function BlogCarousel() {
  return (
    <section className="blog-carousel" aria-label="Ram Says Carousel">
      {blogList.map((post) => {
        // Ensure path uses forward slashes and BASE_URL
        const cleanImagePath = post.image.replace(/\\/g, '/');
        const finalImageUrl = `${import.meta.env.BASE_URL}${cleanImagePath}`;

        return (
          <Link key={post.id} to={`/blog/${post.id}`} className="droplet-card">
            <div className="droplet-img-wrapper">
              <img 
                src={finalImageUrl} 
                alt={post.title} 
                className="droplet-cover" 
                loading="lazy" 
              />
            </div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </Link>
        )
      })}
    </section>
  )
}

export default BlogCarousel