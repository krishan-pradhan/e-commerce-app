import Link from 'next/link'
import React from 'react'
import { collectionLink } from '../lib/localData'
const Collection = () => {
    
  return (
    <>
       <section>
        { collectionLink.map((link, i) =>(
            <div key={i}>
              <Link href={link.href}>{link.collectionName}</Link>
            </div>
        )) }
       </section>
    </>
  )
}

export default Collection