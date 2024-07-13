import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} from "@/redux/cartSlice";

const MiniCart = () => {
  const cartItem = useSelector((state) => state.cart);
  console.log(cartItem, "jsdkhsdk");
  return <div>welcome to mini cart</div>;
};

export default MiniCart;
