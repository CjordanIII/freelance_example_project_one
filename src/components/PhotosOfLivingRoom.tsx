import React from 'react'
import Image from 'next/image'
import photo from "../../public/assets/Images (2).jpg"
const PhotosOfLivingRoom = () => {
  return (
    <>
        <Image
      src={photo}
      width={0}
      height={0}
      alt="Picture of the funiture"
    />
    </>
  )
}

export default PhotosOfLivingRoom