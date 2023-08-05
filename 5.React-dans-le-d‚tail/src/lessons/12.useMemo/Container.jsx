import "./Container.css";
import Temperature from "./Temperature.jsx";
import { useState, useMemo } from "react";
export default function Container() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>useMemo</h1>
      <button onClick={() => setCount(count + 1)}> inc</button>
      <p> count: {count} </p>
      <Temperature></Temperature>
    </div>
  );
}
