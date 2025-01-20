'use client'

export default function MusicPlayer() {
  return (
    <div className="space-y-8">
      {/* Latest Album */}
      <div className="bg-dark/10 rounded-lg p-4">
        <iframe 
          src="https://open.spotify.com/embed/album/5XKmkrjhtVt5QAQBj0RJ3z" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>

      {/* Artist Profile */}
      <div className="bg-dark/10 rounded-lg p-4">
        <iframe 
          src="https://open.spotify.com/embed/artist/2f2HXUNzZhwRLQ1ROfWdPU" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  )
} 