import { ReactNode } from 'react'

export default async function StoreLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="mx-auto grid min-h-screen w-full  grid-rows-app gap-5 px-5 md:px-28">
      {children}
    </div>
  )
}
