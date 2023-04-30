import React from "react";
import "./MainHeader.css";
import { Link } from "react-router-dom";
import "./MainHeader.css";
const MainHeader = () => {
  return (
    <header className="mainHeader">
      <h1 className="logo">Swigatto</h1>
      <Link to={"/Login"}>
        <button className="logoutBtn">Logout</button>
      </Link>
      <Link to={"/Cart"}>
        <button className="cartBtn">Cart</button>
      </Link>
      <p className="initials">PP</p>
    </header>
  );
};
export default MainHeader;
