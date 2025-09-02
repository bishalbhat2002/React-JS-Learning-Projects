import React, { useContext, useState } from "react";
import { items } from "./items";
import { CartContext } from "./CartContext";
import Header from "../SmallComponents/Header"
import Explanation from "../SmallComponents/Explanation"

const Cart = () => {
  const { cartItems, cartPrice, setCartItems, setCartPrice, showItems, setShowItems} =
    useContext(CartContext);
    console.log(cartPrice)
    
    const handleAddToCartBtn = (index)=>{
     setCartItems([...cartItems, items[index]]);
     setCartPrice(cartPrice + items[index].price)
     setShowItems(true);
    }
    
    const explained = "here,.";
  return (
    <>
      <Header heading="Add to Cart Feature Using UseContext" />

      {/* Data Show To add Cart */}
      <table className="border mx-auto">
        <thead className="border">
          <tr>
            <th className="border px-2 py-1 text-md bg-yellow-200 text-gray-800">
              Name
            </th>
            <th className="border px-2 py-1 text-md bg-yellow-200 text-gray-800">
              Price
            </th>
            <th className="border px-2 py-1 text-md bg-yellow-200 text-gray-800">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td className="border px-2 py-1 text-md">{item.name}</td>
                <td className="border px-2 py-1 text-md">{item.price}</td>
                <td className="border px-2 py-1 text-md">
                  <button
                  onClick={()=>handleAddToCartBtn(index)} 
                  className="bg-blue-300 text-gray-700 px-4 py-1 text-sm font-semibold rounded-md hover:scale-110 active:scale-95 transition-transform duration-200 ease-in-out">
                    Add To Cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Cart Section */}
      <CartDetails />
    </>
  );
};

export default Cart;

function CartDetails() {
       const { cartItems, cartPrice, showItems} = useContext(CartContext);
  return (
    <section className="mx-auto mt-5 w-90 lg:w-160 my-2 px-10 py-4 rounded-md  bg-blue-200">
      <span className="text-lg xl:text-2xl font-extrabold  text-gray-800">
        Total: <span className="font-bold text-gray-700"> {cartPrice} RS</span>
      </span>
      {
          showItems ? 
          <div className="-mx-5 bg-gray-300 border border-gray-500 py-4 px-5 rounded-lg">
          <ul className="text-gray-700 text-sm">
               {
                    cartItems.map((item, index)=>{
                         return (
                              <li key={index}><b>Name: </b>{item.name} --- <b>Price: </b>{item.price} </li>
                         )
                    })
               }
          </ul>
      </div> : ""
     }
    </section>
  );
}
