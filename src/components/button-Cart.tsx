'use client'
import { useCart } from '@/contexts/cart-context'
import { ShoppingCart } from 'lucide-react'

export interface AddToCartButtonProps {
  productId: number
  price: number
  slug: string
  title: string
  image: string
  description: string
  quantity: number
}

export function ButtonCart({
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
    <ShoppingCart
      onClick={handleAddProductToCart}
      className=" hover:text-green-700  cursor-pointer"
      size={30}
    />
  )
}
