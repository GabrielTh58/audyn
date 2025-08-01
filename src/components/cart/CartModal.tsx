import { useCart } from "@/hooks/useCart";
import ActionLink from "../shared/ActionLink";
import { usePathname, useRouter } from "next/navigation";

interface CartModalProps {
  setCartModal: (cartModal: boolean) => void;
}

export default function CartModal({ setCartModal }: CartModalProps) {
  const { items, clear, subtotal } = useCart();
  const path = usePathname();
  const router = useRouter();

  const handleRemoveAll = () => {
    clear();
    const isInCartOrCheckout =
      path.includes("cart") || path.includes("checkout");
    isInCartOrCheckout && router.push("/");
  };

  return (
    <div
      className="fixed top-0 right-0 w-full h-screen bg-black/40 z-20"
      onClick={() => setCartModal(false)}
    >
      <div
        onClick={(e: any) => e.stopPropagation()}
        className="absolute top-24 right-4 sm:right-20 bg-[#f9f9f9] w-[90%] sm:w-96 z-30 p-6 sm:p-8 flex flex-col gap-4 rounded-md max-h-screen overflow-y-auto"
      >
        <div className="flex items-center justify-between">
          <h4 className="text-lg sm:text-xl font-bold">Carrinho ({items.length})</h4>
          <button
            onClick={handleRemoveAll}
            className="text-sm cursor-pointer text-gray-500 hover:text-orange-500 transition-colors"
          >
            Limpar
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {items.map((item: any) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={item.image.mobile}
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    R$ {item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <span className="bg-gray-200 px-4 py-1 text-sm font-semibold">
                {item.quantity}
              </span>
            </div>
          ))}

          {items.length > 0 && (
            <div className="flex items-center justify-between mt-4">
              <span className="text-gray-500 uppercase text-sm font-medium">Total</span>
              <span className="font-bold text-lg">R$ {subtotal.toFixed(2)}</span>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-4">
            <ActionLink path="cart">Ver Carrinho</ActionLink>
          </div>
        )}
      </div>
    </div>
  );
}
