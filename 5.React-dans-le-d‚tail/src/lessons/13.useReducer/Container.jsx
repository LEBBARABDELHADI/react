import { useReducer } from "react";
export default function Container() {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "incrementer":
        console.log(action);
        return state + action.payload;
      case "multiply":
        console.log(action);
        return state * action.payload;
    }
  }
  return (
    <div>
      <h1>Valeur du compteur : {count}</h1>

      <button
        onClick={() => {
          dispatch({ type: "multiply", payload: 4 });
        }}
      >
        incrementer
      </button>
    </div>
  );
}
