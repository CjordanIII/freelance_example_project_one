import ShoppingHead from "@/components/ShoppingHead";
import ProductItems from "@/components/ProductItems";


import Footer from "@/sections/Footer";
export default function Home() {
  return (
<>
<header className=" w-full flex justify-center">
<ShoppingHead/>
</header>

<div className="flex justify-center">
<ProductItems/>
</div>

</>

  );
}
