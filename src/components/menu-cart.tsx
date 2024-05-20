'use client'
import { useCart } from '@/contexts/cart-context'
import Link from 'next/link'

export default function MenuCart() {
  const { items, clearCart } = useCart()

  const totalPrice = items.reduce((acc, item) => acc + item.price, 0)

  return (
    <>
      {items.length > 0 ? (
        <>
          <Link href={'/cart'}>
            <div
              className={`flex flex-col items-center justify-center w-full h-[50px] rounded-t-xl px-2 ${items.length > 0 ? 'flex' : 'hidden'} mb-4`}
            >
              <p>
                {items.length} {items.length > 1 ? 'ítems' : 'ítem'} adicionado
                ao carrinho
              </p>
              {/* Correção aqui */}
              <p>Total: R$ {totalPrice}</p>
            </div>
          </Link>
          <button
            onClick={clearCart}
            className="p-2 mb-4 flex items-center justify-center rounded-full bg-green-700 font-semibold text-white"
          >
            Comprar
          </button>
        </>
      ) : (
        <p>Nenhum ítem no carrinho</p>
      )}
    </>
  )
}
