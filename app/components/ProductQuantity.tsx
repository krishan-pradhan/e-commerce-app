'use client'
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {useEffect, useState } from "react";


interface ProductSizeProps {
  sizes: string[];
}
const ProductQuantity: React.FC<ProductSizeProps> = ({sizes}) => {
    const [quantity, setQuantity] = useState(1);
    const [currentSize, setCurrentSize] = useState("M");
    const searchParams= useSearchParams();
    const currentQ = searchParams.get("quantity")
    const router = useRouter();
    useEffect(()=> {
      router.replace(`?quantity=${quantity}&size=${currentSize}`);
    }, [quantity,currentSize, router])

  return (
    <>
      <div className=' flex gap-2 items-center'>
        <Button variant={"outline"} disabled={quantity === 1} onClick={()=> setQuantity(prev => prev-1)}>-</Button>
        <p> {currentQ}</p>
        <Button variant={"outline"} onClick={()=> setQuantity(prev => prev+1)}>+</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size: string, i)=> (
          <Button className={`${size == currentSize? "opacity-50 cursor-not-allowed": ""}`} 
          variant={'outline'} key={i} 
          onClick={()=>setCurrentSize(size)}>
            {size}</Button>
        ))}
      </div>
    </>
  )
}

export default ProductQuantity