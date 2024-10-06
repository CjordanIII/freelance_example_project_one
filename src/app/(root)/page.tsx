import heroImage from "../../../public/assets/scandinavian-interior-mockup-wall-decal-background 1.jpg"
import Image from "next/image";
export default function Home() {
  return (
    <>
  <div className="w-full h-full flex justify-center">
  <Image
      src={heroImage}
      width={0}
      height={0}
      className="w-full"
      alt="Background Image for hero section"
    />
  </div>

    </>
  );
}
