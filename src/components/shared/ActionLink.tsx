import Link from "next/link";

interface ViewProductLinkProps{
    path: string
    category?: string
    children?: React.ReactNode
    className?: string
}

export default function ActionLink({path, category, children, className}: ViewProductLinkProps) {
    const hrefValue = category ? `/${category}/${path}` : `/${path}` 

  return (
    <Link
      href={hrefValue}
      className={`mt-6 text-center cursor-pointer bg-orange-600/90 font-bold text-white
        px-6 py-3 hover:bg-orange-500/90 transition-colors
        ${className}  
      `}
    >
      {children ? children : "Ver Produto"}
    </Link>
  );
}
