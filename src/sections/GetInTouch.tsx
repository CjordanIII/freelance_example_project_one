import React from "react";
import SideContentGetIntouch from "@/components/SideContentGetIntouch";
import location from "../../public/assets/location.svg";
import phone from "../../public/assets/Phone.svg";
import clock from "../../public/assets/bi_clock-fill.svg";
import Input from "@/components/Input";
import Buttionbg from "@/components/Buttionbg";
const GetInTouch = () => {
  return (
    <section className="w-full h-full flex justify-center items-center flex-col">
      <div className="text-center w-3/5 flex flex-col py-10">
        <h1 className="text-center font-semibold text-3xl">
          Get In Touch With Us
        </h1>
        <sub className="text-lg text-light_sm_grey opacity-70 ">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </sub>
      </div>
      <div className="flex justify-evenly w-full ">
        <div className="flex flex-col justify-evenly">
          <SideContentGetIntouch
            icon={location}
            title="Address"
            des="236 5th SE Avenue, New York NY10000, United States"
          />
          <SideContentGetIntouch
            icon={phone}
            title="Phone"
            des="Mobile: +(84) 546-6789 Hotline: +(84) 456-6789"
          />
          <SideContentGetIntouch
            icon={clock}
            title="Working Time"
            des="Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00"
          />
        </div>
    {/* TODO get data from form react hook form */}
        <form className="flex flex-col gap-5 w-1/4">
            <>
            <Input label={"Your name"} name={"name"} placeholder={"Enter your Name"} type="default" required={true}/>
            </>
            <>
            <Input label={"Email address"} name={"email"} placeholder={"Enter your email"} type="email" required={true}/>
            </>
            <>
            <Input label={"Subject"} name={"subject"} placeholder={"This is optional"} type="email" required={false}/>
            </>
            <>
            <Input label={"Message"} name={"message"} placeholder={"I would like to talk about..."} type="default" required={true} textArea={true}/>
            </>
            {/* TODO add functionalaity  */}
            <Buttionbg label="Submit" href="#"/>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
