import React from "react";
import { v4 as uuid } from "uuid";
import HotelCard from "./HotelCard";

const MainMenu = () => {
  const HotelNames = [
    { name: "Hotel-1", id: uuid() },
    { name: "Hotel-2", id: uuid() },
    { name: "Hotel-3", id: uuid() },
  ];

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
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <label>Search</label>
      <input type="text" placeholder="Search restaurant, dishes" />
      <ul>
        {HotelNames.map((hotel) => {
          return <HotelCard foods={foods} hotel={hotel} />;
        })}
      </ul>
    </div>
  );
};
export default MainMenu;
