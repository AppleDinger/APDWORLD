function WidgetCard({ heading, children }) {
  return (
    <section className="widget-card">
      <h3>{heading}</h3>
      <div>{children}</div>
    </section>
  )
}

export default WidgetCard