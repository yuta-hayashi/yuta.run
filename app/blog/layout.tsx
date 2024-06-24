import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'yuta.run',
  description: 'WebエンジニアYuta HayashiのWebサイトです。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div className='mx-auto my-6 max-w-4xl px-6 lg:px-8'>{children}</div>
}
