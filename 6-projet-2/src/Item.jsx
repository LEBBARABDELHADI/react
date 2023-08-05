import React from "react";

export default function Item({ id, value, dropElement }) {
  return (
    <li key={id} className="item">
      <p>{value}</p>
      <button className="xbutton" onClick={() => dropElement(id)}>
        x
      </button>
    </li>
  );
}
