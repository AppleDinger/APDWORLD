import { useNavigate, useParams } from 'react-router-dom'
import { getAsset } from '../utils/getAsset'

function FolderView({ items, category }) {
  const navigate = useNavigate()
  const { category: routeCategory, id } = useParams()

  return (
    <section className="folder-grid" aria-label="Folder Grid">
      {items.map((item) => (
        <button
          key={item.id}
          className={`folder-icon ${routeCategory === category && id === item.id ? 'active' : ''}`}
          onClick={() => navigate(`/${category}/${item.id}`)}
        >
          <img src={getAsset(item.icon)} alt="" className="folder-glyph" loading="lazy" />
          {item.labelImage ? (
            <img
              src={getAsset(item.labelImage)}
              alt={item.title}
              className="folder-label-image"
              loading="lazy"
            />
          ) : (
            <span>{item.title}</span>
          )}
        </button>
      ))}
    </section>
  )
}

export default FolderView
