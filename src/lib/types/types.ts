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

export interface ShoppingHeadPropTypes {
  toPage:string,
  fromPage:string,
  title:string,
  page:string
}
export interface SideContentGetIntouchprops {
  title: string,
  des:string,
  icon:string

}
export interface InputPropstype {
  label: string,
  name:string,
  placeholder:string,
  type?:string,
  required?:boolean,
  textArea?:boolean | undefined

}
// types

export type CarouselButtonProps = {
  setIndexCount: React.Dispatch<React.SetStateAction<number>>;
}; 
