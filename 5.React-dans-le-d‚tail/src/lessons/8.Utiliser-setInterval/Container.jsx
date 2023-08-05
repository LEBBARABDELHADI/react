import { useEffect, useState } from "react";
export default function Container() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setcount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Valeur du compteur : {count} </h1>
    </div>
  );
}
