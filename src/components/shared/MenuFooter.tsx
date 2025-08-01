import Link from "next/link";

export default function MenuFooter() {
  return (
    <nav className="mt-10 lg:mt-0">
      <ul className="flex flex-col md:flex-row items-center gap-5 text-sm text-white/80 tracking-[2px] uppercase font-bold">
        <li className="main-text-hover">
          <Link href="/">Início</Link>
        </li>
        <li className="main-text-hover">
          <Link href="/headphones">Headphones</Link>
        </li>
        <li className="main-text-hover">
          <Link href="/speakers">Caixas de Som</Link>
        </li>
        <li className="main-text-hover">
          <Link href="/earphones" className="text">
            Fones de Ouvido
          </Link>
        </li>
      </ul>
    </nav>
  );
}
