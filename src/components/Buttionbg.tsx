import Link from 'next/link'
import React from 'react'
import {Buttionbgtypes} from "../lib/types/types"
const Buttionbg: React.FC<Buttionbgtypes>= ({href,label}) => {


  return (
          
            <button className="bg-text_beige px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-md my-3 sm:my-4 md:my-5 hover:opacity-75 active:opacity-95">
                   {/* TODO change anime to match the one at the bottom */}
            {/* TODO add path */}

            <Link style={{ color: "white" }} href={href}>
            
              {label}
            </Link>
          </button>
  )
}

export default Buttionbg