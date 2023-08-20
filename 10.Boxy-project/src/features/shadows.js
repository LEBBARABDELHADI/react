import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(8),
    active: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: "Blur radius",
        value: 15,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: "Spread offset",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
];

export const shadowSlice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {
      // var indexASupprimer = -1;
      // for (var i = 0; i < state.length; i++) {
      //   if (state[i].id === action.payload.shadowId) {
      //     indexASupprimer = i;
      //     break;
      //   }
      // }
      var indexASupprimer = state.findIndex(
        (el) => el.id == action.payload.shadowId
      );
      state.splice(indexASupprimer, 1);
      // state = [...list];
    },
    addShadow: (state, action) => {
      state.push({
        id: nanoid(8),
        active: true,
        inset: false,
        inputs: [
          {
            inputNumber: 1,
            name: "Horizontal offset",
            value: 0,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 2,
            name: "Vertical offset",
            value: 0,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 3,
            name: "Blur radius",
            value: 15,
            type: "range",
            minMax: [0, 250],
          },
          {
            inputNumber: 4,
            name: "Spread offset",
            value: -3,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 5,
            name: "Color",
            value: "#4f4f4f",
            type: "color",
          },
        ],
      });
    },
    updateShadowValue: (state, action) => {
      const currentShadow = state.find(
        (el) => el.id == action.payload.shadowId
      );
      const input = currentShadow.inputs.find(
        (el) => el.inputNumber == action.payload.inputData
      );
      input.value = action.payload.value;
    },
    updateCheckBox: (state, action) => {
      const shadow = state.find((el) => el.id == action.payload.shadowID);
      if (action.payload.type === "active") {
        shadow.active = action.payload.value;
      } else if (action.payload.type === "inset") {
        shadow.inset = action.payload.value;
      }
    },
  },
});

export const {
  removeShadow,
  addShadow,
  updateShadowValue,
  updateCheckBox,
} = shadowSlice.actions;
export default shadowSlice.reducer;
