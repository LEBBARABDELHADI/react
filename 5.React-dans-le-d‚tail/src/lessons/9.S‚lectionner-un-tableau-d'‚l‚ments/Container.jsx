import { useRef, useState, useEffect } from "react";
import { nanoid } from "nanoid";
export default function Container() {
  const [listFruit, setlistFruit] = useState([
    { id: nanoid(8), value: "banane" },
    { id: nanoid(8), value: "mangue" },
    { id: nanoid(8), value: "fraise" },
  ]);
  console.log(listFruit);

  function deleteFruit(id) {
    setlistFruit(listFruit.filter((fruit) => fruit.id != id));
  }
  const refc = useRef([]);
  return (
    <>
      <h1>Dynamic Ref Selection</h1>
      <div>
        <ul>
          {listFruit.map((item) => (
            <li
              ref={(element) => {
                if (element) {
                  refc.current.push(element);
                } else {
                  refc.current.shift();
                }
              }}
              key={item.id}
              onClick={() => deleteFruit(item.id)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={() =>
          setlistFruit([...listFruit, { id: nanoid(8), value: "kaki" }])
        }
      >
        {" "}
        add fruit
      </button>
    </>
  );
}
