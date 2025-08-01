import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-6xl font-bold mb-4">Produto não encontrado</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-md">
        O produto que você está procurando não existe ou foi removido.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition"
      >
        <IconArrowLeft size={20} stroke={2.5} />
        Voltar para a loja
      </Link>
    </div>
  );
}
