'use client'
import { 
  FaInstagram, 
  FaSpotify, 
  FaSoundcloud, 
  FaDiscord, 
  FaXTwitter, 
  FaTumblr,
  FaTiktok
} from 'react-icons/fa6'
import { SiCashapp } from 'react-icons/si'

export default function SocialIcons({ className = '' }) {
  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/okayksux/', 
      icon: <FaInstagram className="w-6 h-6" />,
      color: 'hover:text-pink-500'
    },
    { 
      name: 'Spotify', 
      url: 'https://open.spotify.com/artist/2f2HXUNzZhwRLQ1ROfWdPU', 
      icon: <FaSpotify className="w-6 h-6" />,
      color: 'hover:text-green-500'
    },
    { 
      name: 'SoundCloud', 
      url: 'https://soundbetter.com/profiles/263336-okay(k)', 
      icon: <FaSoundcloud className="w-6 h-6" />,
      color: 'hover:text-orange-500'
    },
    { 
      name: 'Discord', 
      url: 'https://discord.com/invite/xdYKk3B', 
      icon: <FaDiscord className="w-6 h-6" />,
      color: 'hover:text-indigo-500'
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/okayksux', 
      icon: <FaXTwitter className="w-6 h-6" />,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Tumblr', 
      url: 'https://okayksux.tumblr.com/features', 
      icon: <FaTumblr className="w-6 h-6" />,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'CashApp', 
      url: 'https://cash.app/$okayksux', 
      icon: <SiCashapp className="w-6 h-6" />,
      color: 'hover:text-green-400'
    },
    { 
      name: 'TikTok', 
      url: 'https://tiktok.com/@okayksux', 
      icon: <FaTiktok className="w-6 h-6" />,
      color: 'hover:text-pink-600'
    }
  ]

  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-white ${link.color} transition-colors duration-300 hover:scale-110`}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
} 