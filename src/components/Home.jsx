import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";
import TableComponent from "./TableComponent";

const Home = () => {
  return (
    <>
      {/* <div className="c flex justify-center items-center h-screen bg-gradient-to-r from-sky-400 to-blue-500 ">
        <center>
          <h1 className="text-6xl font-bold text-gray-800 ">Crypto</h1>
        </center>
        *{" "} */}
        <main className="bg-black w-full h-full flex flex-col first-letter:content-center items-center  relative text-sky-500 text-3xl font-nunito">
          <div className="w-screen h-screen bg-black fixed -z-10" />
          <Logo />
          <Navigation />
          <TableComponent/>
        </main>
        {/* <section className="w-[80] h-flull flex flex-col mt-60 mb-24 relative ">
          Crypto
        </section> */}
    
    </>
  );
};

export default Home;
