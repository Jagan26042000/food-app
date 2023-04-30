import React from "react";
import { Link } from "react-router-dom";
import "./HotelCard.css";

const HotelCard = (props) => {
  const { hotel, foods } = props;

  return (
    <Link
      to={"/FoodList"}
      state={{
        hotel: hotel,
        food: foods.find((food) => food.id === hotel.id).items,
      }}
      key={hotel.id}
      className="hotel-card"
    >
      <div className="hotel-card__name">{hotel.name} </div>
    </Link>
  );
};
export default HotelCard;