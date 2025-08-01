import Footer from "@/components/shared/Footer";
import SectionHeader from "@/components/shared/SectionHeader";
import ProductsOfCategories from "@/components/shared/ProductsOfCategories";
import {useProducts} from "@/hooks/useProducts";

interface HeadphonesProps {
  params:{
    category: string
  }
}
export default function CategoryPage({ params }: HeadphonesProps) {
  const { category } = params  
  const { headphones, speakers, earphones } = useProducts();

  const selectedCategory = category === 'headphones' ? headphones : category === 'speakers' ? speakers : earphones
  
  return (
    <div className="w-full flex flex-col items-center gap-16 md:gap-36">
      <SectionHeader category={category} />
      <ProductsOfCategories products={selectedCategory} />
      <Footer />
    </div>
  );
}
