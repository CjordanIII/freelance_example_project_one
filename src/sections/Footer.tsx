import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div
        className="flex justify-evenly text-default_text w-full
      my-10
"
      >
        <div className=" flex-col gap-10 hidden xl:flex">
          <h2 className=" text-3xl  font-semibold">Funiro .</h2>
          <p className="w-56 opacity-65">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="flex flex-col gap-5  font-medium">
          <p className="opacity-65 pb-8">Links</p>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Shop</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Contact</Link>
        </div>
        <div className="flex flex-col gap-5  font-medium">
          <Link href={"#"} className="pb-8 opacity-65">
            Help
          </Link>
          <Link href={"#"}>Payment Options</Link>
          <Link href={"#"}>Return </Link>
          <Link href={"#"}>Privacy Policies</Link>
        </div>
        <div className="hidden xl:block">
          <p className="opacity-65 pb-8">Newsletter</p>
          <form className="flex gap-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email Address"
              className="border-b-2 border-b-default_text pr-4 focus:outline-none"
            />

            <button className="border-b-2 border-b-default_text font-semibold  ">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="flex md:hidden justify-center py-4">
        <form className="flex gap-3 ">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email Address"
            className="border-b-2 border-b-default_text w-40 focus:outline-none"
          />

          <button className="border-b-2 border-b-default_text font-semibold  ">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
