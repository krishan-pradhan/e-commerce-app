import Link from "next/link"
import { fullProduct } from "../lib/interface";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import AddToCart from "./AddToCart";

const ProductCard = ({product}: {product: fullProduct}) => {
  const {price_id, price, name, description, slug, imageUrl, categoryName} = product;
  return (
    <> 
        <div className="group">
            <div className="shadow-lg rounded-lg lg:border-none border overflow-hidden relative">
                <Link href={`/products/${product.slug}`}  tabIndex={-1}>
                  <Image  src={urlFor(imageUrl).url()} alt={name} width={300} height={300} className="w-full object-cover h-[220px] md:h-[340px] lg:h-[400px] max-h-[420px] group-hover:scale-105 group-hover:-translate-y-2 duration-300 ease"></Image>
                </Link>
                <div className="px-2 sm:px-3 py-2 lg:px-6 lg:py-4 md:absolute bottom-0 lg:bottom-[-62px] lg:group-hover:bottom-0 left-0 w-full duration-300 ease backdrop-blur-2xl">
                  <Link href={`/products/${product.slug}`}>
                      <h4 className="font-semibold lg:text-xl text-current md:text-white">{name}</h4>
                  </Link>
                  <div className="flex items-center md:mt-4 mt-2 justify-between flex-wrap gap-2 ">
                    <h5 className="lg:text-lg text-current md:text-white">${price}</h5>
                    <AddToCart currency="USD"
                      size={"M"}
                      quantity={1} 
                      description={ description} 
                      price={price} 
                      price_id={price_id} 
                      name={name} 
                      image={urlFor(imageUrl).url()}
                    />
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard