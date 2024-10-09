import React from 'react'
import { CarouselPhotosProps } from "@/lib/types/types";
import Image from 'next/image';
const CarouselFocus: React.FC<CarouselPhotosProps> = ({current}) => {
  return (
    <div>
            <Image
      src={current.image}
      width={75}
      height={75}
      alt="Picture of the author"
    />
    </div>
  )
}

export default CarouselFocus