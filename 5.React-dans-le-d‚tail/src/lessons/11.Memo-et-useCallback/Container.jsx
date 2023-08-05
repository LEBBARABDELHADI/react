import Card from "./Card.jsx";
import { useState, useCallback } from "react";

export default function Container() {
  const [count, setcount] = useState(0);

  const callLog = useCallback(() => console.log("toto"), []);

  return (
    <div>
      <h1>Memo et useCallback</h1>
      <Card id="text" callLog={callLog}></Card>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        {" "}
        incrementer
      </button>
      <p> count : {count + 1}</p>
    </div>
  );
}
