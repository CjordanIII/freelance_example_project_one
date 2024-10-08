import React from 'react'
import Photo from '@/components/Photo'
import mask from "../../public/assets/Mask Group.jpg"
import pillow from "../../public/assets/Mask Group (2).jpg"
import livingroom from "../../public/assets/Image-living room.jpg"
const Browse = () => {
  return (
    <div className='my-10 text-center'>
        <h1 className=' text-4xl font-bold text-default_text'>
            Browse The Range
        </h1>
        <sub className='text-text_sub text-base pt-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </sub>

<div className='flex justify-evenly py-20'>
<Photo photo={mask} label="dining"/>

<Photo photo={livingroom} label="Living"/>
<Photo photo={pillow} label="Bedroom"/>
</div>

</div>
  )
}

export default Browse