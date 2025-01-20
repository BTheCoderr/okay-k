import Navigation from '../components/Navigation'
import SocialIcons from '../components/SocialIcons'
import Image from 'next/image'

export default function About() {
  const accolades = [
    "Featured in EARMILK",
    "Featured in Happy Mag",
    "Featured in We Rave You",
    "Featured in Hip Hop Vibe",
    "Featured in Eucalypt",
    "Featured in Acid Stag"
  ]

  const releases = [
    "this year i made some of my favorite songs (2024)",
    "hazelnut (2025)",
    "something in the orange (2024)",
    "The Sundance Film Festival (2024)",
    "cartoons (2024)",
    "inception (2010) (2024)",
    "Autumn <3 (2023)",
    "28 (2023)"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-primary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About okay(K)</h1>
            <div className="mb-8">
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-xl text-light leading-relaxed mb-6">
                okay(K), chuck okeke, is a native New Yorker whose genre ranges from hip-hop/rap to r&b/soul to alternative/indie to pop. 
                Inspired by artists like Frank Ocean and Kanye West, he has drawn comparisons to modern enigmas Kid Cudi, 
                Chance the Rapper, DRAM, and Lil Yachty amongst other prominent artists.
              </p>
              <p className="text-xl text-light leading-relaxed mb-6">
                His music has been featured in numerous publications and editorials, garnering attention for its unique blend of sounds 
                and authentic storytelling. From studio sessions to live performances, okay(K) continues to push boundaries and connect 
                with audiences through his distinctive musical approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accolades Section */}
      <section className="py-20 bg-dark/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured In</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accolades.map((accolade, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-colors"
                >
                  {accolade}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Discography</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {releases.map((release, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/20 transition-colors"
                >
                  {release}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Connect with okay(K)</h2>
            <p className="text-light mb-8">For bookings, collaborations, or just to say hello</p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://soundbetter.com/profiles/263336-okay(k)"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-secondary text-white px-8 py-3 rounded-full transition-colors duration-300"
              >
                Work Together
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
          </div>
        </div>
      </section>
    </div>
  )
} 