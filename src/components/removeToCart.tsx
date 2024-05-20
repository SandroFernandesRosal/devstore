'use client'
import { useCart } from '@/contexts/cart-context'
import Link from 'next/link'

export interface RemoveToCartButtonProps {
  productId: number
}

export function RemoveCartButton({ productId }: RemoveToCartButtonProps) {
  const { removeFromCart } = useCart()

  console.log(removeFromCart)

  function handleAddProductToCart() {
    removeFromCart(productId)
  }

  return (
    <Link
      href={`/cart`}
      onClick={handleAddProductToCart}
      className="p-2 flex items-center justify-center rounded-full bg-green-700 font-semibold text-white"
    >
      Remover
    </Link>
  )
}
