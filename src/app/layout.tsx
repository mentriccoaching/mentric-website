import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Mentric | Coaching Platform for Lasting Change',
  description: 'The coaching platform that tracks not just what goals are done, but whether they\'re becoming natural. Built for coaches and organisations who believe in sustainable behaviour change.',
  keywords: ['coaching platform', 'executive coaching', 'coaching software', 'goal tracking', 'behaviour change', 'coaching management'],
  authors: [{ name: 'Mentric' }],
  openGraph: {
    title: 'Mentric | Coaching Platform for Lasting Change',
    description: 'The coaching platform that tracks not just what goals are done, but whether they\'re becoming natural.',
    url: 'https://mentriccoaching.com',
    siteName: 'Mentric',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
