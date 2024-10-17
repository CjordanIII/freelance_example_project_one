import { SideContentGetIntouchprops } from "@/lib/types/types";
import Image from "next/image";
import React from "react";

const SideContentGetIntouch: React.FC<SideContentGetIntouchprops> = ({
  title,
  des,
  icon,
}) => {
  const iconSize: number = 20;
  return (
    <div className="flex gap-5">
      <div>
        <Image src={icon} alt="location" width={iconSize} height={iconSize} />
      </div>
      <div>
        <h1 className="text-2xl font-medium">{title}</h1>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default SideContentGetIntouch;
