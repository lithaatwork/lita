import './globals.css'
import type { Metadata } from 'next'
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: 'Litha At Work',
  description: 'smooth & simple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=''>
      <Header />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
