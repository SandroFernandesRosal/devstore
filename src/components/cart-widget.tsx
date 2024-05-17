'use client'
import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export function CartWidget() {
  const { items } = useCart()
  return (
    <Link href={'/cart'} className=" items-center gap-2 flex">
      <ShoppingBag className="" />

      <span
        className={`text-sm absolute w-4 h-4 justify-center items-center top-10 ml-[4px]  bg-green-700/70 rounded-full ${items.length > 0 ? 'flex' : 'hidden'}`}
      >
        {items.length}
      </span>
    </Link>
  )
}
