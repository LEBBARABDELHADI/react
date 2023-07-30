import { useState } from "react";
import Card from "./Card";
export default function Container() {
  const [state, setState] = useState("Hello world");
  const id = 232;

  function changeValueState(str) {
    setState(state + " " + str);
  }

  return (
    <div>
      <h1>Les props</h1>
      <p> State : {state}</p>
      <Card
        id={id}
        state={state}
        setSateContainer={setState}
        changeState={changeValueState}
      ></Card>
      {/* {Card({ id, state })} */}
    </div>
  );
}
