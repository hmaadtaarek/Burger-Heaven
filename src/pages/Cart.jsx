import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  // Example cart items
  const initialCartItems = [
    { id: 1, name: "Classic Burger", price: 12.99, quantity: 1 },
    { id: 2, name: "Crispy Chicken Burger", price: 14.99, quantity: 2 },
    { id: 3, name: "Salt & Vinegar Fries", price: 5.99, quantity: 1 },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to increase the quantity of an item
  const increaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen py-10 px-5 md:px-20 bg-[#1E1E1E] text-[#E9E3DC]">
      <section className="max-w-6xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl md:text-6xl uppercase">Your Cart</h1>

        {/* Cart Items */}
        <div className="flex flex-col gap-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-5 border border-[#B3A0CD] rounded-lg"
            >
              <div className="flex gap-8 items-center">
                <h3 className="text-2xl md:text-3xl">{item.name}</h3>
                <p className="text-lg md:text-xl">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex gap-5 items-center">
                {/* Quantity Controls */}
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-4 py-2 bg-[#E9E3DC] text-black"
                >
                  -
                </button>
                <span className="text-2xl">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-4 py-2 bg-[#E9E3DC] text-black"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center p-5 border-t border-[#B3A0CD] mt-8">
          <h3 className="text-3xl md:text-4xl">Total</h3>
          <p className="text-3xl md:text-4xl">${totalPrice.toFixed(2)}</p>
        </div>

        {/* Proceed to Checkout Button */}
        <div className="flex justify-end mt-10">
          <Link to="/checkout">
            <button className="bg-[#B3A0CD] text-black text-xl px-8 py-4 uppercase">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
