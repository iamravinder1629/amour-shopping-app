import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartData: [],
        totalQuantity: 0,
        totalPrice: 0,
        cartToggle: false,
    },
    reducers: {
        showCart: (state) => {
            state.cartToggle = !state.cartToggle
        },

        addToCart: (state, action) => {
            let find = state.cartData.findIndex((data) => data.id === action.payload.id);
            if (find >= 0) {
                state.cartData[find].quantity += 1;
            }
            else {
                state.cartData.push(action.payload);
            }

        },
        decrementQuantity: (state, action) => {
            let find = state.cartData.findIndex((data) => data.id === action.payload.id);
            if (find >= 0) {
                if (state.cartData[find].quantity > 1) {
                    state.cartData[find].quantity -= 1;
                } else {
                    state.cartData.splice(find, 1);
                }
            }
        },

    }
})
export default cartSlice.reducer;
export const { showCart, addToCart, decrementQuantity } = cartSlice.actions;