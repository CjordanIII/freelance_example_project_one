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

export interface Buttionbgtypes {
  href:string,
  label:string
}

 export interface CarouselItem {
  image: string;
  label: string;
}
export interface CarouselPhotosProps{
  current:CarouselItem
}
export interface CarouselDataTypes {
  items: CarouselItem[];
}
export interface arrOfPhotosTypes {
  arrOfPhotos:CarouselItem[];
  indexCount: number
}
export interface PromiseIconAndLabelTypes{
  title:string,
  refs:string,
  sub:string
}
// types

export type CarouselButtonProps = {
  setIndexCount: React.Dispatch<React.SetStateAction<number>>;
}; 
