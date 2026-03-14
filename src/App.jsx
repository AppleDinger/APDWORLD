import { useRoutes } from 'react-router-dom'
import { useEffect } from 'react'
import appRoutes from './routes'
import { getAsset } from './utils/getAsset'

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--app-wallpaper',
      `url("${getAsset('wallpapers/Win XP wallpaper.webp')}")`,
    )
  }, [])

  return useRoutes(appRoutes)
}

export default App