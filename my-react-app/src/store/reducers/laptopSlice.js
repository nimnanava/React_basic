import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    price: 250000,
    spec: {
      cpu: "i3",
      gen: 13,
      hdd: "1TB",
      ram: "8GB DDR4",
    },
  },
];

const laptopSlice = createSlice({
  name: "laptop",
  initialState: initialState,
  reducers: {
    addLaptop: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (price, cpu, gen, ram, hdd) => {
        return {
          payload: {
            id: nanoid,
            price: price,
            spec: {
              cpu: cpu,
              gen: gen,
              ram: ram,
              hdd: hdd,
            },
          },
        };
      },
    },
  },
});
export const laptopSliceSelector = (store) => store.laptopSlice;

export const { addLaptop } = laptopSlice.actions;

export default laptopSlice.reducer;
