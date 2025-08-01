interface AddToCartButtonProps {
    children: React.ReactNode
    onClick?: () => void
}
export default function AddToCartButton(props: AddToCartButtonProps) {
  return (
    <button 
      onClick={props.onClick}
      className="text-sm sm:text-base cursor-pointer font-bold text-white px-2 md:px-6 py-3
        bg-orange-600/90 hover:bg-orange-400 transition-colors
    ">
      {props.children}
    </button>
  );
}
