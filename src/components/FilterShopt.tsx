import React from "react";
import filtersvg from "../../public/assets/filtersvg.svg";
import rectangle_circles from "../../public/assets/rectangle_circles.svg";
import Slice_1 from "../../public/assets/Slice_1.svg";
import Image from "next/image";

const FilterShopt = () => {
  const svgsize: number = 20;
  return (
    <div className="bg-background_gold w-full flex  align-middle py-10 justify-around">
      <div className="flex gap-3">
        {/* TODO add functionality for this button it will filter priority low (because demo) */}
        <button className="flex justify-center gap-3 ">
          <Image
            src={filtersvg}
            width={svgsize}
            height={svgsize}
            className="self-center"
            alt="filter svg"
          />
          Filter
        </button>
        <button>
          <Image
            src={rectangle_circles}
            width={svgsize}
            height={svgsize}
            alt="square cirlces"
          />
        </button>
        <button>
          <Image src={Slice_1} width={svgsize} height={svgsize} alt="slices" />
        </button>
        <span className="border-l-2 border-grey h-auto" />
        {/* TODO add dynamic numbers */}
        <p>Showing 1-16 of 32 result</p>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-2">
          <label htmlFor="show">Show</label>
          <input
            id="show"
            name="show"
            value={16}
            className="w-10 text-center focus:outline-none "
            readOnly={true}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="sort">Sort by</label>
          <input
            id="sort"
            name="Sort"
            placeholder="Default"
            className="w-50 text-left pl-3 focus:outline-none "
          />
        </div>
      </div>
    </div>
  );
};

export default FilterShopt;
