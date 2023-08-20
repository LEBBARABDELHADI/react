// import { useState } from "react";
// import { createPoral } from "react-dom";
// import React from "react";

// export default function ModalButton(props) {
//   return <div> hello world Child Component - someProp: {props.someProp}</div>;
// }

// // ChildComponent is a child component of Component
// const ChildComponent = (props) => {
//   return <div>Child Component - someProp: {props.someProp}</div>;
// };

// // Component renders the ChildComponent
// const Component = () => {
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <Component.ChildComponent someProp="Hello from Parent!" />
//     </div>
//   );
// };

// export default Component;

import React from "react";
import ReactDOM from " react-dom";
export default class Counter extends React.Component {
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
ReactDOM.render(<Counter step={2} />, document.getElementById("container"));
