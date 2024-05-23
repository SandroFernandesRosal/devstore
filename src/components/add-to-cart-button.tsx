'use client'
import { useCart } from '@/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
  price: number
  slug: string
  title: string
  image: string
  description: string
  quantity: number
}

export function AddToCartButton({
  productId,
  price,
  slug,
  image,
  description,
  title,
  quantity,
}: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId, price, slug, title, image, description, quantity)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 h-12 flex items-center justify-center rounded-full bg-green-950 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
