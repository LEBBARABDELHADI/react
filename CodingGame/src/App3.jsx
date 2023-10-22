import React from "react";
import { useRef, useEffect, useState } from "react";

function usePrevious(value) {
  // const v = [1, 5, 2, 3, 2, 3, 4];
  // console.log(v.includes(3));

  // const toto = filterDuplicate(v);
  // console.log(filterDuplicate(v));
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
    console.log(ref.current);
  }, [value]);
}
const App3 = () => {
  const [count, setcount] = useState(0);
  const prevCount = usePrevious(count);
  console.log("prevCount ", prevCount);
  return (
    <div className="min-h-screen bg-slate-700 pt-10">
      <div>totos</div>
      <div>{` count ${count} prev ${prevCount}`}</div>
      <button onClick={() => setcount((c) => c + 1)}> clicked</button>
{/* 
      <ul>
        {toto.map((item, index) => {
          <li key={index}> item</li>;
        })}
      </ul> */}
    </div>
  );
};

export default App3;
