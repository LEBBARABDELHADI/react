import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foo: [1],
  switch: false,
};

export const features = createSlice({
  name: "fooReduce",
  initialState,
  reducers: {
    updateFoo: (state, action) => {
      if (action.payload.type === 0) {
        state.foo = action.payload.foo;
        state.switch = true;
      } else if (action.payload.type === 1) {
        state.foo.push(action.payload.foo);
        state.switch = !state.switch;
      }
    },
  },
});

export const { updateFoo } = features.actions;
export default features.reducer;
