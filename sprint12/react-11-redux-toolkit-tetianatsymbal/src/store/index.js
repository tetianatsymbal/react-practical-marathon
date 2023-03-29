import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cart_slice';
import uiSlice from './ui_slice';


const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    },
    devTools: process.env.NODE_ENV !== "production"

});

export default store;
