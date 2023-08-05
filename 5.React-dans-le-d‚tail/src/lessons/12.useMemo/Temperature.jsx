import React from "react";
import { useState, useMemo } from "react";
function Temperature() {
  const [temperature, setTemprature] = useState("");

  function memoTemp(degree) {
    return degree ? degree * 1.8 + 30 : "Entrer une valeur";
  }
  const valerFar = useMemo(() => {
    console.log("RENDER");
    return memoTemp(temperature);
  }, []);

  return (
    <div>
      <input
        style={{ display: "inline-block" }}
        type="text"
        value={temperature}
        onChange={(e) => {
          setTemprature(e.target.value);
        }}
      />{" "}
      <p>
        temperature en celcus : {temperature} et en far : {valerFar}
      </p>
    </div>
  );
}

export default Temperature;
