import React from "react";
import ReactDOM from "react-dom";
import { Provider, Consumer } from "./context";
import Updater1 from "./update";
import "./styles.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Consumer>{({ name }) => <h1>{name}</h1>}</Consumer>
        <Updater1 />
      </div>
    </Provider>
  );
}

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);
