  'use client';

  import { IconDiscountCheck } from "@tabler/icons-react";
  import { useEffect, useState } from "react";

  export default function PromoBanner() {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
      const now = new Date().getTime();
      const countdownDate = now + 3 * 24 * 60 * 60 * 1000;

      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
          clearInterval(interval);
          setTimeLeft("Promoção encerrada");
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }, 1000);

      return () => clearInterval(interval);
    }, [])

    return (
      <section className="border-gradient my-10 w-full relative overflow-hidden shadow-lg bg-gradient-to-r from-zinc-900 to-zinc-800 text-white">
        <div className="relative z-10 px-6 py-16 sm:px-12 flex flex-col items-center text-center gap-4">
          <IconDiscountCheck size={40} className="text-orange-500 animate-pulse" />

          <h2 className="text-3xl sm:text-4xl font-bold">
            Oferta por tempo limitado
          </h2>

          <p className="text-gray-200 max-w-xl">
            Todos os produtos estão com <span className="text-orange-500 font-semibold">20% de desconto</span>. Não perca essa oportunidade!
          </p>

          <p className="text-sm sm:text-base text-orange-400 font-semibold">
            Tempo restante: {timeLeft}
          </p>

          <span className="mt-4 sm:mt-6 px-6 py-2 rounded-full text-sm sm:text-base font-medium bg-black/20 text-gray-200">
            Desconto aplicado automaticamente no carrinho
          </span>
        </div>
      </section>
    );
  }
