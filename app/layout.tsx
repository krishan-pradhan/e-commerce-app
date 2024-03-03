import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import CartProvider  from "./components/Provider";
import ShoppingCartModal from "./components/ShoppingCartModal";
import { ThemeProvider } from "./components/ThemeProvider";
import ProviderWrapper from "./PorviderWrapper";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            
            <CartProvider>
            <ProviderWrapper>
            <header id="mainHeader" className="fixed top-0 left-0 w-full backdrop-blur-2xl z-40"><NavBar/></header>
            <ShoppingCartModal/>
            {children}
            <footer><Footer/></footer>
            </ProviderWrapper>
            </CartProvider>
            
          </ThemeProvider>
        
      </body>
    </html>
  );
}
