import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { name: "Mango", url: "/images/mango.jpg", price: 5, id: 65237 },
    { name: "Watermelon", url: "/images/watermelon.jpg", price: 9, id: 32832 },
  ],
};
export const fruits = createSlice({
  name: "fruits",
  initialState,
  reducers: {},
  extraReducers: {
    ["fruitsCart/addOne"]: (state, action) => {
      console.log("fruit add one exected");
    },
  },
});

export default fruits.reducer;
