import React, { Component } from "react";
import Context, { Consumer } from "./context";

export default class Updater extends Component {
  render() {
    const { name, updateName } = this.context;
    return (
      <>
      <label>nom</label>
      <input value={name} onChange={e => updateName(e.target.value)} />
      </>);
  }
  static contextType = Context;
}

function Updater1() {
  return (
    /**
 * Le Consumer expose le contenu de la propriété `value`
 * du Provider
 */
    <Consumer>
      {({ name, updateName }) => (
        <input value={name} onChange={e => updateName(e.target.value)} />
      )}
    </Consumer>
  );
}
