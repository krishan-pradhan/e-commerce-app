"use client"
import Link from 'next/link'
import React from 'react'
import { collectionLink } from '../lib/localData'
import Image from 'next/image'


const Collection = () => {
  
  return (
    <>
       <section id="hoverCollection" className='container lg:mb-20 mb-10'>
        <div className='hoverlink text-center'>
          { collectionLink.map((link, i) =>(
              <div key={i}>
                <Link className='hover:underline text-2xl leading-[2.5]' href={link.href}><h2>{link?.collectionName}</h2></Link>
              </div>
            )) 
          }
        </div>
        {/* <div className='hoverImage'>
          <figure>
              { collectionLink.map((image, i) =>(
                  <div key={i}>
                    <Image
                    className='w-[200px] h-[200px]'  
                    src={`/images/jpg/${image.collectionName.toLocaleLowerCase()}.jpg`} 
                    width={200} height={200} alt={image.collectionName.toLocaleLowerCase()}></Image>
                  </div>
                )) 
              }
          </figure>
        </div> */}
       </section>
    </>
  )
}

export default Collection