import { useState, useRef } from "react";
export default function Container() {
  const [state, setState] = useState(0);
  const refval = useRef(0);
  const parag = useRef();
  // 1. isoler une valeur parmi les mise àjour
  // 2. selectionner un element
  function incrementRef() {
    refval.current++;
    console.log("ref val ", refval.current);
    console.log("ref parag ", parag.current);
  }
  console.log("mise à jour");
  return (
    <div>
      <h1>Comprendre les refs</h1>
      <p> state : {state}</p>
      <p> ref : {refval.current}</p>
      {/* selectionner le parag */}
      <p ref={parag}>
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam autem
        tenetur maxime, in molestias fugit eveniet accusamus illo. Ullam
        tempora, adipisci harum repellendus eius facere quas nihil deserunt
        quos! Modi?
      </p>
      <button onClick={() => setState(state + 1)}>incrementer state</button>
      <button onClick={incrementRef}>incrementer refval</button>
    </div>
  );
}
