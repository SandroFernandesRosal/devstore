import Link from 'next/link'
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import Menu from './menu'

export default function Header() {
  return (
    <div
      className={`w-full z-40  flex items-center justify-between  py-4 px-5 md:px-8 bg-zinc-950/80 fixed '} `}
    >
      <div className="flex items-center justify-between gap-2 w-full">
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
