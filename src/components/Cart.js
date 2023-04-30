import { useShopsCrud } from "../context/ShopsContextCrud";

const Cart = () => {
  const { HandleBack, cart, TotalFoodCount, TotalFoodPrice, ResetCartHandler } =
    useShopsCrud();
  const PlaceOrderHandler = () => {
    TotalFoodCount === 0 && alert("Please add some food to place order");
    TotalFoodCount > 0 && alert("Order Places Sucessfully");
    ResetCartHandler();
  };
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ul>
        {cart.map((cartData) => {
          return (
            <>
              <li>{cartData.hotelName}</li>
              <li>{cartData.foodname}</li>
              <li>{cartData.foodPrice}</li>
              <li>{cartData.foodCount}</li>
            </>
          );
        })}
      </ul>
      {TotalFoodCount + "items" + TotalFoodPrice}
      <button onClick={PlaceOrderHandler}>Place Order</button>
      <button onClick={HandleBack}>Back</button>
    </div>
  );
};
export default Cart;
// cartId: `${foodname.hotelId}${foodname.name}`, hotelId: foodname.hotelId, hotelName,
//       foodname: foodname.name, foodPrice: foodname.rate * count, foodCount: count
