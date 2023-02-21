import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className="login flex   items-center justify-center">
      {isAuthenticated && (
        <div className="  pr-4">
          <div className="flex w-full items-center">
           < img src={user.picture} alt={user.name} className= "w-6 h-6 rounded-[50%]"/> <span className="pl-1 text-sm"> {user.name}</span>
          </div>
        </div>
      )}

{isAuthenticated ? (
                <li className="">
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
              )}
    </div>
  );
};

export default Login;
