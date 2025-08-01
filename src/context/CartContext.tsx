"use client"
import { createContext, useEffect, useState } from "react"
import { Product, Shipping } from "@/core"
import { Cart } from "@/core"
import useLocalStorage from "@/hooks/useLocalStorage"

interface CartContextValue {
  cart: Cart
  discountValue: number
  items: Product[]
  subtotal: number
  quantityProduct: number
  shippingValue: number
  addItem: (product: Product, quantity: number) => void
  clear: () => void
  calculateDiscount: () => number
  removeItem: (product: Product) => void
  setQuantityProduct: (quantity: number) => void
  setShipping: (value: Shipping) => void
  total: () => number
  updateQuantity: (product: Product, quantity: number) => void
}

export const CartContext = createContext<CartContextValue>({} as CartContextValue)

export function CartContextProvider({ children }: { children: React.ReactNode }) {
  const [quantityProduct, setQuantityProduct] = useState(1)
  const { getItem, setItem } = useLocalStorage()

  const [cart, setCart] = useState(() => {
    const savedData = getItem("cart")
    let initialCart = new Cart()

    if (savedData?.items) {
      savedData.items.forEach((item: Product) => {
        initialCart = initialCart.addItem(item, item.quantity ?? 1);
      });
    }

    if (savedData?.shipping) {
      initialCart = initialCart.setShipping(savedData.shipping);
    }

    return initialCart;
  })

  useEffect(() => {
    setItem("cart", {
      items: cart.cartItems,
      shipping: cart.shipping,
    })
  }, [cart])

  const addItem = (product: Product, quantity: number) => {
    setCart(prev => prev.addItem(product, quantity))
  }

  const removeItem = (product: Product) => {
    setCart(prev => prev.removeItem(product))
  }

  const updateQuantity = (product: Product, quantity: number) => {
    setCart(prev => prev.updateQuantity(product, quantity))
  }

  const clear = () => {
    setCart(prev => prev.clear())
  }

  const setShipping = (value: Shipping) => {
    setCart(prev => prev.setShipping(value))
  }

  const contextValue: CartContextValue = {
    cart,
    items: cart.cartItems,
    subtotal: cart.subtotal(),
    quantityProduct,
    setQuantityProduct,
    addItem,
    removeItem,
    updateQuantity,
    clear,
    setShipping,
    shippingValue: cart.shippingValue,
    discountValue: cart.discountValue,
    calculateDiscount: cart.calculateDiscount,
    total: () => cart.total(),

  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}
