import { useState, useRef } from "react";
import "./Container.css";

export default function Container() {
  const [pseudo, setpseudo] = useState("");
  const refEmail = useRef();
  const [emailClicked, setEmailClicked] = useState(false);

  function handleclickePseudo(e) {
    setpseudo(e.target.value);
  }
  function handleclickeEmail(e) {
    refEmail.current = e.target.value;
    // console.log(e.target.value);
  }
  function handleSbmit(e) {
    e.preventDefault();
    // console.log(" after submitting state", pseudo);
    // console.log(" after submitting refEmail", refEmail.current);
    setEmailClicked(true);
    setpseudo("");
    console.log(refEmail);
  }

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>

      <form onSubmit={handleSbmit}>
        <label htmlFor="email"> Saisir votre email :</label>

        <input
          type="email"
          id="email"
          ref={refEmail}
          onChange={handleclickeEmail}
        />
        <label htmlFor="pseudo"> Saisir le pseudo :</label>
        <input
          type="text"
          id="pseudo"
          value={pseudo}
          onChange={handleclickePseudo}
        />
        <p>{` la valeur du mail : ${emailClicked ? refEmail.current : ""} `}</p>

        <button>Envoyer</button>
      </form>
    </div>
  );
}
