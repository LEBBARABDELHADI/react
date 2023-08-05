import React from "react";
import { useState } from "react";
import Item from "./Item.jsx";
import { nanoid } from "nanoid";
export default function Container() {
  const [state, setstate] = useState("initialState");
  const [list, setList] = useState([
    { id: nanoid(8), name: "item1" },
    { id: nanoid(8), name: "item2" },
    { id: nanoid(8), name: "item3" },
  ]);
  console.log(list);
  function dropElementById(id) {
    setList(list.filter((item) => item.id != id));
  }
  function addelementToList() {
    setList([
      ...list,
      {
        id: nanoid(8),
        name: state,
      },
    ]);
    setstate("");
  }
  return (
    <div className="container">
      <h1> La TODO LIST</h1>
      <label htmlFor="ajout"> Ajouter une chose à faire</label>
      <input
        id="ajout"
        value={state}
        onChange={() => setstate(e.target.value)}
      />
      <button onClick={() => addelementToList()}> Ajouter un element</button>
      <ul>
        {list.map((item) => {
          return (
            <Item
              id={item.id}
              value={item.name}
              className="item-i"
              dropElement={dropElementById}
            />
          );
        })}
      </ul>
    </div>
  );
}
