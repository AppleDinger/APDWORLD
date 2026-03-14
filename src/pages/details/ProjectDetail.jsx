import ReusableCarousel from '../../components/ReusableCarousel'
import { getAsset } from '../../utils/getAsset'

function ProjectDetail({ item }) {
  return (
    <section className="detail-page content-fade">
      <h2>
        <img src={getAsset(item.icon)} alt="" className="inline-icon" />
        {item.title}
      </h2>

      <section className="glass-section">
        <h3>Current Status</h3>
        <p>{item.status}</p>
      </section>

      <section className="glass-section">
        <h3>Gallery</h3>
        <ReusableCarousel
          items={item.snapshots}
          className="snapshot-carousel"
          renderItem={(shot) => (
            <div className={`snapshot-card ${shot.tone}`}>
              <img src={getAsset(shot.image)} alt={shot.title} loading="lazy" />
              <strong>{shot.title}</strong>
            </div>
          )}
        />
      </section>

      <section className="glass-section">
        <h3>Development Timeline</h3>
        <div className="timeline-line">
          {item.timeline.map((point) => (
            <div className="timeline-item" key={point.phase}>
              <span className="timeline-dot" aria-hidden="true" />
              <article className="timeline-node">
                <h4>{point.phase}</h4>
                <p>{point.note}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-section">
        <h3>Collaborators</h3>
        <div className="collaborator-row">
          {item.collaborators.map((person) => (
            <div className="avatar-pill" key={person.id} title={person.name}>
              {person.initials}
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default ProjectDetail
