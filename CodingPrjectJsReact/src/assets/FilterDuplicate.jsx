import React from "react";
import filterDuplicateArray from "../Features/FilterDuplicate.js";
import Test from "../Test.jsx";

export default function FilterDuplicate() {
  return (
    <div>
      toto{filterDuplicateArray([2, 3, 4, 5, 4, 3, 5, 29, 1])}
      <Test.ChildComponent someProp="amine" />
    </div>
  );
}
