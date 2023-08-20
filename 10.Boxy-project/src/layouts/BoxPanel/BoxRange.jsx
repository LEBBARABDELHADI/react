import React from "react";
import "./BoxRange.css";
import { useDispatch } from "react-redux";
import { updateBoxValue } from "../../features/boxPropreties";
export default function BoxRange({ inputData }) {
  const dispatch = useDispatch();
  function handleClick(e) {
    dispatch(
      updateBoxValue({
        inputData: inputData.inputNumber,
        value: e.target.value,
      })
    );
  }
  return (
    <div className="rangeDiv1">
      <div className="div1IncludedansDiv1">
        {/* PANNEL A DROITE */}
        <p>{inputData.name}</p>
        {/* PANEL A GAUCHE  */}
        <div className="div2IncludeDansDiv1">
          <input
            value={inputData.value}
            onChange={handleClick}
            className="inputNumber"
            type="number"
          />
          <p>px</p>
        </div>
      </div>
      <div className="secondDiv">
        <input
          type="range"
          min={inputData.minMax[0]}
          max={inputData.minMax[1]}
          value={inputData.value}
          onChange={handleClick}
          className="inputRange"
        />
        <div className="barname"></div>
      </div>
    </div>
  );
}
