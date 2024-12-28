import React from "react";
import { addItem, CartItem, removeItem } from "../../../store/cartSlice";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useDispatch } from "react-redux";

type ItemProps = {
  items: CartItem[];
};

const CartSidebar = ({ items }: ItemProps) => {

    const dispatch = useDispatch();
    // add To Cart Handler
    const addToCartHandler = (item:CartItem)=>dispatch(addItem(item));
    // remove from Cart Handler
    const removeCartHandler = (id:number)=>dispatch(removeItem({id}));


  return (
    <div className="my-6 h-full">
      <h1 className="text-center font-bold text-lg text-burgundy">Your Cart</h1>
      {/* empty cart */}
      {items.length == 0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center ">
          <Image
            src="/images/cart.jpg"
            alt="empty cary "
            width={500}
            height={500}
            className="object-cover mx-auto "
          />
          <h1 className="mt-6 text-2xl font-semibold text-gray-600 ">
            Your Cart is empty
          </h1>
        </div>
      )}
      {/* filled cart */}
      {items.length > 0 && (
        <div>
          {items?.map((items) => {
            return (
              <div
                key={items.id}
                className="py-6 border-b-2 border-gray-200   "
              >
                {/* cart item image */}
                <div>
                  <Image
                    src={items?.image}
                    alt={items.title}
                    width={60}
                    height={60}
                    className="object-cover mb-4"
                  />
                </div>
                {/* specs  */}
                <div>
                  {/* title */}
                  <h1 className="text-sm w-4/5 font-semibold truncate ">
                    {items?.title}
                  </h1>
                  {/* price */}
                  <h1 className="text-lg  font-bold text-charcoal font-mono  ">
                    ${(items?.price * items?.quantity).toFixed(2)}
                  </h1>
                  {/* quantity */}
                  <h1 className="text-base font-mono mb-2 text-gray-500 ">
                    Quantity: {items?.quantity}
                  </h1>
                  {/* buttons for addding and removing items */}
                  <div className="flex items-center space-x-2">
                    <Button size={"sm"} variant={"success"} className="p-4" onClick={()=>{addToCartHandler(items)}} >
                      Add
                    </Button>
                    <Button size={"sm"} variant={"destructive"} className="p-4" onClick={()=>{removeCartHandler(items.id)}}>
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
           {/* go to cart page  */}
      <Link href="/cart" >
      <Button className="w-full my-6 ">View all Cart</Button>
      </Link>
        </div>
      )}
     
    </div>
  );
};

export default CartSidebar;
