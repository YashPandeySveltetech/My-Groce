"use client";
import React, {useState} from "react";
import CartPage from "@/components/cartPage";
import MiniCart from "../../components/miniCart";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "EVEREST Dry Mango (Aam Choora)",
      price: 45.0,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      title: "EVEREST hingraj",
      price: 31.0,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      title: "Perdue Simply Smart Organics Gluten Free",
      price: 15.0,
      quantity: 1,
      image: "https://via.placeholder.com/50",
    },
  ]);

  const handleUpdateCart = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? {...item, quantity: Math.max(0, quantity)} : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleProceedCheckout = () => {
    alert("Proceeding to checkout!");
  };

  return (
    <div className="App mb-[150px]">
      <CartPage
        cartItems={cartItems}
        onUpdateCart={handleUpdateCart}
        onClearCart={handleClearCart}
        onProceedCheckout={handleProceedCheckout}
      />
      <MiniCart />
    </div>
  );
};

export default ShoppingCart;
