import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lita At Work',
  description: 'smooth & simple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-50'>{children}</body>
    </html>
  )
}
