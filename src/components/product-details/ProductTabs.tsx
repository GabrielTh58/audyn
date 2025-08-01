'use client'
import { Product } from "@/core";
import { useState } from "react";

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs(props: ProductTabsProps) {
   const [isSelected, setIsSelected] = useState(false);
  const { product } = props;

  return (
    <div
      className="w-full flex flex-col justify-center items-center h-auto py-8 mb-20
        border-t-5 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 
        border-gradient 
      "
    >
      <div className="w-full max-w-4xl px-4">
        <div className="w-fit text-orange-600 mb-6 transition-colors cursor-pointer">
          <ul className="font-medium flex flex-wrap items-center p-1">
            <li
              className={`border-r border-gray-800 px-3 py-2 bg-black hover:bg-orange-600 hover:text-white
                transition-colors duration-300
                ${!isSelected ? "bg-orange-600 text-white" : ""}  
              `}
            >
              <button
                className="cursor-pointer"
                onClick={() => setIsSelected(false)}
              >
                Características
              </button>
            </li>
            <li
              className={`px-3 py-2 bg-black hover:bg-orange-500 hover:text-white transition-colors duration-300
                  ${isSelected ? "bg-orange-600 text-white" : ""}                  
              `}
            >
              <button
                className="cursor-pointer"
                onClick={() => setIsSelected(true)}
              >
                Itens Inclusos
              </button>
            </li>
          </ul>
        </div>

        {isSelected ? (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Itens Inclusos
            </h2>
            <div className="flex flex-col gap-2">
              {product.includes.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-orange-500 text-base leading-6">
                    {item.quantity}x
                  </span>
                  <span className="text-gray-500 font-medium text-base">
                    {item.item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Características
            </h2>
            <p className="text-sm text-gray-400 whitespace-pre-line">{product.features}</p>
          </div>
        )}
      </div>
    </div>
  );
}
