import React, { useEffect } from "react";
import Slider from "../components/Slider";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../store/CategorySlice";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../store/ProductSlice";

import { STATUS } from "../utils/Status";

import Backtotop from "../components/Backtotoop";


const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);



  useEffect(() => {
    dispatch(fetchAsyncProducts(100));
  }, []);

  const products = useSelector(getAllProducts);

  const productStatus = useSelector(getAllProductsStatus);

  // randomizing the products in the list

  const tempProducts = [];
  if (products?.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);

      while (tempProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }

  let catProductsOne = products.filter(
    product => product?.category
=== categories[0]
  );
  let catProductsTwo = products.filter(
    product => product?.category
=== categories[1]
  );
  let catProductsThree = products.filter(
    product => product?.category
=== categories[2]
  );
  let catProductsFour = products.filter(
    product => product?.category
=== categories[3]
  );




  return (
    <section>
      <div className=" slider_div"><Slider /></div>

      <div className="Product_list mt-2 bg-[#fff]">
        <div className="heading">
          <div className="our_products flex bg-white ">
            <h3 className="ml-8 mt-4">Products</h3>
          </div>

          <div className="Listinf_products  md:p-4">
            {/* {<ProductList products={tempProducts} />} */}

            { productStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {tempProducts} />}

          </div>

{/*   the below code write for if i want show product  by category in our home page  */}
          {/* <div className="categories-item">
            <div className="title-md">
              <h3>{categories[0]}</h3>
            </div>
            {<CartPage products={catProductsOne} />}
          </div>

          <div className='categories-item flex '>
              <div className='title-md'>
                <h3>{categories[1]}</h3>
              </div>
           
              <ProductList products={catProductsTwo} />
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[2]}</h3>
              </div>
               <ProductList products={catProductsThree} />
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[3]}</h3>
              </div>
               <ProductList products={catProductsFour} />
            </div> */}
        </div>
      </div>
      <div className="bg-slate-600 text-center text-white">
      <Backtotop/> 
      </div>
        </section>
  );
};

export default Home;
 