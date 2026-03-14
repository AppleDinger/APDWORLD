import FolderView from '../components/FolderView'
import { getCategoryItems } from '../data/siteContent'

function HobbiesPage() {
  const hobbyItems = getCategoryItems('hobbies')

  return (
    <section className="page-content">
      <h2>Hobbies i suck at.docx</h2>
      <p>Open a hobby file to load its specialized detail layout.</p>
      <FolderView items={hobbyItems} category="hobbies" />
    </section>
  )
}

export default HobbiesPage
