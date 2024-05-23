import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center">
      <Link
        href="/"
        className="md:text-2xl text-xl font-extrabold text-white hover:text-green-950"
      >
        MyStore
      </Link>
      <p>Desenvolvido por Sandro Fernandes</p>
    </footer>
  )
}
