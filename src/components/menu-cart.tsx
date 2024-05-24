'use client'
import { useCart } from '@/contexts/cart-context'

import { useState, useEffect } from 'react'

type MessageState = string | null

export default function MenuCart() {
  const { items, clearCart } = useCart()
  const [message, setMessage] = useState<MessageState>(null)

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(null)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {items.length > 0 ? (
        <div
          className={`flex justify-evenly z-30 shadow-shadowfooter dark:shadow-shadowfooterdark bg-bglightsecundary  dark:bg-bgdarksecundary  bottom-0 left-0 fixed items-center py-1   w-full  rounded-t-xl px-2 ${items.length > 0 ? 'flex' : 'hidden'}`}
        >
          <div className="font-semibold">
            {' '}
            <p>
              {items.length} {items.length > 1 ? 'ítems' : 'ítem'} adicionado ao
              carrinho
            </p>
            <p>Total: R$ {totalPrice}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                clearCart()
                setMessage('Compra finalizada com sucesso!')
              }}
              className="p-2  flex font-semibold text-white items-center justify-center rounded-md bg-primary "
            >
              Pagar
            </button>

            <button
              onClick={() => {
                clearCart()
                setMessage('Você limpou o carrinho!')
              }}
              className="p-2  flex text-white font-semibold  items-center justify-center rounded-md bg-red-500  "
            >
              Limpar
            </button>
          </div>
        </div>
      ) : (
        <>
          {message && (
            <div className="w-[200px] mb-4 text-center p-2 rounded-full bg-bglightsecundary dark:bg-bgdarksecundary overflow-hidden ">
              {message}
            </div>
          )}
          <p className={`${message ? 'hidden' : 'flex'}`}>
            Nenhum ítem no carrinho
          </p>
        </>
      )}
    </>
  )
}
