import { useState } from "react";
export default function Container() {
  const [count, setCount] = useState(0);

  // setCount(99);
  function handleClcked() {
    const val = count + 1;
    console.log("Mise a jour" + val);
    setCount(val);
    // setCount((count) => count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  }
  return (
    <div>
      <h1>Le state {count}</h1>
      <button onClick={handleClcked}>clicked</button>
    </div>
  );
}
