import { useCart } from "@/hooks/useCart";

interface OrderSummaryProps {
    isCheckout?: boolean
}
export default function OrderSummary(props: OrderSummaryProps) {
  const { isCheckout = false} = props
  const { items, subtotal, shippingValue, total, discountValue, calculateDiscount} = useCart();

  return (
    <div>
      <div className={`${isCheckout ? 'hidden' : 'flex'} justify-between mb-2`}>
        <span className="text-zinc-600 uppercase">Total de itens:</span>
        <span className="font-bold">{items.length}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-zinc-600 uppercase">Frete:</span>
        <span className="font-bold">R$ {shippingValue.toFixed(2)}</span>
      </div>
      <div className="flex justify-between pb-3">
        <span className="text-zinc-600 uppercase">Subtotal:</span>
        <span className="font-bold">R$ {subtotal.toFixed(2)}</span>
      </div>
       <div className="flex justify-between border-b border-zinc-200 mb-3 pb-3">
        <span className="text-zinc-600 uppercase">Desconto ({discountValue * 100}%):</span>
        <span className="font-bold">R$ {calculateDiscount().toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-8 font-bold">
        <span className="text-zinc-600 uppercase">Total:</span>
        <span className="text-orange-500">
          R$ {total().toFixed(2)}
        </span>
      </div>
    </div>
  );
}
