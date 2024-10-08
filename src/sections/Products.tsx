import React from 'react'
import ProductItems from '@/components/ProductItems'
const Products = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-semibold'>
            Our Products
        </h1>
        <div>
            <ProductItems/>
        </div>
    </div>
  )
}

export default Products