import Steps from "@/components/cart/Steps";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { useCart } from "@/hooks/useCart";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";

export default function SuccessPage() {
  const { clear } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-100">
      <Header className="bg-[#0e0e0e]" />

      <main className="flex flex-col flex-1 gap-12 sm:gap-16 md:gap-20 items-center justify-center px-4 py-10 sm:py-16 md:py-20">
        <Steps />

        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 md:p-10 text-center w-full max-w-md flex flex-col items-center">
          <div className="mb-4 sm:mb-6 rounded-full p-1 border-2 border-green-500 w-fit">
            <IconCheck className="text-green-500 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-zinc-800 mb-3 sm:mb-4">
            Pedido realizado com sucesso!
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 mb-5 sm:mb-6">
            Agradecemos sua compra. Enviamos os detalhes para o seu e-mail e em breve seu pedido será processado.
          </p>

          <Link
            onClick={() => clear()}
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 sm:px-6 rounded-full transition duration-300 text-sm sm:text-base"
          >
            Voltar para a loja
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
