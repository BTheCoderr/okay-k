export default function YouTubeEmbed({ videoId }) {
  return (
    <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="border-0"
      />
    </div>
  )
} 