import Link from "next/link";

export default function Menu() {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-6 text-sm text-white uppercase font-bold">
      <li className="hover:text-orange-500 transition">
        <Link href="/">Início</Link>
      </li>
      <li className="hover:text-orange-500 transition">
        <Link href="/headphones">Headphones</Link>
      </li>
      <li className="hover:text-orange-500 transition">
        <Link href="/speakers">Caixas de Som</Link>
      </li>
      <li className="hover:text-orange-500 transition">
        <Link href="/earphones">Fones de Ouvido</Link>
      </li>
    </ul>
  );
}
