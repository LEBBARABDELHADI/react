import React from "react";

export default function Pseudo({ input, setinputs, showValidation }) {
  return (
    <div>
      <label htmlFor="password" className=" text-slate-100  inline-block mt-2">
        {" "}
        Votre mot de passe (Au moins un chiffre et 5 caractères)
      </label>
      <input
        type="password"
        id="password"
        value={input.password}
        onChange={(e) =>
          setinputs({
            ...input,
            password: e.target.value,
          })
        }
        className="rounded w-full p-1 mt-2"
      ></input>
    </div>
  );
}
