function AeroWindow({ title, icon, zIndex, isMinimized, onFocus, onMinimize, onClose, children }) {
  if (isMinimized) {
    return null
  }

  return (
    <article className="aero-window" style={{ zIndex }} onMouseDown={onFocus}>
      <header className="window-titlebar">
        <div className="window-title">
          <span>{icon}</span>
          <h2>{title}</h2>
        </div>
        <div className="window-actions">
          <button className="window-btn" onClick={onMinimize} aria-label={`Minimize ${title}`}>
            -
          </button>
          <button className="window-btn close" onClick={onClose} aria-label={`Close ${title}`}>
            x
          </button>
        </div>
      </header>
      <div className="window-content">{children}</div>
    </article>
  )
}

export default AeroWindow