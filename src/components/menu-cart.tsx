'use client'
import { useCart } from '@/contexts/cart-context'
import Link from 'next/link'

export default function MenuCart() {
  const { items } = useCart()

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0)

  return (
    <Link href={'/cart'}>
      <div
        className={`fixed bottom-0 flex flex-col items-center justify-center md:hidden left-0 w-full h-[50px] rounded-t-xl px-2 bg-green-500/50 ${items.length > 0 ? 'flex' : 'hidden'}`}
      >
        <p>
          {items.length} {items.length > 1 ? 'ítems' : 'ítem'} adicionado ao
          carrinho
        </p>
        {/* Correção aqui */}
        <p>Total: R$ {totalPrice}</p>
      </div>
    </Link>
  )
}
