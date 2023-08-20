import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  card: [],
};
export const fruitsCart = createSlice({
  name: "fruitsCart",
  initialState,
  reducers: {
    addOne: (state, action) => {
      const fruitIndex = state.card.findIndex(
        (obj) => obj.id === action.payload.id
      );
      if (fruitIndex !== -1) {
        state.card[fruitIndex].quantity++;
      } else {
        state.card.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOne: (state, action) => {
      const fruit = state.card.find((obj) => obj.id === action.payload);
      if (fruit) {
        if (fruit.quantity === 1) {
          state.card = state.card.filter((f) => f.id != action.payload);
        } else {
          fruit.quantity--;
        }
      }
    },
  },
});
export const { addOne, removeOne } = fruitsCart.actions;
export default fruitsCart.reducer;
