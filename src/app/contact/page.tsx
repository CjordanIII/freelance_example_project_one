import ShoppingHead from "@/components/ShoppingHead";
import GetInTouch from "@/sections/GetInTouch";
export default function Contact() {
    return (
  <>

  <div className=" w-full flex justify-center">
    <ShoppingHead toPage="Contact" fromPage="Home" title="Contact" page="/"/>
  </div>
  <div>
  <GetInTouch/>
  </div>
  </>
  
    );
  }
  