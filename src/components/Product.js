import React from 'react'
import { Link } from 'react-router-dom'
import {formatPrice }from "../utils/helper"
const Product = ({product}) => {
  return (
    <main>
     <Link to={`/product/${product?.id}`} key ={product?.id}>
    
     <div className="bg-white w-72 min-h-80 flex items-center flex-col p-2 pt-0 relative product_card">
     
     <div className="product_category absolute -left-2 top-3 bg-[#cc2c65] p-1 rounded-sm text-white">
        {product?.category}
     </div>
     
     <div className="h-52  w-72 ">
          <img src={product?.images[0]} alt={product?.title} className={"object-fill w-full h-full"} />
     </div>

     <div className="item_info flex items-start flex-col w-full mt-3">
      <div className="item_company">
        <span className='text-[#23364a]'>company : </span>
        <span className='text-[#a1a3a3]'>{product?.brand}</span>
      </div>

      <div className='text-[#a1a3a3]'>
       {product?.title}
      </div>

      <div className="item_price flex gap-2">
        
      <span className='after_Discount
       text-[#23364a]'>
         {formatPrice(product?.discountedPrice)}
        </span>

        <span className='MRP_Price text-[#a1a3a3]'>
         <s>{formatPrice(product?.price)}</s> 
        </span>

  

        <span className="discount bg-[#cc2c65] p-1 pl-2 pr-2 rounded-sm text-white">
        {product?.discountedPercentage}%Off
        </span>
      </div>
     </div>
     </div>
     </Link>
    </main>
  )
}

export default Product
