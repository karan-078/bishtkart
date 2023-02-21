import React from "react";
import ProductList from "../components/ProductList";
import { STATUS } from "../utils/Status";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProductsByCategory,
  fetchAsyncProductsOfCategory,
  getCategoryProductsStatus,
} from "../store/CategorySlice";
import { useEffect } from "react";
import Loader from "../components/Loader";

const CategoryProduct = () => {
  //  use use dispatch for dispatch our payload
  const dispatch = useDispatch();
  const { category } = useParams();
  // store all category item in categoryProducts
  const categoryProducts = useSelector(getAllProductsByCategory);

  const categoryProductsStatus = useSelector(getCategoryProductsStatus);

  //  using use ussefct for first time loade our category
  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

  
  return (
    <div className="cat-products  bg-whitesmoke">
      <div className="container">
        <div className="cat-products-content bg-[#fff] p-2">
          <div className="title-md">
            <h3 className="mt-6 mb-6  text-xl  text-[#adc8d4]">
              Your{" "}
              <span className="text-capitalize">
                {category.replace("-", " ")}
              </span>
            </h3>
          </div>
          {
            // use ternary opertaor in case we are not getting our data we are dispaly loader camponent
            categoryProductsStatus === STATUS.LOADING ? (
              <Loader />
            ) : (
              <ProductList products={categoryProducts} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;

// dev-1uuh8mtcjej7sghv.us.auth0.com
// zmcXG4WBM9AFeeW6uB31l57tHloc3b0y