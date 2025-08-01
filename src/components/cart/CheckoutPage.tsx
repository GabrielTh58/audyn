'use client'
import OrderSummary from "@/components/cart/OrderSummary"
import Steps from "@/components/cart/Steps"
import FormCheckout from "@/components/form/FormCheckout"
import BackLink from "@/components/shared/BackLink"
import Footer from "@/components/shared/Footer"
import SectionHeader from "@/components/shared/SectionHeader"
import StepButton from "@/components/shared/StepButton"
import { useCart } from "@/hooks/useCart"
import { useStepsCart } from "@/hooks/useStepsCart"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items } = useCart()
  const {nextStep, prevStep } = useStepsCart()

  const router = useRouter()
  const handleSuccess = () => {
    nextStep()
    router.push("/success")
  }

  const handlePrevStep = () => {
    prevStep()
    router.push("/cart")
  }

  const renderProductsCart = () => {
    return (
      <div className="flex flex-col gap-8 mb-14">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={item.image.mobile}
                alt={item.name}
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <span className="font-bold">
                  {item.name.split("Headphones")}
                </span>
                <span className="text-gray-500">R$ {item.price}</span>
              </div>
            </div>
            <span className="font-bold text-orange-500/70">
              x{item.quantity}
            </span>
          </div>
        ))}
      </div>
    )
  }
  
  return (
    <main className="bg-zinc-200">
      <SectionHeader category="checkout" />

      <section className="container mb-36 mt-20">
        <Steps />

        <div className="mt-10">
          <BackLink href="/cart" OnClick={handlePrevStep} />
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-9 mt-9  ">
          <FormCheckout />

          <div className="w-full lg:max-w-[400px] flex-1 bg-gray-100 p-8 h-fit">
            <h2 className="text-xl font-bold mb-7">Resumo</h2>

            {renderProductsCart()}
            <OrderSummary isCheckout={true} />

            <div>
              <StepButton onClick={handleSuccess}>Finalizar Pedido</StepButton>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
