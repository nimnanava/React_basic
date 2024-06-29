import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  computer: [0, 1, 1],
};

const reducerGen = (key = "number", oparetor = "+") => {
  if (oparetor === "+") {
    return (state, action) => {
      state[key] += action.payload;
    };
  }else if(oparetor=== '-'){
    return( state , action)=>{
      state[key] -= action.payload
    }
  }
};

const numberSlice = createSlice({
  name: "number",
  initialState: initialState,
  reducers: {
    increment: reducerGen(),
    decrement: reducerGen( "number" , "-"),
  },
});

export const numberSliceSelector = (store) => store.numberSlice
export const { increment, decrement } = numberSlice.actions;

export default numberSlice.reducer;
