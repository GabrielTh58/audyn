'use client';

import { IconShoppingCart, IconMenu2, IconX } from "@tabler/icons-react";
import Logo from "./Logo";
import { useState } from "react";
import CartModal from "../cart/CartModal";
import Menu from "./Menu";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [cartModal, setCartModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCartModal = () => {
    setCartModal(!cartModal);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full py-8  md:py-9 border-b border-zinc-800 ${className}`}
    >
      <div className="lg:container px-6 flex justify-between items-center relative">
        <Logo />

        <nav className="hidden lg:block gap-8">
          <Menu />
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={toggleCartModal} className="z-30 relative cursor-pointer">
            <IconShoppingCart className="text-white" />
          </button>

          <button
            className="lg:hidden z-30 text-white"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <IconX /> : <IconMenu2 />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-10 right-0 px-4 bg-zinc-900/95 rounded-sm mr-4 text-white py-6
             flex flex-col items-center gap-6 z-20 lg:hidden animate-fade-in"
          >
            <Menu />
          </div>
        )}

        {cartModal && <CartModal setCartModal={setCartModal} />}
      </div>
    </header>
  );
}
