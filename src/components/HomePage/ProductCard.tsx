"use client";
import React from "react";
import { Product } from "../../../typing";
import Image from "next/image";
import Link from "next/link";
import { HeartIcon, ShoppingCartIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cartSlice";
import { useToast } from "@/hooks/use-toast";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array(num).fill(0);
  const {toast} = useToast() //add to cart popup

  const dispatch = useDispatch()
  const addToCartHandler = (product:Product) =>{
    toast({
      description: "Item added to cart",
      variant: 'success',
      className: "text-lg"
    })
    dispatch(addItem(product));
  }

  return (
    <div className="p-4 sm:pb-[148px] sm:pt-12 pb-40 pt-16 bg-pearl hover:border-burgundy hover:scale-105 transition duration-300 sm:mx-0  border h-full">
      <div className="sm:w-[200px] w-full h-[150px] ">
        <Image
          src={product.image}
          alt="product.title"
          width={100}
          height={100}
          className="w-[80%] h-[80%] mx-auto object-contain"
        />
        {/* product category */}
        <p className="mt-5 text-sm capitalize text-gray-600">
          {product.category}
        </p>
        {/* link to product detail */}
        <Link href={`/product/product-details/${product.id}`}>
          <h1 className="text-lg cursor-pointer line-clamp-1 hover:text-burgundy transition-all hover:underline sm:w-full sm:truncate mt-1 text-charcoal font-semibold ">
            {product.title}
          </h1>
        </Link>
        {/* product rating */}
        <div className="flex items-center">
          {ratingArray.map(() => {
            return (
              <StarIcon
                key={Math.random() * 1000}
                size={14}
                fill="yellow"
                className="text-richGold"
              />
            );
          })}
        </div>
        {/* product Pricing */}
        <div className="flex mt-2 items-center space-x-2">
            {/* discounted price */}
            <p className="text-black text-base line-through font-semibold opacity-40">{`$${(product.price + 10).toFixed(2) }`}</p>
            {/* orignal price */}
            <p className="text-black text-base font-semibold opacity-80">{`$${(product.price).toFixed(2) }`}</p>

        </div>
        {/* buttons */}
        <div className="mt-2 flex items-center space-x-2 " >
            <Button  size={"icon"} onClick={()=>{
              addToCartHandler(product);
            }} >
                <ShoppingCartIcon size={18} className="hover:bg-gray-200" />
            </Button>
            <Button className="bg-red-500" size={"icon"} >
                <HeartIcon size={18}/>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
