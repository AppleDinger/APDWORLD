function ArtDetail({ item }) {
  return (
    <section className="detail-page content-fade">
      <h2>
        <img src={item.icon} alt="" className="inline-icon" />
        {item.title}
      </h2>

      <section className="masterpiece-view">
        <h3>Masterpiece</h3>
        <div className="masterpiece-canvas">
          <img src={item.masterpiece} alt={`${item.title} masterpiece`} loading="lazy" />
        </div>
      </section>

      <section className="glass-section">
        <h3>Process Log</h3>
        <div className="process-log">
          {item.process.map((step) => (
            <article className="process-step" key={step.id}>
              <img className="process-image" src={step.image} alt={step.step} loading="lazy" />
              <div>
                <h4>{step.step}</h4>
                <p>{step.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default ArtDetail
