import React from 'react'
import ArrayProductItems from './ArrayProductItems'
import product from "../db/products.json"

const ProductItems = () => {
   
    const {products} =product
   
  return (
    <div className='flex flex-wrap w-5/6 gap-8 '>{products.map((items,i)=>(<ArrayProductItems key={i} image={items.image} title={items.title} price={items.price} description={items.description} />))}</div>
  )
}

export default ProductItems