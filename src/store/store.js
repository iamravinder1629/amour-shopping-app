import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import cartSlice from './cartSlice'
import dressSlice from './dressSlice'
export const store = configureStore({
    reducer: {
        user: userSlice,
        cart: cartSlice,
        dress: dressSlice
    }
})