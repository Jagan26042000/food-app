import React from "react";
import HotelCard from "./HotelCard";
import { useShopsCrud } from "../context/ShopsContextCrud";
import "./MainMenu.css";

const MainMenu = () => {
  const { HotelNames } = useShopsCrud();

  const foods = [
    {
      id: HotelNames[0].id,
      items: [
        { name: "item1", rate: 25 },
        { name: "item2", rate: 10 },
        { name: "item3", rate: 50 },
      ],
    },
    {
      id: HotelNames[1].id,
      items: [
        { name: "item4", rate: 55 },
        { name: "item5", rate: 30 },
        { name: "item6", rate: 80 },
      ],
    },
    {
      id: HotelNames[2].id,
      items: [
        { name: "item7", rate: 22 },
        { name: "item8", rate: 18 },
        { name: "item9", rate: 54 },
      ],
    },
  ];

  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <label className="search-label">Search</label>
      <input className="search-input" type="text" placeholder="Search restaurant, dishes" />
      <ul>
        {HotelNames.map((hotel) => {
          return <HotelCard foods={foods} hotel={hotel} key={hotel.id} />;
        })}
      </ul>
    </div>
  );
};
export default MainMenu;
