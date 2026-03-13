import { useMemo, useState } from 'react'
import AeroDock from './components/AeroDock'
import AeroWindow from './components/AeroWindow'
import DesktopIcon from './components/DesktopIcon'
import WidgetCard from './components/WidgetCard'

const APPS = [
  {
    id: 'hobbies',
    title: 'Hobbies.exe',
    shortLabel: 'Hobbies',
    icon: '🎮',
  },
  {
    id: 'projects',
    title: 'Projects.zip',
    shortLabel: 'Projects',
    icon: '🛠️',
  },
  {
    id: 'interests',
    title: 'Interests.dll',
    shortLabel: 'Interests',
    icon: '🌍',
  },
  {
    id: 'art',
    title: 'ArtStudio.psd',
    shortLabel: 'Art',
    icon: '🎨',
  },
]

const initialWindows = APPS.reduce((acc, app, index) => {
  acc[app.id] = {
    isOpen: index === 0,
    isMinimized: false,
    z: index + 1,
  }
  return acc
}, {})

function App() {
  const [windows, setWindows] = useState(initialWindows)
  const [zCounter, setZCounter] = useState(APPS.length + 1)

  const maxZ = useMemo(
    () =>
      Object.values(windows).reduce((max, win) => {
        if (win.isOpen && !win.isMinimized) {
          return Math.max(max, win.z)
        }
        return max
      }, 0),
    [windows],
  )

  const openWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: true,
        isMinimized: false,
        z: zCounter,
      },
    }))
    setZCounter((v) => v + 1)
  }

  const focusWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        z: zCounter,
      },
    }))
    setZCounter((v) => v + 1)
  }

  const minimizeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isMinimized: true,
      },
    }))
  }

  const closeWindow = (id) => {
    setWindows((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        isOpen: false,
        isMinimized: false,
      },
    }))
  }

  return (
    <div className="desktop-scene">
      <div className="sun-flare" aria-hidden="true" />
      <header className="hero-bar">
        <p className="badge">APDWORLD 2008 Remix</p>
        <h1>My Funny Personal Poster OS</h1>
        <p>
          Double-click vibes, glossy windows, and a very dramatic sky. Explore hobbies, projects, interests,
          and art like tiny desktop apps.
        </p>
      </header>

      <main className="desktop-grid">
        <aside className="desktop-icons" aria-label="Desktop Shortcuts">
          {APPS.map((app) => (
            <DesktopIcon key={app.id} app={app} onOpen={openWindow} />
          ))}
        </aside>

        <section className="windows-layer">
          {windows.hobbies.isOpen && (
            <AeroWindow
              title="Hobbies.exe"
              icon="🎮"
              zIndex={windows.hobbies.z}
              isMinimized={windows.hobbies.isMinimized}
              onFocus={() => focusWindow('hobbies')}
              onMinimize={() => minimizeWindow('hobbies')}
              onClose={() => closeWindow('hobbies')}
            >
              <WidgetCard heading="Main Quest">
                <ul>
                  <li>Retro game collecting and ranking absurd boss fights</li>
                  <li>Weekend nature walks with over-ambitious photo goals</li>
                  <li>Making playlists titled like fake movie soundtracks</li>
                </ul>
              </WidgetCard>
              <WidgetCard heading="Energy Meter">
                <p>Current combo: coffee + rain + synthwave = maximum productivity.</p>
              </WidgetCard>
            </AeroWindow>
          )}

          {windows.projects.isOpen && (
            <AeroWindow
              title="Projects.zip"
              icon="🛠️"
              zIndex={windows.projects.z}
              isMinimized={windows.projects.isMinimized}
              onFocus={() => focusWindow('projects')}
              onMinimize={() => minimizeWindow('projects')}
              onClose={() => closeWindow('projects')}
            >
              <WidgetCard heading="Build Log">
                <ul>
                  <li>Personal dashboard with weather, tasks, and a meme ticker</li>
                  <li>Micro game prototype where pigeons steal your lunch points</li>
                  <li>UI experiments inspired by old operating systems and web nostalgia</li>
                </ul>
              </WidgetCard>
              <WidgetCard heading="Patch Notes v1.0">
                <p>Added 300% more gradients and one unnecessary but satisfying shine animation.</p>
              </WidgetCard>
            </AeroWindow>
          )}

          {windows.interests.isOpen && (
            <AeroWindow
              title="Interests.dll"
              icon="🌍"
              zIndex={windows.interests.z}
              isMinimized={windows.interests.isMinimized}
              onFocus={() => focusWindow('interests')}
              onMinimize={() => minimizeWindow('interests')}
              onClose={() => closeWindow('interests')}
            >
              <WidgetCard heading="Curiosity Feed">
                <ul>
                  <li>Design history and odd internet subcultures</li>
                  <li>Human-computer interaction and playful UX details</li>
                  <li>Space documentaries narrated with maximum drama</li>
                </ul>
              </WidgetCard>
              <WidgetCard heading="Random Fact Generator">
                <p>
                  If a UI has a shiny button, I will click it, even when I know it does absolutely nothing.
                </p>
              </WidgetCard>
            </AeroWindow>
          )}

          {windows.art.isOpen && (
            <AeroWindow
              title="ArtStudio.psd"
              icon="🎨"
              zIndex={windows.art.z}
              isMinimized={windows.art.isMinimized}
              onFocus={() => focusWindow('art')}
              onMinimize={() => minimizeWindow('art')}
              onClose={() => closeWindow('art')}
            >
              <WidgetCard heading="Gallery Notes">
                <ul>
                  <li>Cloudscape sketches with over-saturated sunset palettes</li>
                  <li>Character doodles based on people I saw waiting for coffee</li>
                  <li>Poster remixes with glass, chrome, and leafy overlays</li>
                </ul>
              </WidgetCard>
              <WidgetCard heading="Now Playing In Brain">
                <p>Trying to paint sunlight so bright that the canvas needs sunglasses.</p>
              </WidgetCard>
            </AeroWindow>
          )}

          {maxZ === 0 && (
            <div className="empty-state">
              <p>All apps are closed. Launch one from desktop icons or the dock below.</p>
            </div>
          )}
        </section>
      </main>

      <AeroDock apps={APPS} windows={windows} onLaunch={openWindow} />
    </div>
  )
}

export default App