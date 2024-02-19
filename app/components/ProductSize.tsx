// 'use client'
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';


// interface ProductSizeProps {
//     sizes: string[];
// }

// const ProductSize: React.FC<ProductSizeProps> = ({sizes} ) => {
//   const [selected, setSelected] =  useState('M');
//   const router = useRouter();
//   useEffect(()=> {
//     router.push(`?size=${selected}`);
//   }, [selected, router])
// console.log(selected)
//   return (
//     <>
//     <div className='flex flex-wrap gap-3'>
//         {sizes?.map((size, i)=> ( 
//             <div key={i}>
//                 <Button onClick={()=> {setSelected(size)}} variant={"outline"}>{size}</Button>
//             </div>
//         ))}
//     </div>
//     <span>Select Size:</span>
//     </>
//   )
// }

// export default ProductSize