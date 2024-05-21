import Image from 'next/image'

import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { ButtonCart } from './button-Cart'
import Link from 'next/link'

export default async function Products() {
  const response = await api('/products', {
    next: {
      revalidate: 60 * 60,
    },
  })

  const products = await response.json()

  return (
    <div className="mt-10">
      <h1 className="md:text-2xl ttext-lg font-bold mb-4 border-l-8 pl-2 border-green-700 rounded-lg">
        Outros produtos
      </h1>

      <div className="flex flex-wrap w-full  gap-3 ">
        {products.map((product: Product) => {
          return (
            <div
              className="w-[100px] gap-2 pb-2 flex  flex-col justify-around md:w-[150px] lg:w-[200px] bg-zinc-900 rounded-md"
              key={product.id}
            >
              <Link href={`/product/${product.slug}`}>
                {' '}
                <Image src={product.image} width={500} height={500} alt="" />
              </Link>
              <Link href={`/product/${product.slug}`}>
                <p className=" text-center px-1">{product.title}</p>
              </Link>
              <div className="flex flex-col md:flex-row justify-evenly gap-2 mx-2 items-center">
                <span className="flex  items-center justify-center rounded-full bg-green-700 px-4 font-semibold">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
                <ButtonCart
                  productId={product.id}
                  price={product.price}
                  slug={product.slug}
                  title={product.title}
                  image={product.image}
                  description={product.description}
                  quantity={product.quantity}
                />
              </div>{' '}
            </div>
          )
        })}
      </div>
    </div>
  )
}
