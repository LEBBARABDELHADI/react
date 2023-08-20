import React from "react";
import { useSelector } from "react-redux";
export default function CounterResults() {
  const counter = useSelector((state) => {
    console.log("state", state);
    return state.counterModi;
  });
  return (
    <div>
      <p className="text-slate-100 text-3xl">
        {" "}
        Redux Counter : {counter.value}
      </p>
    </div>
  );
}
