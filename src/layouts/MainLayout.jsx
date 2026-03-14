import { NavLink, Outlet, useLocation } from 'react-router-dom'
import AeroWindow from '../components/AeroWindow'
import { computerRoutes, folderRoutes } from '../data/navigationData'
import { siteContent } from '../data/siteContent'
import { blogPosts } from '../data/blogData'
import { getAsset } from '../utils/getAsset'

const breadcrumbLabels = {
  '': 'Computer',
  blog: 'Blog',
  movies: 'Movies',
  music: 'Music',
  hobbies: 'Hobbies',
  projects: 'Projects',
  art: 'Art',
  gaming: 'Gaming',
  coding: 'Coding',
}

function MainLayout() {
  const location = useLocation()

  const segments = location.pathname.split('/').filter(Boolean)
  const crumbs = ['Computer', ...segments.map((segment, index) => {
    if (index === 1) {
      const category = segments[0]
      const categoryItem = siteContent[category]?.[segment]
      if (categoryItem?.title) return categoryItem.title

      if (category === 'blog' && blogPosts[segment]?.title) {
        return blogPosts[segment].title
      }
    }

    return breadcrumbLabels[segment] || segment
  })]

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <h1 className="app-title">APDWORLD</h1>

        <section className="sidebar-group">
          <h2>Computer</h2>
          <nav>
            {computerRoutes.map((route) => (
              <NavLink
                key={route.id}
                to={route.path}
                className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}
                end={route.path === '/'}
              >
                <img src={getAsset(route.icon)} alt="" className="nav-icon" loading="lazy" />
                <span>{route.title}</span>
              </NavLink>
            ))}
          </nav>
        </section>

        <section className="sidebar-group">
          <h2>Folders</h2>
          <nav>
            {folderRoutes.map((route) => (
              <NavLink
                key={route.id}
                to={route.path}
                className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}
              >
                <img src={getAsset(route.icon)} alt="" className="nav-icon" loading="lazy" />
                <span>{route.title}</span>
              </NavLink>
            ))}
          </nav>
        </section>
      </aside>

      <main className="app-main">
        <AeroWindow title="APD Explorer" breadcrumbs={crumbs}>
          <Outlet />
        </AeroWindow>
      </main>
    </div>
  )
}

export default MainLayout
