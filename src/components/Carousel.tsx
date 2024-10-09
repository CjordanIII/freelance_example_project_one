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
  const [indexCount = 0, setIndexCount] = useState<number>(0);
  const [current, setCurrent] = useState<CarouselItem>(items[0]);

  useEffect(() => {
    setCurrent(items[indexCount]);
    // limits the bounders of the array itteration
    if (indexCount >= items.length - 1) {
      setIndexCount(0);
    }
  }, [indexCount]);

  return (
    <div className=" flex">
      <CarouselFocus current={current} />
      <div >
        <div className="flex">
          <CarouselPhotos arrOfPhotos={items} indexCount={indexCount}/>
          <CarouselButton setIndexCount={setIndexCount} />
        </div>
        <CarouselDots />
      </div>

      <CarouselLabel />
    </div>
  );
};

export default Carousel;
