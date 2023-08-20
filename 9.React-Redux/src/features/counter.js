import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterModi = createSlice({
  name: "counterModi",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log("action", action);
      state.value = state.value + action.payload;
    },
    decrement: (state, action) => {
      state.value--;
    },
    multiply: (state, action) => {
      state.value = state.value * 10;
    },
    divide: (state, action) => {
      state.value = state.value / 10;
    },
  },
});
console.log(counterModi);
export const { increment, decrement, multiply, divide } = counterModi.actions;
export default counterModi.reducer;
