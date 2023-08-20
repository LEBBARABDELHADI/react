import React from "react";
import { useState } from "react";
import Pseudo from "./Pseudo";
import MotdePasse from "./motPasse.jsx";
import ConfirmationPass from "./ConfirmationMotPasse.jsx";
export default function Validaton() {
  const [inputs, setinputs] = useState({
    pseudo: "",
    password: "",
    passwordConfirmation: "",
  });
  const [showValidation, setShowValidation] = useState({
    pseudo: false,
    password: false,
    passwordConfirmation: false,
  });
  function handleClick(e) {
    e.preventDefault();
    if (validateObject()) {
      console.log("vald object", showValidation);
    }
  }

  function validateObject() {
    const arevalidObject = {
      pseudo: false,
      password: false,
      passwordConfirmation: false,
    };
    if (inputs.pseudo.length < 3 || inputs.pseudo.length > 64) {
      setShowValidation((state) => ({ ...state, pseudo: true }));
    } else {
      arevalidObject.pseudo = true;
      setShowValidation((state) => ({ ...state, pseudo: false }));
    }
    if (inputs.password.length < 6 || !/\d/.test(inputs.password)) {
      setShowValidation((state) => ({ ...state, password: true }));
    } else {
      arevalidObject.password = true;
      setShowValidation((state) => ({ ...state, password: false }));
    }
    if (inputs.password !== inputs.passwordConfirmation) {
      setShowValidation((state) => ({ ...state, passwordConfirmation: true }));
    } else {
      arevalidObject.passwordConfirmation = true;
      setShowValidation((state) => ({ ...state, passwordConfirmation: false }));
    }
    // convert an objeect to array
    if (Object.values(arevalidObject).every((item) => item)) {
      return true;
    } else {
      return false;
    }
    // console.log("arevalidObject ", arevalidObject);
  }

  return (
    <form
      onSubmit={handleClick}
      className="min-w-xl mx-auto bg-slate-700 border p-10 rounded"
    >
      <p className="text-slate-100 text-xl mb-6">
        {" "}
        Créer votre nom utilisateur et mot de passe
      </p>
      <Pseudo
        input={inputs}
        setinputs={setinputs}
        showValidation={showValidation}
      ></Pseudo>
      {showValidation.pseudo && (
        <p className="text-red-400">
          {" "}
          Votre pseudo doit contenir entre 3 et 64 caractères.
        </p>
      )}
      <MotdePasse
        input={inputs}
        setinputs={setinputs}
        showValidation={showValidation}
      ></MotdePasse>
      {showValidation.password && (
        <p className="text-red-400">
          {" "}
          Votre password doit contenir au moins 6 caractères.
        </p>
      )}
      <ConfirmationPass
        input={inputs}
        setinputs={setinputs}
        showValidation={showValidation}
      ></ConfirmationPass>
      {showValidation.passwordConfirmation && (
        <p className="text-red-400"> Vos passwords ne sont pas identique.</p>
      )}
      <button className="bg-slate-100 py-2 rounded mt-10 min-w-[125px]">
        {" "}
        Valider
      </button>
    </form>
  );
}
