import React, { createContext, useContext, useState } from "react";

const shopsCrudContext = createContext();
export const ShopsContextCrud = ({ children }) => {

    const [cart, setCart] = useState([]);
    const credentials = {
        email: "test@abc.com",
        password: "123",
    };

    const removeCartHandler = (foodname)=>{
        const FilteredCart = cart.filter(item =>item!==foodname);
        setCart(FilteredCart);
    };

    const addCartHandler = (setCartItem) => {
        // console.log(cart);console.log(setCartItem);
        // setCart([...cart,...setCartItem]);        
        // console.log("Afer");
        // console.log(cart);
        // console.log("__________");
        console.log(setCartItem);

        const FilteredCart = cart.filter(item =>item!==setCartItem[0]);
        setCart([...FilteredCart,...setCartItem]);
    };

    const value = {cart,
        credentials,
        addCartHandler,
        removeCartHandler};

    return <shopsCrudContext.Provider value={value}>
        {children}
    </shopsCrudContext.Provider>
};

export function useShopsCrud() {
    return useContext(shopsCrudContext);
};