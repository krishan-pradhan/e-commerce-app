import { Button } from "@/components/ui/button"
import { client, urlFor } from "../lib/sanity"
import Image from "next/image";
import FocalCard from "./FocalCard";

async function bannerImage(){
  const query = "*[_type == 'heroImages'][0].image3"
  const data = await client.fetch(query);
  return data;
}
async function getData(uniqueProduct: string) {
  const query = `*[_type == 'product' && slug.current == "${uniqueProduct}"]{
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    price_id,
    "imageUrl": images[0]
    }
    `
    const data = await client.fetch(query);
    return data
  ;
}
const Hero = async () => {
  const backgroundImage: any = await bannerImage();
  const productBag = await getData('hand-bag');
  const  productTshirt = await getData('t-shirt');
  return (
    <>
      <section className="relative lg:mb-20 mb-10">
        <div className="lg:block z-10 hidden absolute top-[30%] right-[20%] w-7 h-7 ">
          <FocalCard product={productBag} />
        </div>
        <div className="lg:block z-10 hidden absolute bottom-[30%] left-[20%] w-7 h-7 ">
          <FocalCard product={productTshirt} />
        </div>
        <div>
          <Image
              height={1024}
              width={1920}
              src={urlFor(backgroundImage).url()}
              alt={'hero image'}
              className=" opacity-95 object-cover w-full h-full min-h-[420px]"
              priority
          />
        </div>
        <div className="lg:hidden flex container z-10 absolute top-0 left-0 w-full items-end h-full hero-section bg-gradient-to-r from-[#000000af] to-[#ffffff10] text-white">
          <div className=" lg:p-10 mb-10 sm:p-5 p-2 rounded-lg flex flex-col justify-center items-start max-w-80">
            <h1 className="lg:text-4xl font-bold mb-3">Welcome to Our Website</h1>
            <p className="text-lg mb-8">This is a cool landing page built with React and Next.js</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero