import React from 'react'
import Image from 'next/image'
import { products } from '@/lib/types/types'
// types for image are string
const ArrayProductItems:React.FC<products> = ({title,price,description,image}) => {
  console.log(image)
  return (
    <div>
<div className='w-72 h-72 relative'>
<Image
        src={image}
 
        alt={title}  // Use the title as alt text for better accessibility
        layout="fill" // Fill the parent container
        objectFit="cover" 
      />
</div>
    <div className='bg-light_grey w-72 flex flex-col gap-3 py-4 px-2'>
        <h4 className='font-semibold text-xl '>
            {title}
        </h4>
        <p className='font-text_sub text-sm opacity-60'>
            {description}
        </p>

        <p>
            $ {price}
        </p>
    </div>
    </div>
  )
}

export default ArrayProductItems