import { configureStore } from "@reduxjs/toolkit";
import boxproperties from "./features/boxPropreties";
import shadows from "./features/shadows";
export const store = configureStore({
  reducer: {
    boxproperties,
    shadows,
  },
});
