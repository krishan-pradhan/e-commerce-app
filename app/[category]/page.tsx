
import { fullProduct} from "../lib/interface";
import { client } from "../lib/sanity"

import ProductCard from "../components/ProductCard";
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

const CategoryPage = async ({params}: { params: {category: string} }) => {
  let parameter = params.category;
  const data: fullProduct[] = await getData(parameter[0].toUpperCase() + parameter.slice(1));
  
  return (
    <section className="container">
        <h2>collection</h2>

        <div className="grid grid-cols-2 gap-5">
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

export default CategoryPage