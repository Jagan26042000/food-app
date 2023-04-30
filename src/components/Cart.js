import { useShopsCrud } from "../context/ShopsContextCrud";
import "./Cart.css";

const Cart = () => {
  const { HandleBack, cart, TotalFoodCount, TotalFoodPrice, ResetCartHandler } =
    useShopsCrud();
  const PlaceOrderHandler = () => {
    TotalFoodCount === 0 && alert("Please add some food to place order");
    TotalFoodCount > 0 && alert("Order Places Sucessfully");
    ResetCartHandler();
  };
  return (
    <div className="cart-container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ul>
        {cart.map((cartData) => {
          return (
            <div className="cart-item">
              <div>{cartData.hotelName}</div>
              <div>{cartData.foodname}</div>
              <div>{cartData.foodPrice}</div>
              <div>{cartData.foodCount}</div>
            </div>
          );
        })}
      </ul>
      <div className="cart-total">{TotalFoodCount + " Items | " + TotalFoodPrice}</div>
      <button className="cart-btn" onClick={PlaceOrderHandler}>Place Order</button>
      <button className="cart-btn" onClick={HandleBack}>Back</button>
    </div>
  );
};
export default Cart;
