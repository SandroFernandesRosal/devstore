'use client'

import { useState, FormEvent } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function SearchForm() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const inputElement = event.currentTarget.elements.namedItem(
      'q',
    ) as HTMLInputElement
    const newQuery = inputElement.value

    if (!newQuery) {
      return
    }

    setQuery(newQuery)
    router.push(`/search?q=${newQuery}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex lg:w-[320px] items-center md:gap-3 rounded-full bg-zinc-900 md:px-5 md:py-3 px-1 py-1 ring-zinc-700"
    >
      <Search className="w- h-5 text-zinc-500" />
      <input
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar produtos..."
        className="md:flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500 focus:ring-0 border-none rounded-full px-1"
        required
      />
    </form>
  )
}
