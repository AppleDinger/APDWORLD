import FolderView from '../components/FolderView'
import { getCategoryItems } from '../data/siteContent'

function MoviesPage() {
  const movieItems = getCategoryItems('movies')

  return (
    <section className="page-content">
      <h2>Movies we binge.mp4</h2>
      <p>Open a movie file to inspect poster, review, rating, and quote bubbles.</p>
      <FolderView items={movieItems} category="movies" />
    </section>
  )
}

export default MoviesPage
