import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'Heavy Hauler',
  description: 'Discover the wide range of haulers available for every usecase of yours.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
