// import "./App.css";
import LoginForm from "./components/LoginForm";
import MainMenu from "./components/MainMenu";
import FoodCard from "./components/FoodCard";
import Cart from "./components/Cart";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { HeaderLayout } from "./components/HeaderLayout";
import { FoodList } from "./components/FoodList";
import { ShopsContextCrud } from "./context/ShopsContextCrud";
import Test from "./components/Test";

function App() {

  return (
    <div>
      <Router>
        <HeaderLayout hideHeaderPath={["/Login"]} />
        <ShopsContextCrud>
        <Routes>
          <Route path="/" exact element={<Navigate to="/Login" replace />} />
          <Route
            path="/Login"
            element={<LoginForm  />}
          />
          <Route path="/ShopList" element={<MainMenu />}></Route>
          <Route path="/FoodList" element={<FoodList />}></Route>
          <Route path="/FoodCard" element={<FoodCard />}/>
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/Test" element={<Test />} />
        </Routes>
        </ShopsContextCrud>        
      </Router>
    </div>
  );
}

export default App;
