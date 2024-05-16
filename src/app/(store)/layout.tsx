import { ReactNode } from 'react'
import Header from '../../components/header'
import { CartProvider } from '@/contexts/cart-context'
import MenuCart from '@/components/menu-cart'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5  p-8">
        <Header />
        {children}
        <MenuCart />
      </div>
    </CartProvider>
  )
}
