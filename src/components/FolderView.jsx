import { useNavigate, useParams } from 'react-router-dom'

function FolderView({ items, basePath }) {
  const navigate = useNavigate()
  const { subId } = useParams()

  if (subId) {
    const selected = items.find((item) => item.id === subId)

    if (!selected) {
      return (
        <div className="folder-empty">
          <h3>Folder Not Found</h3>
          <p>This sub-folder does not exist. Return to the parent folder and try another item.</p>
          <button className="archive-btn" onClick={() => navigate(basePath)}>
            Back To Hobbies
          </button>
        </div>
      )
    }

    return (
      <article className="folder-details">
        <h2>{selected.icon} {selected.title}</h2>
        <p>{selected.description}</p>
        <ul>
          {selected.entries.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
        <button className="archive-btn" onClick={() => navigate(basePath)}>
          Back To All Sub-Folders
        </button>
      </article>
    )
  }

  return (
    <section className="folder-grid" aria-label="Folder Grid">
      {items.map((item) => (
        <button
          key={item.id}
          className="folder-icon"
          onClick={() => navigate(`${basePath}/${item.id}`)}
        >
          <span className="folder-glyph">{item.icon}</span>
          <span>{item.title}</span>
        </button>
      ))}
    </section>
  )
}

export default FolderView
