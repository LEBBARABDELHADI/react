import React from "react";
import { memo } from "react";
export default memo(function Card({ id, callLog }) {
  console.log("render");
  return (
    <div>
      {id}
      {callLog()}
    </div>
  );
});
