"use server"
import AddToCart from "@/app/components/AddToCart";
import CheckoutNow from "@/app/components/CheckoutNow";
import ImageGallery from "@/app/components/ImageGallery";
import ProductQuantity from "@/app/components/ProductQuantity";
import { fullProduct } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
      <section  className="lg:my-32 my-16">
        <div className="container grid xs:grid-cols-12 gap-5">
          <div className="hidden xs:block sm:col-span-7 xs:col-span-5">
            <ImageGallery images={product?.images} />
          </div>
          <div className=" xs:col-span-7 sm:col-span-5">
            <div className=" sticky top-0 left-0 flex flex-col gap-5 xs:pt-0 pt-5">
              <div>
                <h2 className="lg:text-3xl">{product?.name}</h2>
                <h5 className="lg:text-lg">${product?.price}</h5>
              </div>
              <div className="block xs:hidden sm:col-span-7 col-span-5">
                <ImageGallery images={product?.images} />
              </div>
              <ProductQuantity sizes={product?.sizes}/>
              <p>{product?.description}</p>
              <div className="flex flex-col md:gap-5 gap-3"> 
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
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger><h5 className="lg:text-lg">Description</h5></AccordionTrigger>
                  <AccordionContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel magni, asperiores ratione tempora animi.</p>
                  </AccordionContent> 
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger><h5 className="lg:text-xl">Details</h5></AccordionTrigger>
                  <AccordionContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel magni, asperiores ratione tempora animi.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger><h5 className="lg:text-xl">Review</h5></AccordionTrigger>
                  <AccordionContent>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel magni, asperiores ratione tempora animi.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductPage