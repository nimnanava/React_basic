import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./reducers/cartSlice";
import laptopSliceReduer from "./reducers/laptopSlice";

const store = configureStore({
  reducer:{
    cart: cartSliceReducer,
    laptop : laptopSliceReduer
  }
});

export default store;
