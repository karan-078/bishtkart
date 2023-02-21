import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helper";
const Cartmodal = ({ carts }) => {
  return (
    <div className="bg-slate-500 w-96 h-[28rem]  overflow-y-scroll  absolute right-[-10px] top-[calc(110%+10px)]  invisible opacity-0 
  ">

    <h1>helllpokvucgjxgtxhyfx</h1>
      
      <h5>Recentely Addwd Products</h5>
      {carts?.length > 0 ? (
        <div>
          <div className=" ">
            {carts.map((cart) => {
              return (
                <div key={cart.id} className="flex justify-between items-center pl-4 pr-4">
                  <div className="w-12 h-12 ">
                    <img src={cart?.thumbnail} alt="images" className="w-full h-full object-cover" />
                  </div>

                  <div>
                    {cart?.title}
                  </div>
                  <div>{formatPrice(cart?.discountedPrice)}</div>
                </div>
              );
            })}

            <div>
              <Link to={"/cart"}>view cart</Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h6>no products</h6>
        </div>
      )}
    </div>
  );
};

export default Cartmodal;
