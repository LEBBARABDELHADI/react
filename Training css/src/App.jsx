import { useState } from "react";
import reactLogo from "./assets/react.svg";
import lengthOfLongestSubstring from "./lengthOfLongestSubstring";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  var d = lengthOfLongestSubstring("abmprerus");
  return (
    <>
      <div className="containerCarre">
        <div className="care  care1">
          <div className="val1">1{d}</div>{" "}
        </div>
        <div className="care care2">2</div>
        <div className="care care3">3</div>
        <div className="care care4">4</div>
        <div className="care care5">5</div>
        <div className="care care6">6</div>
        <div className="care care7">7</div>
      </div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
