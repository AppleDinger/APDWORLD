function DesktopIcon({ app, onOpen }) {
  return (
    <button className="desktop-icon" onClick={() => onOpen(app.id)}>
      <span className="desktop-icon-glyph">{app.icon}</span>
      <span>{app.title}</span>
    </button>
  )
}

export default DesktopIcon