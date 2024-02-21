import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import CartProvider  from "./components/Provider";
import ShoppingCartModal from "./components/ShoppingCartModal";
import { ThemeProvider } from "./components/ThemeProvider";
import ProviderWrapper from "./PorviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
            <CartProvider>
            <ProviderWrapper>
            <header><NavBar/></header>
            <ShoppingCartModal/>
            {children}
            <footer>footer</footer>
            </ProviderWrapper>
            </CartProvider>
            
          </ThemeProvider>
        
      </body>
    </html>
  );
}
