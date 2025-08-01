import NewProducts from "@/components/home/NewProducts";
import Header from "@/components/shared/Header";
import HeroText from "@/components/home/HeroText";
import StoreAdvantages from "@/components/home/StoreAdvantages";
import Footer from "@/components/shared/Footer";
import Testimonials from "@/components/home/Testimonials";
import Categories from "@/components/home/Categories";
import NewsLetter from "@/components/home/Newsletter";
import PromoBanner from "@/components/home/PromoBanner";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
        <div
        className="bg-[#0e0e0e] h-[800px] 
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
