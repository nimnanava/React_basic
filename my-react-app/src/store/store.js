import { configureStore } from "@reduxjs/toolkit";

import postSliceReducer from "./reducer/postSlice";
import numberReducer from "./reducer/numberSlice";
import UsersSliceReducer from "./reducer/UsersSlice";

const store = configureStore({
  reducer:{
    post : postSliceReducer,
    number : numberReducer,
    user : UsersSliceReducer
  }
})

export default store