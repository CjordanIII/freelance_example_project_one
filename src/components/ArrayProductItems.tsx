import React from "react";
import Image from "next/image";
import { products } from "@/lib/types/types";
import share from "../../public/assets/Share.svg";
import compare from "../../public/assets/compare-svgrepo-com 1.svg";
import heart from "../../public/assets/Heart.svg";
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
          {/* TODO add links and link destnatino for button */}
          <div className="text-white flex flex-col gap-5">
            <button className="bg-white text-text_beige py-3 px-6 font-semibold">
              Add to cart
            </button>
            <div className="flex gap-4">
              <div className="flex 1">
                <Image
                  src={share}
                  alt="share" // Use the title as alt text for better accessibility
                  width={20}
                  height={20}
                />
                Share
              </div>
              <div className="flex gap-1">
                <Image
                  src={compare}
                  alt="compare" // Use the title as alt text for better accessibility
                  width={20}
                  height={20}
                />
                Compare
              </div>
              <div className="flex gap-1">
                <Image
                  src={heart}
                  alt="heart" // Use the title as alt text for better accessibility
                  width={20}
                  height={20}
                />
                Like
              </div>
            </div>
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
