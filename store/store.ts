import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer:{
        cart : cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>; //getState is the current state of the entire redux store
export type AddDispatch = typeof store.dispatch; // dispatch is used to send action to the store to modify its state
export default store;