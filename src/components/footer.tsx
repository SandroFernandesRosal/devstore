import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center">
      <Link
        href="/"
        className="md:text-2xl text-xl font-extrabold  hover:text-primary"
      >
        MyStore
      </Link>
      <p className="font-semibold text-lg">Desenvolvido por Sandro Fernandes</p>
    </footer>
  )
}
