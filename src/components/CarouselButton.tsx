import React from 'react'

import {CarouselButtonProps} from "../lib/types/types"
import Image from 'next/image'
import Right from "/public/assets/Right24px.svg"

const CarouselButton: React.FC<CarouselButtonProps> = ({setIndexCount}) => {
    const handleClick = ()=>{
        setIndexCount((prev)=> prev + 1)
        
    }
    // TODO add design later
    
  return (
    <button  className="reltive bg-white w-14 h-14 rounded-full z-20 drop-shadow-xl hover:opacity-80 active:opacity-65 flex justify-center items-center" onClick={handleClick}>        <Image
    src={Right}
    width={60}
    height={60}
    alt="Picture of the author"
  /></button>
  )
}

export default CarouselButton