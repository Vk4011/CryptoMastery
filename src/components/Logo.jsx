import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./images/bitcoin.png";
const Logo = () => {
  return (
    <>
      <Link
        to="/"
        className="absolute top-[1.5rem] left-[1.5rem] [text-decoration:none text-lg text-cyan flex items-center"
      >
        <img src={logo} className="w-20" alt="bitcoin" />
        <span>CryptoMastery</span>
      </Link>
    </>
  );
};

export default Logo;
