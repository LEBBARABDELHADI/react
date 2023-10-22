import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
    this.increment.bind(this);
    this.decrement.bind(this);
  }
  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };
  render() {
    return (
      <div>
        <p id="value">{this.state.value}</p>
        <button id="increment" onClick={() => this.increment()}>
          +
        </button>
        <button id="decrement" onClick={() => this.decrement()}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
