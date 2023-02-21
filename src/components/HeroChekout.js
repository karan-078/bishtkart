import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatPrice } from "../utils/helper";
import {
  getAllCarts,
  removeFromCart,
  clearCart,
  toggleCartQty,
} from "../store/CartSlice";

const HeroChekout = () => {

    const dispatch = useDispatch();
    const carts = useSelector(getAllCarts);
    const { itemsCount, totalAmount } = useSelector((state) => state.cart);
  
  return (
    <div >
      {carts.map((cart, index)=>{
          return (
            <div key={cart?.id}  className="flex gap-2 items-center justify-between md:w-[40rem]"> 
              <div className="w-32  mt-2">
                <img src={cart?.images[0]} alt={cart.id}  className ="w-full h-full "/>
              </div>

              <div className="font-semibold text-lg">
              {cart?.title}
              </div>

           
            </div>
          )
      })}
       <div className="mt-10 flex ">
         <span className="text-lg font-semibold"> Your toal is : {formatPrice(totalAmount)}</span>
         </div>
    </div>
  )
}

export default HeroChekout
