"use client"
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Search, ShoppingBag, Menu, X, Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavLink } from "../lib/localData";
import { useShoppingCart } from "use-shopping-cart";
import { ModeToggle } from "./ThemeToggle";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

const NavBar = () => {
    const {data: session } = useSession();
    const pathName = usePathname();
    const {handleCartClick} = useShoppingCart();
    const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <>
    <header id="mainHeader" className={`fixed top-0 left-0 w-full backdrop-blur-2xl z-40 mainHeader ${menuOpen? "active": ""}`}>
      <div id="mainNav" className={`inner-header lg:p-4 py-2 sticky ${menuOpen? "active": ""}`}>
        <div className="header-wrapper container mx-auto flex lg:justify-between justify-start lg:items-center item-start lg:flex-row flex-col overflow-y-auto">
          <div className="flex items-center justify-between">
          <Link className="border p-3 rounded-full hover:opacity-75" title="store logo" href="/" onClick={()=> setMenuOpen(menuOpen ? false : menuOpen)}><Store/></Link>
            <div className="flex justify-center items-center sm:gap-5 gap-1">
              {session? <p className=" text-xs sm:text-sm lg:hidden block">{session?.user?.name}</p>: '' }
              <Toggle className="lg:hidden block" onPressedChange={(pressed: boolean) => {
                setMenuOpen(pressed)
              }} >
              { menuOpen? <X />: <Menu />}
              </Toggle>
            </div>
          </div>
          <div className="menu-list flex lg:items-center items-start gap-5 lg:min-w-[60%] justify-between lg:flex-row flex-col">
              <nav> 
                <ul className={`flex lg:space-x-4 lg:flex-row flex-col lg:w-auto w-full items-center ${menuOpen? 'menuOpen': 'menuclose'}`}>
                    {mainNavLink.map((link, i) =>(
                        <li className="{}" key={i}>
                        <Link href={link.href} onClick={()=> setMenuOpen(menuOpen ? false : menuOpen)}>
                          <span className={`lg:text-base text-2xl lg:py-0 py-5 block hover:opacity-70 ${pathName === link.href ? " opacity-70": 'hover:underline'}`}>{link.name}</span>
                        </Link>
                      </li>
                    ) 
                    )}
              </ul>
              </nav>
              <div className={`flex items-center lg:justify-start justify-center gap-2 lg:w-auto w-full lg:mb-0 mb-3 ${menuOpen? 'menuOpen': 'menuclose'}`}>
                <Link href={'/search'} onClick={()=> setMenuOpen(menuOpen ? false : menuOpen)}><Button tabIndex={-1} variant={"ghost"}><Search size={"18px"}/></Button></Link>
                <Button variant={"ghost"} color={"black"} onClick={()=>{session? handleCartClick(): signIn()} }><ShoppingBag size={"18px"}/></Button>
                {session? <p className=" text-sm lg:block hidden">{session?.user?.name}</p>: '' } 
                <Button variant={session ? "destructive" : 'outline'}  onClick={session ? ()=> {signOut()} : ()=> {signIn()}}>{session ? 'Log out' : 'Log in'}</Button>
                <ModeToggle/> 
              </div>
          </div>
        </div>
      </div>
      </header>
    </>
  )
}

export default NavBar