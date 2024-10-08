import React from 'react'
import ProductItems from '@/components/ProductItems'
import Link from 'next/link'
const Products = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-semibold'>
            Our Products
        </h1>
        <div className='flex justify-center py-5'>
            <ProductItems/>
        </div>
        <div className='flex justify-center'> 
        <button className='text-text_beige border-2 py-3 px-16 flex justify-center border-text_beige hover:ease-in duration-300  hover:border-collapse hover:bg-text_beige hover:text-white'>
            {/* TODO add destinatino for link */}
            <Link href={"#"} >
            Show more
            </Link>
        </button>
        </div>
    </div>
  )
}

export default Products