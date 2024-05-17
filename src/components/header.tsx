'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import Menu from './menu'

export default function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Scrolling up
        setShowHeader(true)
      } else {
        // Scrolling down
        setShowHeader(false)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <div
      className={`w-full z-40  flex items-center justify-between  py-4 px-8 transition-transform duration-300 ${showHeader ? 'transform translate-y-0 fixed bg-zinc-950 ' : 'transform -translate-y-full'} `}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <Link
            href="/"
            className="md:text-2xl text-xl font-extrabold text-white hover:text-green-700"
          >
            MyStore
          </Link>
        </div>

        <SearchForm />

        <div className="flex items-center gap-4">
          <CartWidget />
          <div className="hidden md:flex w-px h-4 bg-zinc-700" />

          <Link
            href="/"
            className="md:flex items-center gap-2 hover:underline hidden"
          >
            <span className="text-sm">Account</span>
            <Image
              src="https://github.com/sandrofernandesrosal.png"
              className="h-6 w-6 rounded-full"
              width={24}
              height={24}
              alt={'perfil'}
            />
          </Link>
          <Menu />
        </div>
      </div>
    </div>
  )
}
