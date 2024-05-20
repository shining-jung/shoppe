import { createSlice } from "@reduxjs/toolkit";

const cartData = localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) : [];

let cart = createSlice({
    name: "cart",
    initialState: cartData,
    reducers: {
        addItem(state, action) {
            let num = state.findIndex((item) => item.id === action.payload.id);
            console.log(num);
            if (num === -1) {
                state.push(action.payload);
            } else {
                state[num].count++;
            }
            localStorage.setItem("cartData", JSON.stringify(state));
        },
        plusCount(state, action) {
            let num = state.findIndex((item) => item.id === action.payload);
            console.log("num==", num);
            state[num].count++;
            localStorage.setItem("cartData", JSON.stringify(state));
        },
        minusCount(state, action) {
            let num = state.findIndex((item) => item.id === action.payload);
            state[num].count--;
            localStorage.setItem("cartData", JSON.stringify(state));
        },
        delItem(state, action) {
            let num = state.findIndex((item) => item.id === action.payload);
            state.splice(num, 1);
            localStorage.setItem("cartData", JSON.stringify(state));
        },
    },
});

export const { addItem, plusCount, minusCount, delItem } = cart.actions;
export default cart;
