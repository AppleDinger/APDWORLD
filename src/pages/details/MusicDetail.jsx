import { useState } from 'react'

function MusicDetail({ item }) {
  const [rating, setRating] = useState(item.rating ?? 4)

  return (
    <section className="detail-page content-fade">
      <h2>{item.icon} {item.title}</h2>

      <div className="music-hero-grid">
        <div className="album-frame">
          <div className="album-art">
            <span>{item.coverLabel}</span>
          </div>
        </div>

        <div className="music-side-widgets">
          <div className="star-widget" aria-label="Rating Widget">
            <h3>Rating</h3>
            <div className="star-row">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`star-btn ${star <= rating ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                  aria-label={`Rate ${star} stars`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="commentary-box">
            <h3>Commentary Box</h3>
            <p>{item.commentary}</p>
          </div>
        </div>
      </div>

      <div className="mini-player-wrap">
        <h3>Mini Player</h3>
        <div className="mini-player-frame">
          <iframe
            src={item.youtubeEmbed}
            title={`${item.title} mini player`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default MusicDetail
