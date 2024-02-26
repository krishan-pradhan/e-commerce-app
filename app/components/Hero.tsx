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
  const productJaket = await getData('jaket');
  
  return (
    <>
      <section className="relative h-100">
        <div className=" absolute top-[30%] right-[20%] w-7 h-7 ">
          <FocalCard product={productJaket} />
        </div>
        <div>
          <Image
              height={1024}
              width={1920}
              src={urlFor(backgroundImage).url()}
              alt={'hero image'}
              className=" object-contain w-full h-full"
              priority
          />
        </div>
        <div className="hidden container z-10 absolute top-0 left-0 w-full items-center h-full hero-section">
          <div className=" lg:p-10 sm:p-5 p-2 rounded-lg flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold mb-3">Welcome to Our Website</h1>
            <p className="text-lg mb-8">This is a cool landing page built with React and Next.js</p>
            <Button >Get Started</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero