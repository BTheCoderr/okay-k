import Navigation from '../components/Navigation'
import SocialIcons from '../components/SocialIcons'
import MusicPlayer from '../components/MusicPlayer'

export default function Music() {
  const popularTracks = [
    { name: "town (ft. AUGY)", plays: "8,469" },
    { name: "Inyn", plays: "76,450" },
    { name: "Sunday Forgettable", plays: "1,010,214" },
    { name: "The Most Beautiful Earth That I've Ever Seen", plays: "42,346" },
    { name: "grogu", plays: "9,810" }
  ]

  const latestReleases = [
    { name: "this year i made some of my favorite songs", type: "Album", year: "2024" },
    { name: "Blue + Yellow", type: "Single", year: "2024" },
    { name: "Adventure Time (Extended)", type: "Single", year: "2024" },
    { name: "microbiology", type: "Single", year: "2024" },
    { name: "orlando", type: "Single", year: "2024" },
    { name: "Sunday Morning (Acoustic)", type: "Single", year: "2024" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Music</h1>
            <p className="text-xl text-light mb-8">Stream okay(K) on your favorite platform</p>
            <div className="mb-8">
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>

      {/* Music Player Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Album</h2>
            <MusicPlayer />
          </div>
        </div>
      </section>

      {/* Popular Tracks */}
      <section className="py-20 bg-dark/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Tracks</h2>
            <div className="space-y-4">
              {popularTracks.map((track, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-colors flex justify-between items-center"
                >
                  <span>{track.name}</span>
                  <span className="text-light">{track.plays} plays</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Releases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestReleases.map((release, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-colors"
                >
                  <h3 className="font-bold mb-2">{release.name}</h3>
                  <p className="text-light">{release.type} • {release.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Links */}
      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Listen Now</h2>
            <p className="text-light mb-8">Stream okay(K) on your preferred platform</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://open.spotify.com/artist/2f2HXUNzZhwRLQ1ROfWdPU"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-secondary text-white px-8 py-3 rounded-full transition-colors duration-300"
              >
                Spotify
              </a>
              <a 
                href="https://soundbetter.com/profiles/263336-okay(k)"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-secondary text-white px-8 py-3 rounded-full transition-colors duration-300"
              >
                SoundCloud
              </a>
              <a 
                href="https://music.apple.com/artist/okayksux"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-secondary text-white px-8 py-3 rounded-full transition-colors duration-300"
              >
                Apple Music
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 