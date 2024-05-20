import { configureStore } from "@reduxjs/toolkit";

import cart from "./cartStore";
import products from "./productStore";

export const store = configureStore({
    reducer: {
        cart: cart.reducer,
        products: products.reducer,
    },
});
