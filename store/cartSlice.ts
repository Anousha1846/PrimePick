import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ========================================= add items =======================================
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      // action.payload contains the data sent with the action
      const existingItems = state.items.find(
        (Item) => Item.id === action.payload.id
      );
      if (existingItems) {
        existingItems.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // ========================================= remove items =========================================
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      const existingItems = state.items.find(
        (Item) => Item.id === action.payload.id
      );
      if(existingItems){
        if(existingItems.quantity>1){
            existingItems.quantity -= 1;
        }else{
            state.items = state.items.filter((Item)=>Item.id != action.payload.id )
        }
      }
    },
    clearCart:(state)=>{
        state.items = []
    }
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer
