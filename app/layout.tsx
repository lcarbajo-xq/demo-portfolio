import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luis Carbajo Portfolio',
  description: 'Luis Carbajo Projects'
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
