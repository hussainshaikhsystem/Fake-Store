import { configureStore, createReducer } from "@reduxjs/toolkit";
import productreducer from "./slices/productslice";
import cartreducer from "./slices/Cartslice";
const store = configureStore({
  reducer: {
    products: productreducer,
    cart: cartreducer,
  },
});
export default store;
