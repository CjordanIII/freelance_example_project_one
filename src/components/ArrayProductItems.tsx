import React from "react";
import Image from "next/image";
import { products } from "@/lib/types/types";
import share from "../../public/assets/Share.svg";
import compare from "../../public/assets/compare-svgrepo-com 1.svg"
import heart from "../../public/assets/Heart.svg"
// types for image are string
const ArrayProductItems: React.FC<products> = ({
  title,
  price,
  description,
  image,
}) => {
  return (
    <div>
      <div className="w-72 h-72 relative group">
        <div
          className="w-72 h-[26rem] absolute z-10 hidden group-hover:flex justify-center items-center"
          // use rgba for "transparent background"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div>
            <button className="bg-white text-text_beige py-3 px-6">
              Add to cart
            </button>
            <span>
              <Image
                src={share}
                alt="share" // Use the title as alt text for better accessibility
                width={100}
                height={100}
              />
              Share
            </span>
            <span>
              <Image
                src={compare}
                alt="compare" // Use the title as alt text for better accessibility
                width={100}
                height={100}
              />
              Compare
            </span>
            <span>
              <Image
                src={heart}
                alt="heart" // Use the title as alt text for better accessibility
                width={100}
                height={100}
              />
              Like
            </span>
          </div>
        </div>
        <Image
          src={image}
          alt={title} // Use the title as alt text for better accessibility
          layout="fill" // Fill the parent container
          objectFit="cover"
        />
      </div>
      <div className="bg-light_grey w-72 flex flex-col gap-3 py-4 px-2">
        <h4 className="font-semibold text-xl ">{title}</h4>
        <p className="font-text_sub text-sm opacity-60">{description}</p>

        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default ArrayProductItems;
