import React from 'react'
import StripeCheckout from "../components/StripeCheckout"
import HeroChekout from '../components/HeroChekout'
const ChekoutPage = () => {
  return (
    <div className='flex  flex-col  bg-slate-50  justify-between  p-10 md:w-[90vw] md:flex-row md:m-auto md:mt-10 md:mb-10 '>
      <HeroChekout/>
       <StripeCheckout/>
    </div>
  )
}

export default ChekoutPage
