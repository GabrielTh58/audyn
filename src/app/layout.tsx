import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { CartContextProvider } from "@/context/CartContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});


export const metadata: Metadata = {
  title: "Audyn",
  description: "Conheça a Audyn, sua loja especializada em fones de ouvido, caixas de som e acessórios de áudio premium. Inspirada no desafio Audiophile do Frontend Mentor, oferecendo som excepcional e design elegante para uma experiência sonora única.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <CartContextProvider>
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
