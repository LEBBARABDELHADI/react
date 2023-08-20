import React from "react";
import BoxRange from "./BoxRange";
import BoxColorPocker from "./BoxColorPicker";
import { useSelector } from "react-redux";
import "./BoxPanel.css";
export default function BoxPanel() {
  const boxState = useSelector((state) => state.boxproperties);
  const boxRender = boxState.map((input, index) => {
    if (input.type == "color") {
      return <BoxColorPocker key={index} inputData={input}></BoxColorPocker>;
    } else if (input.type == "range") {
      return <BoxRange key={index} inputData={input}></BoxRange>;
    }
  });
  return (
    <div className="boxPanel">
      <p className="pbox">Box properties</p>
      {boxRender}
    </div>
  );
}
