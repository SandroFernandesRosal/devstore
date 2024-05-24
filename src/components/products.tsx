import Image from 'next/image'

import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { ButtonCart } from './button-Cart'
import Link from 'next/link'

export default async function Products() {
  const response = await api('/products', {
    next: {
      revalidate: 1,
    },
  })

  const products = await response.json()

  return (
    <div className="mt-10">
      <h1 className="md:text-2xl ttext-lg font-bold mb-4 border-l-8 pl-2 border-primary rounded-lg">
        Outros produtos
      </h1>

      <div className="flex flex-wrap w-full  gap-3 justify-center md:justify-start ">
        {products.map((product: Product) => {
          return (
            <div
              className="w-[31%] gap-2 pb-2 flex  flex-col pt-2 md:w-[150px] lg:w-[200px] dark:bg-bgdarksecundary bg-bglightsecundary shadow shadow-gray-500 rounded-md dark:shadow-shadowfooterdark  "
              key={product.id}
            >
              <Link href={`/product/${product.slug}`} className="group">
                {' '}
                <Image
                  src={product.image}
                  width={500}
                  height={500}
                  alt={product.title}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <Link href={`/product/${product.slug}`}>
                <p className=" text-center px-1">{product.title}</p>
              </Link>
              <div className="flex flex-col  md:flex-row justify-end md:items-end h-full md:justify-evenly gap-2 mx-2 items-center">
                <span className="flex  items-center justify-center rounded-full bg-primary px-4 font-semibold">
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
