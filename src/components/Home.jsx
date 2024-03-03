import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";
import TableComponent from "./TableComponent";
import Main from "./Main";
import { CryptoProvider } from "./context/CryptoContext";

const Home = () => {
  return (
    <>
        <CryptoProvider>
        <main className="bg-black w-full h-full flex flex-col first-letter:content-center items-center  relative text-sky-500 text-3xl font-nunito">
          <div className="w-screen h-screen bg-black fixed -z-10" />
          <Logo />
          <Navigation />
          <Main/>
        </main>
        </CryptoProvider>
        
    
    </>
  );
};

export default Home;
