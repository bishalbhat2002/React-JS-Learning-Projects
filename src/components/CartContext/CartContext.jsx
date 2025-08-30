import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props)=>{
     const [cartItems, setCartItems] = useState([]);
     const [cartPrice, setCartPrice] = useState(0);
     const [showItems, setShowItems] = useState(false);
 
     return (
          <CartContext.Provider value={{cartItems, cartPrice, setCartItems, setCartPrice, showItems, setShowItems}}>
               {props.children}
          </CartContext.Provider>
     )
}