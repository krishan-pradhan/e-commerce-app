import Link from "next/link"
import { fullProduct } from "../lib/interface";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import AddToCart from "./AddToCart";

const ProductCard = ({product}: {product: fullProduct}) => {
  const {price_id, price, name, description, slug, imageUrl, categoryName} = product;
  return (
    <> 
        <div>
            <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
                <Link href={`/products/${product.slug}`}>
                  <Image src={urlFor(imageUrl).url()} alt={name} width={300} height={300} className="w-full"></Image>
                </Link>
                <div className="px-6 py-4">
                  <Link href={`/products/${product.slug}`}>
                      <h3 className="text-gray-900 font-semibold text-lg">{name}</h3>
                  </Link>
                  <div className="flex items-center mt-4">
                    <span className="text-gray-700 font-semibold">${price}</span>
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