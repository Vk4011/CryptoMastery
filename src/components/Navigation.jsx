import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-[40%] mt-16 flex justify-around items-center border-[2px] border-blue-500 rounded-lg">
      <NavLink
        to="/"
        className=" w-full text-base text-center font-nunito m-2.5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-indigo-500 hover:to-sky-500  text-cyan-800 hover:text-cyan-500 rounded-lg p-2 
      hover:bg-sky-200 cursor-pointer rounded capitalize font-semibold
      active:text-blue-300 m-2.5
      "
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return ` w-full text-base text-center font-nunito m-2.5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-indigo-500 hover:to-sky-500 
           text-cyan-800 hover:text-cyan-500 rounded-lg p-2 
                 cursor-pointer rounded capitalize font-semibold
                active:text-blue-300 m-2.5

                ${
                  isActive
                    ? "bg-cyan text-purple-300 "
                    : "bg-gray-200 text-gray-100"
                }
                `;
        }}
      >
        Trending
      </NavLink>

      <NavLink
        to="/saved"
        className=" w-full text-base text-center font-nunito m-2.5  text-cyan-800 hover:text-cyan-500 rounded-lg p-2 
        bg-gradient-to-r from-green-400 to-blue-500 hover:from-indigo-500 hover:to-sky-500  
        cursor-pointer rounded capitalize font-semibold
      active:text-blue-300 m-2.5
      "
      >
        Saved
      </NavLink>
    </nav>
    
  );
};

export default Navigation;
