import Link from 'next/link'
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'
import Menu from './menu'
import ChangeTheme from './changeTheme'

export default function Header() {
  return (
    <div
      className={`w-full z-40 shadow shadow-gray-500  flex items-center justify-between  dark:shadow-black dark:shadow-md py-4 px-5 md:px-20 lg:px-28 dark:bg-bgdark bg-bglight fixed '} `}
    >
      <div className="flex items-center justify-between gap-2 w-full ">
        <div className="flex items-center">
          <Link
            href="/"
            className="md:text-2xl text-xl font-extrabold hover:text-green-950"
          >
            MyStore
          </Link>
        </div>

        <SearchForm />

        <div className="flex items-center gap-4">
          <div className="hidden md:flex">
            <ChangeTheme />
          </div>
          <CartWidget />

          <Link
            href="/"
            className="md:flex items-center hover:underline hidden"
          >
            <span className="text-sm md:hidden">Sandro Fernandes</span>
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
