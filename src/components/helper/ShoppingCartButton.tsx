"use client"
import React from 'react';
import {  ShoppingCartIcon } from 'lucide-react';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import CartSidebar from './CartSidebar';

const ShoppingCartButton = () => {
const items = useSelector((state:RootState)=>state.cart.items);
const totalQuantity = items.reduce((total, quantityOfItem) => total + quantityOfItem.quantity, 0);

  return (
    <Sheet>
    <SheetTrigger className='relative'>
      <span className='absolute -top-3 -right-2 w-5 h-5 text-white bg-red-600 text-center flex items-center justify-center flex-col text-sm rounded-full '>{totalQuantity}</span>
      {/* icon */}
      <ShoppingCartIcon size={22} cursor={"pointer"}/>
      </SheetTrigger>
      <SheetContent className='overflow-auto h-full '>
        {/* card Sidebar */}
        <CartSidebar items={items} />
      </SheetContent>
      </Sheet>
  )
}

export default ShoppingCartButton
