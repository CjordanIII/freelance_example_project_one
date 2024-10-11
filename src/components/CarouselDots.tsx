import React from 'react'
import {arrOfPhotosTypes} from "../lib/types/types"
const CarouselDots:React.FC<arrOfPhotosTypes> = ({arrOfPhotos,indexCount}) => {
  return (
    <div>{

      arrOfPhotos.map((item,i)=>{
        if(i === indexCount){
          return (
             <input key={i} type="radio" id="carousel_dot" className="form-radio text-text_beige focus:ring-text_beige"  name="carousel_dot" value="photo" checked={true} readOnly={true}/>
          )
        }
       return(
        <input key={i} type="radio" id="carousel_dot" name="carousel_dot" className="form-radio text-text_beige focus:ring-text_beige" value="photo" checked={false} readOnly={true}/>
       )
      })

      }</div>
  )
}

export default CarouselDots