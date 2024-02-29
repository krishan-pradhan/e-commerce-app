'use client';

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import {ProductCart} from "./AddToCart"


const CheckoutNow = ({currency, description, image,  name, price, price_id, quantity, size}:ProductCart) => {
    const { checkoutSingleItem } = useShoppingCart();
    function buyNow(price_id: string){
        checkoutSingleItem(price_id)
    }
    const product ={
      name: name,
      description: description,
      price: price,
      currency: currency,
      image: urlFor(image).url(),
      price_id: price_id,
      quantity: quantity,
      size: size
    }
  return (
    <Button className="h-9 rounded-md px-3 lg:h-10 lg:px-4 lg:py-2 sm:text-base text-xs" onClick={() => buyNow(product.price_id)}>Checkout Now</Button>
  )
}

export default CheckoutNow