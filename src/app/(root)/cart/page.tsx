"use client";
import React from "react";
import { RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { addItem, CartItem, removeItem } from "../../../../store/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
  // get cart items
  const items = useSelector((state: RootState) => state.cart.items);
  //calculating total quantity
  const totalQuantity = items.reduce(
    (total, quantityOfItem) => total + quantityOfItem.quantity,
    0
  );
  // calcualting total price
  const totalPrize = items
    .reduce((total, items) => total + items.price * items.quantity, 0)
    .toFixed(2);
  //calculating VAT
  const VAT = (+totalPrize * 0.1).toFixed(2);
  //calculating rotal price with VAT
  const totalPriceWithVAT = (+totalPrize + +VAT).toFixed(2);

  //add items
  const addItemHandler = (item:CartItem)=>{
    dispatch(addItem(item))
  }
  //remove items
  const removeItemHandler = (id:number)=>{
    dispatch(removeItem({id}))
  }

  return (
    <div className="my-8 min-h-[61vh] ">
      {/* check if the cart is empty */}
      {items.length === 0 && (
        <div className="flex items-center w-full flex-col justify-center ">
          <Image
            src="/images/cart.jpg"
            alt="empty cart"
            width={411}
            height={381}
            className="object-cover mx-auto "
          />
          <h1 className="mt-6 text-4xl font-semibold text-gray-500 ">
            Your Cart is empty
          </h1>
          <Link href="/">
            <Button className="my-9" variant="ghost">
              Shop Now
            </Button>
          </Link>
        </div>
      )}
      {/* check if the cart item exist */}
      {items.length > 0 && (
        <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12 ">
          {/* cart items */}
          <div className="rounded-sm shadow-md overflow-hidden xl:col-span-4 ">
            <h1 className="p-4 text-xl sm:text-2xl md:text-3xl font-bold font-mono  bg-gray-100 ">
              Your Cart ({totalQuantity} Items)
            </h1>
            {items.map((items) => {
              return (
                <div key={items.id}>
                  <div className="flex pb-6 mt-2 md:mt-4 p-5  bg-gray-100 border-b-2 border-opacity-15 border-gray-600 items-center space-x-10 ">
                    {/* image */}
                    <div className="w-[30%]">
                      <Image
                        src={items.image}
                        alt={items.title}
                        width={180}
                        height={150}
                      />
                    </div>
                    {/* description */}
                    <div className="w-[70%]">
                      <h1 className="md:text-xl text-base font-bold text-charcoal pb-4 ">
                        {items.title}
                      </h1>
                      <h1 className="md:text-lg text-sm text-gray-500 ">
                        {" "}
                        Category : {items.category}{" "}
                      </h1>
                      <h1 className="md:text-2xl text-lg font-bold text-burgundy ">
                        Price : ${items.price}{" "}
                      </h1>
                      <h1 className="md:text-lg text-sm font-medium">
                        Quantity: {items.quantity}{" "}
                      </h1>
                      {/* buttons */}
                      <div className="flex items-center mt-4 space-x-2">
                        <Button variant="success" onClick={()=>{addItemHandler(items)}} >Add More</Button>
                        <Button variant="destructive" onClick={()=>{removeItemHandler(items.id)}}>Remove</Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* cart summary */}
          <div className="xl:col-span-2">
                <div className="bg-lightGray text-charcoal sticky top-[25vh] p-6 rounded-sm ">
                    <h1 className="text-center my-4  text-3xl font-semibold  text-black">Summary</h1><hr /><hr /><hr />
                    <div className="flex mt-4 text-lg uppercase items-center justify-between ">
                    <span>Sub Total :</span> <span>${totalPrize}</span>
                    </div>
                    {/* vat */}
                    <div className="flex my-2 text-lg uppercase  items-center justify-between ">
                    <span>VAT :</span> <span>${VAT}</span>
                    </div>
                    {/*  Shipping */}
                    <div className="flex mb-9 mt-2 text-lg uppercase items-center justify-between ">
                    <span>Shipping :</span> <span>FREE</span>
                    </div> <hr />
                     {/*  Total */}
                     <div className="flex my-2 text-xl text-black font-semibold uppercase items-center justify-between ">
                    <span>Total :</span> <span>${totalPriceWithVAT}</span>

                    </div>
                    <Button  className="w-full my-2 mt-5 text-lg font-bold rounded-sm p-5 bg-burgundy"  >
                    <Link href="/cart/checkout">Go to Checkout</Link>             
                     </Button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
