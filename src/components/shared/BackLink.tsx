import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

interface BackLinkProps {
  href: string;
  OnClick?: () => void
}
export default function BackLink(props : BackLinkProps) {
  const { href, OnClick } = props
  return (
    <Link
      onClick={OnClick}
      href={href}
      className="flex items-center gap-1 text-gray-500 text-sm w-fit hover:text-orange-500 hover:scale-105 transition-colors duration-500"
    >
      <IconChevronLeft width={16} /> 
      Voltar
    </Link>
  );
}

