import ShoppingHead from "@/components/ShoppingHead";
import ProductItems from "@/components/ProductItems";
import FilterShopt from "@/components/FilterShopt";

export default function Home() {
  return (
<>
<header className=" w-full flex justify-center">
<ShoppingHead/>
</header>
<div className="pb-4 ">
<FilterShopt/>
</div>
<div className="flex justify-center">
<ProductItems/>
</div>

</>

  );
}
