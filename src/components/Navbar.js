import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { setSidebarOn } from "../store/SidebarSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getAllCategories } from "../store/CategorySlice";
import Login from "./Login";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../store/CartSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);

  return (
    <nav className="relative">
        
      <div className=" flex justify-between items-center p-2  text-white">
        <div className="brand-toggle flex items-center">
          <button
            className="mr-6  transition-[all 300ms ease-in-out]"
            onClick={() => dispatch(setSidebarOn())}
          >
            <RxHamburgerMenu className="w-6 h-6" />
          </button>

          <Link to={"/"} className=" rounded-xl font-semibold text-2xl ">
            Bishtk@rt
          </Link>
        </div>

       
        <div className="av-collapse hidden md:block">
          <div className="search ]">
            <div
              className="flex mt-3 bg-white pl-2 pr-2 pt-1 pb-1 
             items-center rounded-lg"
            >
              <input
                type="text"
                className="w-[36rem] outline-none text-black"
                onChange={(e) => handleSearchTerm(e)}
              />
              <Link to={`search/${searchTerm}`}>
                <BsSearch className="text-amber-400" />
              </Link>
            </div>
          </div>

          <ul className="navbar-nav flex ">
            {
              // taking only first 8 categories
              categories?.slice(0, 4).map((category, idx) => (
                <li className="nav-item no-wrap pl-4" key={idx}>
                  <Link
                    to={`category/${category}`}
                    className="nav-link text-capitalize"
                  >
                    {category.replace("-", " ")}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
       
        <div className="relative">
          <Link to={"/cart"} className="cart_btn">
            <AiOutlineShoppingCart
             
              className="w-8 h-8 relative"
            />
          </Link>
          <span className=" pl-[6px] pr-[6px] pt-[2px] pb-[2px] rounded-[50%] text-center absolute -top-2 left-4 text-xs bg-[#cc2c65] text-white">
            {itemsCount}
          </span>

        </div>
     
      </div>

   
    </nav>
  );
};

export default Navbar;
