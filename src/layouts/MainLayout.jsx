import { NavLink, Outlet, useLocation } from 'react-router-dom'
import AeroWindow from '../components/AeroWindow'
import { computerRoutes, folderRoutes } from '../data/archiveData'

const breadcrumbLabels = {
  '': 'Computer',
  blog: 'Blog',
  movies: 'Movies',
  hobbies: 'Hobbies',
  projects: 'Projects',
  art: 'Art',
  gaming: 'Gaming',
  coding: 'Coding',
}

function MainLayout() {
  const location = useLocation()

  const segments = location.pathname.split('/').filter(Boolean)
  const crumbs = ['Computer', ...segments.map((segment) => breadcrumbLabels[segment] || segment)]

  return (
    <div className="archive-shell">
      <aside className="archive-sidebar">
        <h1 className="archive-title">APDWORLD Archive</h1>

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
                <img src={route.icon} alt="" className="nav-icon" loading="lazy" />
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
                <img src={route.icon} alt="" className="nav-icon" loading="lazy" />
                <span>{route.title}</span>
              </NavLink>
            ))}
          </nav>
        </section>
      </aside>

      <main className="archive-main">
        <AeroWindow title="Archive Explorer" breadcrumbs={crumbs}>
          <Outlet />
        </AeroWindow>
      </main>
    </div>
  )
}

export default MainLayout
