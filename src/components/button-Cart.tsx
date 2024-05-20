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
}

export function ButtonCart({
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
    <ShoppingCart
      onClick={handleAddProductToCart}
      className=" hover:text-green-700 self-center cursor-pointer"
      size={30}
    />
  )
}
