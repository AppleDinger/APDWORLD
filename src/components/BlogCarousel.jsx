const ramSaysPosts = [
  {
    id: 'r1',
    title: 'I Organized My Life In Folder Names',
    note: 'Current folder title: definitely_real_productivity_final_v7.',
  },
  {
    id: 'r2',
    title: 'Today I Debugged For 2 Hours',
    note: 'The bug was one missing comma. Character development unlocked.',
  },
  {
    id: 'r3',
    title: 'Playlist Powered Coding',
    note: 'If the beat drops, the CSS variables become unstoppable.',
  },
  {
    id: 'r4',
    title: 'Skeuomorphic Feelings',
    note: 'If a button looks glossy enough, I trust it with my future.',
  },
]

function BlogCarousel() {
  return (
    <section className="blog-carousel" aria-label="Ram Says Carousel">
      {ramSaysPosts.map((post) => (
        <article key={post.id} className="droplet-card">
          <h3>{post.title}</h3>
          <p>{post.note}</p>
        </article>
      ))}
    </section>
  )
}

export default BlogCarousel
