'use client'
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {useEffect, useState } from "react";

const ProductQuantity = () => {
    const [quantity, setQuantity] = useState(1);
    const searchParams= useSearchParams();
    const currentQ = searchParams.get("quantity")
    const router = useRouter();
    useEffect(()=> {
      router.replace(`?quantity=${quantity}`)
    }, [quantity, router])
  return (
    <>
      <div className=' flex gap-2'>
        <Button variant={"outline"} disabled={quantity === 1} onClick={()=> setQuantity(prev => prev-1)}>-</Button>
        <div>
            {currentQ}
        </div>
        <Button variant={"outline"} onClick={()=> setQuantity(prev => prev+1)}>+</Button>
        <div>quantity</div>
      </div>
    </>
  )
}

export default ProductQuantity