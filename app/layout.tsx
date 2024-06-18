import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from './_components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'yuta.run',
  description: 'WebエンジニアYuta HayashiのWebサイトです。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <Link href='/'>yuta.run</Link>
        {children}
        <Footer />
      </body>
    </html>
  )
}
