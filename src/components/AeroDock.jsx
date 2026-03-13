function AeroDock({ apps, windows, onLaunch }) {
  return (
    <nav className="aero-dock" aria-label="Desktop Dock">
      {apps.map((app) => {
        const isActive = windows[app.id]?.isOpen && !windows[app.id]?.isMinimized

        return (
          <button
            key={app.id}
            className={`dock-item ${isActive ? 'active' : ''}`}
            onClick={() => onLaunch(app.id)}
            title={app.title}
          >
            <span className="dock-icon">{app.icon}</span>
            <span className="dock-label">{app.shortLabel}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default AeroDock