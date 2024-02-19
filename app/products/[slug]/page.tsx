"use server"
import AddToCart from "@/app/components/AddToCart";
import CheckoutNow from "@/app/components/CheckoutNow";
import ImageGallery from "@/app/components/ImageGallery";
import ProductQuantity from "@/app/components/ProductQuantity";
import { fullProduct } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
    _id,
      images,
      price,
      name,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      price_id,
      sizes
  }
  `;
  const data: fullProduct = await client.fetch(query);
  return data;
}

const ProductPage = async ({params, searchParams}: {params: {slug: string}; searchParams?: { [key: string]: string | string[] | undefined }}) => {
  const product = await getData(params.slug);
  let quantity =  Number(searchParams?.quantity);
  let size = searchParams?.size;
  return (
    <>
      <section>
        <div className="container grid grid-cols-12 gap-5">
          <div className="col-span-7">
            <ImageGallery images={product?.images} />
          </div>
          <div className=" col-span-5 my-10">
            <div className=" sticky top-3 left-0 flex flex-col gap-3">
              <div>{product?.name}</div>
              <div>{product?.price}</div>
              <ProductQuantity sizes={product?.sizes}/>
              <div>{product?.description}</div>
              <div> 
                <CheckoutNow currency="USD"
                  quantity={quantity}
                  size= {size} 
                  description={ product.description} 
                  price={product.price} 
                  price_id={product.price_id} 
                  name={product.name} 
                  image={product.images[0]} 
                />
                <AddToCart currency="USD"
                  quantity={ quantity}
                  size= {size} 
                  description={ product.description} 
                  price={product.price} 
                  price_id={product.price_id} 
                  name={product.name} 
                  image={product.images[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductPage