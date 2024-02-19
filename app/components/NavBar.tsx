"use client"
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { mainNavLink } from "../lib/localData";
import { useShoppingCart } from "use-shopping-cart";
import { ModeToggle } from "./ThemeToggle";
const NavBar = () => {
    const pathName = usePathname();
    const {handleCartClick} = useShoppingCart();
  return (
    <>
    <nav className=" p-4">
        <div className="container mx-auto flex justify-between md:items-center item-start md:flex-row flex-col">
          <Link href="/">
            <span className=" text-lg font-bold">MyWebsite</span>
          </Link>
          <ul className="flex space-x-4">
              {mainNavLink.map((link, i) =>(
                  <li className="{}" key={i}>
                  <Link href={link.href}>
                    <span className={` hover:text-gray-300 ${pathName === link.href ? " text-gray-600": ''}`}>{link.name}</span>
                  </Link>
                </li>
              ) 
              )}
          </ul>
          <div className="flex items-center gap-3">
            <ModeToggle/>
            <Link href={'/search'}><Button tabIndex={-1} variant={"ghost"}><Search size={"18px"}/></Button></Link>
            <Button variant={"ghost"} color={"black"} onClick={()=>{handleCartClick()}} ><ShoppingBag size={"18px"}/></Button>
          </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar