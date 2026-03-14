import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import BlogDetail from './pages/BlogDetail'
import HobbiesPage from './pages/HobbiesPage'
import ProjectsPage from './pages/ProjectsPage'
import ArtPage from './pages/ArtPage'
import MoviesPage from './pages/MoviesPage'
import MusicPage from './pages/MusicPage'
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
      { path: 'music', element: <MusicPage /> },
      { path: 'movies', element: <MoviesPage /> },
      { path: ':category/:id', element: <ContentLoader /> },
    ],
  },
]

export default appRoutes
