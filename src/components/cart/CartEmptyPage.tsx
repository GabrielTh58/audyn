'use client';

import ActionLink from "@/components/shared/ActionLink";
import { IconShoppingCart } from "@tabler/icons-react";
import Footer from "@/components/shared/Footer";
import Header from "../shared/Header";

export default function CartEmptyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="bg-[#0e0e0e]" />

      <main className="flex flex-1 items-center justify-center text-center px-4 py-12 sm:py-16 md:py-24">
        <div className="flex flex-col items-center gap-5 sm:gap-6 max-w-sm w-full">
          <IconShoppingCart size={64} className="text-orange-500" />

          <h2 className="text-xl sm:text-2xl font-bold text-zinc-800">
            Seu carrinho está vazio
          </h2>

          <p className="text-zinc-500 text-sm sm:text-base px-2">
            Parece que você ainda não adicionou nenhum item ao seu carrinho.
          </p>

          <ActionLink
            path="/"
            className="bg-zinc-950 text-white px-6 py-2 rounded-md hover:opacity-90 transition w-full max-w-xs"
          >
            Voltar às compras
          </ActionLink>
        </div>
      </main>

      <Footer />
    </div>
  );
}
