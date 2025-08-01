'use client'
import CartEmptyPage from "@/components/cart/CartEmptyPage";
import CheckoutPage from "@/components/cart/CheckoutPage";
import { useStepsCart } from "@/hooks/useStepsCart";

export default function Page() {
   const { currentStep } = useStepsCart()

  return currentStep == 2 ? <CheckoutPage /> : <CartEmptyPage />
}
