import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { v4 as uuid } from "uuid";
import { useShopsCrud } from "../context/ShopsContextCrud";

export function FoodList(props) {
  const location = useLocation();
  const {cart} = useShopsCrud();

  const { hotel, food } = location.state;
  const navigate = useNavigate();
  const HandleBack = () => {
    navigate(-1);
  };

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
          return <Cart foodname={{...foodname, hotelId: hotel.id}} key={uuid()}/>;
        })}
      </ul>
      <button>View Cart{cart}</button>
      <button onClick={HandleBack}>Back</button>
    </div>
  );
}
