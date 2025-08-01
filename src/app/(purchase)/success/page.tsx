'use client'
import CartEmptyPage from "@/components/cart/CartEmptyPage";
import SuccessPage from "@/components/cart/SuccessPage";
import { useStepsCart } from "@/hooks/useStepsCart";

export default function Page() {
  const { currentStep } = useStepsCart()
  
  return currentStep == 3 ? <SuccessPage /> : <CartEmptyPage />
  
}
