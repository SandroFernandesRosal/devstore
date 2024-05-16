'use client'
import { useCart } from '@/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
  price: number
  slug: string
  title: string
  image: string
  description: string
}

export function AddToCartButton({
  productId,
  price,
  slug,
  image,
  description,
  title,
}: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId, price, slug, title, image, description)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 h-12 max-w-[350px] flex items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
