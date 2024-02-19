import Link from 'next/link'
import React from 'react'
import { collectionLink } from '../lib/localData'
const Collection = () => {
    
  return (
    <>
       <section className='lg:mb-20 mb-10'>
        <div className='container'>
          { collectionLink.map((link, i) =>(
              <div key={i}>
                <Link href={link.href}>{link.collectionName}</Link>
              </div>
            )) 
          }
        </div>
       </section>
    </>
  )
}

export default Collection