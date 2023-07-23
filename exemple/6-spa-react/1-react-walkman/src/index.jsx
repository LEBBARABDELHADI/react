import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import Counter from './Counter'


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
)
