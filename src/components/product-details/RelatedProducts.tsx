import { Product, RelatedProduct } from "@/core";
import Image from "next/image";
import ViewProductLink from "../shared/ActionLink";

interface RelatedProductsProps {
  product: Product;
}
export default function RelatedProducts({ product }: RelatedProductsProps) {
  return (
    <section className="container w-full flex flex-col items-center justify-center gap-12 px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center">
        Descubra Mais
      </h1>

      <div className="flex flex-wrap justify-center gap-8">
        {product.others.map((item: RelatedProduct, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 w-full sm:mb-2 sm:w-56"
          >
            <Image
              src={item.image.desktop}
              alt={item.name}
              width={250}
              height={250}
              className="w-full h-auto object-contain md:w-fit md:h-fit"
            />
            <div className="w-full text-center">
              <p className="font-bold text-2xl mb-1">{item.name}</p>
              <span className="text-orange-500 block">
                R$ {product.price.toFixed(2)}
              </span>
            </div>
            <ViewProductLink category={product.category} path={item.slug} />
          </div>
        ))}
      </div>
    </section>
  );
}
