import { configureStore } from "@reduxjs/toolkit";
import fooReduce from "../src/feature";

export const store = configureStore({
  reducer: {
    fooReduce,
  },
});
