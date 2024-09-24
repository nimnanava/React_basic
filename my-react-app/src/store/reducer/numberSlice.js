import {
  createAction,
  createAsyncThunk,
  createReducer,
  createSelector,
} from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  users: [],
};

export const increment = createAction(
  "number/increment",
  (name, value, city) => {
    return {
      payload: {
        name: name,
        value: value,
        city: city,
      },
    };
  }
);
export const decrement = createAction("number/decrement");

export const getUser = createAsyncThunk("number/getUsers", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  if (Array.isArray(data)) {
    return data;
  } else {
    return { err: " some error" };
  }
});

const numberReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.number += action.payload.value;
  });
  builder.addCase(decrement, (state, action) => {
    state.number -= action.payload;
  });
  builder.addCase(getUser.fulfilled, (state, action) => {
    state.users = action.payload;
  });
});
const numberSl = (store) => {
  return store.number.number;
};

export default numberReducer;

export const numberSlecter = createSelector([numberSl], (num) => {
  return num;
});
