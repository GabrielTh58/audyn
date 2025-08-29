import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Headphones",
    href: "/headphones",
    image: "/image-category-preview.png",
    alt: "Headphones",
  },
  {
    title: "Fones de Ouvido",
    href: "/earphones",
    image: "/shared/desktop/image-category-thumbnail-earphones.png",
    alt: "Fones de Ouvido",
  },
  {
    title: "Caixa de Som",
    href: "/speakers",
    image: "/shared/desktop/image-category-thumbnail-speakers.png",
    alt: "Caixa de Som",
  },
];

export default function Categories() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Nossa Coleção</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4  gap-8 w-full">
        <Link
          href={categories[0].href}
          className="w-full col-span-1 lg:col-span-2 place-self-center bg-gray-100 hover:bg-gray-200 transition rounded-xl shadow-md main-animate"
        >
          <div className="w-full h-60 relative lg:h-[400px] flex items-center justify-center p-6">
            <Image
              src={categories[0].image}
              alt={categories[0].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="text-center lg:text-left px-6 py-4">
            <h3 className="text-xl lg:text-2xl font-bold mb-2">
              {categories[0].title}
            </h3>
            <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:scale-105 transition-transform">
              <span>Coleção</span>
              <IconArrowRight className="text-orange-600 w-4 h-4" />
            </div>
          </div>
        </Link>

        <div className="w-full lg:col-span-2 flex flex-col md:flex-row lg:flex-col gap-6 items-center">
          {categories.slice(1).map((cat, index) => (
            <Link
              key={index}
              href={cat.href}
              className="w-full bg-gray-100 hover:bg-gray-200 transition rounded-xl overflow-hidden shadow-md main-animate lg:flex lg:flex-row-reverse items-center lg:flex-1"
            >
              <div className="relative w-full h-52 lg:h-40 flex lg:flex-1 items-center justify-center ">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-center lg:text-left px-6 py-2">
                <h3 className="text-lg lg:text-xl font-bold mb-2">
                  {cat.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:scale-105 transition-transform">
                  <span>Coleção</span>
                  <IconArrowRight className="text-orange-600 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
