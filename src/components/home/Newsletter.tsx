import { IconMail, IconSend } from "@tabler/icons-react";

export default function NewsLetter() {
  return (
    <section className="relative bg-zinc-100 py-16 px-4">
      <div className="absolute right-6 bottom-6 opacity-15 text-orange-500 hidden md:block">
        <IconSend className="w-18 h-18 lg:w-28 lg:h-28" />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-zinc-900 mb-4">
          Fique por dentro das novidades
        </h2>
        <p className="text-zinc-700 mb-8">
          Cadastre-se para receber ofertas exclusivas, lançamentos e promoções
          diretamente no seu e-mail.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="border-b border-orange-600 flex items-center px-2 py-2 w-full max-w-md rounded-md">
            <IconMail width={25} height={25} className="text-zinc-800 mr-2" />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full bg-transparent px-2 py-2 text-zinc-800 placeholder-zinc-500 focus:outline-none  focus:ring-orange-500"
            />
            <button
              type="submit"
              className="cursor-pointer font-semibold text-zinc-700 hover:text-orange-500 transition-colors"
            >
              Assinar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
