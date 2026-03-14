import { useState } from 'react'
import { getAsset } from '../../utils/getAsset'
import YouTubeEmbed from '../../components/YouTubeEmbed'

function MusicDetail({ item }) {
  const [rating, setRating] = useState(item.rating ?? 4)

  return (
    <section className="detail-page content-fade">
      <h2>
        <img src={getAsset(item.icon)} alt="" className="inline-icon" />
        {item.title}
      </h2>

      <div className="music-hero-grid">
        <div className="album-frame">
          <div className="album-art">
            <img src={getAsset(item.coverImage)} alt={item.title} loading="lazy" />
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
        <YouTubeEmbed videoUrl={item.videoUrl} title={`${item.title} mini player`} />
      </div>
    </section>
  )
}

export default MusicDetail
