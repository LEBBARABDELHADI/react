import React from "react";

export default function Pseudo({ input, setinputs, showValidation }) {
  return (
    <div>
      <label htmlFor="pseudonyme" className=" text-slate-100">
        {" "}
        Votre psseudo (3-64 caractères)
      </label>
      <input
        type="text"
        id="pseudonyme"
        value={input.pseudo}
        onChange={(e) =>
          setinputs({
            ...input,
            pseudo: e.target.value,
          })
        }
        className="rounded w-full p-1 mt-2"
      ></input>
    </div>
  );
}
