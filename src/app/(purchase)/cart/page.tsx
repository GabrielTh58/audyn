"use client"

import CartPage from "@/components/cart/CartPage";
import CartEmptyPage from "@/components/cart/CartEmptyPage";
import { useCart } from "@/hooks/useCart";

export default function Page() {
  const { items } = useCart();

  return items.length > 0 ? <CartPage /> : <CartEmptyPage />
}