
import PromiseIconAndLabel from '@/components/PromiseIconAndLabel'
import React from 'react'
import trophy1 from "../../public/assets/trophy1.svg"
import guarantee from "../../public/assets/guarantee.svg"
import shipping from "../../public/assets/shipping.svg"
import customer_support from "../../public/assets/customer-support.svg"
const Promises = () => {

  return (
    <div className='flex max-sm:hidden  bg-background_gold py-20 w-full justify-evenly my-4' >
        <PromiseIconAndLabel title="Hight Quality" refs={trophy1} sub="Crafted from top materials"/>
        <PromiseIconAndLabel title="Warranty Protection" refs={guarantee} sub="Over 2 years"/>
        <PromiseIconAndLabel title="Free Shipping" refs={shipping} sub="Order over $150"/>
        <PromiseIconAndLabel title="24 / 7 Support" refs={customer_support} sub="Dedicated support"/>
    </div>
  )
}

export default Promises