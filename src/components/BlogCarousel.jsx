import { Link } from 'react-router-dom'
import { blogList } from '../data/blogData'
import { getAsset } from '../utils/getAsset'

function BlogCarousel() {
  return (
    <section className="blog-carousel" aria-label="Ram Says Carousel">
      {blogList.map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`} className="droplet-card">
          <img src={getAsset(post.image)} alt={post.title} className="droplet-cover" loading="lazy" />
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </Link>
      ))}
    </section>
  )
}

export default BlogCarousel
