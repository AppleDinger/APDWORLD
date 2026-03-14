import { Link } from 'react-router-dom'
import { computerRoutes, folderRoutes } from '../data/archiveData'
import { getAsset } from '../utils/getAsset'

function HomePage() {
  return (
    <section className="page-content">
      <h2>Home.sys</h2>
      <p>Welcome to the nested archive. Every folder opens to a different corner of my chaotic personality.</p>
      <div className="sitemap-grid">
        {[...computerRoutes, ...folderRoutes].map((item) => (
          <Link key={item.id} to={item.path} className="sitemap-tile">
            <img src={getAsset(item.icon)} alt="" className="tile-icon" loading="lazy" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HomePage
