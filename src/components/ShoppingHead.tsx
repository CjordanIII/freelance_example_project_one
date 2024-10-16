import React from "react";
import Image from "next/image";
import photo from "../../public/assets/Rectangle 1.jpg";
import { ShoppingHeadPropTypes } from "@/lib/types/types";
import Link from "next/link";

const ShoppingHead: React.FC<ShoppingHeadPropTypes> = ({toPage,fromPage,title,page}) => {
  return (
    <div className="flex justify-center items-center w-full">
      {" "}
      <Image
        src={photo}
        alt="background" // Use the title as alt text for better accessibility
        objectFit="fill"
        className="w-full"
        layout="cover"
      />
      <div className="z-10 absolute flex flex-col justify-center gap-3">
        <h1 className="text-5xl font-semibold max-md:text-2xl max-md:text-center ">{title}</h1>
        <div className="flex gap-2 max-md:text-sm justify-center">
          <strong><Link href={page} >{fromPage}</Link> &gt;</strong>
          <p>{toPage}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingHead;
