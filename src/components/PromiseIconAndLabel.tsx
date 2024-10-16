
import { PromiseIconAndLabelTypes } from '@/lib/types/types'
import Image from 'next/image'
import React from 'react'

const PromiseIconAndLabel: React.FC<PromiseIconAndLabelTypes> = ({title,refs,sub}) => {
    const iconSize:number = 50
  return (
  
        <div className='flex gap-3'>
            <Image 
            src={refs}
            width={iconSize}
            height={iconSize}
            alt="trophy"
            />
            <div>
                <h6 className='text-2xl font-semibold'>
                    {title}
                </h6>
                <sub className='font-light_sm_grey text-sm opacity-55'>{sub}</sub>
            </div>
        </div>
  
  )
}

export default PromiseIconAndLabel