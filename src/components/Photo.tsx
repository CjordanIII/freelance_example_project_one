import React from 'react'
import Image from 'next/image'
import { photo } from '@/lib/types/types'
const Photo:React.FC<photo> = ({photo,label}) => {
  return (
    <div className='text-center flex flex-col gap-9 max-sm:gap-3 max-sm:w-32'>
    <Image
      src={photo}
      width={0}
      height={0}
      alt="Picture of the funiture"
    />
    <sub className='text-xl max-sm:text-base font-semibold '>
        {label}
    </sub>
    </div>
  )
}

export default Photo