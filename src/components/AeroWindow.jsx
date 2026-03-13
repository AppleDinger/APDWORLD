function AeroWindow({ title, breadcrumbs = [], children }) {
  return (
    <article className="aero-window">
      <header className="window-titlebar">
        <div className="window-title">
          <h2>{title}</h2>
        </div>
      </header>
      <div className="breadcrumb-bar" aria-label="Breadcrumb">
        {breadcrumbs.join(' > ')}
      </div>
      <div className="window-content">{children}</div>
    </article>
  )
}

export default AeroWindow