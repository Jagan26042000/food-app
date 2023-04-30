import React, { createContext, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const shopsCrudContext = createContext();
export const ShopsContextCrud = ({ children }) => {
  const [cart, setCart] = useState([]);
  const credentials = {
    email: "test@abc.com",
    password: "123",
  };
  const temp = {
    hotelname: "Hotel-1",
    hotelid: "123",
    foodname: "food-1",
    foodprice: 10,
    foodcount: 2,
    cartid: "12345",
  };

  const removeCartHandler = (foodname) => {
    const FilteredCart = cart.filter((item) => item !== foodname);
    setCart(FilteredCart);
  };

  const addCartHandler = (setCartItem) => {
    console.log(setCartItem);

    const FilteredCart = cart.filter((item) => item !== setCartItem[0]);
    setCart([...FilteredCart, ...setCartItem]);
  };
  const navigate = useNavigate();
  const HandleBack = () => {
    navigate(-1);
  };

  const value = {
    cart,
    credentials,
    addCartHandler,
    removeCartHandler,
    HandleBack,
  };

  return (
    <shopsCrudContext.Provider value={value}>
      {children}
    </shopsCrudContext.Provider>
  );
};

export function useShopsCrud() {
  return useContext(shopsCrudContext);
}
