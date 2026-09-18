import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Cart/cartSlice";
import productReducer from "../Productsslice/productSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});
