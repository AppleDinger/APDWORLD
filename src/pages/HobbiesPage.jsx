import { useParams } from 'react-router-dom'
import FolderView from '../components/FolderView'
import { hobbiesFolders } from '../data/archiveData'

function HobbiesPage() {
  const { subId } = useParams()

  return (
    <section className="page-content">
      <h2>Hobbies i suck at.docx</h2>
      {!subId && <p>Open a sub-folder to inspect what I am currently learning the hard way.</p>}
      <FolderView items={hobbiesFolders} basePath="/hobbies" />
    </section>
  )
}

export default HobbiesPage
