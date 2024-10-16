import React from "react";
import Image from "next/image";
import photo from "../../public/assets/Rectangle 1.jpg";
const ShoppingHead = () => {
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
        <h1 className="text-5xl font-semibold max-md:text-2xl max-md:text-center ">Shop</h1>
        <div className="flex gap-2 max-md:text-sm">
          <strong>Home &gt;</strong>
          <p>Shop</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingHead;
