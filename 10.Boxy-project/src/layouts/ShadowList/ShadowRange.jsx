import React from "react";
import "../BoxPanel/BoxRange.css";
import { useDispatch } from "react-redux";
import { updateShadowValue } from "../../features/shadows";
export default function ShadowRange({ inputData, shadowId }) {
  const dispatch = useDispatch();
  function handleClick(e) {
    dispatch(
      updateShadowValue({
        inputData: inputData.inputNumber,
        value: e.target.value,
        shadowId,
      })
    );
  }
  return (
    <div className="rangeDiv1 px-6 py-1">
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
