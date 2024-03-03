'use client';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle
  } from "@/components/ui/sheet"
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
  
const ShoppingCartModal = () => {
  const {cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout } = useShoppingCart();

  // async function handleCheckoutClick(event:any) {
  //   event.preventDefault();
  //   try {
  //     const result = await redirectToCheckout();
  //     if(result?.error){
  //       console.log("result")
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <>
      <Sheet open={shouldDisplayCart}  onOpenChange={() => handleCartClick()} >
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Shopping Bag</SheetTitle>
            </SheetHeader>
            <div className="h-full flex justify-between flex-col pt-6">
              {cartCount === 0 ? (
                <h1 className="lg:text-4xl">Cart is empty</h1>
                ):
                (
                <>
                  <div>
                    <ul className="overflow-y-auto h-[480px] max-h-[500px] flex flex-col gap-5">
                        {Object.values(cartDetails ?? {}).map((entry) => (
                          <li key={entry.id} className=" flex gap-3 ">
                            <div>
                              <Image className="w-[140px] h-[120px] object-cover" src={entry.image as string} alt={entry.name} width={100} height={100} ></Image>
                            </div>
                            <div className="flex flex-col justify-between gap-5 w-full">
                                <div>
                                  <h5 className="lg:text-lg">{entry.name}</h5>
                                  <p className="text-sm opacity-75">Size: {entry.quantity} | Qty: {entry.size}</p>
                                </div>  
                                <div className="flex justify-between items-center gap-3">
                                  <p>${entry.price}</p>
                                  <p className="hidden line-clamp-2 text-sm opacity-75">{entry.description}</p>
                                  <button className="underline" type="button" onClick={()=> removeItem(entry.id)}>Remove</button>
                                </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="h-full border-t border-t-gray-500 flex flex-col justify-center lg:gap-5 gap-2 pt-1">
                    <div className="flex justify-between gap-5 flex-wrap">
                      <h5 className="lg:text-lg">Subtotal: <span className="text-xs opacity-75">{cartCount} Items</span></h5>
                      <p>${totalPrice}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Button onClick={()=> redirectToCheckout()} >Checkout</Button>
                      <span>or</span>
                      <button onClick={()=> handleCartClick()}>Continue Shopping</button>
                    </div>
                    <p className="text-sm">Shipping & Taxes Calculated at Checkout</p>
                  </div>
              </>
              )}
            </div>  
          </SheetContent>
      </Sheet>
    </>
  )
}

export default ShoppingCartModal