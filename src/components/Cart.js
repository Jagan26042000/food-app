import { v4 as uuid } from "uuid";
import { useState } from "react";

const Cart = (props) => {
    const [foodItem, setFoodItem] = useState([]);
    const [value, setValue] = useState();
    let count = 0;
    const AddItem = (foodname,event) => {
        event.preventDefault();
        setValue(event.target.value);
        setFoodItem([...foodItem,foodname.name])
        props.addCartHandler(foodItem);
      };
    const {foodname} = props;
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
    </div>
  );
};
export default Cart;
