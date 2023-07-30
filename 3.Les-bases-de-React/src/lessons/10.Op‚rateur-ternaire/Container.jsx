import { useState } from "react";
import "./Container.css";

export default function Container() {
  // const islogged = true;
  // return islogged ? (
  //   <div>
  //     <h1>Rendu conditionnel avec if </h1>
  //     <p>user is logged</p>
  //   </div>
  // ) : (
  //   <div>
  //     <h1>Rendu conditionnel avec if else</h1>
  //     <p>user not logged</p>
  //   </div>
  // );
  const [validation, setValidation] = useState(false);
  return (
    <div>
      <h1>Opération ternaire</h1>
      <div style={{ dislay: "inline-block" }}>
        <label htmlFor="Consent"> Voulez vous valider</label>
        <input
          type="checkbox"
          name="Valider"
          onClick={() => setValidation(!validation)}
        />
        <p className={`${validation ? "colorRed" : "colorBlue"}`}>param</p>
        {/* <p style={{ color: `${validation ? "green" : "red"}` }}>param</p> */}
        {validation ? "this is great" : "vous devez validez!"}
      </div>
      <form></form>
    </div>
  );
}
