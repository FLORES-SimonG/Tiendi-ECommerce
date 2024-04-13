import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ShoppingCartProvider } from "@/Context";
import MenuCheckoutProductsDetail from "@/components/MenuCheckoutProductsDetail";
import Footer from "@/components/footer/Footer";
import Products_cards from "@/components/products_cards/Procucts_cards";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ShoppingCartProvider>
      
    <html lang="en">
      <body className={inter.className}>
       
      <MenuCheckoutProductsDetail />
        {children}
        <Footer />
        </body>
    </html>
    </ShoppingCartProvider>
  );
}
