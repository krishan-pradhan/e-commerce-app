
import { fullProduct} from "../lib/interface";
import { client } from "../lib/sanity"

import ProductCard from "../components/ProductCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
async function getData(category: string) {
    const query = `*[_type == 'product' && category->name == "${category}"]{
        price,
        name,
        description,
        "slug": slug.current,
        "categoryName": category->name,
        price_id,
        "imageUrl": images[0]
      }`
    const data = await client.fetch(query);
    return data;  
}
export const dynamic = 'force-dynamic'

const CategoryPage = async ({params}: { params: {category: string} }) => {    
  let parameter = params.category;
  const data: fullProduct[] = await getData(parameter[0].toUpperCase() + parameter.slice(1));
  const session = await getServerSession();
  if (!session || !session.user) { 
    redirect('/') 
  }
  return (
    <>
    <section className="lg:mb-20 mb-10 relative overflow-hidden">
      <div className="w-full absolute top-0 left-0 h-full flex items-center pl-10 bg-gradient-to-r from-[#000000af] to-[#ffffff10] text-white"> <h1 className="lg:text-4xl">{parameter}</h1> </div>
      <Image className=" min-h-[320px] max-h-[580px] w-full object-cover " src={`/images/jpg/${parameter}.jpg`} width={1920} height={600} alt="collection banner image"></Image>
    </section>
    <section className="container lg:mb-20 mb-10">
        <h2 className="lg:mb-5 mb-2 lg:text-3xl">collection</h2>  
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
            {
                data.map((product)=> (
                    <div key={product.price_id}>
                        <ProductCard product={product}/>
                    </div>
                ))
            }
        </div>
    </section>
    </>
  )
}

export default CategoryPage