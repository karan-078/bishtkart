import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import Navbar from "./Navbar";
import Login from "./Login";
// import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  // console.log(user);
  return (
    <header className="sticky top-0 z-50 ">
      <div className=" bg-[#2874f0] pl-1  pt-2 md:h-28 md:pl-6 pr-6 overflow-hidden md:pt-0 ">
        <div className="root-dev md:flex md:justify-between text-white ">
          <div className="flex justify-center items-center ">
            <ul className="flex gap-2 ">
              <li className="pr-6 hidden md:block">
                <Link to={"/"}>Seller Center</Link>
              </li>

              <li className="pr-6 hidden md:block">
                <Link to={"/"}>Download</Link>
              </li>

              <li className=" items-center hidden md:flex">
                <span className="pr-2">Follow-us-</span>
                <Link to={"/contact"} className="flex gap-2">
                  <BsFacebook />
                  <AiOutlineInstagram />
                </Link>
              </li>
            </ul>
          </div>

          <div className="login flex justify-center items-center">
            <ul className="flex  items-center mt-2 mb-2 md:mt-0">
              <li className="pr-6">
                <Link to={"/support"}>Support</Link>
              </li>
              <li className="pr-6">
                <Link to={"/support"}>Register</Link>
              </li>
               
              <li><Login/></li> 
              {/* <li >{isAuthenticated && <p></p>}</li>
              {isAuthenticated ? (
                <li className="pl-4">
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log-out
                  </button>{" "}
                </li>
              ) : (
                <li>
                  <button onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )} */}
            </ul>
          </div>
        </div>

        <hr className="bg-black hidden md:block" />

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
