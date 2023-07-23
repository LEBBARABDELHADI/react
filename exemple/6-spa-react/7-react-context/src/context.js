import React, { createContext } from "react";
/**
 * `createContext` contient 2 propriétés :
 * `Provider` et `Consumer`. Nous les rendons accessibles
 * via la constante `Context` et on initialise une
 * propriété par défaut "name" qui sera une chaîne.
 * On exporte ce contexte afin qu'il soit exploitable par
 * d'autres composants par la suite via le `Consumer`
 */
const Context = createContext({
  name: "",
  updateName: () => {}
});

export default Context;
/**
 * la classe UserProvider fera office de... Provider (!)
 * en englobant son enfant direct
 * dans le composant éponyme. De cette façon, ses values
 * seront accessibles de manière globale via le `Consumer`
 */

class UserProvider extends React.Component {
  state = {
    name: "Nom par defaut"
  };

  updateName = name => {
    this.setState({
      name
    });
  };

  render() {
    return (
      /**
       * la propriété value  rend
       * le contenu du state disponible aux `Consumers` de l'application
       */
      <Context.Provider
        value={{ name: this.state.name, updateName: this.updateName }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Provider = UserProvider;
export const Consumer = Context.Consumer;
