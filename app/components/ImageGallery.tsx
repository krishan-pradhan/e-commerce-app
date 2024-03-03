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
    <div className="grid sm:grid-cols-12 md:gap-3 gap-2">
      <div className="flex sm:flex-col flex-row overflow-x-auto gap-2 sm:col-span-2 sm:order-1 order-2">
          {images.map( (image: any, id: any)=> (
              <div className="sm:min-w-full min-w-20" key={id}>
                  <Image onClick={()=> setCurrentImage(image)} 
                  className={`w-full object-cover sm:h-auto h-20 relative`} 
                  src={urlFor(image).url()} width={320} height={100} alt="image"/>
              </div>
          ))}
      </div>
      <div className="sm:col-span-10 sm:order-2 order-1">
        <Image src={urlFor(currentImage).url()} width={600} height={800} alt="image" 
        className="w-full object-cover xs:max-h-[800px] max-h-[320px]"/>
      </div>
    </div>
    </>
  )
}

export default ImageGallery