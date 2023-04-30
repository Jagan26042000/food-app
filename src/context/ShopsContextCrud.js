import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { v4 as uuid } from "uuid";

const shopsCrudContext = createContext();
export const ShopsContextCrud = ({ children }) => {
  const [cart, setCart] = useState([]);
  const credentials = {
    email: "test@abc.com",
    password: "123",
  };
  const HotelNames = [
    { name: "Hotel-1", id: 123 },
    { name: "Hotel-2", id: 456 },
    { name: "Hotel-3", id: 789 },
  ];

  const { TotalFoodCount, TotalFoodPrice } = cart.reduce(
    (accumulator, currentValue) => {
      accumulator.TotalFoodCount += parseInt(currentValue.foodCount);
      accumulator.TotalFoodPrice +=
        currentValue.foodPrice * parseInt(currentValue.foodCount);
      return accumulator;
    },
    { TotalFoodCount: 0, TotalFoodPrice: 0 }
  );

  const cartCard = (foodname, count) => {
    const hotelName = HotelNames.find(
      (hotel) => hotel.id === foodname.hotelId
    ).name;
    const cartCardItem = {
      cartId: `${foodname.hotelId}${foodname.name}`,
      hotelId: foodname.hotelId,
      hotelName,
      foodname: foodname.name,
      foodPrice: foodname.rate * count,
      foodCount: count,
    };
    return cartCardItem;
  };

  const addCartHandler = (setCartItem) => {
    console.log(setCartItem);

    const FilteredCart = cart.filter(
      (cartItem) => cartItem.cartId !== setCartItem.cartId
    );
    setCart([...FilteredCart, setCartItem]);
  };

  const removeCartHandler = (foodname) => {
    const FilteredCart = cart.filter(
      (cartItem) => cartItem.cartId !== foodname
    );
    setCart(FilteredCart);
  };

  const navigate = useNavigate();
  const HandleBack = () => {
    navigate(-1);
  };

  const ResetCartHandler = () => {
    setCart([]);
  };

  const value = {
    TotalFoodCount,
    TotalFoodPrice,
    HotelNames,
    cart,
    credentials,
    addCartHandler,
    removeCartHandler,
    cartCard,
    HandleBack,
    ResetCartHandler,
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
