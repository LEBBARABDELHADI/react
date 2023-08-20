import React from "react";
import { useDispatch } from "react-redux";
import { updateShadowValue } from "../../features/shadows";
import "../BoxPanel/BoxColorPicker.css";
export default function ShadowColorPicker({ inputData, shadowId }) {
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
    <div className="mainBG px-6 ">
      <p>{inputData.name}</p>

      <div className="mainboth">
        <input
          className="textInput"
          type="text"
          value={inputData.value}
          onChange={handleClick}
        />
        <input
          className="colorInput"
          type="color"
          value={inputData.value}
          onChange={handleClick}
        />
      </div>
    </div>
  );
}
