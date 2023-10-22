import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
// import FilterDuplicate from "./assets/FilterDuplicate.jsx";
// import Counter from "./Counter.jsx";
// import MyComp from "./UsePevious.jsx";
// import App3 from "../src/App3.jsx";
import ListUser from "../src/ListUsers.jsx";
import Test1 from "./Test1";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Counter step={2} /> */}
    {/* <App3></App3> */}
    {/* <ListUser
      users={[
        { firstName: "Ada", lastName: "papa" },
        { firstName: "Amine", lastName: "mama" },
        { firstName: "Ada", lastName: "tata" },
        { firstName: "Amine", lastName: "apap" },
      ]}
    ></ListUser> */}
    <Test1></Test1>
  </React.StrictMode>
);
