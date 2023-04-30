import React from "react";
import { Link, useLocation } from "react-router-dom";
import FoodCard from "./FoodCard";
import { v4 as uuid } from "uuid";
import { useShopsCrud } from "../context/ShopsContextCrud";

export function FoodList(props) {
  const location = useLocation();
  const { hotel, food } = location.state;
  const { TotalFoodCount = 0, HandleBack } = useShopsCrud();

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
        <button>{TotalFoodCount > 0 && TotalFoodCount}View Cart</button>
      </Link>
      <button onClick={HandleBack}>Back</button>
    </div>
  );
}
