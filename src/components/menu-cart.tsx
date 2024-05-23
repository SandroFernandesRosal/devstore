'use client'
import { useCart } from '@/contexts/cart-context'

export default function MenuCart() {
  const { items, clearCart } = useCart()

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  return (
    <>
      {items.length > 0 ? (
        <div
          className={`flex justify-evenly z-30 shadow  shadow-white  bg-zinc-900  bottom-0 left-0 fixed items-center py-1   w-full  rounded-t-xl px-2 ${items.length > 0 ? 'flex' : 'hidden'}`}
        >
          <div>
            {' '}
            <p>
              {items.length} {items.length > 1 ? 'ítems' : 'ítem'} adicionado ao
              carrinho
            </p>
            <p>Total: R$ {totalPrice}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={clearCart}
              className="p-2  flex  items-center justify-center rounded-md bg-green-700  text-white"
            >
              Pagar
            </button>

            <button
              onClick={clearCart}
              className="p-2  flex  items-center justify-center rounded-md bg-red-700  text-white"
            >
              Limpar
            </button>
          </div>
        </div>
      ) : (
        <p>Nenhum ítem no carrinho</p>
      )}
    </>
  )
}
