import Link from "next/link";
import heroImage from "../../../public/assets/scandinavian-interior-mockup-wall-decal-background 1.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="w-full h-full flex justify-center relative">
        <Image
          src={heroImage}
          width={0}
          height={0}
          className="w-full"
          alt="Background Image for hero section"
        />

        {/* Beige div overlapping the image */}
        <div className="bg-custom_beige  px-72 py-64 absolute top-36 right-20 z-10 font-sans ">
          <div>
            <h5 className="text-default_text font-semibold">New Arrival</h5>
            <h1 className="text-text_beige text-4xl font-semibold">
              Discover Our New Collection
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-text_beige px-10 py-4 rounded-md hover:opacity-75 active:opacity-95">
              {/* TODO add path */}
              <Link style={{color:"white"}} href={"#"}>BUY Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
