import "./App.css";
import LoginForm from "./components/LoginForm";
import MainMenu from "./components/MainMenu";
import Cart from "./components/Cart";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { HeaderLayout } from "./components/HeaderLayout";
import { FoodList } from "./components/FoodList";
import { useState } from "react";

function App() {
  const [cart,setCart] = useState([]);
  const credentials = {
    email: "test@abc.com",
    password: "123",
  };
  const addCartHandler = (setCartItem) => {
   setCart([...cart,setCartItem]);
  };

  return (
    <div>
      <Router>
        <HeaderLayout hideHeaderPath={["/Login"]} />
        <Routes>
          <Route path="/" exact element={<Navigate to="/Login" replace />} />
          <Route
            path="/Login"
            element={<LoginForm credentials={credentials} />}
          />
          <Route path="/ShopList" element={<MainMenu />}></Route>
          <Route path="/FoodList" element={<FoodList cart={cart}/>}></Route>
          <Route path="/Cart" element={<Cart addCartHandler={addCartHandler}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
