"use client"
import Image from "next/image"
import { urlFor } from "../lib/sanity"
import { useState } from "react"

type imageProps = {
    images: any
}

const ImageGallery = ({images}:imageProps) => {
  const [ currentImage, setCurrentImage ] = useState(images[0])
  return (
    <>
    <div className="flex flex-col">
      <Image src={urlFor(currentImage).url()} width={600} height={800} alt="image" className=" mr-auto w-fit object-contain max-h-[800px]"/>
      <div className="flex flex-wrap gap-5">
          {images.map( (image: any, id: any)=> (
              <div key={id}>
                  <Image onClick={()=> setCurrentImage(image)} className="md:h-[220px] sm:h-[120px] h-[80px] w-auto object-cover" src={urlFor(image).url()} width={120} height={60} alt="image"/>
              </div>
          ))}
      </div>
    </div>
    </>
  )
}

export default ImageGallery