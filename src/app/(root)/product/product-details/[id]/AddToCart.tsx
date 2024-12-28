"use client";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { addItem } from "../../../../../../store/cartSlice";
import React from "react";
import { Product } from "../../../../../../typing";
import { useToast } from "@/hooks/use-toast";

const AddToCart = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  // add To Cart Handler
  const addToCartHandler = () => {
    toast({
      description: "Item added to cart",
      variant: "success",
      className: "text-lg",
    });
    dispatch(addItem(product));
  };

  return (
    <div>
      <Button
        className="mt-4"
        onClick={() => {
          addToCartHandler();
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
