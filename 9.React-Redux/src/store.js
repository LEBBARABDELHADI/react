import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterModi from "./features/counter";
import fruits from "./features/fruits";
import fruitsCart from "./features/fruitsCart";
import users from "./features/users";
import chrono from "./features/chrono";
// import
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    counterModi,
    fruits,
    fruitsCart,
    users,
    chrono,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// function customMdlware(store) {
//   return function (next) {
//     return function (action) {
//       next({
//         type: "fruitsCart/addOne",
//         payload: {
//           name: "Mango",
//           url: "/images/mango.jpg",
//           price: 90,
//           id: 65237,
//         },
//       });
//       console.log("store", store.getState());
//     };
//   };
// }
