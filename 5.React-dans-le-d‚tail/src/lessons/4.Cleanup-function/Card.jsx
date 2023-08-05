import { useEffect, useState } from "react";
import "./Card.css";
import React from "react";

export default function Card() {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("Effect d'incrémenter");
    return () => {
      console.log(" Fonction de nettoyage après modification d'incrémenter");
    };
  }, [state]);
  return (
    <div className="card">
      <p> state : {state}</p>
      <button onClick={() => setState(state + 1)}>Incrementer state</button>
    </div>
  );
}
