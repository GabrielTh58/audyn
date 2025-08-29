import { Product } from "@/core";
import { Products } from "@/functions/products";
import Image from "next/image";
import Link from "next/link";
import Rating from "../shared/Rating";

export default function NewProducts() {
  const { newProducts }: { newProducts: Product[] } = Products();
  function renderNewProducts() {
    return newProducts.map((item: Product) => (
      <div key={item.id} className="hover:shadow-lg w-fit p-4 main-animate">
          <div className="relative group">
            <Link
              href={`/products/${item.slug}`}
              key={item.id}
            >
              <div className="absolute top-5 right-0 main-gradient text-white px-2 py-1 rounded-bl">
                <span>NOVO</span>
              </div>

              <Image
                src={item.image.desktop}
                className="mb-4 rounded group-hover:opacity-45 transition-opacity duration-300 w-full h-auto object-cover"
                alt={item.name}
                width={270}
                height={270}
              />

              <button className="cursor-pointer hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold py-2 px-4 text-white rounded-md absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500">
                Ver mais
              </button>
            </Link>
          </div>

          <div className="flex flex-col gap-2 items-start">
            <Rating rating={item.rating} />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600 font-medium">R$ {item.price.toFixed(2)}</p>

            <Link href={`/products/${item.slug}`} className="block sm:hidden font-bold text-orange-500">
              Ver Mais
            </Link>
          </div>
        
      </div>
    ));
  }

  return (
    <section className="container w-full flex flex-col justify-center gap-7 my-10">
      <h2 className="text-4xl font-bold text-center md:text-start">Novos</h2>

      <div className="grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-3 gap-6">
        {renderNewProducts()}
      </div>
    </section>
  );
}
