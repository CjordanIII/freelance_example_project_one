import React from "react";
import Image from "next/image";
import photo from "../../public/assets/Rectangle 1.jpg";
const ShoppingHead = () => {
  return (
    <>
      {" "}
      <Image
        src={photo}
        alt="background" // Use the title as alt text for better accessibility
        objectFit="fill"
          className="w-full"
        layout="cover"
      />
    </>
  );
};

export default ShoppingHead;
