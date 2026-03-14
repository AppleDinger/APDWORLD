import ReusableCarousel from '../../components/ReusableCarousel'

function ProjectDetail({ item }) {
  return (
    <section className="detail-page content-fade">
      <h2>
        <img src={item.icon} alt="" className="inline-icon" />
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
              <img src={shot.image} alt={shot.title} loading="lazy" />
              <strong>{shot.title}</strong>
            </div>
          )}
        />
      </section>

      <section className="glass-section">
        <h3>Development Timeline</h3>
        <div className="timeline-line">
          {item.timeline.map((point) => (
            <article className="timeline-node" key={point.phase}>
              <h4>{point.phase}</h4>
              <p>{point.note}</p>
            </article>
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
