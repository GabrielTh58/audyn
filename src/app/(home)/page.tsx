import NewProducts from "@/components/landing/NewProducts";
import Header from "@/components/shared/Header";
import HeroText from "@/components/landing/HeroText";
import StoreAdvantages from "@/components/landing/StoreAdvantages";
import Footer from "@/components/shared/Footer";
import Testimonials from "@/components/landing/Testimonials";
import Categories from "@/components/landing/Categories";
import NewsLetter from "@/components/landing/Newsletter";
import PromoBanner from "@/components/landing/PromoBanner";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
        <div
        className="bg-[#0e0e0e] h-[800px] 2xl:py-5
        bg-[url('/products/home/mobile/image-hero.jpg')] 
        sm:bg-[url('/products/home/tablet/image-hero.jpg')] 
        lg:bg-[url('/products/home/desktop/image-hero.jpg')] bg-center bg-cover bg-no-repeat"
      >
        <Header />
        <HeroText />
      </div>

      <Categories />
      <NewProducts />
      <PromoBanner />
      <StoreAdvantages />
      <Testimonials />
      <NewsLetter />  
      <Footer />
    </main>
  )
}
