function MovieDetail({ item }) {
  return (
    <section className="detail-page content-fade">
      <h2>
        <img src={item.icon} alt="" className="inline-icon" />
        {item.title}
      </h2>

      <section className="movie-detail-grid glass-section">
        <div className="movie-poster-frame">
          <img src={item.posterImage} alt={item.title} className="movie-poster" loading="lazy" />
        </div>

        <div className="movie-side-panel">
          <div className="glass-well">
            <h3>Review</h3>
            <p>{item.review}</p>
          </div>

          <div className="imdb-rating">
            <span className="gold-star" aria-hidden="true">★</span>
            <span>{item.imdb}/10</span>
          </div>
        </div>
      </section>

      <section className="glass-section">
        <h3>Dialogues</h3>
        <div className="dialogue-list">
          {item.dialogue.map((line) => (
            <article key={line.id} className="dialogue-bubble">
              <h4>{line.who}</h4>
              <p>{line.line}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default MovieDetail
