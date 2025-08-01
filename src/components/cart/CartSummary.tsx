'use client'

import { useCart } from "@/hooks/useCart";
import StepButton from "../shared/StepButton";
import { useStepsCart } from "@/hooks/useStepsCart";
import { useRouter } from "next/navigation";
import OrderSummary from "./OrderSummary";

export default function CartSummary() {
  const router = useRouter();

  const { nextStep } = useStepsCart();
  const { setShipping, shippingValue } = useCart();

  const shippingData = [
    { type: "Frete Grátis", price: 0 },
    { type: "Expresso", price: 15 },
  ];

  const handleCheckout = () => {
    nextStep()
    router.push("/checkout")
  }

  return (
    <aside className="w-full lg:w-1/4 border border-zinc-400 rounded-md p-4 shadow-lg
                    bg-white
    ">
      <h3 className="text-lg font-bold mb-6 md:mb-4">Resumo</h3>

      <div className="mb-6 lg:mb-10 space-y-3">
        {shippingData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border border-zinc-900/60 p-3 rounded-md"
          >
            <div className="flex items-center gap-2">
              <input
                onChange={(e) => setShipping(+e.target.value)}
                type="radio"
                name="shipping"
                id={`shipping-${index}`}
                value={item.price}
                checked={item.price === shippingValue}
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor={`shipping-${index}`}
                className="text-black cursor-pointer select-none"
              >
                {item.type}
              </label>
            </div>

            <span className="font-semibold">
              R${" "}
              {item.price > 0
                ? "+" + item.price.toFixed(2)
                : item.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <OrderSummary />

      <StepButton
        onClick={handleCheckout}
      >
        Comprar
      </StepButton>
    </aside>
  );
}
