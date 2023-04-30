import { useShopsCrud } from "../context/ShopsContextCrud";

const Cart = () => {
    const {HandleBack} = useShopsCrud();
return(
    <div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <ul>
            
        </ul>
        <button onClick={HandleBack}>Back</button>
    </div>
)
};
export default Cart;