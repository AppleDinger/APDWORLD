import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import HobbiesPage from './pages/HobbiesPage'
import ProjectsPage from './pages/ProjectsPage'
import ArtPage from './pages/ArtPage'
import MusicPage from './pages/MusicPage'

const appRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'hobbies', element: <HobbiesPage /> },
      { path: 'hobbies/:subId', element: <HobbiesPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'art', element: <ArtPage /> },
      { path: 'music', element: <MusicPage /> },
    ],
  },
]

export default appRoutes
