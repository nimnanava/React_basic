import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, price: 150000, cpu: "i3", ram: "4GB" },
  { id: 2, price: 250000, cpu: "i4", ram: "6GB" },
  { id: 3, price: 350000, cpu: "i8", ram: "14GB" },
  { id: 4, price: 100000, cpu: "i7", ram: "8GB" },
  { id: 5, price: 450000, cpu: "i5", ram: "24GB" },
];

const laptopSlice = createSlice({
  name: "laptop",
  initialState,
  reducers: {
    addLaptop: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectLaptop = (store) => store.laptop;
export const addLaptop = laptopSlice.actions;
export default laptopSlice.reducer;
