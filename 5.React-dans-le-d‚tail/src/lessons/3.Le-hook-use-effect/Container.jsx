import "./Container.css";
import { useEffect, useState } from "react";
export default function Container() {
  const [count, setCount] = useState(0);
  const [counti, setCountI] = useState(0);
  useEffect(() => {
    console.log("aprés première creation et chaque mise à jour du dom");
  }, [counti, count]);
  console.log("Mise à jour");
  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}> +1</button>
      <button onClick={() => setCountI(counti + 1)}> +1i</button>
      <p>{count}</p>
      <p>{counti}</p>
    </div>
  );
}
