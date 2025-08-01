"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import QuantityButton from "../shared/QuantityButton";
import { IconX } from "@tabler/icons-react";

export default function CartItemsTable() {
  return (
    <div className="w-full lg:w-3/4">
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-center">
          <thead>
            <tr className="border-b border-zinc-200">
              <th className="text-left py-2">Produto</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <RenderCartItemDesktop />
        </table>
      </div>

      <div className="block sm:hidden space-y-4 mt-4">
        <RenderCartItemMobile />
      </div>
    </div>
  );
}

function RenderCartItemDesktop() {
  const { items, updateQuantity } = useCart();

  return (
    <tbody>
      {items.map((item, index) => (
        <tr key={index} className="text-center border-b border-orange-200">
          <td className="py-3 flex items-center gap-3">
            <Image
              src={item.image.mobile}
              alt={item.name}
              width={50}
              height={50}
            />
            <span className="text-sm font-bold">{item.name}</span>
          </td>
          <td>
            <div className="flex justify-center">
              <div className="border flex items-center gap-3 px-2 border-zinc-400/80 shadow-sm">
                <QuantityButton
                  signal="minus"
                  onClick={() => updateQuantity(item, item.quantity! - 1)}
                />
                <span className="text-sm">{item.quantity}</span>
                <QuantityButton
                  signal="plus"
                  onClick={() => updateQuantity(item, item.quantity! + 1)}
                />
              </div>
            </div>
          </td>
          <td>
            <span className="text-black/70">R$ {item.price}</span>
          </td>
          <td>
            <span className="font-bold">
              R$ {(item.price * item.quantity!).toFixed(2)}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

function RenderCartItemMobile() {
  const { items, updateQuantity, removeItem } = useCart();

  return (
    <>
      <h3 className="font-semibold pb-4 border-b border-zinc-300">Produtos</h3>
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-zinc-200 rounded-md p-3 flex justify-between items-start"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <Image
                src={item.image.mobile}
                alt={item.name}
                width={50}
                height={50}
              />
              <div className="flex flex-col">
              <span className="font-bold text-sm">{item.name.split("Headphones")}</span>

              <div className="mt-2">
                <div className="border flex items-center gap-3 px-2 border-zinc-400/80 shadow-sm w-fit">
                  <QuantityButton
                    signal="minus"
                    onClick={() => updateQuantity(item, item.quantity! - 1)}
                  />
                  <span className="text-sm">{item.quantity}</span>
                  <QuantityButton
                    signal="plus"
                    onClick={() => updateQuantity(item, item.quantity! + 1)}
                  />
                </div>
              </div>

              </div>
            </div>

          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="text-black/70 text-sm font-bold">R$ {item.price}</span>
            <button onClick={() => removeItem(item)}>
              <IconX size={18} className="text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
