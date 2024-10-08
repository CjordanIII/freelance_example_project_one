import Buttionbg from '@/components/Buttionbg'
import React from 'react'

const Rooms = () => {
  return (
    <div className='bg-light_beige
'>
    <div className='w-96 '>
        <h1 className='text-default_text text-4xl font-semibold py-1'>
    50+ Beautiful rooms 
    inspiration
    </h1>
    <p className='text-default_text py-3'>
    Our designer already made a lot of beautiful prototype of rooms that inspire you
    </p>
    {/* TODO add link path  */}
    <Buttionbg href='#' label='Explore More'/>
    </div>
    </div>
  )
}

export default Rooms