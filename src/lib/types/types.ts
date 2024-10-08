import { StaticImageData } from 'next/image';
export interface iconssizes {
    iconssize:number
  };

export interface photo {
  photo:StaticImageData,
  label:string,
}

export interface products {
  title:string,
  price:number,
  description:string,
  image:string,
}