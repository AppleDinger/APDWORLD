import MainLayout from './layouts/MainLayout'
import { Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import BlogDetail from './pages/BlogDetail'
import HobbiesPage from './pages/HobbiesPage'
import ProjectsPage from './pages/ProjectsPage'
import ArtPage from './pages/ArtPage'
import MoviesPage from './pages/MoviesPage'
import ContentLoader from './pages/ContentLoader'

const appRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:id', element: <BlogDetail /> },
      { path: 'hobbies', element: <HobbiesPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'art', element: <ArtPage /> },
      { path: 'music', element: <Navigate to="/movies" replace /> },
      { path: 'movies', element: <MoviesPage /> },
      { path: ':category/:id', element: <ContentLoader /> },
    ],
  },
]

export default appRoutes
