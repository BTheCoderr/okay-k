import './globals.css'

export const metadata = {
  title: 'oKay | Official Website',
  description: 'Welcome to the official website of oKay',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 