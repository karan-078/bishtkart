import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import MyImage from "../components/MyImage";
import { BsCartPlus } from "react-icons/bs";
import {
  fetchAsyncProductSingle,
  getProductSingle,
  getSingleProductStatus,
} from "../store/ProductSlice";
import { STATUS } from "../utils/Status";
import Loader from "../components/Loader";
import { formatPrice } from "../utils/helper";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../store/CartSlice";
import CartMessage from "../components/CartMessage";
const SinglProduct = ( ) => {
 
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductSingle);
  const productSingleStatus = useSelector(getSingleProductStatus);

  const [quantity, setQuantity] = useState(1);

  const cartMessageStatus = useSelector(getCartMessageStatus);

  // getting single product from the store

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
    if (cartMessageStatus) {
      console.log("hello");
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus]);

  if (cartMessageStatus) {
    console.log("cart true");
  }
  let discountedPrice =
    product?.price - product?.price * (product?.discountPercentage / 100);

  // console.log(product);

  if (productSingleStatus === STATUS.LOADING) {
    return <Loader />;
  }

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (product) => {
    let discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);

    let totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice })
    );
    dispatch(setCartMessageOn(true));
  };

  
  


  return (
    <main>
      <div className="grid place-items-center  w-[100vw] overflow-hidden">
        <div className="flex flex-col   md:flex-row bg-[#ffff] md:m-4 ">
          <div className="flex justify-center">
            <div className=" grid place-items-center m-2 md:m-2 ">
              <div
                className=" md:flex flex-row-reverse 
               "
              >
                <div>
                <MyImage imgs={product?.images} />
                </div>
                
              </div>
            </div>
          </div>

          <div className=" m-2  flex  justify-center items-center md:ml-14">
            <div className=" bg-[#ffffff] m-2 flex flex-col gap-2">
              <div className="text-xl text-[#2d2820]">{product?.title}</div>
              <div>
                <p className="text-[#555456]">{product?.description}</p>
              </div>

              <div>
                <div className="raring ">
                  <span className="text-[#30a8d0]"> Rating: </span>
                  <span className="text-[#30a8d0]">{product?.rating}</span>
                </div>

                <div className="line"></div>
                <div className="brand">
                  <span className="text-[#0f1a24]">Company : </span>
                  <span className="text-[#555456]">{product?.brand}</span>
                </div>

                <div className="line"></div>

                <div className="Category">
                  <span className="text-[#0f1a24]">Category : </span>
                  <span className="text-[#555456]">
                    {product?.category
                      ? product.category.replace("-    ", "")
                      : ""}
                  </span>
                </div>
              </div>

              <div className="price ">
                <div>
                  <div className="old_price">
                    {" "}
                    <span>M.R.P:</span>
                    <s className="text-[#555456]">
                      {formatPrice(product?.price)}{" "}
                    </s>{" "}
                  </div>
                  <span>Inclusive of all taxes</span>
                  <p className="text-[#cc2f69] ">Deal of the day</p>
                </div>

                <div className="flex">
                  <div className="text-[#cc2f69] ">
                    -{product?.discountPercentage}%{" "}
                  </div>

                  <div className="new_price pl-4">
                    {formatPrice(discountedPrice)}
                  </div>
                </div>

                <div className="flex items-center">
                  <div>Quantity:{AiOutlineMinus}</div>
                  <div className=" flex items-center gap-6 pl-4">
                    <button
                      type="button"
                      className="text-black p-2 bg"
                      onClick={() => decreaseQty()}
                    >
                      <AiOutlineMinus/>
                    </button>

                    <div>{quantity}</div>
                    <button type="button bg-red" onClick={() => increaseQty()}>
                      <AiOutlinePlus/>
                    </button>
                  </div>

                  {product?.stock === 0 ? <div>out of stock</div> : ""}
                </div>
              </div>

              <div className="btns flex gap-4 mb-2 text-[#fff] flex-col   md:flex-row md:gap-6">
                <button
                  type="button"
                  className=" bg-[#ff9f00] pt-2 pb-2 pl-6 pr-6  rounded-sm md:pl-10 md:pr-10 flex items-center justify-center  "
                  onClick={() => {
                    addToCartHandler(product);
                  }}
                >
                  <i><BsCartPlus/></i>
                  <span className="pl-4">add to cart</span>
                </button>
                 
                <Link to={"/chekoutpage"}>
                <button
                  type="button"
                  className=" bg-[#fb641b] w-full pt-2 pb-2 pl-6 pr-6 rounded-sm shadow-lg border-none text[#fff] md:pl-10 md:pr-10"
                >
                  <span>buy now</span>

                </button>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {cartMessageStatus && <CartMessage />}
    </main>
  );

};

export default SinglProduct;
