'use client';
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
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
              <SheetTitle>Are you absolutely sure?</SheetTitle>
            </SheetHeader>
            <div>
              <ul className="overflow-y-auto max-h-[600px]">
                {cartCount === 0 ? (
                    <h1>Cart is empty</h1>
                ):
                (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="">
                      <div>
                        <Image src={entry.image as string} alt={entry.name} width={100} height={100} ></Image>
                      </div>
                      <div>
                        <h3>{entry.name}</h3>
                        <p>{entry.price}</p>
                        <p className=" line-clamp-2">{entry.description}</p>
                        <p>Id: {entry.id}</p></div>
                        <p>QTY: {entry.quantity}</p>
                        <p>Size: {entry.size}</p>
                        <button onClick={()=> removeItem(entry.id)}>Remove From Cart</button>
                    </li>
                  ))}
                </>
                )}
              </ul>
            </div>
            <div>
              <p>Subtotal: {totalPrice}</p>
              <div>
                <Button onClick={()=> redirectToCheckout()} >Checkout</Button>
                <button onClick={()=> handleCartClick()}>Continue Shopping</button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
    </>
  )
}

export default ShoppingCartModal