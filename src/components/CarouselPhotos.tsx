import React from 'react'
import Image from 'next/image';
import {arrOfPhotosTypes} from "../lib/types/types"
const CarouselPhotos: React.FC<arrOfPhotosTypes>= ({arrOfPhotos,indexCount}) => {
  return (
 <>
{
    arrOfPhotos.map((item,i)=>{
        if(i === indexCount){
            return null
        }
        return(
            <Image
            key={i}
            src={item.image}
            width={300}
            height={300}
            alt="Picture of the author"
          />
        )
    })
    
}
 </>
  )
}

export default CarouselPhotos