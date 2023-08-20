import React from "react";
import {useParam} from "reeact"
export default function ConfirmationPass({ input, setinputs, showValidation }) {
  return (
    <div>
      <label
        htmlFor="confpassword"
        className=" text-slate-100 inline-block mt-2"
      >
        {" "}
        Confirmer votre mot de passe
      </label>
      <input
        type="password"
        id="confpassword"
        value={input.passwordConfirmation}
        onChange={(e) =>
          setinputs({
            ...input,
            passwordConfirmation: e.target.value,
          })
        }
        className="rounded w-full p-1 mt-2"
      ></input>
    </div>
  );
}
