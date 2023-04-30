import React from "react";
import { Link, useLocation } from "react-router-dom";
import FoodCard from "./FoodCard";
import { v4 as uuid } from "uuid";
import { useShopsCrud } from "../context/ShopsContextCrud";
import Cart from "./Cart";

export function FoodList(props) {
  const location = useLocation();
  const { cart } = useShopsCrud();

  const { hotel, food } = location.state;
  const { HandleBack } = useShopsCrud();
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <header>{hotel.name}</header>
      <ul>
        {food.map((foodname) => {
          return (
            <FoodCard
              foodname={{ ...foodname, hotelId: hotel.id }}
              key={uuid()}
            />
          );
        })}
      </ul>
      <Link to={"/Cart"}>
        <button>{cart.length}View Cart</button>
      </Link>
      <button onClick={HandleBack}>Back</button>
    </div>
  );
}
