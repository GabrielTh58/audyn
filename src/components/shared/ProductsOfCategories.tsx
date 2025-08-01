import Image from "next/image";
import { Product } from "@/core";
import ActionLink from "./ActionLink";

interface ProductsOfCategoriesProps {
  products: Product[];
}

export default function ProductsOfCategories({ products }: ProductsOfCategoriesProps) {
  function isEven(num: number) {
    return num % 2 === 0;
  }

  return (
    <>
      {[...products]
        .sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
        .map((item, index) => (
          <div
            key={item.id}
            className={`lg:container w-full flex flex-col lg:flex-row items-center justify-center
              gap-8 lg:gap-32 px-4 lg:px-16
              ${isEven(index + 1) ? "lg:flex-row-reverse" : "lg:flex-row"}
            `}
          >
            <div className="w-full md:w-[500px] lg:w-[540px] relative aspect-[5/6]">
              <Image
                src={item.categoryImage.desktop}
                alt={item.name}
                fill
                sizes="(max-width: 400px) 100vw, (max-width: 1024px) 50vw, 540px"
                className="object-cover rounded-lg"
                priority={index === 0}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
              {item.new && (
                <p className="text-sm tracking-[10px] text-orange-500 mb-6 lg:mb-4">
                  NEW PRODUCT
                </p>
              )}

              <h2 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-start font-bold mb-8 w-full">
                {item.name.replace("Headphones", "")}
              </h2>
              <p className="text-gray-500 md:px-14 lg:px-0 font-medium text-center lg:text-start md:mb-10 w-full xl:w-3/5 leading-6">
                {item.description}
              </p>

              <ActionLink path={item.slug} category={item.category} />
            </div>
          </div>
        ))}
    </>
  );
}
