import { fullProduct } from "../lib/interface";
import { client } from "../lib/sanity";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
async function getData() {
  
    const query = `*[_type == 'product']{
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      price_id,
      "imageUrl": images[0]
      }`
      const data = await client.fetch(query)
      try {
        if(data){
          return data;
        } else{
          throw new Error("failed to query Data:", data)
        }
      } catch (error) {
        console.log(error)
      }
}
export const dynamic = 'force-dynamic'
const AllProduct = async () => {
  
  const data: fullProduct[] = await getData();
  return (
    <section className="container lg:my-32 my-16">
        <h2 className="lg:text-3xl lg:mb-5 mb-2">All Products</h2>
        <div className="grid grid-cols-2 lg:gap-5 xs:gap-3 gap-2">
            {
                data.map((product)=> (
                <div key={product.price_id}>
                  <ProductCard product={product}/>
                </div>
                ))
            }
        </div>
    </section>
  )
}

export default AllProduct