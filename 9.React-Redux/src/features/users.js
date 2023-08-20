import { createSlice, getDefaultMiddleware } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: undefined,
  error: false,
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    addError: (state, action) => {
      state.error = true;
      state.loading = false;
    },
    addLoading: (state, action) => {
      state.loading = true;
    },
  },
});
export function getdata(action) {
  return function (dispatch, getState) {
    dispatch(addLoading);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        return dispatch(addData(data));
      })
      .catch(() => dispatch(addError()));
  };
}

export const { addData, addError, addLoading } = users.actions;
export default users.reducer;
