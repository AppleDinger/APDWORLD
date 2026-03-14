import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { siteContent, categoryLabels } from '../data/siteContent'
import MovieDetail from './details/MovieDetail'
import MusicDetail from './details/MusicDetail'
import ProjectDetail from './details/ProjectDetail'
import HobbyDetail from './details/HobbyDetail'
import ArtDetail from './details/ArtDetail'

function ContentLoader() {
  const { category, id } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 260)
    return () => clearTimeout(timer)
  }, [category, id])

  const categoryBucket = siteContent[category]
  const item = categoryBucket?.[id]

  if (!categoryBucket || !item) {
    return (
      <section className="page-content content-fade">
        <h2>Item Not Found</h2>
        <p>That file may have been renamed, moved, or eaten by the desktop gremlins.</p>
        {category && (
          <p>
            <Link to={`/${category}`} className="app-btn-link">
              Back to {categoryLabels[category] || category}
            </Link>
          </p>
        )}
      </section>
    )
  }

  if (loading) {
    return (
      <section className="detail-page content-fade">
        <div className="vista-spinner-wrap" aria-live="polite" aria-label="Loading details">
          <span className="vista-spinner" />
        </div>
      </section>
    )
  }

  if (category === 'movies') {
    return <MovieDetail item={item} />
  }

  if (category === 'music') {
    return <MusicDetail item={item} />
  }

  if (category === 'projects') {
    return <ProjectDetail item={item} />
  }

  if (category === 'hobbies') {
    return <HobbyDetail item={item} />
  }

  if (category === 'art') {
    return <ArtDetail item={item} />
  }

  return (
    <section className="page-content content-fade">
      <h2>Unsupported Category</h2>
      <p>This content type does not have a specialized detail layout yet.</p>
    </section>
  )
}

export default ContentLoader
