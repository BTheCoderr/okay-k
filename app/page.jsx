import Image from 'next/image'
import YouTubeEmbed from './components/YouTubeEmbed'
import Navigation from './components/Navigation'
import SocialIcons from './components/SocialIcons'
import MusicPlayer from './components/MusicPlayer'
import imageLoader from '../image-loader'

export default function Home() {
  const photos = [
    { src: '/images/IMG_6534.JPG', alt: 'okay(K) Portrait 1', caption: 'Studio Vibes' },
    { src: '/images/IMG_4115.PNG', alt: 'okay(K) Portrait 2', caption: 'Live Performance' },
    { src: '/images/IMG_3306.PNG', alt: 'okay(K) Portrait 3', caption: 'Behind the Scenes' },
    { src: '/images/2E04DDF3-D60F-4AC6-A91B-056B4820D1DE.JPG', alt: 'okay(K) Portrait 4', caption: 'In the Studio' }
  ]

  return (
    <div className="bg-gradient-to-b from-dark to-primary min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          loader={imageLoader}
          src="/images/IMG_6534.JPG"
          alt="okay(K) Hero"
          width={1920}
          height={1080}
          priority
          loading="eager"
          className="object-cover absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-primary/30">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="animate-fade-in max-w-2xl">
              <h1 className="text-7xl text-white font-bold mb-4">okay(K)</h1>
              <p className="text-2xl text-light mb-6">i make music sometimes</p>
              <div className="flex gap-4 mb-8">
                <a 
                  href="https://open.spotify.com/artist/2f2HXUNzZhwRLQ1ROfWdPU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-secondary text-white px-8 py-3 rounded-full transition-colors duration-300"
                >
                  Listen Now
                </a>
                <a 
                  href="https://discord.com/invite/xdYKk3B" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-white hover:border-accent text-white px-8 py-3 rounded-full transition-colors duration-300"
                >
                  Join Discord
                </a>
              </div>
              <SocialIcons className="mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center text-dark animate-slide-up">Latest Music</h2>
          <div className="animate-fade-in max-w-4xl mx-auto">
            <MusicPlayer />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl font-bold mb-8">About okay(K)</h2>
            <p className="text-xl leading-relaxed mb-8">
              "okay(K) sucks" - but in the best way possible. Creating music that pushes boundaries and connects with people,
              okay(K) brings a unique blend of sounds and authentic storytelling to every track.
              From studio sessions to live performances, it's all about sharing the journey through music.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://soundbetter.com/profiles/263336-okay(k)"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-accent text-white px-6 py-2 rounded-full transition-colors duration-300"
              >
                Work Together
              </a>
              <a 
                href="https://cash.app/$okayksux"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary hover:border-accent text-white px-6 py-2 rounded-full transition-colors duration-300"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center text-dark animate-slide-up">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photos.map((photo, index) => (
              <div key={index} className="group relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    loader={imageLoader}
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={800}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-lg font-medium">{photo.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl font-bold mb-8">Collab with okay(K)</h2>
            <p className="text-xl mb-8">For bookings, collaborations, or just to say hello</p>
            <div className="space-y-8">
              <SocialIcons />
              <div className="flex justify-center gap-4">
                <a 
                  href="https://soundbetter.com/profiles/263336-okay(k)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-secondary text-white px-8 py-3 rounded-full transition-colors duration-300"
                >
                  Book on SoundBetter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-dark text-white/60">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} okay(K). All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 