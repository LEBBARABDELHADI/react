import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App2 from "./App2.jsx";
import MyComponent from "./App4.jsx";
import Counter from "../src/Counter.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  //     <MyComponent {...{
  //   apple: 1,
  //   mongo: 2,
  //   banana: 3,
  // }} />
  //   </React.StrictMode>
  <React.StrictMode>
    {/* <MyComponent {...{
  apple: 1,
  mongo: 2,
  banana: 3,
}} /> */}
    {/* <App2 step={2}></App2> */}
    <Counter></Counter>
  </React.StrictMode>
);
