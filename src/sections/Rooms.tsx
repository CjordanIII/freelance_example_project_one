import Buttionbg from "@/components/Buttionbg";
import React from "react";
import Carousel from "@/components/Carousel";
const Rooms = () => {
  return (
    <div
      className="bg-light_beige flex xl:justify-between items-center justify-center"
    >
      <div className="w-96 xl:ml-40 max-sm:px-10">
        <h1 className="text-default_text text-4xl font-semibold py-1">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-default_text py-3">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        {/* TODO add link path  */}
        <Buttionbg href="#" label="Explore More" />
      </div>
      {/* carousel  */}
      <div className="py-10 hidden xl:block">
        <Carousel/>
      </div>
    </div>
  );
};

export default Rooms;
