import FolderView from '../components/FolderView'
import { getCategoryItems } from '../data/siteContent'

function MusicPage() {
  const musicItems = getCategoryItems('music')

  return (
    <section className="page-content">
      <h2>Music gives you life.wav</h2>
      <p>Open a mixtape file to view album art, mini player, and commentary.</p>
      <FolderView items={musicItems} category="music" />
    </section>
  )
}

export default MusicPage
