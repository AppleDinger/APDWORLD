import ReusableCarousel from '../../components/ReusableCarousel'

function HobbyDetail({ item }) {
  return (
    <section className="detail-page content-fade">
      <h2>
        <img src={item.icon} alt="" className="inline-icon" />
        {item.title}
      </h2>

      <section className="glass-section">
        <h3>Photo Reel</h3>
        <ReusableCarousel
          items={item.photos}
          className="photo-reel"
          renderItem={(photo) => (
            <div className="photo-card">
              <img src={photo.image} alt={photo.caption} loading="lazy" />
              <strong>{photo.caption}</strong>
            </div>
          )}
        />
      </section>

      <section className="glass-section">
        <h3>The Jury</h3>
        <div className="jury-grid">
          {item.jury.map((entry) => (
            <article className="speech-bubble" key={entry.id}>
              <h4>{entry.name}</h4>
              <p>{entry.opinion}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default HobbyDetail
