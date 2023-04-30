import React, { useState } from "react";
import { useShopsCrud } from "../context/ShopsContextCrud";

const FoodCard = (props) => {
  const { foodname } = props;
  const [foodItem, setFoodItem] = useState([]);
  const { addCartHandler, removeCartHandler, cart } = useShopsCrud();
  let count = 0;

  // To get the number items in the cart
  const cartCount = cart.reduce((acc, item) => {
    return item === foodname.name ? acc + 1 : acc;
  }, 0);

  const [value, setValue] = useState(cartCount);

  // clickHandler will increase or decrease the foodItem with addCartHandler
  // It will erase entire datan of a specific food in cart with removeCartHandler
  const clickHandler = () => {
    foodItem.length > 0
      ? addCartHandler(foodname,value)
      : removeCartHandler(foodname.name);
  };

  // AddItem will set the foodItem as [value*foodname]
  const AddItem = (foodname, event) => {
    event.preventDefault();
    setValue(event.target.value);
    setFoodItem(
      Array.from({ length: event.target.value }, () => foodname.name)
    );
  };

  return (
    <div>
      <li>{foodname.name}</li>
      <li>{foodname.rate}</li>
      <input
        type="number"
        onChange={(event) => {
          AddItem(foodname, event);
        }}
        min={count}
        value={value}
      />

      <button onClick={clickHandler}>Add</button>
    </div>
  );
};
export default FoodCard;
