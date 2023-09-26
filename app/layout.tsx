import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luis Carbajo Portfolio',
  description: `I'm a software engineer based in Spain specializing in building (and occasionally designing) exceptional websites, applications, and everything in between. Please check my portfolio and feel free to contact me.`,
  other: {
    'theme-color': '#0d1117',
    'color-scheme': 'dark only',
    'og:url': 'https://demo-portfolio-3y6b.vercel.app/',
    'og:image': '	https://demo-portfolio-3y6b.vercel.app/hero-background.avif',
    'og:type': 'website',
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-black-100 min-h-screen font-poppins text-white'>
        {children}
      </body>
    </html>
  )
}
