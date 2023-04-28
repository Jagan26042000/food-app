import React, { useState } from "react";
import { useShopsCrud } from "../context/ShopsContextCrud";

const Cart = (props) => {
  const { foodname } = props;
  const [foodItem, setFoodItem] = useState([]);
  const { addCartHandler, cart } = useShopsCrud();

  // To get the number items in the cart
  const cartCount = cart.reduce((acc, item) => {
    return item === foodname.name ? acc + 1 : acc
  }, 0);
  
  const [value, setValue] = useState(cartCount);

  let count = 0;
  const clickHandler = () => {
    addCartHandler(foodItem);
  };

  const AddItem = (foodname, event) => {
    event.preventDefault();
    setValue(event.target.value);
    // setFoodItem([...foodItem, foodname.name]);
    setFoodItem(Array.from({ length: event.target.value }, () => foodname.name));
    // console.log(Array.from({ length: value }, () => foodname.name));
    
    // addCartHandler(foodItem);
    // clickHandler();
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
export default Cart;
