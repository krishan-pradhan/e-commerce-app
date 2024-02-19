import { fullProduct } from "../lib/interface";
import { client } from "../lib/sanity";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import Search from "../components/Search";
import { Suspense } from "react";
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
    <section className="container">
        <Search/>
        {data.length === 0?
        notFound(): 
        <div>
          <div className="grid grid-cols-2 gap-5">
              {
                  data.map((product)=> (
                  <div key={product.price_id}>
                    <Suspense fallback={<p>loading...?</p>}>
                      <ProductCard product={product}/>
                    </Suspense>
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