import FolderView from '../components/FolderView'
import { getCategoryItems } from '../data/siteContent'

function ArtPage() {
  const artItems = getCategoryItems('art')

  return (
    <section className="page-content">
      <h2>Art we Love.jpg</h2>
      <p>Pick an artwork file to open full masterpiece mode and process logs.</p>
      <FolderView items={artItems} category="art" />
    </section>
  )
}

export default ArtPage
