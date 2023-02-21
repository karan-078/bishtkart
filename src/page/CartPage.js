import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatPrice } from "../utils/helper";
import shopping from "../assets/images/shopping.jpg"
import {
  getAllCarts,
  removeFromCart,
  clearCart,
  toggleCartQty,
} from "../store/CartSlice";

import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  console.log(itemsCount, totalAmount);
  if (carts.length === 0) {
    return (
      <div className="  bg-[#f7f7f7]  text-center ">
        <div className="empty-cart h-1/4 w-1/4 grid place-items-center m-auto ">
          <img src={shopping} alt=""  className="w-full h-full"/>
          <span>your bag feel so Lite</span>
        </div>
          
         <Link to={"/"}  >Shopping now</Link>
      </div>
    );
  }

  return (
 
    <>
      <div>
        <div className="grid grid-rows-[2fr,1fr]  md:grid-cols-[2fr,1fr] mt-2 gap-2 md:m-4">
          <div className=" bg-slate-50 m-0 mt-2  md:m-2">
             <h1 className=" md:pl-8 pt-2 text-xl  font-semibold shoping_cart pb-2">Shopping Cart</h1>
              <hr/>
              
            <div className="flex justify-center items-center mt-2 flex-col gap-2 md:m-2 ">
              {carts.map((cart, index) => {
                return (
                   <React.Fragment key={cart?.id}>
                    <div
                      
                      className="flex justify-between w-full items-center "
                    >
                
                      <div className="first_div flex items-center md:m-5">
                        <div className="w-28 h-28 text-center  flex justify-center items-center  ">
                          <img
                            src={cart?.images[0]}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="content flex flex-col pl-8">
                          <div className="title text-xl font-semibold">
                            {cart?.title}
                          </div>

                          <div className="flex justify-start items-center gap-5">
                            <div className="flex bg-slate-50 rounded-sm w-20 justify-between p-1">
                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    toggleCartQty({ id: cart?.id, type: "DEC" })
                                  )
                                }
                              >
                                -
                              </button>

                              <div>{cart?.quantity}</div>

                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    toggleCartQty({ id: cart?.id, type: "INC" })
                                  )
                                }
                              >
                                +
                              </button>
                            </div>

                            <div className="bg-slate-400 w-[1px] opacity-800 h-6"></div>
                            <div>
                              <button
                                className="outline-none bg-none border-none"
                                onClick={() =>
                                  dispatch(removeFromCart(cart?.id))
                                }
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="md:pr-6">
                        <span className="text-xl font-semibold">
                          {formatPrice(cart?.discountedPrice)}
                        </span>
                      </div>
                    </div>

                    <hr/>
                    </React.Fragment>
                );
              })}
                
            </div>
            
            <hr />

            <div className="flex justify-between p-4">
              <div>
                <button type="button" onClick={() => dispatch(clearCart())}>
                  <i></i>
                  <span>clear cart</span>
                </button>
              </div>

              <div>
                <div>
                  Subtotal ({itemsCount}) items
                  <span className="text-lg font-semibold"> : {formatPrice(totalAmount)}</span>
                </div>
              </div>
            </div>

            <hr />
          </div>
          <div className="  grid grid-rows-[1fr,2fr] gap-2 max-h-[120vh] m-2">
            <div className=" bg-slate-50 flex flex-col items-center gap-2 justify-center">
              <div >

             
            <div>
                  Subtotal ({itemsCount}) items
                  <span className="text-lg font-semibold"> : {formatPrice(totalAmount)}</span>
                </div>
            </div>



              <div className="w-52">
                <Link to={"/chekoutpage"}>
                <button className="w-full  p-2 pl-3 pr-3 bg-[#ffd814] rounded-xl">Proceed to By</button>
                </Link>
              
              </div>
            </div>

            <div className=" bg-slate-50 ">
              
            </div>
          </div>

          <div></div>
        </div>
      </div>
      </>
  );
};

export default Cart;

