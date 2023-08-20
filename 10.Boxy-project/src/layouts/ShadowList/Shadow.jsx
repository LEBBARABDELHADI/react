import React from "react";
import chevron from "../../../src/assets/chevron.svg";
import { useState, useEffect } from "react";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowRange from "./ShadowRange";
import ShadowCheckbox from "./ShadowCheckbox";
import { removeShadow } from "../../features/shadows";
import { useDispatch } from "react-redux";
export default function Shadow({ panelNumber, shadow }) {
  const [toggleShaddow, settoggleShaddow] = useState(false);
  const dspatch = useDispatch();
  useEffect(() => {
    if (panelNumber === 1) {
      settoggleShaddow(true);
    }
  }, []);
  const shaddowRender = shadow.inputs.map((input, index) => {
    if (input.type == "color") {
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs[index]}
          shadowId={shadow.id}
        ></ShadowColorPicker>
      );
    } else if (input.type == "range") {
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs[index]}
          shadowId={shadow.id}
        ></ShadowRange>
      );
    }
  });
  return (
    <li className="bg-gray-50 border-b border-gray-300">
      <button
        onClick={() => settoggleShaddow(!toggleShaddow)}
        className="flex justify-between items-center w-full px-6 rounded-br "
      >
        <span className="my-3x ml-2 ">Shadow {panelNumber}</span>
        <img
          className="w-4"
          src={chevron}
          alt=""
          style={{
            transform: `${toggleShaddow ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
        />
      </button>
      {toggleShaddow && (
        <>
          <div className="flex justify-between">
            <div className="flex baseline  pl-6 ">
              <ShadowCheckbox
                type={"active"}
                shadowID={shadow.id}
              ></ShadowCheckbox>
              <ShadowCheckbox
                type={"inset"}
                shadowID={shadow.id}
              ></ShadowCheckbox>
            </div>
            <div
              className="flex items-end px-6 
           "
            >
              <button
                onClick={() => dspatch(removeShadow({ shadowId: shadow.id }))}
                className=" bg-red-500 text-white rounded ml-auto text-sm hover: bg-red-700 px-3"
              >
                Remove
              </button>
            </div>
          </div>
          {shaddowRender}
        </>
      )}
    </li>
  );
}
