import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crypto from "./components/Crypto";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
