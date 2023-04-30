import React, { useState } from "react";
import { useShopsCrud } from "../context/ShopsContextCrud";
import "./FoodCard.css";

const FoodCard = (props) => {
  const { foodname } = props;
  // const [foodItem, setFoodItem] = useState([]);
  const { addCartHandler, removeCartHandler, cart, cartCard } = useShopsCrud();
  let count = 0;

  // To get the number items in the cart
  const cartCount =
    cart.find((cartItem) => {
      return cartItem.cartId === `${foodname.hotelId}${foodname.name}`;
    })?.foodCount ?? 0;

  const [value, setValue] = useState(cartCount);

  // clickHandler will increase or decrease the foodItem with addCartHandler
  // It will erase entire datan of a specific food in cart with removeCartHandler
  const clickHandler = () => {
    value > 0
      ? addCartHandler(cartCard(foodname, value))
      : removeCartHandler(`${foodname.hotelId}${foodname.name}`);
  };

  // AddItem will set the foodItem as [value*foodname]
  const AddItem = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <div className="food-card">
      <div>{foodname.name}</div>
      <div>{foodname.rate}</div>
      <input
        className="food-card__input"
        type="number"
        onChange={(event) => {
          AddItem(event);
        }}
        min={count}
        value={value}
      />

      <button className="food-card__button" onClick={clickHandler}>
        Add
      </button>
    </div>
  );
};
export default FoodCard;
