import React from "react";
import { useDispatch } from "react-redux";
import { updateBoxValue } from "../../features/boxPropreties";
import "./BoxColorPicker.css";

export default function BoxColorPicker({ inputData }) {
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
    <div className="mainBG">
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
