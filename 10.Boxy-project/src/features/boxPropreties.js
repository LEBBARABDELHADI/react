import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    minMax: [0, 250],
  },
  {
    inputNumber: 2,
    name: "Height",
    value: 250,
    type: "range",
    minMax: [0, 500],
  },
  {
    inputNumber: 3,
    name: "width",
    value: 250,
    type: "range",
    minMax: [0, 500],
  },
  {
    inputNumber: 4,
    name: "Backgound color",
    value: "#fff",
    type: "color",
  },
];

export const boxPrperties = createSlice({
  name: "boxproperties",
  initialState,
  reducers: {
    updateBoxValue: (state, action) => {
      state.find((el) => el.inputNumber === action.payload.inputData).value =
        action.payload.value;
    },
  },
});

export const { updateBoxValue } = boxPrperties.actions;
export default boxPrperties.reducer;
