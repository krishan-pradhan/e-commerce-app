import { Button } from "@/components/ui/button";
import { fullProduct } from "../lib/interface";
import { client } from "../lib/sanity";
import ProductCard from "./ProductCard";
import Link from "next/link";
async function getData() {
    const query = `*[_type == 'product'][0...4] | order(_createdAt asc){
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      price_id,
      "imageUrl": images[0]
      }
      `;
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

const Newest = async () => {
  const data: fullProduct[] = await getData();
  return (
    <>
    <section className="container">
        <h2 className="my-5">Recently added</h2>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 lg:gap-5">
            {
                data.map((product)=> (
                <div key={product.price_id}>
                  <ProductCard product={product}/>
                </div>
                ) )
            }
        </div>
        <div className="w-full flex justify-center my-5 lg:my-10">
          <Button className="min-w-[200px]" variant={"outline"} tabIndex={-1}>
            <Link href={'./products'}>View All</Link>
          </Button>
        </div>
        
        
    </section>
    </>
  )
}

export default Newest