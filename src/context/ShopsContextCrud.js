import React, { createContext, useContext, useState } from "react";

const shopsCrudContext = createContext();
export const ShopsContextCrud = ({ children }) => {

    const [cart, setCart] = useState([]);
    const credentials = {
        email: "test@abc.com",
        password: "123",
    };
    const addCartHandler = (setCartItem) => {
        
        setCart([...cart, setCartItem]);
    };

    const value = {cart,
        credentials,
        addCartHandler};

    return <shopsCrudContext.Provider value={value}>
        {children}
    </shopsCrudContext.Provider>
};

export function useShopsCrud() {
    return useContext(shopsCrudContext);
};