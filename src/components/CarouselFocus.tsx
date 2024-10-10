import React from "react";
import { CarouselPhotosProps } from "@/lib/types/types";
import Image from "next/image";
const CarouselFocus: React.FC<CarouselPhotosProps> = ({ current }) => {
  return (
    <div className="relative" style={{width:"20rem",height:"30rem"}} >
      <Image
        src={current.image}
        layout="fill"  // This makes the image fill its parent container
        objectFit="cover" // Use Tailwind's class via `style`
        alt="Picture of the author"
        className="rounded-lg object-cover"
      />
    </div>
  );
};

export default CarouselFocus;
