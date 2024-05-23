'use client'
import { useCart } from '@/contexts/cart-context'
import { AlignRight, X, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Menu() {
  const { handleMenu, menu, items } = useCart()
  return (
    <>
      {!menu ? (
        <AlignRight
          onClick={handleMenu}
          size={40}
          className="md:hidden cursor-pointer hover:text-green-950"
        />
      ) : (
        <X
          onClick={handleMenu}
          size={40}
          className="md:hidden cursor-pointer hover:text-green-950"
        />
      )}

      <div
        className={`fixed top-[75px]  right-0 z-30 flex min-h-screen w-[70%] transform rounded-l-xl flex-col items-center pt-5 gap-10 bg-black/70 font-bold backdrop-blur-md transition-transform duration-300 md:hidden ${
          menu ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2 hover:underline"
          onClick={handleMenu}
        >
          <span className="text-xl">Sandro Fernandes</span>
          <Image
            src="https://github.com/sandrofernandesrosal.png"
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
            alt={'perfil'}
          />
        </Link>

        <Link
          href={'/cart'}
          className="flex items-center gap-2"
          onClick={handleMenu}
        >
          <ShoppingCart />
          <span className="text-xl">Cart ({items.length})</span>
        </Link>
      </div>
    </>
  )
}
