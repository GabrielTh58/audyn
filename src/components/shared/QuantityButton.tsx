import { IconMinus, IconPlus } from "@tabler/icons-react";

interface QuantityButtonProps {
  onClick?: () => void;
  children?: React.ReactNode
  signal: "plus" | "minus";
  width?: number;
  height?: number;
}
export default function QuantityButton(props: QuantityButtonProps) {
  const { children, onClick, signal, width=15, height=15 } = props

  const Icon = signal === "plus" 
                ? <IconPlus width={width} height={height}/> 
                : <IconMinus width={width} height={height}/>

  return (
    <button
      onClick={onClick}
      className="cursor-pointer hover:text-orange-500 hover:scale-120 transition-transform"
    >
      {children ? children : Icon}
    </button>
  );
}
