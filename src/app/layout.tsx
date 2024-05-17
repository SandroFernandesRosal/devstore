import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { CartProvider } from '@/contexts/cart-context'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | Devstore',
    default: 'Devstore',
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
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
