import Footer from "@/components/shared/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import ProductsOfCategories from "@/components/shared/ProductsOfCategories";
import { Products } from "@/functions/products";
import { use } from "react";

interface CategoryPageParams{
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageParams) {
  const { category } = use(params);
  const { headphones, speakers, earphones } = Products();
    console.log(category);

  const selectedCategory = category === "headphones" ? headphones : category === "speakers" ? speakers : earphones;

  return (
    <div className="w-full flex flex-col items-center gap-16 md:gap-36">
      <SectionHeader category={category} />
      <ProductsOfCategories products={selectedCategory} />
      <Footer />
    </div>
  );
}
