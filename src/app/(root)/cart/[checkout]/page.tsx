"use client"
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const CheckoutPage: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevents page reload
    setShowMessage(true); // Show the interactive message
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 3 seconds
    }, 3000);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl font-semibold text-charcoal text-center mb-8">
          Checkout
        </h1>

        {/* Checkout Form */}
        <div className="bg-gray-100 p-6 rounded-sm shadow-lg">
          <h2 className="text-xl font-semibold text-charcoal mb-4">
            Billing and Shipping Details
          </h2>
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-charcoal"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="mt-1 block w-full p-3 border border-lightGray rounded-md focus:ring-richGold focus:border-richGold"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-charcoal"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full p-3 border border-lightGray rounded-md focus:ring-richGold focus:border-richGold"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-charcoal"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="mt-1 block w-full p-3 border border-lightGray rounded-md focus:ring-richGold focus:border-richGold"
                required
              />
            </div>

            {/* Shipping Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-charcoal"
              >
                Shipping Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="mt-1 block w-full p-3 border border-lightGray rounded-md focus:ring-richGold focus:border-richGold"
                required
              />
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-charcoal"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                className="mt-1 block w-full p-3 border border-lightGray rounded-md focus:ring-richGold focus:border-richGold"
                required
              />
            </div>


            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-burgundy text-pearl py-3 rounded-md text-lg font-semibold hover:bg-charcoal hover:text-pearl transition-all"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Centered Interactive Message */}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-richGold text-burgundy sm:px-16 sm:py-16 px-6 py-8 rounded-sm shadow-lg text-center animate-fade-in transition duration-500">
            <h2 className="text-2xl font-semibold">🎉 Order Placed!</h2>
            <p className="text-sm font-medium mt-2 mb-6">Your order has been placed successfully.</p>
            <Link href="/" className="text-sm underline text-center text-gray-500"><ArrowLeftCircle className="inline-block"/> Back to PrimePick</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
