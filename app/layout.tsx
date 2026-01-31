import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Image Generator - Create Stunning Images with DALL-E 3 | Free Online Tool',
  description: 'Generate stunning AI images instantly with DALL-E 3. Text to image, photo-realistic art, Instagram posts, TikTok thumbnails. Free credits daily. Edit and customize with built-in editor.',
  keywords: 'AI image generator, DALL-E 3, text to image, AI art generator, free AI images, image creator, AI photo generator, Instagram post maker, TikTok thumbnail, AI design tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
