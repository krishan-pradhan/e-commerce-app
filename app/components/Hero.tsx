import { Button } from "@/components/ui/button"
import { client, urlFor } from "../lib/sanity"
import Image from "next/image";

async function getData(){
  const query = "*[_type == 'heroImages'][0]"
  const data = await client.fetch(query);
  return data;
}
const Hero = async () => {
  const data = await getData();
  return (
    <>
      <section className="container h-full">
        <div className="hero-section h-full flex lg:flex-row flex-col justify-between lg:gap-10 gap-5">
          <div className="border border-gray-600 lg:p-10 sm:p-5 p-2 rounded-lg flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold mb-3">Welcome to Our Website</h1>
            <p className="text-lg mb-8">This is a cool landing page built with React and Next.js</p>
            <Button >Get Started</Button>
          </div>
          <div className="flex gap-2">
          <div className="w-full">
            <Image
            height={1200}
            width={800}
            src={urlFor(data.image1).url()}
            alt={'hero image'}
            className="lg:w-[520px] w-full sm:h-full h-auto object-cover rounded-lg"
            priority
            />
          </div>
          <div className="w-full">
            <Image
            height={1200}
            width={800}
            src={urlFor(data.image2).url()}
            alt={'hero image'}
            className="lg:w-[520px] w-full sm:h-full h-auto object-cover rounded-lg"
            priority
            />
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero