# okay(K) Artist Website

<!-- repo-intro:start -->
**Project snapshot:** A responsive artist website for okay(K) combining music discovery, visual storytelling, social links, booking/collaboration paths, and a polished mobile experience.

**What it demonstrates:** Next.js · Tailwind CSS · media UX · responsive design · artist branding.
<!-- repo-intro:end -->

A modern, responsive artist website built with Next.js 14 and Tailwind CSS. This website serves as a digital platform for the music artist okay(K), featuring music playback, gallery, and social integration.

## Features

- 🎵 Integrated music player
- 🖼️ Responsive photo gallery with hover effects
- 🎨 Modern gradient design with smooth animations
- 🔗 Social media integration
- 📱 Fully responsive layout
- 🎵 Spotify integration
- 💬 Discord community link
- 💼 Booking and collaboration opportunities

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone git@github.com:BTheCoderr/okay-k.git
```

2. Install dependencies:
```bash
npm install
```

### Development

To run the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000) (or the next available port if 3000 is in use).

### Build

To create a production build:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

## Project Structure

- `/app` - Application source code
  - `/components` - Reusable React components including MusicPlayer, Navigation, and SocialIcons
  - `/music` - Music-related components and functionality
  - `/about` - About page components
  - `page.jsx` - Main landing page
  - `layout.jsx` - Root layout component
- `/public` - Static assets including images
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## Technologies Used

- Next.js 14.1.0
- Tailwind CSS for styling
- PostCSS for CSS processing
- React for UI components
- Image optimization with Next.js Image component
- Gradient animations and transitions

## Configuration

The project uses several environment variables for configuration. Create a `.env.local` file in the root directory with the following variables:

```env
# Add any required environment variables here
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. 