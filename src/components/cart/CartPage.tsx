import SectionHeader from "../shared/SectionHeader";
import Steps from "./Steps";
import CartItemsTable from "./CartItemsTable";
import CartSummary from "./CartSummary";
import Footer from "../shared/Footer";

export default function CartPage() {

  return (
    <main className="flex flex-col gap-16">
      <SectionHeader category="cart" />

      <Steps />

      <section className="container flex flex-col lg:flex-row justify-between gap-10">
        <CartItemsTable />
        <CartSummary />
      </section>

      <Footer />
    </main>
  )
}