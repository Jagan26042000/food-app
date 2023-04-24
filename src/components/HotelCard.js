import { Link } from "react-router-dom";

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
    >
      <li>{hotel.name} </li>
    </Link>
  );
};
export default HotelCard;
