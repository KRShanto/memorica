import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { ImageProvider } from '@/context/ImageContext'
import type { Metadata } from 'next'
import { Antic_Didone, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  weight: '400',
  variable: '--font-jakarta',
  subsets: ['latin'],
})
const antic = Antic_Didone({
  weight: '400',
  variable: '--font-antic',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: `%s | Memorica`,
    default: 'Memorica',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ImageProvider>
      <html lang='en'>
        <body className={`${jakarta.variable} ${antic.variable} antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ImageProvider>
  )
}
