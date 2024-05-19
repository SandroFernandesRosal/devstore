import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { CartProvider } from '@/contexts/cart-context'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | MyStore',
    default: 'MyStore',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
