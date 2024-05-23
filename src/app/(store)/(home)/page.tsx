import { Metadata } from 'next'
import Highlights from '@/components/highlights'
import Products from '@/components/products'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <div className="min-h-screen  pt-20">
      <Highlights />
      <Products />
    </div>
  )
}
