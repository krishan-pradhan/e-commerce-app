import { fullProduct } from "../lib/interface";
import { client } from "../lib/sanity";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import Search from "../components/Search";
import { notFound } from 'next/navigation';
async function getData(queryData: string | string[] | undefined) {
    
      if(queryData){
        const query = `*[_type == 'product' && name match '${queryData}' + "*"]{
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id,
          "imageUrl": images[0]
          }`
          const data = await client.fetch(query, {queryData})
      try {
        if(data){
          return data;
        } else{
          throw new Error("failed to query Data:", data)
        }
      } catch (error) {
        console.log(error)
      }
    } else{
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
}

const SearchPage = async ({searchParams}: {searchParams?: { [key: string]: string | string[] | undefined }}) => {
  const queryData = searchParams?.q
  const data: fullProduct[] = await getData(queryData);
  return (
    <section className="container lg:my-40 my-20">
        <Search/>
        {data.length === 0?
        notFound(): 
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
              {
                  data.map((product)=> (
                  <div key={product.price_id}>
                      <ProductCard product={product}/>
                  </div>
                  ))
              }
          </div>
        </div>
        }
    </section>
  )
}

export default SearchPage