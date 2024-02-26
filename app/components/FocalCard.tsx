import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { fullProduct } from "../lib/interface"
import Image from "next/image";
import { urlFor } from "../lib/sanity";  
import Link from "next/link";

const FocalCard = ({product}: {product: fullProduct[]}) => {
    const [firstProduct] = product;
    const {price_id, price, name, description, slug, imageUrl, categoryName} = firstProduct;
  return (
    <>
        <div className="relative">
            <HoverCard>
            <HoverCardTrigger><div className="w-7 h-7 cursor-pointer bg-red-400 rounded-full"></div></HoverCardTrigger>
                <HoverCardContent>
                <Link href={`products/${slug}`}>
                    <div className=" flex gap-5 hover:scale-105 duration-300 ease">
                        <div>
                        <Image src={urlFor(imageUrl).url()} alt={name} width={120} height={120} className="rounded-full w-10 h-10 object-cover"></Image>
                        </div>
                        <div className="">
                            <h6 className="mb-2 hover:underline">{name}</h6>
                            <div className=" flex justify-between gap-2">${price}  </div>
                            <div></div>
                        </div>
                    </div>
                    </Link>
                </HoverCardContent>
            </HoverCard>
        </div>
    </>
  )
}

export default FocalCard