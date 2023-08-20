import { useState } from "react";
import React from "react";

export default class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleClick() {
    this.setState((prevState, props) => {
      return { counter: prevState.counter + props.step };
    });
  }

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={() => this.handleClick()}>Update </button>
      </div>
    );
  }
}
