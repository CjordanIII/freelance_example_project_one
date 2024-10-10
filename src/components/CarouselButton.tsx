import React from 'react'

import {CarouselButtonProps} from "../lib/types/types"

const CarouselButton: React.FC<CarouselButtonProps> = ({setIndexCount}) => {
    const handleClick = ()=>{
        setIndexCount((prev)=> prev + 1)
        
    }
    // TODO add design later
    
  return (
    <button  className="reltive" onClick={handleClick}>CarouselButton</button>
  )
}

export default CarouselButton