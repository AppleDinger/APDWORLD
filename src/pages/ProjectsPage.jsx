import FolderView from '../components/FolderView'
import { getCategoryItems } from '../data/siteContent'

function ProjectsPage() {
  const projectItems = getCategoryItems('projects')

  return (
    <section className="page-content">
      <h2>Projects.exe</h2>
      <p>Choose a project executable to inspect status, gallery, timeline, and collaborators.</p>
      <FolderView items={projectItems} category="projects" />
    </section>
  )
}

export default ProjectsPage
