import React from "react";
import { useSelector, useDispatch } from "react-redux";
//Nous devons importer le useSelector du package react-redux.
//Avec le Hook useSelector, nous pouvons lire notre état
//Le Hook useDispatch nous permet de déclencher nos actions redux
import { TOGGLE } from "./UiReducer";
 // Nous avons déconstruit les accessoires ui et
 //toggleSwitch des arguments de la fonction fléchée
const Toggle = ({ toggleSwitch }) => {
  const ui = useSelector(state => state.ui);
  const dispatch = useDispatch();
  return (
    <div>
    <h2>Redux et Hook</h2>
    <p>React Redux a publié des hooks avec la version 7.1.0.
        Cela signifie que nous pouvons utiliser les dernières meilleures
         pratiques avec React.<br />
        Les hooks nous permettent d'écrire moins de code pour la même
        fonctionnalité. Moins de code à écrire. </p>
      <div>{JSON.stringify(ui)}</div>
      <input
        type="checkbox"
        value={ui.toggle}
        onChange={() => dispatch({ type: TOGGLE })}
        //Ce que nous faisons ici, c'est appeler notre fonction de dispatch
        //avec la constante de type TOGGLE
      />
    </div>
  );
};
//Nous avons défini ce type dans nos constantes Redux et
//l'avons importé dans le composant.
export default Toggle;
