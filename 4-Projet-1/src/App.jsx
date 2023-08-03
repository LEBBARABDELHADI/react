import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ListItem from "./ListItem";
function App() {
  const [list, setList] = useState([
    { id: nanoid(8), content: "item 1" },
    { id: nanoid(8), content: "item 2" },
    { id: nanoid(8), content: "item 3" },
  ]);
  const [stateInput, setStateInput] = useState("");
  console.log(list);


  function ajouterALaListe(e) {
    e.preventDefault();
    setList([...list, { id: nanoid(8), content: stateInput }]);
    setStateInput("");
  }

  function deleteToDo(id) {
    const l = list.filter((i) => i.id != id);
    setList(l);
  }

  return (
    <div className=" bg-slate-900 ">
      <div className="max-w-4x1 max-auto pt-20 px-6 ">
        <h1 className="text-3x1 text-slate-100 mb-4">La To-do liste</h1>
        <form className="mb-10" onSubmit={ajouterALaListe}>
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded"
            value={stateInput}
            onChange={(e) => setStateInput(e.target.value)}
          ></input>
          <button
            className="mt-4 py-2 bg-slate-200 rounded min-w-[115px] "
            // onClick={ajouterALaListe}
          >
            {" "}
            Ajouter
          </button>
        </form>
        <ul>
          {list.length === 0 && <li className="text-slate-50">list vide</li>}
          {list.length !== 0 &&
            list.map((item) => (
              <ListItem key={item.id} itemData={item} deleteToDo={deleteToDo} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
