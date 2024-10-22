import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission
    setOrderSuccess(true);
  };

  return (
    <main className="min-h-screen py-10 px-5 md:px-20 bg-[#1E1E1E] text-[#E9E3DC]">
      <section className="max-w-4xl mx-auto flex flex-col gap-8">
        <h1 className="text-4xl md:text-6xl uppercase">Checkout</h1>

        {/* Check if order is successful */}
        {orderSuccess ? (
          <div className="flex flex-col items-center gap-8 py-20">
            <h2 className="text-4xl md:text-5xl text-[#D1EF53]">Order Successful!</h2>
            <p className="text-xl md:text-2xl">Thank you for your order.</p>
            <Link to="/">
              <button className="bg-[#B3A0CD] text-black text-xl px-8 py-4 uppercase">
                Back to Home
              </button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Customer Information */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl">Customer Information</h2>
              <div className="flex flex-col gap-4 md:flex-row">
                <input
                  className="w-full md:w-1/2 p-4 bg-transparent border border-[#B3A0CD] rounded-md text-lg"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full md:w-1/2 p-4 bg-transparent border border-[#B3A0CD] rounded-md text-lg"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                className="w-full p-4 bg-transparent border border-[#B3A0CD] rounded-md text-lg"
                type="text"
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            {/* Payment Information */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl">Payment Information</h2>
              <input
                className="w-full p-4 bg-transparent border border-[#B3A0CD] rounded-md text-lg"
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
              <div className="flex flex-col gap-4 md:flex-row">
                <input
                  className="w-full md:w-1/2 p-4 bg-transparent border border-[#B3A0CD] rounded-md text-lg"
                  type="text"
                  name="expiry"
                  placeholder="Expiry Date (MM/YY)"
                  value={formData.expiry}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full md:w-1/2 p-4 bg-transparent border border-[#B3A0CD] rounded-md text-lg"
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Submit Order Button */}
            <button
              type="submit"
              className="bg-[#B3A0CD] text-black text-xl px-8 py-4 uppercase"
            >
              Place Order
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
