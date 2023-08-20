import React from "react";
import { useState } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import Shadow from "./Shadow";
import { addShadow } from "../../features/shadows";
export default function ShadowList() {
  const dispatch = useDispatch();
  const shadows = useSelector((state) => state.shadows);

  return (
    <>
      <div className="flex justify-between items-baseline  border-b  border-gray-300 pt-2 px-0">
        <p className="font-bold px-4">Customize Shadows</p>
        <button
          className="bg-blue-600 text-sm rounded p-1 
        hover:bg-blue-500  focus:ring-4 mr-3
        focus:outline-none focus:ring-offset-2"
          onClick={() => dispatch(addShadow())}
        >
          Add a shaddow
        </button>
      </div>
      <div>
        <ul>
          {shadows.map((shadow, i) => (
            <Shadow panelNumber={i + 1} shadow={shadow} key={shadow.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
