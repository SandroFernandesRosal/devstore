'use client'
import { useCart } from '@/contexts/cart-context'
import { AlignRight, X, ShoppingBag } from 'lucide-react'

import Link from 'next/link'
import Image from 'next/image'

export default function Menu() {
  const { handleMenu, menu, items } = useCart()
  return (
    <>
      {menu === false ? (
        <AlignRight
          onClick={handleMenu}
          size={40}
          className="md:hidden cursor-pointer hover:text-green-700"
        />
      ) : (
        <X
          onClick={handleMenu}
          size={40}
          className="md:hidden cursor-pointer hover:text-green-700"
        />
      )}

      {menu && (
        <div className="absolute top-20 left-0 z-30 flex min-h-screen w-[100%] transform flex-col items-center pt-5  gap-10 bg-bglightsecundary font-bold backdrop-blur-md transition-transform duration-500 ease-in-out dark:bg-bgdarksecundary md:hidden">
          <Link href="/" className="flex items-center gap-2 hover:underline">
            <span className="text-xl">Account</span>
            <Image
              src="https://github.com/sandrofernandesrosal.png"
              className="h-6 w-6 rounded-full"
              width={24}
              height={24}
              alt={'perfil'}
            />
          </Link>

          <div className=" items-center gap-2 flex">
            <ShoppingBag className="h-5 w-5" />
            <span className="text-xl">Cart ({items.length})</span>
          </div>
        </div>
      )}
    </>
  )
}
