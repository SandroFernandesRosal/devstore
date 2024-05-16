'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
  price: number
  slug: string
  image: string
  description: string
  title: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (
    productId: number,
    price: number,
    slug: string,
    image: string,
    description: string,
    title: string,
  ) => void
  handleMenu: () => void
  menu: boolean
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  function addToCart(
    productId: number,
    price: number,
    slug: string,
    title: string,
    image: string,
    description: string,
  ) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) =>
          item.productId === productId
            ? {
                ...item,
                quantity: item.quantity + 1,
                price,
                slug,
                title,
                image,
                description,
              }
            : item,
        )
      } else {
        return [
          ...state,
          { productId, quantity: 1, price, slug, title, image, description },
        ]
      }
    })
  }

  return (
    <CartContext.Provider
      value={{ items: cartItems, addToCart, handleMenu, menu }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
