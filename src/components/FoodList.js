import React from "react";
import { Link, useLocation } from "react-router-dom";
import FoodCard from "./FoodCard";
import { v4 as uuid } from "uuid";
import { useShopsCrud } from "../context/ShopsContextCrud";
import "./FoodList.css";

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
      <center>
        <header className="foodlist-header">{hotel.name}</header>
      </center>
      <ul className="foodlist-list">
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
        <button className="foodlist-list-item-button">
          {TotalFoodCount > 0 && TotalFoodCount}View Cart
        </button>
      </Link>
      <button className="foodlist-list-item-button-back" onClick={HandleBack}>
        Back
      </button>
    </div>
  );
}
