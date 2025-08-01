'use client'
import { useStepsCart } from "@/hooks/useStepsCart";
import { IconCheck } from "@tabler/icons-react";

export default function Steps() {
  const { currentStep } = useStepsCart();

  const stepsData = [
    { step: 1, name: "Carrinho" },
    { step: 2, name: "Checkout" },
    { step: 3, name: "Pedido Feito" },
  ]
  
  return (
    <section className="lg:container flex items-center justify-center gap-4 sm:gap-14">
      {stepsData.map((step) => (
        <div
          key={step.step}
          className={`flex flex-col items-center gap-4 py-3 px-1 sm:px-2
            ${currentStep === step.step ? "border-b border-zinc-950" : ""}
            ${currentStep > step.step ? "border-b border-green-500/70" : ""}  
          `}
        >
          <div
            className={`w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full  text-white 
              ${currentStep === step.step ? "bg-zinc-950" : ""}
              ${currentStep > step.step ? "bg-green-600/70" : "bg-zinc-400"}
            `}
          >
            <span className="text-sm sm:text-base" >{currentStep > step.step ? <IconCheck width={10} height={10} className="md:w-4 md:h-4" /> : step.step}</span>
          </div>
          <span
            className={`text-sm sm:text-xl
              ${currentStep === step.step ? "font-bold text-zinc-900" : ""}
              ${currentStep > step.step ? "font-bold text-green-600/70" : "text-zinc-400"}  
            `}
          >
            {step.name}
          </span>
        </div>
      ))}
    </section>
  );
}
