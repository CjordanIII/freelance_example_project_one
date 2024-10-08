import React from 'react'
import Link from "next/link";
import heroImage from "../../public/assets/scandinavian-interior-mockup-wall-decal-background 1.jpg";
import Image from "next/image";
const Hero = () => {
  return (
<>
  <div className="w-full h-screen flex justify-center relative">

    {/* Image container */}
    <div className="w-full h-full flex justify-center ">
      <Image
        src={heroImage}
        width={0}
    
        height={0} // Adding height=0 for proper rendering
        className="w-full h-full object-cover" // Ensure the image covers the area
        alt="Background Image for hero section"
      />
    </div>
  
    {/* Beige div overlapping the image */}
    <div className="bg-custom_beige py-10 sm:py-16 md:py-20 absolute top-20 sm:top-28 md:top-36 right-5 sm:right-10 md:right-20 z-10 font-sans flex justify-center">
      <div className="w-4/5 sm:w-3/5 text-center sm:text-left">
        <h5 className="text-default_text font-semibold text-sm sm:text-base md:text-lg">
          New Arrival
        </h5>
        <h1 className="text-text_beige text-2xl sm:text-3xl md:text-4xl font-semibold py-3 sm:py-4 md:py-5">
          Discover Our New Collection
        </h1>
        <p className="text-xs sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        {/* TODO change anime to match the one at the bottom */}
        <button className="bg-text_beige px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-md my-3 sm:my-4 md:my-5 hover:opacity-75 active:opacity-95">
          {/* TODO add path */}
          <Link style={{ color: "white" }} href={"#"}>
            BUY Now
          </Link>
        </button>
      </div>
    </div>
  </div>
</>

  )
}

export default Hero