import React from "react";
import "./MainHeader.css";
import { Link } from "react-router-dom";
const MainHeader = () => {
  return (
    <header className="mainHeader">
      <h1>Swigatto</h1>
      <Link to={"/Login"}>
        <button>Logout</button>
      </Link>
      <Link to={"/Cart"}><button>Cart</button></Link>
      <p>PP</p>
    </header>
  );
};
export default MainHeader;
