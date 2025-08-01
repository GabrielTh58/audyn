'use client'
import ProductInfoSection from "@/components/product-details/ProductInfoSection";
import ProductTabs from "@/components/product-details/ProductTabs";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Product } from "@/core";
import {useProducts} from "@/hooks/useProducts";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    slug: string
  }
}
export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params
  const { getItemsBySlug } = useProducts()

  const product: Product | undefined = getItemsBySlug(slug)

  if (!product) return notFound()

  return (
    <div className="flex flex-col gap-4 lg:gap-20 bg-[#f7f7f7]">
      <div className="bg-[#0e0e0e]">
        <Header />
      </div>
      
      <ProductInfoSection product={product} />
      <ProductTabs product={product}  />
      <RelatedProducts product={product} />
      <Footer />
    </div>
  );
}
