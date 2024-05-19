import { ReactNode } from 'react'

import { CartProvider } from '@/contexts/cart-context'

import Header from '@/components/header'
import Footer from '@/components/footer'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full  grid-rows-app gap-5">
        <Header />
        {children}

        <Footer />
      </div>
    </CartProvider>
  )
}
