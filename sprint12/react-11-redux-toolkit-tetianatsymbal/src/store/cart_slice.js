import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "items": [],
    "totalQuantity": 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const findItem = state.items.find((item) => item.id === action.payload.id);
            if (findItem) {
                findItem.quantity += 1;
                findItem.totalPrice = findItem.price * findItem.quantity;
            } else {
                state.items.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
            }

            state.totalQuantity = state.items.reduce((sumPrice, currentPrice) => {
                return sumPrice + currentPrice.quantity
            }, 0);    
        },
        removeItemFromCart: (state, action) => {
            const selectedItem = state.items.find((item) => item.id === action.payload);
            if (selectedItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
            else {
                selectedItem.quantity = selectedItem.quantity - 1;
            }
            state.totalQuantity--;

            selectedItem.totalPrice = selectedItem.totalPrice - selectedItem.price;
        }
    }
});

export const selectCart = (state) => state.cart;

// these exports should stay the way they are
export const cartActions = cartSlice.actions;

export default cartSlice;
