"use client";
import { useState, useEffect } from "react";
import { carouselData } from "../lib/constraints/carouseldata";
import CarouselPhotos from "./CarouselPhotos";
import CarouselDots from "./CarouselDots";
import CarouselButton from "./CarouselButton";
import CarouselLabel from "./CarouselLabel";
import CarouselFocus from "./CarouselFocus";
import { CarouselItem } from "@/lib/types/types";
const Carousel = () => {
    const { items } = carouselData;
  const [indexCount=0, setIndexCount] = useState<number>(0);
  const [current, setCurrent] = useState<CarouselItem>(items[0])
  


  useEffect(()=>{
    setCurrent(items[indexCount])
    // limits the bounders of the array itteration
    if(indexCount>= items.length -1){
        setIndexCount(0)
    }
  },[indexCount])


  return (
    <div>
      <CarouselFocus current={current}/>
      <CarouselPhotos />
      <CarouselDots />
      
      <CarouselButton setIndexCount={setIndexCount} />
      <CarouselLabel />
    </div>
  );
};

export default Carousel;
