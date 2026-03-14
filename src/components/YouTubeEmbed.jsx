function extractVideoId(videoUrl) {
  if (!videoUrl) return ''

  if (videoUrl.includes('youtu.be/')) {
    return videoUrl.split('youtu.be/')[1]?.split('?')[0] || ''
  }

  if (videoUrl.includes('watch?v=')) {
    return videoUrl.split('watch?v=')[1]?.split('&')[0] || ''
  }

  if (videoUrl.includes('/embed/')) {
    return videoUrl.split('/embed/')[1]?.split('?')[0] || ''
  }

  return videoUrl
}

function YouTubeEmbed({ videoUrl, title }) {
  const videoId = extractVideoId(videoUrl)
  const src = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="youtube-embed-shell">
      <div className="youtube-embed-shine" aria-hidden="true" />
      <iframe
        src={src}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YouTubeEmbed
