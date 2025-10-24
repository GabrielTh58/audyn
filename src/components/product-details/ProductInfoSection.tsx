import { IconLock, IconTruckDelivery } from "@tabler/icons-react";
import AddToCartButton from "../shared/AddToCartButton.tsx";
import Image from "next/image";
import { Product } from "@/core/index";
import { useCart } from "@/hooks/useCart";
import QuantityButton from "../shared/QuantityButton";
import BackLink from "../shared/BackLink";
import { formatPriceBR } from "@/utils/formatPrice";

interface ProductInfoSectionProps {
  product: Product;
}
export default function ProductInfoSection(props: ProductInfoSectionProps) {
  const { product } = props;
  const { addItem, quantityProduct, setQuantityProduct } = useCart();

  function addToCart(product: Product) {
    addItem(product, quantityProduct);
  }

  return (
    <section className="lg:container flex flex-col px-6 lg:px-16">
      <BackLink href={`/${product.category}`} />

      <div className="w-full flex flex-col md:flex-row justify-center gap-8 lg:gap-32 my-6 lg:my-20">
        <div className="mb-8 md:mb-0 bg-gray-100">
          <Image
            src={product.categoryImage.desktop}
            width={540}
            height={560}
            alt={product.name}
            className="w-full bg-gray-100"
          />
        </div>

        <div className="w-full lg:w-1/2">
          {product.new && (
            <p className="text-sm uppercase tracking-[10px] text-orange-500 mb-6 lg:mb-4">
              Novo
            </p>
          )}

          <div className="flex flex-col gap-6 mb-2">
            <h2 className="text-3xl lg:text-5xl font-bold ">{product.name}</h2>

            <p className="text-gray-500 font-medium w-full lg:w-3/5 leading-6">
              {product.description}
            </p>

            <p className="text-xl font-bold text-orange-500">
              R$ {formatPriceBR(product.price)}
            </p>
          </div>

          <div className="flex items-center  gap-3 border-b border-gray-300 py-8">
            <div className="flex items-center justify-center gap-4 bg-gray-200 max-w-24">
              <div className="flex items-center gap-4 px-2 text-sm sm:text-base sm:px-5 py-3 font-bold">
                <QuantityButton
                  signal="minus"
                  onClick={() => setQuantityProduct(quantityProduct - 1)}
                />
                <span>{quantityProduct}</span>
                <QuantityButton
                  signal="plus"
                  onClick={() => setQuantityProduct(quantityProduct + 1)}
                />
              </div>
            </div>

            <AddToCartButton onClick={() => addToCart(product)}>
              Adicionar ao Carrinho
            </AddToCartButton>
          </div>

          <RenderStoreAdvantage />
        </div>
      </div>
    </section>
  );
}
function RenderStoreAdvantage() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6  my-8">
      <div className="flex-1 flex flex-col xl:flex-row items-center gap-4 xs:gap-2 sm:gap-4">
        <div className="text-orange-300">
          <IconTruckDelivery width={40} height={40} />
        </div>
        <div>
          <h3 className="font-bold mb-1 text-center sm:text-left">
            Entrega Grátis
          </h3>
          <p className="text-sm font-medium text-zinc-400 text-center sm:text-left">
            Acima de R$ 200,00
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col xl:flex-row items-center gap-4 xs:gap-2 sm:gap-4">
        <div className="text-orange-300">
          <IconLock width={40} height={40} />
        </div>
        <div>
          <h3 className="font-bold mb-1 text-center sm:text-left">
            Pagamento Seguro
          </h3>
          <p className="text-sm text-zinc-400 text-center font-medium sm:text-left">
            Para todas as compras
          </p>
        </div>
      </div>
    </div>
  );
}
