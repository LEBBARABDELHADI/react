import React from "react";

export default function Card({ id, state, changeState }) {
  console.log({ id, state, changeState });
  return (
    <div>
      Voici la carte
      <p>
        id :{id}
        <br></br>
        state :{state}
      </p>
      <br />
      <button
        name="click"
        onClick={() => {
          changeState("HELLO");
        }}
      >
        clicked
      </button>
    </div>
  );
}
