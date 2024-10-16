import ShoppingHead from "@/components/ShoppingHead";
import ProductItems from "@/components/ProductItems";
import FilterShopt from "@/components/FilterShopt";

export default function Shop() {
  return (
    <>
      <div className=" w-full flex justify-center">
        <ShoppingHead toPage="Shop" fromPage="Home" title="Shop" page="/"/>
      </div>
      <div className="pb-4 ">
        <FilterShopt />
      </div>
    
      <div className="flex justify-center">
        <ProductItems />
      </div>

    </>
  );
}
