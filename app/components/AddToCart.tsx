'use client';

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
export type ProductCart ={
  name: string,
  description: string,
  price: number,
  currency: string,
  image: any,
  price_id: string,
  quantity: number,
  size: any
}

const AddToCart = ({currency, description, image,  name, price, price_id, quantity, size}:ProductCart) => {
    const {addItem, handleCartClick} = useShoppingCart();
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
    <Button className="h-9 rounded-md px-3 lg:h-10 lg:px-4 lg:py-2 sm:text-base text-xs" onClick={() => {addItem(product, {count: quantity}), handleCartClick()}} variant={"outline"}>Add To Cart</Button>
  )
}

export default AddToCart