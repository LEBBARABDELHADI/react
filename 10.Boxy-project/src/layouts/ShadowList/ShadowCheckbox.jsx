import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCheckBox } from "../../features/shadows";
export default function ShadowCheckbox({ type, shadowID }) {
  const shadows = useSelector((state) => state.shadows);
  const shadow = shadows.find((el) => el.id === shadowID);
  const dispatch = useDispatch();
  if (!shadow) {
    // Handle case when shadow is not found
    return null;
  }
  function handleClick(e) {
    dispatch(
      updateCheckBox({
        type,
        value: type == "active" ? !shadow.active : !shadow.inset,
        shadowID,
      })
    );
  }
  return (
    <div className="mr-3">
      <input
        onChange={handleClick}
        className=" mx-0.6 rounded "
        id={`checkbox-${type}-${shadowID}`}
        type="checkbox"
        checked={
          (type == "active" && shadow.active) ||
          (type == "inset" && shadow.inset)
        }
      ></input>
      <label htmlFor={`checkbox-${type}-${shadowID}`}>
        {" "}
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </label>
    </div>
  );
}
